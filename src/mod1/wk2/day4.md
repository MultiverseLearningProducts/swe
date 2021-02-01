# Mod 1 > Week 2 > Day 4

## Overview of the day
Today we will develop a Single Page Application which uses OpenID to authenticate (login) a user to a website.

## Learning Objectives
  * Send emails programmatically
  * Use environmental variables
  * Deploy to a production environment (heroku) 

## Before we start

Please keep secrets out of version control (don't commit secrets like `client_secret` to github). Use environmental variables.

* There are instructions to deploy an express app to heroku [here](https://multiverselearningproducts.github.io/swe/bootcamp/wk5/day2.html)
* To use environmental variables locally we recommend using `dotenv`. Below is an example of how to initialise your local developer environmental vars:

```javascript
if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
```
If the `process.env.NODE_ENV` is 'production' then you are in the heroku environment an you set your heroku environmental variables on your app settings page. Locally you can create a `.env` file and inside that you declare your environmental variables as key value pairs (see below).

```sh
AUTH_SECRET=2398ypo123ywhj0notreal0kpo83yoef8
AUTH_CLIENT_ID=gk8jR4A999FAKE999K9HaHJzL6iSCJXkltKC8
AUTH_BASE_URL=https://dev-7954fake3.eu.auth0.com
BASE_URL=http://localhost:3000
```
In your heroku settings page make sure you have your environmental variables named _exactly_ like the ones in your `.env` file. Some settings might be different in this different environment.
![settings on heroku](https://user-images.githubusercontent.com/4499581/106442408-26ce4100-6473-11eb-8122-c1e31c6119c9.png)

## Materials needed

You'll need to send emails from your project. Below is an example set up to send emails from your server.

### Dependencies

Add `nodemailer` to your project.

```sh
npm install nodemailer
```
Create an app password.

1. Goto your Google account page
1. Click on 'Security'
1. Inside the 'Signing into Google' panel click on 'App passwords'
1. For the following 'Select the app and device for which you want to generate the app password.' choose 'Mail' and 'Other'
1. Copy the app password that is generated into your `.env` file with a key like `GMAIL_PASSWORD=2yor38y2o3yro9q3r` and do the same in your Heroku settings. You only get to see that password once so be careful. Do __not__ commit this into version control - make sure your `.env` file is ignored in your `.gitignore`.

### Send an email

Below is a code snippet you can use to send an email. Adapt this for your emails.

```javascript
const nodemailer = require('nodemailer')
const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your_username@gmail.com',
        pass: process.env.GMAIL_PASSWORD
    }
})

const email = {
    from: 'from@email.com',
    to: 'to@email.com',
    subject: "Friend request",
    html: `Hi there,<br/><br/>I would like to invite you to be my friend<br/><br/><a style="text-decoration:none;padding:15px;background-color:green;color:white;border-radius:3px;" href="${process.env.BASE_URL}/friends/request?from=${encodeURIComponent('from@email.com')}&to=${encodeURIComponent('to@email.com')}">Accept Request</a>`,
    replyto: 'no-reply@banking-app.com'
}

transport.sendMail(email, (err, result) => {
    console.log(err || result)
})
```
Notice that you can write HTML in the email. In the example above we parse a query string. You might want to experiment with JWT tokens, base64 encoded objects or other means to pass data back to your app via a GET request (which is what you make when you click on a link).

!(https://www.youtube.com/embed/dhoW2_pME4A)

# Project brief

1. Get your app to send emails
1. Deploy your app to Heroku
1. Test the URLs you send in your emails work ok

Remember you can create your own JWTs.

```javascript
const token = jwt.sign({data: whatever_you_like_in_here}, secret, {expiresIn: 120})
```

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/186)
[main](/swe)|[prev](/swe/mod1/wk2/day3.html)|[next](/swe/mod1/wk2/day5.html)