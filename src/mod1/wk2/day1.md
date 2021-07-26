# Mod 1 > Week 2 > Day 1

## Overview of the day

Today we are going to learn about session-based auth and how to use OAuth to secure our API.

## Learning Objectives

-   Understand the limitations of Basic Auth
-   Know why and how to use Sessions on a server
-   Understand the structure and purpose of JWT

## Before we start

-   Ensure you have the Postman application installed

## Materials needed

-   Postman application
-   VS Code (for Javascript development) or IntelliJ (for Java development)

# Lesson 1 - Sessions

## What's wrong with Basic Auth?

-   The password is sent over the wire in base64 encoding which can be easily decoded
-   The password is sent repeatedly i.e. on each request meaning there is a large attack window
-   The password is cached by the web browser, therefore it could be silently reused by any other request to the server e.g. CSRF
-   The password may be stored permanently in the browser hence could be stolen by another user on a shared machine

## Sessions

Wouldn't it be much better if after being authenticated the server could keep track of which users it had already checked the passwords for. This is the purpose of sessions on a server. They are a means by which the server can keep track of who is who. Without sessions our server will just treat each request the same.

Lets have a look at trying to manage state on our server. Lets be really simple and just imagine we have a counter.

```javascript
class Counter {
    constructor() {
        this.value = 1;
    }

    inc() {
        this.value += 1;
        return this.value.toString();
    }
}
```

We want to expose this to our users so they can make requests and receive incrementing values i.e. 1,2,3,4,5 etc

```javascript
app.get("/counter", (req, res) => {
    const counter = new Counter();
    res.send(counter.inc());
});
```

❓ What is the problem with this?

Lets pull the counter out of the route and have it in the scope of the server instance:

```javascript
const counter = new Counter();

app.get("/counter", (req, res) => {
    res.send(counter.inc());
});
```

❓ What is the problem with this? (try different browser windows)

The behaviour we are after is each connected client gets their own dedicated counter. So as they refresh their individual page, their personal counter increments.

For this we will need to extend our server by adding sessions. The session object will be added to the request object. Each individually connected client will be allocated a `req.session.id` unique to them and there interaction with the server. On the session object we can store values for that connection. For example:

```javascript
req.session.user_id = user.id;
```

You can only store JSON stringable values so our instance of our counter cannot be stored as it will get turned into the string representation of the class instance. No good to us. So we will use the `req.session.id` as a hashkey so we can lookup the counter for each particular connected client.

### Use Sessions

To add sessions `npm i express-session` then use the following config:

```javascript
const session = require("express-session");
const sessionSettings = {
    secret: "best cohort ever",
    resave: false,
    saveUninitialized: true,
};
app.use(session(sessionSettings));
```

Update your Counter class to keep track of every instance (use a static property).

```javascript
class Counter {
    static lookup = {};

    constructor(id) {
        this.value = 1;
        Counter.lookup[id] = this; // every counter we create is added to the lookup hash map which we can access at Counter.lookup
    }

    inc() {
        this.value += 1;
        return this.value.toString();
    }
}
```

Add a middleware function that will run on every request this makes sure new requests have an instance of the counter they can access with their session id:

```javascript
app.use((req, res, next) => {
    Counter.lookup[req.session.id] =
        Counter.lookup[req.session.id] || new Counter(req.session.id);
    next();
});
```

finally in the route return the next value

```javascript
app.get("/counter", (req, res) => {
    res.send(Counter.lookup[req.session.id].inc());
});
```

❓ How can we use this functionality to auth a user only once?

This is now a more familiar concept to you. Getting a session assigned to you is like 'logging' in. To 'log out' you just remove that counter from the session.

---

# Lesson 2 - Token-based Authentication

## Learning Objectives

-   Understand how token-based auth can replace sessions
-   Encode and Decode JWT tokens
-   Recall the structure of a JWT

## The problem with sessions

Sessions are great but your clients are now bound to one machine. If I have a cluster of computers managing incoming requests and your session is in the memory of machine 1, I can't bounce you to machine 2 to lighten the load. Often, to get around this problem, a separate caching service such as Redis is used to store all the sessions for your application.

However, to achieve the same thing as a session (authenticate you once then keep track of you) I could use a token based auth system.

## JWT

JSON Web Tokens (JWTs) are an open industry standard. They are easy to identify, being 3 strings separated by a `.`

Here is an example:

`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXNzYWdlIjoiSGVsbG8gZnJvbSBNdWx0aXZlcnNlISJ9.UaobFhVDPjPLdQFpXCkvojm7jxMY-wfyfzo7ORoFI4A`

The 3 dots separate the 3 parts of a JWT:

-   **Header** - specifies the type of token and the algorithm used to sign the token
-   **Payload** - the actual information that we want to transmit
-   **Signature** - used to verify the token has not been tampered with

The signature is the key part. It is generated by combining the header with the payload **and a secret only the server knows** and hashing them (the function actually involves slightly more than a normal hash but the principle still stands).

```js
HmacSha256(base64Encode(Header) + "." + base64Encode(Payload), secret);
// SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c <- that is the Signature part
```

So, let's say that when a user logs in with their password we want them stay logged-in for 30 minutes. We can take their user id and the time in 30 minutes and put that data in a JSON:

```js
JSON.stringify({ userId: user.id, expires: Date.now() + 30 * 60 * 1000 });
```

That is our payload. We then base64-encode it (and do the same with whatever headers are relevant). We now have the first two parts of the JWT. We then pass these into a HMAC function with our secret. This gives us our signature. We append this to the end of the JWT and send it to the user.

The user then sends us back this token on their next request. To check that it's valid, we extract the header and payload from the JWT and apply the HMAC function, as before, to the payload, headers and secret. This will give us back a signature and, if the signature matches that on the end of the JWT, we know only we could have created it and so the token is valid. If the user had tampered with the JWT (say, by changing their userId) we would know because the signature would no longer match.

**Activity**: Use https://jwt.io to create your own messages and send them to the Slack channel!

## Creating and Storing Secrets

The security of JWTs relies on the fact that only the server know the secret it uses to sign the token. We therefore need to be careful with how we handle this secret.

To generate a secret, openssl's `rand` is useful:

```sh
> openssl rand -hex 16
71db048a3af939a4632c3953e5dc1ff5
```

In theory, we could put that secret directly into our source code, however, anyone with access to our git repository would then be able to read it. A better system is to make the secret an **environmental variable**. Environmental variables are variables within a programme which are set from outside the programme. As well as for secrets, they're useful for definining things like the port which a process should run on; the URLs it should make requests to; the mode an application is running in (testing vs development vs production etc.) and so on.

In Node.js, we can set an environmental variable using a `.env` file. In this file, we can set our environmental variables like so:

```sh
JWT_SECRET=268b38878c05cdeb684b3e69ee28e5411a1cc2d1c0555abbfac9a75dc9332441

PORT=4000
```

To load them, we need to install the `dotenv` package using npm then call its config method. Our environmental variables are then loaded onto the `process.env` object:

```js
require("dotenv").config();

console.log(process.env.JWT_SECRET);
```

**Importantly**, we should then add our `.env` to our `.gitignore` file to ensure it never gets pushed to our repository. If we push `.env` by mistake, we should immediately change our key.

Lots of deployment platforms (Heroku, AWS etc.) also allow you to enter an application's environmental variables on their website. They will then encrypt them on disk and use them when running the application.

## Assignment

Implement sign-up and login using JWT. You can use [this code](https://gist.github.com/charliemerrell/0507ef05e81945e4a8bd1114d5183343) to generate and check JWTs using the npm [jsonwebtoken library](https://www.npmjs.com/package/jsonwebtoken). Create an API with 3 endpoints:

-   `POST /users` where new users send their username and password. Store these in your database (with the appropriate salting + hashing).
-   `POST /login` where existing users send their username and password and, if their credentialls are valid, receive a JWT back.
-   `GET /greeting` an endpoint that sends some back `"Hello, <insert username>"` **if** the request includes a valid JWT.

## Assignment Extension

Create a frontend that uses your API. It should include sign-up and login forms, and store JWTs in `localStorage`. The JWT should be attached as an `Authorization` header when making requests to the `/greeting` endpoint.

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/183)
[main](/swe)|[prev](/swe/mod1/wk1/day5.html)|[next](/swe/mod1/wk2/day1.html)
