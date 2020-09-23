# Bootcamp > Week 1 > Day 4

## Overview of the day

<hr/>

## Lesson 1 - The Event Loop

## Learning Objectives

* Demonstrate a deeper understanding of async code in javascript by naming key parts of the event loop 
* Recall the meaning of 'stack overflow'

## Before we start

* You should have written an async function in the 3 different styles: callbacks, promises and async await

## Materials needed

* [reference video](https://youtu.be/8aGhZQkoFbQ)

## Lesson

Javascript is a single threaded runtime. Single threaded means one thing at a time. In reality that means one stack.

### What is the stack?

The stack is a data structure in the runtime that functions to organise the running or 'execution' of your code.

![an animation of a stack](https://miro.medium.com/max/1280/0*SESFJYWU5a-3XM9m.gif)

Last on first off. Imagine a stick over which you can place hoops. To get to the bottom hoop, all the other hoops above it have to come off first.

![stack of hoops](https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B000U02LXY&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=toy-ideas-20&language=en_US).

When your code is executed, javascript will run it in 2 passes. The first pass optimises your code for execution. The second pass actually runs your code, and it is in this second pass that javascript uses the stack.

### How does javascript use the stack?

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

### What is a stack trace?

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

### Stack overflow

```javascript
function hello() {
    hello()
}
hello()
```
This will break.
![stack overflow error message](https://user-images.githubusercontent.com/4499581/93220411-65818a00-f764-11ea-9a64-b5a92881ecaa.png)
Can you explain what is going on here? What other code might cause a max call stack size exceeded (stack overflow)?

### Async and the task que

In addition to the stack lets imagine another data structure a 'pending callback' que. We have seen that async functions get called, but don't return their values straight away. So you can imagine those async functions on the stack get put on, then popped off. We saw this in the example of the async Jest test before we used the `done` callback. However these async functions are recognised by Node.js so it places the callback function into another stack structure called the 'pending callback phase' and then polls (regularly checks) the computer for the completion of the reading from disc operation.

When the 'poll phase' receives an event indicating that the content of the file has been read into memory, it moves the pending callback back onto the stack the next time that the stack is emptied. It waits for the stack to be empty, because otherwise it would randomly interrupt the execution of whatever sequence of function calls were queued up on the stack.

Below is an example.

![async call stack](https://user-images.githubusercontent.com/4499581/93320644-3a04ab00-f809-11ea-9ab9-4770ec86b177.gif)

## Assignment

Make an animation or slide show that illustrates the event loop for the following piece of code. `app.post` is a route handler from an 'express' server it takes a string that is a path, and a route handler function. The route handler function is called when the server receives a POST request to the `/users` route. Start your stack with a call to the `createUser` function.

The route handlers in express are all on a timer, so if you don't call `response.render` or `response.send` within a time limit express will return a timeout error. Don't worry about this for now.

Your assignment code example uses promises, the behavior of the 'stack' and the 'pending callbacks' works the same way as the example above. Functions without a name are referred to as 'anonymous' functions. Be ready to present your slides or animation back to the group.

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

<hr/>

## Lesson 2 - Inheritance

## Learning Objectives

* Demonstrate sharing functionality through inheritance

## Before we start

* You should have created a Passenger class in your airports exercise

## Materials needed

## Lesson

The final object orientated pattern we are going to look at is inheritance. This is a way to share functionality in an object orientated paradigm. The idea is very simple. You extend base classes that already exist with additional functionality. If we look at our airports system we have 2 kinds of travellers.

|Passengers|Crew|
|-----|-----|
|![passengers](https://user-images.githubusercontent.com/4499581/93331580-6b38a780-f818-11ea-835c-1c579dfe481d.jpg)|![crew](https://user-images.githubusercontent.com/4499581/93331575-67a52080-f818-11ea-8308-af97a9a6d6cc.jpg)|

Both are people, both have a name and bags when they travel.

### Base class `Person`

A base class is the base from which you might create other types of classes. Lets refactor our code to use a base class `Person`. A person will have a name and bags - basically the current Passenger class definition we have now needs to be renames to be `Person`. Now to restore our `Passenger` class we should import the base class into our `Passenger` definition and extend it like this.

```javascript
const Person = require('./Person')

class Passenger extends Person {}
```
That is enough to fix all our current tests. Everything should work as it was. When we create a `new Passenger('bob')` we will be able to call `addBag` as this functionality has been inherited from the `Person` class. Our passengers might want particular functionality like `callAttendant`.

```javascript
const Person = require('./Person')

class Passenger extends Person {
    callAttendant() {
        console.log('Excuses me, Hay there!')
    }
}
```

### instanceof

Can you see where this is going? One useful operator I want to introduce at this point is `instanceof`. Now you can make classes, in your code some times you'll want to know what an object is. For example, you might want to know is this person a `Passenger` or a `Crew` member? You can use `instanceof` to help you work that out.

```javascript
test('is an instance of a Passenger', () => {
    const betty = new Passenger('Betty')
    expect(betty instanceof Passenger).toBeTruthy()
})
```

## Assignment

* Can you create the `Crew` class by extending the `Person` class?
* Refactor the `Plane` class to have a `crew` property
* When `board` is called on an instance of a plane, you should iterate over the array and put crew and passengers in the correct property in the plane instance.
* `Crew` members should be able to `crossCheck` make sure you can call `crossCheck` on a crew member, it should return a boolean. If all the crew on the plane are instances of the `Crew` class `crossCheck` should return true, otherwise it should return false.
* All your refactoring should have tests that cover it

When you have completed these tasks can you create a coverage report using Jest. Add the following line to your package.json

```json
{
  "scripts": {
    "test": "jest --watchAll",
    "test:report": "jest --coverage=true"
  },
  "dependencies": {
    "jest": "^26.4.2"
  }
}
```
Then run `npm run test:report` you are aiming for 100% test coverage. When you run this you should see that Jest generated a 'coverage' report in your project folder. If you navigate to `/coverage/Icov-report/index.html` and open it in your browser you'll see a helpful report of your test coverage.

![test coverage report](https://user-images.githubusercontent.com/4499581/93334401-cc627a00-f81c-11ea-9c98-4825235c06a4.png)

This is interactive try clicking on one of the class definitions.

[attendance log](https://applied.whitehat.org.uk/mod/questionnaire/complete.php?id=6702)

[prev](/swe/bootcamp/wk1/day3.html)|[next](/swe/bootcamp/wk1/day5.html)
[main](/swe)
