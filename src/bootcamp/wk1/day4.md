# Bootcamp > Week 1 > Day 4

## Overview of the day
Today we are going to look at creating asynchronous functions in JavaScript.

## Additional resources
If you are struggling with any of the concepts from today, the following resources will help:
  * [Understanding the Event Loop](https://youtu.be/8aGhZQkoFbQ)
  * [Timers in Node.js](https://nodejs.org/en/docs/guides/timers-in-node/)
  * [Asynchronous JavaScript—How Callbacks, Promises, and Async-Await Work](https://dev.to/nas5w/asynchronous-javascript-how-callbacks-promises-and-async-await-work-1f7p)
  * [Callbacks, promises and async/await](https://javascript.info/async)

<hr/>

## Lesson 1 - Synchronous versus asynchronous code

JavaScript is a single threaded language. This means it has one call stack (where code is executed) and one memory heap (where objects are stored). JavaScript executes code in order and must finish executing a piece of code before moving onto the next. We call this **synchronous**, or blocking, execution. Other languages such as C++ and Java are multi-threaded and can execute multiple pieces of code at the same time. We refer to this as **asynchronous** or non-blocking execution.

## What is the Call Stack?

The call stack is a data structure in the runtime of javascript that functions to organise the running or 'execution' of your code.

![an animation of a stack](https://miro.medium.com/max/1280/0*SESFJYWU5a-3XM9m.gif)

Last on first off. Imagine a stick over which you can place hoops. To get to the bottom hoop, all the other hoops have to come off first.

![stack of hoops](https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B000U02LXY&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=toy-ideas-20&language=en_US).

When your code is executed, javascript will run it in 2 passes. The first pass optimises your code for execution. The second pass actually runs your code, and it is in this second pass that javascript uses the stack.

## How does JavaScript use the Call Stack?

Lets take the following code example:

```javascript
function multiply(a, b) {
    return a * b
}
function square(n) {
    return multiply(n, n)
}
function printSquare(n) {
    const result = square(n)
    console.log(result)
}

printSquare(4)
```
Read the code above. First of all there are 3 function definitions, then one of those functions is called. When `printSquare` is called it is put onto the stack. `printSquare` is evaluated and calls `square` which is added to the stack, `square` calls `multiply` which is added to the stack. `multiply` does not call any other function so it returns the value 16. the `return` keyword means that function pops off the stack, now inside `square` that function is evaluated to 16, and returns so `square` is then popped off the stack. Now back in `printSquare` the called to `square` is evaluated and assigned in memory to the variable `result`. Next line console.log is called with 16 and the function implicitly returns (without a value) as there is nothing more to execute. See below:

![call stack](https://user-images.githubusercontent.com/4499581/93218919-af697080-f762-11ea-8a8b-f2ab1b39b4fb.gif)

## Assignment 
[Loupe](http://latentflip.com/loupe) is a little visualisation to help you understand how JavaScript's call stack/event loop/callback queue interact with each other) is a tool which helps you visualise how JavaScripts Call Stack, Event Loop and Callback Queue interact with each other.

Open up this [link illustrating how synchronous code is executed](http://latentflip.com/loupe/?code=Ly8gdGhpcyBpbGx1c3RyYXRlcyBKYXZhU2NyaXB0IGNvZGUgZXhlY3V0aW5nCi8vIHN5bmNocm9ub3VzbHksIHdpdGggZWFjaCBsaW5lIGdvaW5nIG9udG8gdGhlCi8vIENhbGwgU3RhY2sgYW5kIGV4ZWN1dGluZyBpbiB0dXJuCgpjb25zb2xlLmxvZygiVGhpcyBpcyB0aGUgZmlyc3QgbGluZSBvZiBjb2RlISIpOwpjb25zb2xlLmxvZygiVGhpcyBpcyB0aGUgc2Vjb25kIGxpbmUgb2YgY29kZSEiKTsKY29uc29sZS5sb2coIlRoaXMgaXMgdGhlIHRoaXJkIGxpbmUgb2YgY29kZSEiKTsKY29uc29sZS5sb2coIlRoaXMgaXMgdGhlIGZvcnRoIGxpbmUgb2YgY29kZSEiKTsKY29uc29sZS5sb2coIlRoaXMgaXMgdGhlIGZpZnRoIGxpbmUgb2YgY29kZSEiKTsKY29uc29sZS5sb2coIlRoaXMgaXMgdGhlIHNpeHRoIGxpbmUgb2YgY29kZSEiKTsKY29uc29sZS5sb2coIlRoaXMgaXMgdGhlIHNldmVudGggbGluZSBvZiBjb2RlISIpOwpjb25zb2xlLmxvZygiVGhpcyBpcyB0aGUgZWlnaHQgbGluZSBvZiBjb2RlISIpOwpjb25zb2xlLmxvZygiVGhpcyBpcyB0aGUgbmludGggbGluZSBvZiBjb2RlISIpOwpjb25zb2xlLmxvZygiVGhpcyBpcyB0aGUgdGVudGggbGluZSBvZiBjb2RlISIpOwo%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)

Can you see how each line is executed one at a time? Experiment by adding in the functions code above (make sure you add a line of code which calls the `printSquare` function to kick it off!).

## What is a stack trace?

The stack is very help to know about. When your code errors, you often get a 'stack trace' as part of the error message. Being able to read the 'stack trace' can help us follow the executing code, and that can lead us to our piece of code that is causing the error.

Try running the code below in your browser.
```javascript
function multiply(a, b) {
    throw new Error(`can't multiply ${a} and ${b}`)
}
function square(n) {
    return multiply(n, n)
}
function printSquare(n) {
    const result = square(n)
    console.log(result)
}

printSquare(4)
```
This is the error. Read the stack trace from the bottom up.
![stack trace](https://user-images.githubusercontent.com/4499581/93219628-78e02580-f763-11ea-9948-81d558dbf65d.png)
What do you think the numbers like (<anonymous:5:12>) refer to?

## Stack overflow

```javascript
function hello() {
    hello()
}
hello()
```
This will break.
![stack overflow error message](https://user-images.githubusercontent.com/4499581/93220411-65818a00-f764-11ea-9a64-b5a92881ecaa.png)
Can you explain what is going on here? What other code might cause a max call stack size exceeded (stack overflow)?

### Providing asynchronous behaviour
Now you are familiar with the Call Stack, imagine what the impact will be if a function takes a long time to execute or has to wait on something, this function will stop all the other code executing. So how can we avoid this?

In the Browser (for front-end JavaScript) and Node (for back-end JavaScript), JavaScript run inside a runtime 'container'. The runtime includes additional components which are not part of JavaScript. These include:
  * the `Web APIs` (e.g. the DOM, Timers, Fetch API)
  * the `Callback Queue` - which holds callback functions from events which have just completed
  * the `Event Loop` - which monitors the Callback Queue and the Call Stack and places callbacks from the Callback Queue onto the Call Stack when it is empty. There is an event loop for every browser tab.

The `Event Loop` is what allows asynchronous (non-blocking) operations to occur — despite the fact that JavaScript is single-threaded.

Asynchronous (async) functions such as setting times, reading files etc. are recognised by Node.js and are executed in a separate area from the Call Stack. Node polls (regularly checks) the computer for the completion of the async operation and, once the operation is complete, the callback is placed into the `Callback Queue`. The `Event Loop` waits for the Call Stack to be empty and then moves the pending callback onto the Call Stack. It wait as otherwise it would randomly interrupt the execution of whatever sequence of function calls were queued up on the stack.

Below is an example.

![async call stack](https://user-images.githubusercontent.com/4499581/93320644-3a04ab00-f809-11ea-9ab9-4770ec86b177.gif)

This [reference video](https://youtu.be/8aGhZQkoFbQ) provides an excellent explanation of the interactions between the Call Stack, Event Loop and Callback Queue.

TODO - add full picture.

## Timers
JavaScript does not have a built in timer feature. It uses the Timer API provided by the Node.js runtime to perform time-related operations. For this reason, timer operations are asynchronous.

`setTimeout(callback, millis)` can be used to schedule code execution after a designated amount of milliseconds. It accepts a callback function as its first argument and the millisecond delay as the second argument.

When `setTimeout` is called, the timer is started in `Web APIs` part of the Node/Browser runtime. This frees the Call Stack up to continue executing code and only when the timer is complete and the Call Stack empty, does the callback get pushed to the Call Stack for execution.

## Assignment
Click on [this link which uses Loupe to illustrates async timers](http://latentflip.com/loupe/?code=Ci8vIHRoaXMgaWxsdXN0cmF0ZXMgSmF2YVNjcmlwdCBjb2RlIGV4ZWN1dGluZwovLyBhIHRpbWVyIGFzeW5jaHJvbm91c2x5Cgpjb25zb2xlLmxvZygiVGhpcyBpcyB0aGUgZmlyc3QgbGluZSBvZiBjb2RlISIpOwpjb25zb2xlLmxvZygiVGhpcyBpcyB0aGUgc2Vjb25kIGxpbmUgb2YgY29kZSEiKTsKCnNldFRpbWVvdXQoZnVuY3Rpb24gdGltZW91dCgpIHsKICAgIGNvbnNvbGUubG9nKCJUaW1lciB3YXMgY2FsbGVkISIpOwp9LCA1MDAwKTsKCmNvbnNvbGUubG9nKCJUaGlzIGlzIHRoZSB0aGlyZCBsaW5lIG9mIGNvZGUhIik7CmNvbnNvbGUubG9nKCJUaGlzIGlzIHRoZSBmb3J0aCBsaW5lIG9mIGNvZGUhIik7CmNvbnNvbGUubG9nKCJUaGlzIGlzIHRoZSBmaWZ0aCBsaW5lIG9mIGNvZGUhIik7CmNvbnNvbGUubG9nKCJUaGlzIGlzIHRoZSBzaXh0aCBsaW5lIG9mIGNvZGUhIik7CmNvbnNvbGUubG9nKCJUaGlzIGlzIHRoZSBzZXZlbnRoIGxpbmUgb2YgY29kZSEiKTsKY29uc29sZS5sb2coIlRoaXMgaXMgdGhlIGVpZ2h0IGxpbmUgb2YgY29kZSEiKTsKY29uc29sZS5sb2coIlRoaXMgaXMgdGhlIG5pbnRoIGxpbmUgb2YgY29kZSEiKTsKY29uc29sZS5sb2coIlRoaXMgaXMgdGhlIHRlbnRoIGxpbmUgb2YgY29kZSEiKTsKCmNvbnNvbGUubG9nKCJXZWxjb21lIHRvIGxvdXBlLiIpOw%3D%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D).

Does the timer callback get executed at exactly 5 second after the timer is started? If not, why not?

Make an animation or slide show that illustrates the event loop for the following piece of code. `app.post` is a route handler from an 'express' server it takes a string that is a path, and a route handler function. The route handler function is called when the server receives a POST request to the `/users` route. Start your stack with a call to the `createUser` function.

The route handlers in express are all on a timer, so if you don't call `response.render` or `response.send` within a time limit express will return a timeout error. Don't worry about this for now. Note that functions without a name are referred to as 'anonymous' functions. 

Be ready to present your slides or animation back to the group.

```javascript
app.post('/users', function createUser(request, response) {
    User.findOrCreate({ where: request.body })
        .then(function (user) {
            user.getContacts()
                .then(contacts => {
                    request.session.userId = user.id
                    response.render('profile', {user, contacts})
                })
        })
    logging(`/users route called with ${request.body}`)
})
```

## Lesson 2 - Airports Async

## Learning Objectives

* Create async functions to read airport data from a file
* Demonstrate the methods to test async code in Jest

## Before we start

* You need to have an Airport class
* You should be familiar with Object.keys as a way to access the keys of an object
* You should have iterated over an object in javascript before
* You should recognise deconstructing assignment

## Materials needed

* You need [this file](https://raw.githubusercontent.com/MultiverseLearningProducts/airports/master/airportsData.json) saved in your airports project folder


## Lesson 2
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
* Use the three different ways of forming async functions to read file content in your Airport class
* Write async tests for each of the three async functions using Jest


[attendance log](https://platform.multiverse.io/apprentice/attendance-log/156)

[main](/swe)|[prev](/swe/bootcamp/wk1/day3.html)|[next](/swe/bootcamp/wk1/day5.html)

    