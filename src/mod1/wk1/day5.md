# Mod 1 > Week 1 > Day 5

## Overview of the day

Today we are going to use Basic Auth to secure a RESTful API.

## Overall Learning Objectives

-   Understand the difference between authentication and authorisation
-   Construct a RESTful API to Create, Read, Update and Delete (CRUD) a user
-   Implement a credential store using hashed passwords
-   Use Basic Authentication to secure the User API

## Lesson 1 - Authentication and authorisation

### Learning Objectives

-   Understand the difference between authentication and authorisation
-   Understand how user names and passwords are encoded in the Basic Authentication HTTP scheme

> `Authentication` is the process of verifying who a user is

> `Authorisation` is the process of verifying what they have access to

Here's an example to illustrate this:

Imagine you have booked a hotel room. When you get to the checkout you are asked for you driving license to prove who you are - this is **authentication**.

![hotel checkin](https://user-images.githubusercontent.com/1316724/102709159-a9be8200-429f-11eb-903b-12976c1f051d.png)

<div style="padding-top:10px;padding-bottom:10px;font-size:xx-small">Icons made by <a href="https://www.flaticon.com/free-icon/check-in-desk_2261372?related_item_id=2261377&term=hotel%20checking%20in" title="catkuro">catkuro</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

Once authentication is complete, you are given a key card which gives you entry to your room - this is **authorisation** as you are being granted access to a resource (in this case your room). You are not authorised to access any other rooms.

![hotel keycard](https://user-images.githubusercontent.com/1316724/102709120-43d1fa80-429f-11eb-9d57-43906703fbf9.png)

<div style="padding-top:10px;padding-bottom:10px;font-size:xx-small">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

### 🧑🏽‍💻👩🏾‍💻 Assignment

In breakout rooms, determine which of the following are examples of authentication and which are examples of authorisation:

1. Showing your passport at the airport
2. Determining which floor in a building an employee can access
3. Checking a boarding pass before boarding a flight
4. A manager accessing payroll information
5. Entering a username and password
6. Using biometrics (such as fingerprints)
7. Using a key to open a door

## Basic Authentication

Now we have our API we need to consider how we will secure access to the API. For this we will use a username and password, commonly known as `Basic Authentication`.

Basic authentication is a simple authentication scheme that is built into the HTTP protocol. The client sends an HTTP request with an `Authorization` header that contains the word `Basic` followed by a space and a base64-encoded string username:password

Here is an example:

> Authorization: Basic ZnJlZC5mbGludHN0b25lQHdoaXRlaGF0Lm9yZy51azpteXBhc3N3MHJk

That long string of numbers and letters after the word "Basic" is a base64 encoded string. You can encode and decode base64 strings in your browser using a pair of functions called `atob` and `btoa`. Try it. In your console encode the following string "Hello you".

![an example of using b to a function and a to b function to encode and decode a string](https://user-images.githubusercontent.com/4499581/104713069-451a0a00-571b-11eb-8f49-aeed427f2ce3.png)

### 👮‍♀️ Assignment

From the string in the `Authorization` header above, determine the user's username and password.

❓ Do you think Basic Authentication is a secure scheme?

## Hashing passwords

### Learning Objectives

-   Understand why passwords should be hashed
-   Understand the implications of exposing sensitive data
-   Create a database of user names and hashed passwords

Basic auth uses the `Authorization` header in the HTTP request, along with the "Basic" keyword and a base64 encoded string in the following format _username:password_. To validate that a user's login details are correct using Basic auth the server will look in the headers for this base64 encoded string and decode it. Now the server has the username and password sent from the client we need to match it with the username and password held in our database.

❓ Imagine if we held all our user's passwords in plaintext. What risks do you think this could cause?

**Answer** - we will have leaked sensitive information that your users have trusted you with. Imagine if they used the same username and password on other sites. Your organisation could face very large fines under the General Data Protection Regulation (GDPR) and suffer serious damage to its reputation - listen to this [video](https://www.bbc.co.uk/news/business-48905907) to hear about one recent example.

To avoid storing passwords in plaintext, we `hash` them with an one-way hashing function. You learnt about hashing last week. If the cryptographic function used for the hashing is strong, then it's computationally impossible to calculate the original password from the hash.

As a reminder, here is some code which implements a secure hashing algorithm:

|Javascript|Java|

```javascript
const bcrypt = require('bcrypt')
...
bcrypt.hash('password101', 10).then(console.log)
// $2b$10$AQXoVkfzAovJ9RHTtmd6N.Yegy3V9ALTlYDcCM76HxBqq044q6xLK
```

```java
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

//...
BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
String hashedPassword = passwordEncoder.encode("your password");
// $2b$10$AQXoVkfzAovJ9RHTtmd6N.Yegy3V9ALTlYDcCM76HxBqq044q6xLK
```

Once you have your hash you can check it like this:

|Javascript|Java|

```javascript
bcrypt
    .compare(
        "password101",
        "$2b$10$AQXoVkfzAovJ9RHTtmd6N.Yegy3V9ALTlYDcCM76HxBqq044q6xLK"
    )
    .then(console.log);
// true
```

```java
BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
boolean isMatch = passwordEncoder.match("your password", "$2b$10$AQXoVkfzAovJ9RHTtmd6N.Yegy3V9ALTlYDcCM76HxBqq044q6xLK");
// true
```

### Assignment

Using the Airports API you created last week, add the ability to create a new user (think a POST request via Postman). The user's username and password **hash** should be saved to a database (you can use whatever database you like).

---

## Lesson 2 - Creating and Securing a User API

### Learning Objectives

-   Describe the middleware design pattern
-   Use what you have learnt in previous lessons to secure an API using Basic Auth

### Lesson

Our Airports resource in an unsecured state is just like any other resource like training shoes or albums. However we are going to treat it differently.

To protect resources we need to authenticate the user making the request. We are using basic auth to do that by putting the _username:password_ in the headers of the request.

Our server now needs to check the request is authentic and from a user it knows before responding. That check needs to happen before we respond.

![middleware diagram](https://miro.medium.com/max/960/1*Fnreje0WgqdBjjLXop9L0A.png)

As that check happens in the middle of the request response cycle, it has been given the name of middleware. This is a generic design pattern you will see in many systems.

A whole series of things can happen in middleware not just authentication, but also authorisation. Thats why the diagram above has 2 middleware rings. There are 2 middlewares the request has to pass through before it gets to the controller. Below is a general pattern for a middleware function.

```javascript
function myMiddleware(request, response, next) {
    // check or change something in the request
    // maybe its not ok so from here you might
    return response.code(403); // status code 403 forbidden
    // the controller was never reached!
    // maybe all is well and you can contiune with the request
    // calling next() finishes this middleware and goes onto
    // either the next middleware or into the controller/route handler itself
    return next();
}
```

❓ What other things might you want to do in middleware?

❓ is the password sent on every request or cached?

If you are using Express, you can make the entire application use a middleware function through

```js
app.use(myMiddleware);
```

or a single endpoint like:

```js
app.get('/restaurants', myMiddleware, (req, res) => {
  ...
});
```

We are going to implement middleware on our server so that only users in our database can access the airport API.

### Assignment

Secure your API with basic authentication. Requests to your API will now need to include valid credentials (following the basic auth protocol) for users saved in your database. To achieve this, create a middleware function that checks an incoming request's authorization header to ensure that the username and password sent are valid.

### Extension Assignment

Create a simple form which sends a username and password to your API using Basic Auth (i.e. simulates what Postman was doing in the previous lesson).

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/182)
[main](/swe)|[prev](/swe/mod1/wk1/day4.html)|[next](/swe/mod1/wk2/day1.html)
