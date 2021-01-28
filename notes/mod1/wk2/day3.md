# Mod 1 > Week 2 > Day 3

## Overview of the day

Today we summit and implement token based auth.

# Session 1 - OAuth with Auth0

## Learning Objectives

* secure a resource using a token
* access a 3rd party token

## Pre-work or Assumed knowledge

## Materials

## Notes

The video below is worth watching:

* Disadvantages of session based auth
* Nightclub analogy
* How to read a sequence diagram

## Assignment

## Additional Reading

[Session Recording](https://zoom.us/rec/share/85OByUPEzt3V1bS16mbXsbqwemmXNEM6flqsQqai7-Z7spu4C_zXRsUXYVfMxP5v.tJ7FUT6ZRycM0ssx) _Start Time : Jan 27, 2021 09:30 AM_

----

# Session 2 - Universal login Auth0

## Learning Objectives

* Engage in the design phase of software development

## Pre-work or Assumed knowledge

* OAuth

## Materials

## Notes

The video below has a walk through of bootstrapping an express server with the Auth0 universal login.

## Assignment

The assignment gets the apprentices using Auth0 universal login. One thing to check and emphasis is they should expect to make a data model that spans 2 databases, the users are stored on Auth0, Accounts stored in their app. How will they relate data to a user? (the `sub` property from the user object that comes from Auth0).

I am assuming the groups all deploy to Heroku ([instructions from bootcamp here](https://multiverselearningproducts.github.io/swe/bootcamp/wk5/day2.html)).

1. bootstrap the project with Auth0
1. get emails working (google API)
1. send links in emails that call their own app (on heroku) and capture the email of the referer (put info into a token, add the token as a query parameter?)
1. Collect the email and URL (of the app on heroku) of a friend
1. send money using a commonly agreed endpoint (my group decided on POST `/pay` {from: STRING, to: STRING, amount: INTEGER})

Important thing to encourage and support here is the design phase and problem solving. The basic trick of this app working is being able to send links with data embed in them via email, then receive data via endpoints.

## Additional Reading

[Session Recording](https://zoom.us/rec/share/k4S4x4Z9dBFvjpmw78x4XDXxKT3W-rkATuYfRvUsCpBddEuo0H0-SxUxvaojRhJJ.8LvOBErKue3SU6gY?startTime=1611756240000) _Jan 27, 2021 02:01 PM London_