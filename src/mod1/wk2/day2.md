# Mod 1 > Week 2 > Day 2

## Overview of the day
Today we are going to learn about how to use OAuth to secure our API. 

## Learning Objectives
* Understand the limitations of Basic Auth
* Know why and how to use sessions on a server 
* Understand the structure and purpose of JWT
* Create a UML diagram to communicate the sequence of the OAuth flow 

* Understand OAuth and how it is used to secure website and APIs
* Implement OAuth using Auth0
* Understand the OpenID Connect protocol

## Before we start
  * Ensure you have the Postman application installed

## Materials needed
  * Postman application 
  * VS Code (for Javascript development) or IntelliJ (for Java development)

# Lesson 1 - Sessions
## What's wrong with Basic Auth?
  * The password is sent over the wire in base64 encoding which can be easily decoded
  * The password is sent repeatedly i.e. on each request meaning there is a large attack window
  * The password is cached by the web browser, therefore it could be silently reused by any other request to the server e.g. CSRF
  * The password may be stored permanently in the browser hence could be stolen by another user on a shared machine

## Sessions

Wouldn't it be much better if after being authenticated the server could keep track of which users it had already checked the passwords for. This is the purpose of sessions on a server. They are a means by which the server can keep track of who is who. Without sessions our server will just treat each request the same.

Lets have a look at trying to manage state on our server. Lets be really simple and just imagine we have a counter.

```javascript
class Counter {
    constructor() {
        this.value = 1
    }

    inc() {
        this.value += 1
        return this.value.toString()
    }
}
```

We want to expose this to our users so they can make requests and receive incrementing values i.e. 1,2,3,4,5 etc

```javascript
app.get('/counter', (req, res) => {
    const counter = new Counter()
    res.send(counter.inc())
})
```

❓ What is the problem with this?

Lets pull the counter out of the route and have it in the scope of the server instance:

```javascript
const counter = new Counter()

app.get('/counter', (req, res) => {
    res.send(counter.inc())
})
```

❓ What is the problem with this? (try different browser windows)

The behaviour we are after is each connected client gets their own dedicated counter. So as they refresh their individual page, their personal counter increments.

For this we will need to extend our server by adding sessions. The session object will be added to the request object. Each individually connected client will be allocated a `req.session.id` unique to them and there interaction with the server. On the session object we can store values for that connection. For example:

```javascript
req.session.user_id = user.id
```

You can only store JSON stringable values so our instance of our counter cannot be stored as it will get turned into the string representation of the class instance. No good to us. So we will use the `req.session.id` as a hashkey so we can lookup the counter for each particular connected client.

### Use Sessions

To add sessions `npm i express-session` then use the following config:

```javascript
const session = require('express-session')
const sessionSettings = {
    secret: "best cohort ever",
    resave: false,
    saveUninitialized: true
}
app.use(session(sessionSettings))
```

Update your Counter class to keep track of every instance (use a static property).

```javascript
class Counter {
    static lookup = {}
    
    constructor(id) {
        this.value = 1
        Counter.lookup[id] = this // every counter we create is added to the lookup hash map which we can access at Counter.lookup
    }

    inc() {
        this.value += 1
        return this.value.toString()
    }
}
```

Add a middleware function that will run on every request this makes sure new requests have an instance of the counter they can access with their session id:

```javascript
app.use((req, res, next) => {
    Counter.lookup[req.session.id] = Counter.lookup[req.session.id] || new Counter(req.session.id)
    next()
})
```

finally in the route return the next value

```javascript
app.get('/counter', (req, res) => {
    res.send(Counter.lookup[req.session.id].inc())
})
```

❓ How can we use this functionality to auth a user only once?

This is now a more familiar concept to you. Getting a session assigned to you is like 'logging' in. To 'log out' you just remove that counter from the session.

## Assignment

* Implement sessions on your server
* Add `/login` and `/logout` routes
* The `/login` route should be the only route that accepts Basic auth request
* Once a user is authenticated with Basic auth add them to a session
* Update `/users/:id` to only return the user info if the user is in a session
* If a user is in a session and visit the `/logout` route this should end their session and they will no longer be able to access `/users/:id`
* Put your solution on Github and share it with your coach

----

# Lesson 2 

## Learning Objectives

* Create a UML sequence diagram
* Encode and Decode JWT tokens
* Recall the structure of a JWT

## Before we start

* Make sure you have installed plant UML

## Materials needed

## The problem with sessions

Sessions are great, but your clients are now bound to 1 machine. If I have a cluster of computers managing incoming requests and your session is in the memory of machine 1, I can't bounce you to machine 2 to lighten the load.

❓ Why not?

Sessions are stateful. To achieve the same thing as a session (auth you once then keep track of you) I could use a token based auth system.

## What is OAuth?

OAuth (2.0) is an open standard for authorization. It controls authorization to a protected resource such as an API.

If you’ve ever signed up to a new application and agreed to let it access your Facebook or phone contacts, then you’ve used OAuth. OAuth provides secure delegated access which means an application can access resources from a server on behalf of the user, without them having to share their credentials. It does this by allowing an Identity Provider (we will be using Auth0) to issue access tokens. The token informs the API that the bearer of the token is authorized to access the API.

![clubber getting their hand stamped](https://static01.nyt.com/images/2017/06/18/nyregion/12nytoday3/12nytoday3-superJumbo.jpg?quality=90&auto=webp)
<small><i>Photo: Caitlin Ochs for The New York Times</i></small>

In a nightclub when you enter and pay your entry fee you will often be stamped or presented with a bracelet to ware on your wrist. This shows the security staff on the door that you have paid, and you can enter and leave the club for that evening. The bracelet or stamp is like a token the club (Identity Provider) has issue. With a legitimate stamp or bracelet the door staff (API middleware) check it and then if its ok let you in (to the controller).

## What makes OAuth secure?
  * Token management means we can track each device that uses the API (and revoke access if we want)
  * OAuth provides 'scopes' which allow for fine-grained authorization 
  * Tokens expire, making it very hard for them to be reused

Let's look at this diagram which illustrates the OAuth flow we are going to be using to secure our API resource:

![oauth flow showing how an identify provider issues a token which is used to secure a resource](https://user-images.githubusercontent.com/1316724/102925060-9cb1b680-448a-11eb-8177-7eda1802026f.png)

# Lesson 2 - JWT 
OAuth returns access tokens as JSON Web Tokens (JWTs) format. A JWT is easy to identify, it is three strings separated by a `.`

Here is an example:

`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXNzYWdlIjoiSGVsbG8gZnJvbSBXaGl0ZUhhdCEifQ.XSYkatPu3LirweyU13rLWblqQRNvbqoJJ0qwX_mdYgM`

Use https://jwt.io to see the secret message hidden inside this token! 

**Activity**: Create your own messages and send them to the Slack channel!

A JWT is made up of 3 parts:

* **Header** - specifies the type of token and the algorithm used to sign the token
* **Payload** - the information that we want to transmit and other information about our token
* **Signature** - verifies who sent the token and that the token has not been tampered with

To create the signature part you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that.

```ruby
SHA1(base64Encode(Header) + "." + base64Encode(Payload), secret)
// SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c <- that is the Signature part
```

## Assignment

* Use [PlantUML](http://www.plantuml.com/plantuml/uml) to create your own sequence diagram which illustrates the OAuth flow.

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/184)
[main](/swe)|[prev](/swe/mod1/wk2/day1.html)|[next](/swe/mod1/wk2/day3.html)