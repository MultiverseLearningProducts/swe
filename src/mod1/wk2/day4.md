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
If the `process.env.NODE_ENV` is 'production' then you are in the heroku environment an you set your heroku environmental variables on your app settings page. Locally you can create a `.env` file and inside that you declare your environmental variables as key value pairs.

```sh
AUTH_SECRET=2398ypo123ywhj0notreal0kpo83yoef8
AUTH_CLIENT_ID=gk8jR4A999FAKE999K9HaHJzL6iSCJXkltKC8
AUTH_BASE_URL=https://dev-7954fake3.eu.auth0.com
```

## Materials needed

# Project brief

1. Try to get your app to send emails
1. Deploy your app to heroku
1. Test the URLs you send in your emails work ok

Remember you can create your own JWTs.

```javascript
const token = jwt.sign({data: whatever_you_like_in_here}, secret, {expiresIn: 120})
```

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/186)
[main](/swe)|[prev](/swe/mod1/wk2/day3.html)|[next](/swe/mod1/wk2/day5.html)