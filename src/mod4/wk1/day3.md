# Mod 4 > Week 1 > Day 3

## Overview of the day

We looked at the 7 principles of testing in [Module 3](/swe/mod3/wk1/day1.html). Our concerns here are more practical. If we want to have good testing in our project then we need to think about the way we structure our codebase.

----

## Learning Objectives

* Can apply test and debugging strategies;
* Can design and develop manual or unit tests;
* Can test code segment functionality against requirements;
* Can assess test results against expected results and acceptance criteria.

## Lesson

From the outset you should be thinking about running your project in 3 different environments:

* Testing
* Development
* Production

Most runtimes have a way to label or name the environment the process is running in. For example you can start a Node.js process in "testing" mode by setting the `NODE_ENV` to "test"

```sh
NODE_ENV=test node server.js
```

The command above sets the local environment variable `NODE_ENV` to "test" before executing the `server.js` file. That means in our `server.js` file we could conditionally assign the port the server runs on:

```javascript
app.listen(NODE_ENV === "test" ? 3001 : 3000);
```

Now if we run our server in test mode it will run on port 3001. We could do something similar with our database service, and in test mode run the database on a test port.

## Unit tests

These are the most simple tests to set up and write. Usually static tests they do not require your app to be running, and should not need a database. Writing your unit tests using test driven development TTD will help you write code that is modular and exposes functions that you can easily call from another file.

## Integration tests

These require some thoughtful setup but can be really helpful for writing tests for your server's endpoints. You will want your server to be configurable; to connect to databases with different addresses. Use a "test" environmental variable to conditionally spin up a test database. Then pass the address of your database to your server and you should be able to run your app in a test environment.

Expect to write some helpers that will empty your database for you. At the start of each test run start with an empty database. You can seed your test database before running a series of tests, for example it can be helpful to have a user account, a booking, an event for example already in the database before running tests that asset an event can be updated.

Testing frameworks usually have a way to run setup scripts before all the tests, before each test, and some tear down hooks to remove any data after the test or tests have run. For example in the [Jest](https://jestjs.io/docs/en/setup-teardown) framework you can write functions to run and pass them to `afterAll()`.

# 👩🏾‍💻🧑🏽‍💻

Write a set of integration tests to prove your data model is sound and will work for your project. Be ready to talk about and demonstrate how you have set these tests up.

## System tests

To really show off your skills and demonstrate your knowledge of a wide range of testing tools you can also create a few system tests. These are sometimes called end-to-end tests or smoke tests. With these tests you can encode user journeys and have them run automatically. You will find taking the time to write these tests saves you time in the long run. The automated test will run faster than you manually stepping through a sequence.

## Cypress.io

I recommend trying [cypress](https://docs.cypress.io/guides/getting-started/installing-cypress.html#npm-install) for your system tests.

## Today's Assignment

Can you bootstrap your project with each type of test: Unit, Integration and system? You don't need to write extensive tests for your application, but you do want to demonstrate in your synoptic project that you know about testing strategies and you know how to set up and write each of the three types of test.

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/210)
[main](/swe)|[prev](/swe/mod4/wk1/day2.html)|[next](/swe/mod4/wk1/day4.html)