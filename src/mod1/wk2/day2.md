# Mod 1 > Week 2 > Day 2

## Overview of the day
Today we are going to use Basic Auth to secure a RESTful API. 

## Overall Learning Objectives
* Understand the difference between authentication and authorisation
* Construct a RESTful API to Create, Read, Update and Delete (CRUD) a user
* Implement a credential store using hashed passwords
* Use Basic Authentication to secure the User API

## Before we start

## Materials needed

## Lesson 1 - Authentication and authorisation
### Learning Objectives
  *  Understand the difference between authentication and authorisation
### Lesson  
 > `Authentication` is the process of verifying who a user is

 > `Authorisation` is the process of verifying what they have access to

 Here's an example to illustrate this: 
 
 Imagine you have booked a hotel room. When you get to the checkout you are asked for you driving license to prove who you are - this is **authentication**. Once authentication is complete, you are given a key card which gives you entry to your room - this is **authorisation** as you are being granted access to a resource (in this case your room). You are not authorised to access any other rooms.

 TODO - create a nice image to visual this example  

### Assignment
In breakout rooms, determine which of the following are examples of authentication and which are examples of authorisation:
   1. Showing your passport at the airport
   2. Determining which floor in a building an employee can access
   3. Checking a boarding pass before boarding a flight
   4. A manager accessing payroll information
   5. Entering a username and password
   6. Using biometrics (such as fingerprints) 
   7. Using a key to open a door

TODO - would love an image created to summarise this like the one at https://www.okta.com/identity-101/authentication-vs-authorization/

## Lesson 2 - User API
### Learning Objectives
  * Create an API which allows Create, Read, Update and Delete of a User using either SpringBoot or Node.js

### Lesson
Your API should support 4 resources:
|HTTP Method|URL|Description|
|-----------|---|-----------|
|POST|/users|create a new user|
|GET|/users|retrieve all users|
|GET|/users/{id}|retrieve a specific user|
|PUT|/users|update a user|
|DELETE|/users/{id}|delete a user|

### Assignment
Implement this API using either SpringBoot or Node.js. You can either create the API from scratch or use SwaggerHub to generate stub code (TODO - SwaggerHub generated code needs tweaks - I need to look into this more).

Ensure you can successfully call each resource using Postman.


## Lesson 3 - Basic Authentication encoding
### Learning Objectives
  * Understand how user names and passwords are encoded in the Basic Authentication HTTP scheme

### Lesson
Now we have our API we need to consider how we will secure access to the API. For this lesson we will use a username and password, commonly known as `Basic Authentication`. 

Basic authentication is a simple authentication scheme that is built into the HTTP protocol. The client sends an HTTP request with an `Authorization` header that contains the word `Basic` followed by a space and a base64-encoded string username:password

Here is an example:
> Authorization: Basic ZnJlZC5mbGludHN0b25lQHdoaXRlaGF0Lm9yZy51azpteXBhc3N3MHJk

### Assignment
Using the `Authorization` header above, determine the user's username and password. Do you think Basic Authentication is a secure scheme?

## Lesson 4 - Hashing passwords
### Learning Objectives
  * Understand why passwords should be hashed
  * Understand the implications of exposing sensitive data
  * Create a database of user names and hashed passwords 

### Lesson
To validate that a user's login details are correct, we need to match the username and password passed in the `Authorization` header with data held in a database.

**Question** - Imagine if we held these passwords in plaintext.. what risks do you think this could cause?

**Answer** - we will have leaked sensitive information that your users have trusted you with. Imagine if they used the same username and password on other sites. Your organisation could face very large fines under the General Data Protection Regulation (GDPR) and suffer serious damage to it's repretation - listen to this video to hear about one recent example:

<iframe width="400" height="500" frameborder="0" src="https://www.bbc.co.uk/news/av/embed/p06kjsw5/48905907"></iframe>

TODO - ask Bernard about how to embed this properly - taken from https://www.bbc.co.uk/news/business-48905907
I know the video doesn't talk about passwords but hopefully it gets the point across..

To avoid storing passwords in plaintext, we `hash` them with an one-way hashing function. If the cryptographic function used for the hashing is strong, then it's computationally impossible to calculate the original password from the hash.

TODO - we could do with a nice video of the concepts here!

Here is some code which implements a secure hashing algorithm:

|Javascript|Java|
```javascript
```
```java
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

//...
BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
String hashedPassword = passwordEncoder.encode("your password");
```
### Assignment
Use the code above to generate hashes of some demo user passwords. Then add the usernames and hashed passwords to an in-memory database as part of your web server's startup.

## Lesson 5 - Securing an API with Basic Authentiation
### Learning Objectives
   * Secure the Users API with a username and password

### Assignment
Protect your Create, Read, Update and Delete user resources with Basic Authentication using the following code (TODO):
|Javascript|Java|
```javascript
```
```java
```

Verify you can call your API using Postman.

**Question** - is the password sent on every request or cached?

## Lesson 6 - Login Form
### Learning Objectives
  * Use HTML/CSS/JS to create a Login form
  
### Assignment
Create a simple form which sends a username and password to your API (i.e. simulates what Postman was doing in the previous lesson).

## Lesson 7 - Enhanced User Interface
### Learning Objectives
  * Use HTML/CSS/JS to call the User API

### Assignment
Extend the Login form to display all users once login is successful. 
Create controls to allow the creation and deletion of users.
  

[next](/swe/mod1/wk2/day3.html)
[main](/swe)