# Bootcamp > Week 1 > Day 3

## Overview of the day

Today we take flight! The first session introduces static class functions. These will help us add a new layer of interactivity to our airports exercise. During the second session we start to look at async functions, and how to test code that work asynchronously.

## Lesson 1 - Take off and landing

## Learning Objectives

* Define static class functions and properties
* Access static class functions and properties

## Before we start

You need to have completed the work on airports so you have a codebase with the following classes defined and tested:

* Bag
* Passenger
* Plane
* Airport

## Materials needed

* Jest

## Lesson

Previously we have been created objects using classes and the `new` keyword. We have been constructing data structures in our code. For example the plane class contained passengers and each passenger had 1 or more bags. To complete our programme we really want to be able to move our planes (and the passengers they contain) from one airport to another.

To do this, we need to be able to access one airport from another airport. We can't do this using the properties and functions of an instance of an airport. For example if we created London Heathrow (LHR). Then Los Angles (LAX). How can we connect them?

`london.addAirport(LAX)`

You can see that is clumsy, hard to keep track of. Each new airport needs to be in sync with all the rest.

### Static properties

You can tell we need somewhere we can keep all the airports that we create. If we use a static class property we can easily keep all the instances of the airports we create in one place. Read the code snippet below. Can you see what we are doing here?

```javascript
class Airport {
    static airports = []
    
    constructor(name) {
        this.name = name
        this.planes = []
        this.constructor.airports.push(this)
    }
    
    land(plane) {
        this.planes.push(plane)
    }
}
```

On the `Airport` class itself we are able to access each instance of an airport that is created `Airport.airports` is an array of all instance of `Airport`.

## Assignment

Can you write the `takeOff` function on an instance of an airport that should take a plane as an argument, find that plane in the airport's planes array and remove it, then push it into the inbound airport's array of planes. This will effectively move the plane object from one airport to another.

Remember to write tests that prove all the functionality that we have talked about.

<hr/>

## Lesson 2 - Airports Async

## Learning Objectives

* Explain the differences between the way synchronous and asynchronous functions work.
* Demonstrate the methods to test async code in Jest

## Before we start

* You need to have an Airport class
* You should be familiar with Object.keys as a way to access the keys of an object
* You should have iterated over an object in javascript before
* You should recognise deconstructing assignment

## Materials needed

* You need [this file](https://github.com/mwgg/Airports/blob/master/airports.json) saved in your airports project folder

## Lesson

So far our code executes synchronously. That means the code in the line above has been evaluated and any values are available for us to use on our current line. Async functions, they do not return straight away. For example if we want to read something from disc, that is an async function. It will not return immediately.

There are 3 ways to write and get values from async functions and in this session we are going to look at each of them. They are:

1. Use a callback function
1. Use Promises
1. Use 'async await'

Above is a link to a file with 28,000 airports in it. The file is in JSON so we can read it into our javascript programme and use that data to augment our Airport instances.

To start with lets write a test like this.

```javascript
test('airports have a city', () => {
    const CDG = new Airport('CDG')
    CDG.getInfo((err, info) => {
        console.log(info)
        expect(err).toBeNull()
        expect(info.country).toEqual('FR')
    })
})
```
Here is the way we are going to start doing this. In our test you can see I'm using a callback function. In Node.js callbacks follow this signature and `err` followed by your async value being returned. If there are no errors the `err` object is `null`. Run your tests.

Lets turn to our `Airport` class and write the `getInfo` function (that will take a callback). You will have to require the fs or 'file system' module from Node.js.

```javascript
const fs = require('fs')
// add this function to your Airport class definition
getInfo(callback) {
    fs.readFile('./airports.json', (err, data) => {
        callback(err, JSON.parse(String(data)))
    })
}
```
This is async code. We read the file from disk. The file contents comes out as a Buffer - you can console.log it to have a look at it. We need to turn the Buffer into a String, then that string we turn into a javascript object using JSON.parse. Finally we call the callback with an error if there is one or our file content nicely parsed into JSON.

But what? in our test we should see it logged out. But we don't. Why do we not see the contents of the file?

The test is called synchronously, it does not wait for the result of calling `CDG.getInfo`. To test an async function in jest pass in a "done" function and then call it when you are done.
```javascript
test('airports have a city', (done) => {
    const CDG = new Airport('CDG')
    CDG.getInfo((err, info) => {
        console.log(info)
        expect(err).toBeNull()
        expect(info.country).toEqual('FR')
        done()
    })
})
```
Can you see how that is working. You should now see your logging. Look at one of the entries in the airport data. We want to filter out an airport using the "iata" code. Can your `getInfo` function filter out the right airport and return just that data point?

### Promises

Another way to write and organise async code is using Promises. Lets refactor our getInfo function to <u>return</u> a promise.
```javascript
getInfo() {
    return new Promise((resolve, reject) => {
        fs.readFile('./airports.json', (err, data) => {
            if (err) return reject(err)
            
            const airports = JSON.parse(String(data))
            const [airport] = Object.keys(airports)
                .filter(airportCode => airports[airportCode].iata === this.name)
                .map(airportCode => airports[airportCode])
            
            resolve(airport)
        })
    })
}
```
Can you see the `new` keyword? What does that tell you about a Promise? What do you initialise a Promise with? Our callback style structure that we use with the `fs` module is wrapped in a promise. Now when resolve is finally called it will trigger the `.then` part of a promise object.

So to use our code now it will look different in our test:

```javascript
test('airports have a city', () => {
    const CDG = new Airport('CDG')
    return CDG.getInfo()
        .then(info => {
            expect(info.city).toEqual('Paris')
        })
        .catch(err => {
            expect(err).toBeNull()
        })
})
```
Notice now we don't need the `done` callback in the test, this is because we are returning a promise from our test, and Jest will figure this is an async test and will wait for the promise to resolve or reject.

The promise object is "thenable" you can chain a series of promises together using 'then' like this:

```javascript
return doSomeThing()
    .then(thing => {
        return theNextPromise(thing)
    })
    .then(next => {
        return anotherPromise(next)
    })
    .catch(err => {
        console.error('this catch block will catch any reject(err) in the chain.')
    })
```
Take note you must return a promise from the `then` block if you want to keep chaining. This avoids the pattern of deeply nesting callbacks, which some people find hard to read.

### Async await

Finally we can use the `async` and `await` keywords to make our Asynchronous code read more synchronously. Lets update our test:
```javascript
test('can get information like the city from an airport instance', async () => {
    const CDG = new Airport('CDG')
    const airport = await CDG.getInfo()
    expect(airport.city).toEqual('Paris')
})
```
Notice how we use the 2 keywords. First of all we need to declare an `async` function. We use the `async` keyword before our function definition. Then <u>inside</u> the async function we can use the `await` keyword to pause, and wait for our async value to resolve. That means we don't need the `done` callback, we don't need to use a promise with `then`, we can just write it nice and simple, line by line. Jest knows that this is an async test because we used the `async` keyword before the function definition.

Can you refactor your `getInfo` function to use async await?

It's a bit tricky because `fs.readFile` takes a callback. It's not really designed to work with async await. However from Node.js 11.0 onwards you can require a version of the `fs` functions that are wrapped in a promise object. Add this to the top of your Airport class:

```javascript
const { readFile } = require('fs/promises')
```
Now you can use the `readFile` function with the `await` keyword because this `readFile` function is wrapped in a promise.

That is a lot to get your head around! Async functions are a key characteristic of javascript. Objects, functions and async are the building blocks of the language. Spending time now learning how to work with them will enable you to start writing more complex code more quickly.

## Assignment

* In pairs can you explain to each other the differences between synchronous and asynchronous functions, and how you can tell the difference in your code.
* Use the three different ways of forming async functions in the Airport class
* write async tests for each version in Jest
