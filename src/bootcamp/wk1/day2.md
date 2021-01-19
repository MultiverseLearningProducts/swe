# Bootcamp > Week 1 > Day 2

## Overview of the day

Today we are doing to learn about test driven development. We are going to use this philosophy of test driven development (TDD) to begin creating JavaScript objects and use them to program in an object orientated style. 

## Additional resources
If you are struggling with any of the concepts from today, the following videos will help:
[Using Visual Studio Code, npm and Jest](https://www.youtube.com/watch?v=EIQgVdoYb0M) (from minute 5:30 onwards). 

# Lesson 1 - Your first failing test

## Learning Objectives

* Write a unit test
* Describe the purpose of a unit test
* Implement the TDD cycle of red, green, refactor

## Before we start

* create a new project folder and run `npm init`. This runs the Node Package Manager (NPM) which will generate manifest files (`package.json` & `package-lock.json`) which contain information about your project and which libaries (packages) your application needs to run.
* install jest `npm install jest`. Your `package.json` will be updated to specify that your application requires jest.
* create two files `person.js` and `person.test.js`

## Materials needed

* code editor

## Lesson

What are tests? Code does things on computers for us. How do we know that our code is working the way we think it is? Usually we would run the code and see if it is working. Are we not just testing the code?

As the programmes we write get larger and more complex, it is not always possible to test our code by just running it. For example we may be unable to force a particular kind of error that we want to make sure we are handling correctly.

This is why we write tests. They ensure that our software is working as we have designed. We are trying to prevent 3 things with our tests:

* Errors
* Defects (bugs)
* Failures

Errors can be further divided into 7 types:

* EvalError
* InternalError
* RangeError
* ReferenceError
* SyntaxError
* TypeError
* URIError

Some of these errors can be caught and handled safely in our programme. You are likely as beginners to experience may SyntaxErrors. SyntaxErrors will cause your programme to fail.

You can read more about these in the [mozilla documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error).

With defects our code works, but not as we intended. These are often called "bugs". They are called bugs because when computers originally where more analogy with valves instead of Electronic circuits, sometimes programs would malfunction because actual insects would get into the physical valves of the computer and prevent the programme from running correctly.

Failures are when our programme "crashes" it stops running and errors in a way that cannot be recovered from.

Write tests to prevent these 3 things.

### Jest

Jest is a testing framework developed at Facebook. TDD starts with a failing test. So we write a test that we know will fail. To run all your tests use `npm run test` or use `npm run test -t` to run a single test.

```javascript
describe('person objects', () => {
    test('have a name', () => {
        expect(person.name).toEqual("test person")
    })
})
```
`person` is not defined. Lets create a person in our `person.js` file and export it, then import them into our test file.
```javascript
const person = {
    name: "test person"
}
module.exports = person
```
then import it into the test file by adding this line to the top of the file.
```javascript
const person = require('./person')
```
Now our tests pass!

This process has us write the test first. It should fail. Then we write the code that makes the test pass. Then go back and write the next test etc.

## Assignment

Can you use TDD to recreate the family tree that you previously constructed? Only now there should be a set of tests that you can run to prove your family tree is constructed correctly.

----

# Lesson 2 - Airports

## Learning Objectives

* Create an object using the `new` keyword
* Explain what the `new` keyword does when you use it to create an object 

## Before we start

* You should be able to scaffold a project using the Jest testing framework
* You should be able to export and import code from one file to another

## Materials needed

* Jest testing framework

## Lesson

We are going to create an Airports system. This exercise is designed to introduce you to the idea of Object Orientated Programming (OOP). In OOP we construct our programmes using objects. These objects are often abstractions of real life objects. For example it is common for a person who uses a programme to be represented in the programme with a User object.

### 👩🏾‍💻👨🏻‍💻 In pairs

What are some of the objects that you might expect to find in an airport?

### Objects and Classes

Our airport system is going to have the following objects in it:

1. Bag
2. Person
3. Plane
4. Airport

![airportsBasic](https://user-images.githubusercontent.com/1316724/104850737-c5da3100-58e8-11eb-9248-a41550978a76.png)

What does a bag have? A weight. It also has a relationship to a person a person has a bag. One of the important things to think about in OOP is which object is responsible for what properties or behaviors. Our bag should have a weight. Now in our airport system there are going to be lots and lots of bags. We can make a bag each time in our code like this:

```javascript
const bag = {weight: 16}
```

That is fine for a simple object, but someone might come along and make a bag like this:

```javascript
const bag = {kg: 16}
```

We actually want to standardise our bags. Why do you think we might want to do that? What we want is a way to create bags, that all follow the same format. Like a rubber stamp, stamping out the same graphic each time.

![stamp](https://media.giphy.com/media/LpGDCmF87M24T6Sn6p/giphy.gif)

The way to make yourself a "rubber object stamper" is to create a class and use the `new` keyword to instantiate instances of your class. In other words you use the `Bag` class to make bag objects in your programme.

```javascript
class Bag {
    constructor(weight) {
        this.weight = weight
    }
}

const bag = new Bag(16)
console.log(bag.weight) // 16
```
In the code example above we declare a class using the `class` keyword. The name of the class should be capitalised and singular. After the class name comes the block that contains the class definition. Seeing as when we create a new bag we want it to have a weight, we have declared a "constructor" function. This is called when we use the `new` keyword, and any arguments are passed into this function. Can you see how we add a property `weight` to the `this` object? `this` refers to the instance of the class that we just created.

### TDD for bags

* Can you create a unit test for this Bag class?

If you try to create a bag without a weight - the constructor should throw an Error. This protects our programme from trying to do calculations on bag.weight and reading `undefined` as the value for weight. Why would the weight be undefined?

* Write a failing test first<br/><small>_HINT: `expect(() => new Bag()).toThrowError('bag must have a weight')`_</small>

Notice how we have to run a function inside `expect` to trigger the error and catch it. If we just wrote the following:

`expect(new Bag()).toThrowError('bag must have a weight')`

It would be like calling expect with `Error` and then expecting the Error to throw (which it wont, it's too late the trap has been sprung). You'll need to update your Bag class to throw an error if no weight is passed into your constructor. Below is the syntax to throw an error.

`throw new Error('some error message in here')`

Can you spot the `new` keyword above? What do you think that is doing in the Error class definition?

### Bags belong to a Passenger

Our airport system has bags. We also need passengers. Let's make a Passenger class. Passengers should have:

1. A name
2. Bags

People often fly with a few bags. Our passengers should be able to carry a few bags. Which data structure would work well here?

Create new files for your Passenger tests and Passenger class. Write the tests as you go. To add a bag to a passenger I should be able to call a function on the instance of a passenger. Read the code below:

```javascript
const bob = new Passenger('Bob the Builder')
const bobsCabinBag = new Bag(9)
const bobsHullBag = new Bag(23)
bob.addBag(bobsCabinBag)
bob.addBag(bobsHullBag)
console.log(bob.bags) // [ Bag { weight: 9 }, Bag { weight: 23 } ]
```
The way to define a function on a class is like this:
```javascript
class Passenger {
    constructor(name) {
        this.name = name
        this.bags = []
    }

    addBag(bag) {
        this.bags.push(bag)
    }
}

module.exports = Passenger
```

## Assignment

Now we have passengers with bags, they are ready to board their flight! Can you:

1. Create a Plane class
1. Instances of a Plane should have a function to `board` passengers
1. A Plane should also have a destination that is an Airport name
1. Create an Airport class
1. Airports should have a name
1. One test should assert you have an airport, with a plane, on the plane are passengers & you can read the weight of one of the bags of a passenger

Write tests as you go in the test driven development style. You should be able to create any number of airports, create planes, land planes at airports, create passengers with bags, have the passengers board a plane. 

----

# Lesson 3 - JSDoc
Documenting code is really important, it helps others understand the purpose of class and its associated methods. In JavaScript, the standard is to use [JSDoc](https://jsdoc.app/). This tool defines specific comment/tags for documenting code and also provides a command line tool for generating HTML documentation. 

To run JSdoc on all your classes in the current directory, run `jsdoc .`

## Assignment
Document your classes using the JSDoc comment structure and generate the HTML documentation. Commit this to your Git reposititory.

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/154)

[main](/swe)|[prev](/swe/bootcamp/wk1/day1.html)|[next](/swe/bootcamp/wk1/day3.html)

