# Mod 1 > Week 1 > Day 3

## Overview of the day

You should have a RESTful web server that exposes the airports as a resource. You have done well to get this far. Today we will focus our attention on "Integration Tests". 

## Lesson 1 - Integration Tests

## Learning Objectives

* Understand the difference between Unit and Integration tests
* Demonstrate the knowledge to implement integration tests in a language

## Before we start

You need to have completed your RESTful web server.

## Materials needed

## Lesson

We have a server. Now we are professional software engineers we know whats missing. Tests. There are 3 different kinds of tests we commonly write for our services:

1. Unit tests
1. Integration tests
1. System tests

Unit tests we wrote lots of these in our first bootcamp for our airport and scooter classes etc. A unit test is often a static test and it verifies the correct output of a part of our programme given a particular input. Unit tests should be run in isolation and not depend on other parts of the programme.

Integration tests are different. We use these to verify the behavior of different parts of our programme working together. For example our RESTful controllers interact with the server and HTTP requests. These tests don't have to be dynamic, but they often are.

### Static Dynamic

What do I mean by static an dynamic? Unit tests are static and Integration tests are usually dynamic? The easiest way to understand this is to think of a car. We can test a car in the car showroom. We can check things like:

![static van](https://cdn.motor1.com/images/mgl/EqyMv/s1/volkswagen-id-buzz-concept-detroit-2017.jpg)

1. Do the lights work
1. Does the steering move the wheels?
1. Can you lock the doors

The car does not have to be moving for us to test these things. These are static tests. If we wanted to test the following:

![dynamic](https://www.inchcape.co.uk/-/media/ba79d1fea496499b8ec94a3dbe692b96.jpeg?la=en-gb&hash=193E23BD23DFD2666426DB2E5C8FFE92)

1. The breaking distances
1. Cornering
1. The noise level

We have to run the car to check these things, the car has to be moving or be dynamic.

With our server we can test particular methods or configuration, but to check that we are getting the right responses from our endpoints it would be helpful to spin up a test version of our server, and actually call the endpoints with different values to verify that our server is behaving the way it should.

### Test cases

We would ideally want to test each endpoint thoroughly. That means tests for [different responses](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status). For example:

1. 200 Ok
1. 201 Created
1. 400 Bad request
1. 404 Not Found
1. 415 Unsupported media type

A guide is to test the happy path, and test for likely errors like; wrong content type, malformed payloads.

### Running in test mode

Most testing frameworks have built into them a setup phase and a teardown phase. During the setup phase you get things ready for your tests. For us in the setup phase we need to start our server so that it is running and ready to receive requests. Once the server is running the tests will begin. Once all the tests have completed our framework will run the teardown phase, during this phase we close down our server so it stops gracefully. Integration tests will often have setup and teardown phases that have to run each time the tests run.

### Rethinking the server

In our tests we will want to get hold of the server object (it's called `app`). At the moment we define and configure the server and start it in the same file. Lets not do that. Change your code to just export the `app` object:

```javascript
// app.listen(3000, () => console.log('server docs http://localhost:3000/api-docs'))
module.exports = app
```

In a separate file you can add that line that actually starts the server and make that file your entry point:

```javascript
// /main.js
const app = require('./server')
app.listen(3000, () => console.log('server docs http://localhost:3000/api-docs'))
```

Now in your `package.json` you can call this file to start the server:

```json
{
    "scripts": {
        "start": "node main.js",
        "test": "jest --runInBand --detectOpenHandles --verbose"
    }
}
```

### Writing integration tests

We can use a library called `supertest` to help with the setup and tear down phase for each of our tests. Below is an example of a test file:

```javascript
const app = require('../server')
const request = require('supertest')

describe("My Airport server", () => {
    test("can GET all the airports", (done) => {
        request(app)
            .get('/airports')
            .expect(200)
            .expect(response => {
                expect(response.body.length).toBeGreaterThan(28000)
            })
            .end(done)
    })
})  
```

Notice how we are importing our `app` object and passing it to supertest (we called that import `request` as thats what it represents). You can look at the examples on the [supertest npm page](https://www.npmjs.com/package/supertest) to get going with GET and POST.

## Assignment

Can you create a test suite for your API server? You will likely have to implement a setup and teardown phase. Write a few tests for each endpoint, try to test for the different status codes that you listed in your original `airports-config.yaml` OpenAPI spec.

----

## Lesson 2 - REST experts

## Learning Objectives

* Demonstrate your knowledge of REST
* Demonstrate your knowledge of HTTP

## Before we start

You can read through the session notes from Day 1-3.

## Materials needed

[https://applied.multiverse.io/mod/quiz/](https://applied.multiverse.io/mod/quiz/view.php?id=8737)

## Lesson

You should now be able to create a RESTful web server for a single resource, and have all your endpoints documented by integrated documentation. You can label and identify key aspects of an HTTP request and be able to form different HTTP requests in a RESTful style.

Before taking the quiz below you will have some time to read back over the session notes from the last three days.

## Assignment

Can you complete [this Quiz](https://applied.multiverse.io/mod/quiz/view.php?id=8737)?

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/180)
[main](/swe)|[prev](/swe/bootcamp/wk1/day2.html)|[next](/swe/bootcamp/wk1/day4.html)