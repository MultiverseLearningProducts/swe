# Mod 1 > Week 2 > Day 1

## Overview of the day

To day is all about Basic Authentication

# Session 1 - Authentication and Authorization

## Learning Objectives

* Distinguish the difference between authentication and authorisation
* Demonstrate the knowledge for setting up an express app with an ORM (sequelise)

## Pre-work or Assumed knowledge

* Express
* Sequelize (from the first bootcamp)

## Materials

## Notes

Take your group of apprentices through the hotel example, then send them into breakout rooms to do the list of examples. They can send you their Answers using direct messages in Slack.

Answers using direct messages in Slack.

Now you can start the basic authentication section do you want to remind your apprentices about the http header, and how to an 'Authorize' header, and how to use `atob` and `btoa` to encode and decode strings as base64.

Step through setting up a server with a single `User` resource, make 2 endpoints a POST to create a user and a GET to get a single user.

I used:

* express
* sequelize
* sqlite3
* bcrypt

### Define the model

```javascript
const {Sequelize, Model, DataTypes} = require('sequelize')
const sequelize = new Sequelize('sqlite:./db.sql', {logging: false})
class User extends Model {}

User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING
}, {
    sequelize
})

module.exports = {
    User,
    sequelize
}
```

Once you've got the model you can build the server with no authentication.

```javascript
const express = require('express')
const app = express()
const {User, sequelize} = require('./models/')

app.use(express.json())

app.post('/users', async (req, res) => {
    const user = await User.create(req.body)
    res.send(user)
})

app.get('/users/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id)
    user ? res.send(user) : res.sendStatus(404)
})

app.listen(3000, () => sequelize.sync())
```

### Hashing passwords

Now you can talk about storing passwords as plaintext and what a terrible idea that would be.

* play the bbc [video](https://www.bbc.co.uk/news/business-48905907)
* you can mention Rainbow tables if you want to

Introduce `bcrypt`. You can install this dependency and demo it in the node Repl.

```sh
node
```
then in the node repl
```ruby
bcrypt = require('bcrypt')
bcrypt.hash("my_passw0rd", 10).then(console.log)
// $2b$10$78EZuPQyIealvQR45YgWTe1o0LgfbpGpLITudCaQIIzOPxGO6ICiq
bcrypt.compare("my_passw0rd", "$2b$10$78EZuPQyIealvQR45YgWTe1o0LgfbpGpLITudCaQIIzOPxGO6ICiq")
// true
```

The second argument to `.hash` is the salt rounds. Its worth talking about rainbow table attacks to understand the value of adding a salt, but this is upto you.

Now update the POST endpoint that saves a user and store the hashed password in place of the plaintext password.

```javascript
app.post('/users', async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const user = await User.create({
        username: req.body.username,
        password: hashedPassword
    })
    res.send(user)
})
```

## Assignment

Go build the server with REST endpoints for the User resource. Create a series of users with hashed passwords.

## Additional Reading

[What are rainbow tables?](https://youtu.be/SOV0AeHuHaQ)
[Session Recording](https://zoom.us/rec/share/2nyDmJ6UJ_n56zfS9frhRQFJ_LdmHNmiRqqa40DVdYh9a9jDh3kiD3mrR1Xc39NM.5XXAxz_-Tm9AhCM7) _Start Time : Jan 25, 2021 09:30 AM_


<hr/>

# Session 2 - Middleware

## Learning Objectives

* Describe the middleware design pattern
* Use what you have learnt in previous lessons to secure an API using Basic Auth

## Pre-work or Assumed knowledge

* Set HTTP headers
* Use `.split` to access substrings

## Materials

## Notes

Take everyone through setting auth headers in postman. Remember the username __is__ case sensitive.

* base64 encode the `username:password`
* Use the keyword "Basic"
* Make GET requests to try and GET a single user (this is what we want to authorize)

Log out the headers on the server. Then introduce the idea of middleware. Below is middleware called for every request.

```javascript
app.use(function (req, res, next) {"your middleware function every call"})
```

to just call a middleware for some routes you can add the function name as the second argument - but don't call it.

```javascript
app.get('/users/:id', protected, async (req, res) => {
    res.locals.user ? res.send(res.locals.user) : res.sendStatus(404)
})
```

In the code above you can see there is a user on the `res.locals` object, this is how you can pass values from middleware to the next middleware or controller, but adding the object to `res.locals`.

### Authentication

We are checking the person making the request is who they say they are assuming only they know the password.

In your middleware function check the passwords match:

```javascript
const protected = async (req, res, next) => {
    if (!req.headers.authorization) {
        res.sendStatus(403)
    } else {
        const credentials = req.headers.authorization.substring(6)
        const password = atob(credentials).split(":")[1]
        const user = await User.findByPk(req.params.id)
        const passwordMatches = await bcrypt.compare(password, user.password)
        if (passwordMatches) {
            res.locals.user = user
            next()
        } else {
            res.sendStatus(403)
        }
    }
}
```

That is Basic auth in a nutshell. The issue we have now is that you have to send the `username:password` on every request. Once a user has been authorized would it not make more sense for the server to keep track of them?

## Assignment


## Additional Reading

[Session Recording](https://zoom.us/rec/share/BEL4_AkkOd0fG6Bc3ABzcxl6NSpIT1RItE7QZa2AzksD0H0hEX3Pfx9Me_2vZsLG.6z--1wcAY3BIDpsd) _Start Time : Jan 25, 2021 01:59 PM_

