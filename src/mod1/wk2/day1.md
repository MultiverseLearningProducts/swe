# Mod 1 > Week 2 > Day 1

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
 
 Imagine you have booked a hotel room. When you get to the checkout you are asked for you driving license to prove who you are - this is **authentication**. 

![hotel checkin](https://user-images.githubusercontent.com/1316724/102709159-a9be8200-429f-11eb-903b-12976c1f051d.png)

<div style="padding-top:10px;padding-bottom:10px;font-size:xx-small">Icons made by <a href="https://www.flaticon.com/free-icon/check-in-desk_2261372?related_item_id=2261377&term=hotel%20checking%20in" title="catkuro">catkuro</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

Once authentication is complete, you are given a key card which gives you entry to your room - this is **authorisation** as you are being granted access to a resource (in this case your room). You are not authorised to access any other rooms.

![hotel keycard](https://user-images.githubusercontent.com/1316724/102709120-43d1fa80-429f-11eb-9d57-43906703fbf9.png)

<div style="padding-top:10px;padding-bottom:10px;font-size:xx-small">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

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

## Lesson 2 - Basic Authentication encoding
### Learning Objectives
  * Understand how user names and passwords are encoded in the Basic Authentication HTTP scheme

### Lesson
Now we have our API we need to consider how we will secure access to the API. For this lesson we will use a username and password, commonly known as `Basic Authentication`. 

Basic authentication is a simple authentication scheme that is built into the HTTP protocol. The client sends an HTTP request with an `Authorization` header that contains the word `Basic` followed by a space and a base64-encoded string username:password

Here is an example:
> Authorization: Basic ZnJlZC5mbGludHN0b25lQHdoaXRlaGF0Lm9yZy51azpteXBhc3N3MHJk

### Assignment
Using the `Authorization` header above, determine the user's username and password using https://www.base64decode.org/. Do you think Basic Authentication is a secure scheme?

## Lesson 3 - Hashing passwords
### Learning Objectives
  * Understand why passwords should be hashed
  * Understand the implications of exposing sensitive data
  * Create a database of user names and hashed passwords 

### Lesson
To validate that a user's login details are correct, we need to match the username and password passed in the `Authorization` header with data held in a database.

**Question** - Imagine if we held these passwords in plaintext.. what risks do you think this could cause?

**Answer** - we will have leaked sensitive information that your users have trusted you with. Imagine if they used the same username and password on other sites. Your organisation could face very large fines under the General Data Protection Regulation (GDPR) and suffer serious damage to its repretation - listen to this [video](https://www.bbc.co.uk/news/business-48905907) to hear about one recent example.

To avoid storing passwords in plaintext, we `hash` them with an one-way hashing function. You learnt about hashing last week. If the cryptographic function used for the hashing is strong, then it's computationally impossible to calculate the original password from the hash.

As a reminder, here is some code which implements a secure hashing algorithm:

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
Use the code above to generate hashes of some demo user passwords. Then add the usernames and their hashed passwords to a database.

## Lesson 4 - Creating and Securing a User API
### Learning Objectives
  * Use what you have learnt in previous lessons to secure an API using Basic Auth

### Lesson
Your API should support 4 resources:
|HTTP Method|URL|Status code|Description|
|-----------|---|-----------|-----------|
|POST|/users|201|create a new user|
|GET|/users|200|retrieve all users|
|GET|/users/{id}|200|retrieve a specific user|
|PUT|/users|200|update a user|
|DELETE|/users/{id}|200|delete a user|

### Assignment
  * Create an API which allows Create, Read, Update and Delete of a User using either SpringBoot or Node.js
  * Secure the Users API with a hardcoded username and password (see sample code below)
  * Ensure you can call the secured API using Postman
  * Enhance your API to check the incoming username and password against the details held in the database you created in the previous lesson
  * (Optional) Create a simple form which sends a username and password to your API using Basic Auth (i.e. simulates what Postman was doing in the previous lesson). Enhance the form to display a list of users and allow the creation of new users, deletion and update of existing users (apart from the currently logged in user!)

**Question** - is the password sent on every request or cached?

Protect your Create, Read, Update and Delete user resources with Basic Authentication using the following code (TODO):
|Javascript|Java|
```javascript
```
```java
```


[next](/swe/mod1/wk2/day2.html)
[main](/swe)