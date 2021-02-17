# Mod 4 > Week 1 > Day 1

![BCS logo](https://pbs.twimg.com/profile_images/960901907198959616/5JUHWvsO_400x400.jpg)

By the end of this module you will have selected a compendium of technologies and libraries that you can use in your final 5 day synoptic project. This is really about putting everything you have learnt on your apprenticeship together and writing software at a professional level.

We are going to cover the following:

* Selecting a stack
* Data design for schema and schemaless databases
* Testing strategies and environments
* Design systems
* Getting stuck? Getting unstuck!
* Packaging for deployment with Docker
* Making a video demo

----

# Stacks

## Learning Objectives

* Articulate the differences between a framework and a library
* Demonstrate the knowledge to implement a full stack app with authentication

## Before we start

## Materials needed

## Lesson

# Selecting a stack

What is a stack?

A stack refers to a collection of different software products that work together to create an application for the web. For example you may hear developers talk about the **MEAN** stack.

## <u>M</u>ongoDB - Database
## <u>E</u>xpress - Server
## <u>A</u>ngular - Frontend framework
## <u>N</u>ode.js - Backend runtime

Each of these elements in the stack are designed to be modular. That means they can be used in combination with other technologies and frameworks. For example the **MERN** stack.

## <u>M</u>ongoDB - Database
## <u>E</u>xpress - Server
## <u>R</u>eact - Frontend framework
## <u>N</u>ode.js - Backend runtime

Can you spot the difference? What has been swapped out?

## The JAM stack

Remember you can also combine languages with APIs for example the JAM stack.

## <u>J</u>avascript
## <u>A</u>PIs
## <u>M</u>arkdown

The JAM stack side steps the need to run a webserver. Your site can be a set of markdown files parsed into HTML pages (github pages, surge, gatsby etc), enhanced with javascript and use cloud based datastores like [firebase](https://firebase.google.com/), or services like [Auth0](https://auth0.com/). This method leverages cloud based products to remove the burden of writing and running all the services for a full stack app.

You need to decide on your stack. You will want to be able to create a [CRUD](https://www.codecademy.com/articles/what-is-crud) app with user accounts.

## Frameworks vs Libraries

This is a famous debate among software developers. There are pros and conns to both.

### Frameworks

An example of a web framework is [Ruby on Rails](https://rubyonrails.org/) or [Meteor](https://www.meteor.com/). These are complete solutions where everything is configured for you. Generally you create a new app and these frameworks scaffold out a project for you.

### Libraries

A library is a non-volatile resource. A module of code compiled together that provides some functionality or service to a programme. An example of a web app using libraries might be a Node.js app build with:

* Express - web server
* Pug - for templating
* Redis - for the database
* Apprun.js - for frontend javascript interactivity

# 👩🏾‍💻🧑🏽‍💻

In pairs can you think about the pros and conns of frameworks, and the pros and conns of using libraries? Report back to the cohort when you have finished.

## Today's Assignment

Can you decide on a stack that you will use in your synoptic project. Create a new application with your stack and implement user accounts. Be ready to demo:

* Create a new user
* Log in as a user
* See a page that displays user data
* Log out

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/208)
[main](/swe)|[prev](/swe/mod3/wk2/day5.html)|[next](/swe/mod4/wk1/day2.html)