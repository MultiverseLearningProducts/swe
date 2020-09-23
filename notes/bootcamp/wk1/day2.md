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

## Assignment

They can practice the family tree again.

## Additional Reading

* [Jest expect API](https://jestjs.io/docs/en/expect)
* [7 errors in Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

<hr/>

# Session 2 - Airports

## Learning Objectives

* Create an object using the `new` keyword
* Explain what the `new` keyword does when you use it to create an object 

## Pre-work or Assumed knowledge

* using objects in javascript accessing properties

## Materials

* [Airport Ambience Sounds](https://youtu.be/zQG5OdBnYfA)

## Notes

Let the cohort name objects in an airport, we are going to pick just 4 Bags, People, Planes and the Airport itself. The analogy of a rubber stamp is some what simplified. What is interesting to underscore is the class definition is not really used in the programmes we write, they serve as the source of objects that actually play a part in a programme.

Get them creating bags and testing the properties. This should be a code along session. With bags you can introduce Passengers, later we will talk about inheritance and use a Person base class then extend it to be a Passenger. Make sure everyone has a test that traverses the person and checks they have a bag or bags within them, and that they can read the weight.

This idea of creating structures in code is important. 

## Assignment

You showed them Bag and Passenger classes, now get them to make the Plane and Airport classes. Similar pattern.

## Additional Reading