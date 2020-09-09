# Bootcamp > Week 1 > Day 2

## Overview of the day

Today we are doing to learn about test driven development. We are going to use this philosophy of test driven development (TDD) to begin creating JavaScript objects and use them to program in an object orientated style. 

# Lesson 1 - Your first failing test

## Learning Objectives

* Write a unit test
* Describe the purpose of a unit test
* Implement the TDD cycle of red, green, refactor

## Before we start

* create a new project folder and run `npm init`
* install jest `npm install jest`
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

Jest is a testing framework developed at Facebook. TDD starts with a failing test. So we write a test that we know will fail.

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

Can you use TDD to recreate the family tree that you previously constructed?
