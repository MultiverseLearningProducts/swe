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
  
  * Understand the difference between authentication and authorisation
  * Understand how user names and passwords are encoded in the Basic Authentication HTTP scheme
 
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
From the string in the `Authorization` header above, determine the user's username and password. Do you think Basic Authentication is a secure scheme?

## Hashing passwords
### Learning Objectives
  * Understand why passwords should be hashed
  * Understand the implications of exposing sensitive data
  * Create a database of user names and hashed passwords 

Basic auth uses the `Authorization` header in the HTTP request, along with the "Basic" keyword and a base64 encoded string in the following format - _username:password_. To validate that a user's login details are correct using Basic auth the server will look in the headers for this base64 encoded string, then decode it.Now the server has the username and password sent from the client we need to match it with the username and password held in our database.

**Question** - Imagine if we held these passwords in plaintext. What risks do you think this could cause?

**Answer** - we will have leaked sensitive information that your users have trusted you with. Imagine if they used the same username and password on other sites. Your organisation could face very large fines under the General Data Protection Regulation (GDPR) and suffer serious damage to its repretation - listen to this [video](https://www.bbc.co.uk/news/business-48905907) to hear about one recent example.

To avoid storing passwords in plaintext, we `hash` them with an one-way hashing function. You learnt about hashing last week. If the cryptographic function used for the hashing is strong, then it's computationally impossible to calculate the original password from the hash.

As a reminder, here is some code which implements a secure hashing algorithm:

|Javascript|Java|
```javascript
const bcrypt = require('bcrypt')
...
bcrypt.hash('password101', 10)
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
|POST|`/users`|201|create a new user|
|GET|`/users`|200|retrieve all users|
|GET|`/users/{id}`|200|retrieve a specific user|
|PUT|`/users`|200|update a user|
|DELETE|`/users/{id}`|200|delete a user|

### Assignment
  * Create an API which allows Create, Read, Update and Delete of a User using either SpringBoot or Node.js
  * Secure the Users API with a hardcoded username and password (see sample code below)
  * Ensure you can call the secured API using Postman
  * Enhance your API to check the incoming username and password against the details held in the database you created in the previous lesson
  * (Optional) Create a simple form which sends a username and password to your API using Basic Auth (i.e. simulates what Postman was doing in the previous lesson). Enhance the form to display a list of users and allow the creation of new users, deletion and update of existing users (apart from the currently logged in user!)

**Question** - is the password sent on every request or cached?

Protect your Create, Read, Update and Delete user resources with Basic Authentication using the following code:

|Javascript|Java|
```javascript
// check for a basic auth header with correct credentials
app.use(basicAuth({
  authorizer: dbAuthorizer, // customer authorizer,
  authorizeAsync: true, // we check the db which makes this async
  challenge: true,
  unauthorizedResponse: (req) => {
    return `unauthorized. ip: ${req.ip}`
  }
}));

// our custom async authorizer middleware, this is called for each request
function dbAuthorizer(username, password, callback) {
  const sql = "select password from users where username = ?;";
  db.get(sql, [username], async (err, user) => {
    err ? callback(err) : bcrypt.compare(password, user.password, callback);
  });

```
```java
@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Autowired
    private DataSource dataSource;

    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {
        // do not use the line below in production apps!!
        httpSecurity.csrf().disable(); // hack to support DELETE method
        httpSecurity.authorizeRequests().anyRequest().authenticated()
                .and().httpBasic();
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder authentication)
            throws Exception {
        // use jdbc authentication (for in memory authentication use authentication.inMemoryAuthentication())
        authentication.jdbcAuthentication()
                .dataSource(dataSource)
                .authoritiesByUsernameQuery("select username,authority "
                        + "from authorities "
                        + "where username = ?")
                .usersByUsernameQuery(
                        "select username, password, 'true' as enabled from users where username = ?");

    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        // specify we want the password hashed using bcrypt
        return new BCryptPasswordEncoder();
    }
}
```


[next](/swe/mod1/wk2/day2.html)
[main](/swe)