# Bootcamp > Week 1 > Day 4

## Overview of the day

# Session 1 - Async Airports

## Learning Objectives

* Explain the differences between the way synchronous and asynchronous functions work.
* Demonstrate the methods to test async code in Jest

## Pre-work or Assumed knowledge

* need to have an Airport class
* should be familiar with Object.keys as a way to access the keys of an object
* should have iterated over an object in javascript before
* should recognise deconstructing assignment

## Materials needed

* You need [this file](https://raw.githubusercontent.com/WhiteHatLearningProducts/airports/master/airportsData.json) saved in your airports project folder

## Notes

Async is a fundamental part of the javascript language. Managing async code is a foundation upon which confidence in the language can be built. In this session progressively demonstrate the 3 types of syntax. Callbacks, promises, and async await are all built on top of each other. You can use the Airport class and load some information from disc using `fs.readFile` which gives you your async function call.

Walk though the code with your cohort and then get them to do it themselves. As an extra aside there is a promise bases `readFile` function. You need node 11+ and you can access it as follows:

```javascript
const { readFile } = require('fs/promises')
```

## Assignment

* In pairs can you explain to each other the differences between synchronous and asynchronous functions, and how you can tell the difference in your code.
* Use the three different ways of forming async functions in the Airport class
* write async tests for each version in Jest

## Additional Reading

<hr/>

# Session 2 - The Event Loop

## Learning Objectives

* Correctly represent the behaviour of a stack data structure
* Correctly identify the order of execution in a piece of async code

## Pre-work or Assumed knowledge

* You should have written an async function in the 3 different styles: callbacks, promises and async await

## Materials

* [reference video](https://youtu.be/8aGhZQkoFbQ)

## Notes

This session is in 2 parts. The first is to communicate the behavior of a stack data structure. The second is to demonstrate the way 2 stack structures handle async code by working together. 

## Assignment

Leave some time for yourself to go through each apprentices slideshow/animation. You'll be able to tell from this if they have got the right idea or not. Give feedback when the apprentice has made a mistake.

## Additional Reading