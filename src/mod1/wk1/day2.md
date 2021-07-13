# Mod 1 > Week 1 > Day 2

## Overview of the day

Yesterday we looked at the anatomy of an HTTP request and response. Today we are going to focus on creating and testing RESTful APIs.

---

## Lesson 1 - RESTful APIs

REST is a shortened form of "<u>RE</u>presentative <u>S</u>tate <u>T</u>ransfer".

> REST is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other.

Note the word **style** - REST is a style of designing APIs in the same way that Object-Oriented is a style for designing programmes. The term is often used fairly loosely on the internet so be careful!

Before REST was first proposed in a [dissertation by Roy Thomas Fielding](https://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm), servers implemented their own endpoints named in ways that different development teams saw fit. For example, in a restaurant app, some teams might name endpoints like `/createRestaurant` and others like `/addRestaurant`. This makes intuitive sense: an endpoint in Express is essentially just a function, and, if you were naming a function to create a restaurant, `createRestaurant()` is a sensible choice. However, REST introduced a **standard** way to address resources on a server which made it much easier for other services to discover and use those resources.

Today REST is widely implemented across the internet and we are going to learn about how to read and create our own RESTful web services.

## Learning Objectives

-   Connect the correct HTTP verbs to RESTful operations
-   Implement a RESTful API

## Before we start

-   (optional) Create a free Spotify account so you can use their API

## Materials needed

-   [airports.json](https://raw.githubusercontent.com/WhiteHatLearningProducts/airports/master/airportsData.json) (airport data)

## Lesson

There are 2 aspects to RESTful architectures.

1. Using the right VERBS in your request
1. Using the right path for your resources

### VERBS/METHODS

Built into the HTTP spec are the http 'methods' or 'verbs'. `GET` `POST` `PATCH` `PUT` `DELETE` _(there are more but these are the main ones)_ one fundamental concept in REST is that these verbs should be used for particular operations. For example we might have a resource `/albums`; to **read** all the albums we would make an http request and use the `GET` method. If we wanted to **add** a new album we would make an http request to the **same** address `/albums` but use the `POST` method and include data in the body of the request. The method indicates the kind of operation that will be performed for that resource - reading with `GET` or creating with `POST`. We _could_ make a `GET` request with a body and create a new `/albums` resource but that would not be RESTful.

### Resources

A 'resource' is some thing we want to access or interact with and is also a fundamental concept in REST. Usually, this is our service or data. For example, on Spotify albums are a resource; so are artists and playlists. There is a standard set of paths used to interact with any resource:

| HTTP Method | URL            | Status code   | Description                                         |
| ----------- | -------------- | ------------- | --------------------------------------------------- |
| GET         | `/albums`      | 200           | return all the albums (resources are always plural) |
| POST        | `/albums`      | 201           | create a new album                                  |
| GET         | `/albums/{id}` | 200           | return the album with the id specified in the URL   |
| PUT         | `/albums/{id}` | [200,204]     | Replace the album with a new one, but keep the id   |
| PATCH       | `/albums/{id}` | [200,202,204] | Update 1 or more of the album's properties          |
| DELETE      | `/albums/{id}` | [200,202,204] | delete the album with the id specified in the URL   |

Nested resources simply extend the same pattern:

| HTTP Method | URL                                    | Status code | Description                                                                                       |
| ----------- | -------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------- |
| GET         | `/albums/{id}/tracks`                  | 200         | return the tracks for the album with the id specified in the URL                                  |
| POST        | `/albums/{id}/tracks`                  | 201         | create a new track for the album with the id specified in the URL                                 |
| GET         | `/albums/{album_id}/tracks/{track_id}` | 200         | return the track with the id specified in the URL from the album with the id specified in the URL |

Can you see the pattern?

❓ How might you update a track for a given album?

❓ Can you match the CRUD operations to http methods?

You might wonder why can't I just reference a track with the URL below?

| URL                  | VERB | Resource                                          |
| :------------------- | :--: | :------------------------------------------------ |
| `/tracks/{track_id}` | GET  | return the track with the id specified in the URL |

You can address a single track resource, however, we are not capturing the relationship between this resource and the album resource that it belongs to. Often you will need to redirect back to a route that requires you to identify which album the track belongs to. The nested RESTful pattern helps you to do this cleanly in your controllers. REST is just a convention or, as Roy Thomas Fielding put it, 'connector semantics'.

In this session we are going to build our service from the ground up and practice defining RESTful routes for ourselves. If you would like to build your server in another language (rather than Node.js/express) like Java or C# you are very welcome to do so. You might need to look online for instructions to perform the following steps for the framework you are using. e.g. for PHP you can use [Symfony](https://symfony.com/).

# Lesson 2 - API testing

## Learning Objectives

-   Be capable of writing API tests

## Before we start

You need to have completed your RESTful web server.

## Materials needed

## Lesson

APIs, like any other form of code, require tests. There are 3 different kinds of tests we commonly write for our services:

1. Unit tests
2. Integration tests
3. System tests

We wrote lots of unit tests in our first bootcamp for our airport and scooter classes etc. A unit test verifies the correct output of a part of our programme given a particular input. Unit tests should be run in isolation and not depend on other parts of the programme.

Integration tests are different. We use these to verify the behavior of different parts of our programme working together. For example, our RESTful controllers interact with the server and HTTP requests.

### Test cases

We would ideally want to test each endpoint thoroughly. That means tests for [different responses](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status). For example:

1. 200 Ok
1. 201 Created
1. 400 Bad request
1. 404 Not Found
1. 415 Unsupported media type

We should always tests that the endpoint works given acceptable input, and we should also test for likely errors like: wrong content type, malformed payloads etc.

### Running in test mode

Most testing frameworks have built into them a setup phase and a teardown phase. During the setup phase you get things ready for your tests. For us, in the setup phase we need to start our server so that it is running and ready to receive requests. Once the server is running the tests will begin. Once all the tests have completed, our framework will run the teardown phase, during this phase we close down our server so it stops gracefully. Often setup invovles seeding a database and teardown involves resetting it to the state before the test ran. Integration tests will often have setup and teardown phases that have to run each time the tests run.

### Rethinking the server

In our tests we will want to get hold of the server object (it's called `app`). At the moment, we define and configure the server and start it in the same file. Lets not do that. Change your code to just export the `app` object:

```javascript
// app.listen(3000, () => console.log('server docs http://localhost:3000/api-docs'))
module.exports = app;
```

In a separate file you can add that line that actually starts the server and make that file your entry point:

```javascript
// /index.js
const app = require("./server");
app.listen(3000, () => console.log("server listening on port", 3000));
```

Now in your `package.json` you can call this file to start the server:

```json
{
    "scripts": {
        "start": "node index.js",
        "test": "jest --runInBand --detectOpenHandles --verbose"
    }
}
```

### Writing integration tests

We can use a library called `supertest` to help with the setup and tear down phase for each of our tests. Below is an example of a test file:

```javascript
const app = require("../server");
const request = require("supertest");

describe("My Airport server", () => {
    test("can GET all the airports", (done) => {
        request(app)
            .get("/airports")
            .expect(200)
            .expect((response) => {
                expect(response.body.length).toBeGreaterThan(28000);
            })
            .end(done);
    });
});
```

Notice how we are importing our `app` object and passing it to supertest (we called that import `request` as thats what it represents). You can look at the examples on the [supertest npm page](https://www.npmjs.com/package/supertest) to get going with GET and POST.

## Assignment

### Part 1

Using the [airports.json](https://raw.githubusercontent.com/WhiteHatLearningProducts/airports/master/airportsData.json), build out a RESTful server. Your server should have the ability to serve requests to Create, Read, Update and Delete airports. For now, you don't need to worry about persisting the changes to disk.

| HTTP Method | URL              | Status code | Description                 |
| ----------- | ---------------- | ----------- | --------------------------- |
| GET         | `/airports`      | 200         | retrieve all airports       |
| POST        | `/airports`      | 201         | create a new airport        |
| GET         | `/airports/{id}` | 200         | retrieve a specific airport |
| PUT         | `/airports/{id}` | 200         | update a airport            |
| DELETE      | `/airports/{id}` | 200         | delete a airport            |

Can you create a test suite for your API server? You will likely have to implement a setup and teardown phase. Write a few tests for each endpoint.

Extension exercise: writing to and from your JSON file in memory is fine for this exercise, but if you want to go a step further, try and write the new file to disk.

### Part 2

We have 28,000 airport records. That's a lot. This would be much easier to consume in smaller chunks. Often large resources will be managed like this in "pages" of results. So lets say we have a page size of 25 that would mean we have to return only the first 25 airports (0 - 24 array indexes) that response would represent page 1. Page 2 would consist of the next 25 airports (25 - 49 array indexes). You will often see this handled as query parameters.

`http://localhost:3000/airports?page=2&pageSize=25`

Implement pagination for the GET `/airports` route enabling users to define a page number (required) and an optional `pageSize` query parameter (this should default to 25).

❓ What pagination errors might you now need to handle?

---

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/179)
[main](/swe)|[prev](/swe/mod1/wk1/day1.html)|[next](/swe/mod1/wk1/day3.html)
