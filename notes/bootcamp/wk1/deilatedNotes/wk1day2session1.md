# Bootcamp > Week 1 > Day 2

[Bootcamp > Week 1 > Day 2](https://whitehatlearningproducts.github.io/swe/bootcamp/wk1/day2.html)

## Overview of the day

Today we are doing to learn about test driven development. We are going to use this philosophy of test driven development (TDD) to begin creating JavaScript objects and use them to program in an object orientated style. 

# Lesson 1 - Your first failing test

## Learning Objectives

* Write a unit test
* Describe the purpose of a unit test
* Implement the TDD cycle of red, green, refactor

## Pre-work or Assumed knowledge

* family tree assignment

## Materials

* code editor

## Notes

This introduces TDD. Use this session to support apprentices in getting Jest set up and running. Apprentices will be organising their code using `module.exports` and `require`. In our next session they can practice setting this up again themselves. You might want to expand on more of the [Jest expect](https://jestjs.io/docs/en/expect) API. Those who need stretch objectives should try to use a few different expects i.e. objectContaining, not.objectContaining, toHaveProperty

## Assessment Criterua 

They can practice the family tree again if they finish this early

## Additional Reading

* [Jest expect API](https://jestjs.io/docs/en/expect)
* [7 errors in Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)


## Overview 
| Overview | Timing    |
| ------ | --------- |
| [Welcome](#Welcome) | 10 mins   |
| [Tests](#Tests) | 20 mins   |
| [TDD Cycle](#TDD-Cycle) | 15 mins   |
| [Jest](#Jest) | 10 mins   |
| [Assignment](#Assignment) | 5 min overview |
| **Overall** | **1 hr 5 mins** |

## Detailed Notes: Lesson 1 - Your first failing test

### Welcome 
[back](#Overview)

#### 10 minutes 

Welcome apprentices to their next day of bootcamp and do a quick wellness check. It is important at the start of each session to assess how apprentices are feeling and ask if they have questions to create an open environment. 

Before moving on to the session, go over yesterday’s final assignment. Provide any comments you may have after reviewing their GitHub code the night before. 

Things you should always do/ask: 
* In summary, what did we talk about yesterday
* How did you feel about the last assignment
* Do you have any questions or did you get stuck and need clarity

To facilitate these questions you can have apprentices openly talk to the whole group or break out in pairs/breakout rooms to discuss themselves and share their code/give feedback on their code, then come back adn share

### Tests 
[back](#Overview)

#### 20 minutes 

What are tests? Code does things on computers for us. How do we know that our code is working the way we think it is? Usually we would run the code and see if it is working. Are we not just testing the code?

As the programmes we write code that gets larger and more complex, and it is not always possible to test our code by just running it. For example we may be unable to force a particular kind of error that we want to make sure we are handling correctly.
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

Some of these errors can be caught and handled safely in our programme. You are likely as beginners to experience many SyntaxErrors. SyntaxErrors will cause your programme to fail.

You can read more about these in the [mozilla documentation.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

With defects our code works, but not as we intended. These are often called "bugs". They are called bugs because when computers originally were more analogy with valves instead of Electronic circuits, sometimes programs would malfunction because actual insects would get into the physical valves of the computer and prevent the programme from running correctly. Hence bugs! 

Failures are when our programme "crashes" it stops running and errors in a way that cannot be recovered from.

#### Ask the apprentice
What are some SyntaxErrors you’ve had in the past? What about bugs? How long did it take you to solve the problem? How did you solve it? 

Place apprentices in breakout rooms to share their experiences with SyntaxErrors and bugs. As they talk about how they solved problems, ask them to share with the coach the list of resources they used to solve SyntaxErrors. The coach at the end of the day will share the list with the whote cohort to use as a reference.

### TDD Cycle  
[back](#Overview)
#### 15 minutes 
So tests are a great thing to help us make sure our code works , but as said earlier we don’t want to run a huge chunk of code and get a crazy amount of errors. Instead, we want to have smaller and more frequent tests on our code. 

This process is known as “Test-driven development” (TDD) and refers to a style of programming in which three activities are tightly interwoven: coding, testing (in the form of writing unit tests) and design (in the form of refactoring). 

![TDD Cycle](https://miro.medium.com/max/700/1*pP8Ks6tlt718jJg3fqrtvw.jpeg)

There are 3 cycles behind Test Driven Development: Red, Green and Refactor just like there are 3 lights for traffic control. These cycles mean:  

* Red: write a test and it fail
* Green: write a test for a functionality and make sure it pass the test
* Refactor: Optimizing the previous passed test and make sure all test cases pass.

Let's try it out! 


### Jest  
[back](#Overview)
#### 15 minutes 

For testing we will use Jest, a testing framework developed at Facebook. You should have installed Jest before this session. If you haven’t, do that now. 



#### _Coach Note_

_Give time for apprentices to install Jest. You may need to go over Jest a little more in depth to show some of the functions if they have never used it before. Take the time to do this and then move on to the activity. TDD starts with a failing test. So we write a test that we know will fail._

`describe('person objects', () => {  `
`test('have a name', () => {    `
`expect(person.name).toEqual("test person")  `
`})`
`})`


`person` is not defined. Lets create a person in our `person.js` file and export it, then import them into our test file.

`const person = {  `
`name: "test person"`
`}module.exports = person`


then import it into the test file by adding this line to the top of the file.

`const person = require('./person')`

Now our tests pass!This TDD process has us write the test first. It should fail. Then we write the code that makes the test pass. To pass the test (move from red to green) we only need to write the minimal amount of code to pass. You don’t need to be fancy! Then go back and write the next test etc.

This may not be how we usually think of testing things. Sometimes we build something and test at the end to make sure it works. Using TDD we know something will fail because we write the test to show it will, and as we code, we create the environment for passing. 



### Assignment 
[back](#Overview)

Can you use TDD to recreate the family tree that you previously constructed? Only now there should be a set of tests that you can run to prove your family tree is constructed correctly.

When you are done, share your code via GitHub with your coach.  

<hr/>
