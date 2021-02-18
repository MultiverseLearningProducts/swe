# Bootcamp > Week 1 > Day 4

## Overview of the day
*Note that if you feel your apprentice group is not ready to delve into the complexity of asynchronous functions, you can choose to deliver this lesson in the following week or, just teach lesson 1 and deliver lesson 2 next week as timers are the only async concept required for Day 5 assignments*

Today we are going to look at creating asynchronous functions in JavaScript.

# Lesson 1 - Synchronous versus asynchronous code

## Learning Objectives
* Understand the JavaScript call stack & event loop
* Understand stack traces
* Understand how timers work

## Assignment 1
This assignment does not have a solution, it is more for the apprentices to use a visualisation tool to understand the call stack. 

|**Lower ability**|**Higher ability**|
|-----------------|------------------|
|Suggest the student does not watch the video but just executes Loupe as described. You may want to buddy up apprentices in breakout rooms and get them to explain the call stack to each other|Challenge the student to add in extra function calls of their own and to watch the Loupe video|

## Assignment 2
This assignment is a little more complex. 

|**Lower ability**|**Higher ability**|
|-----------------|------------------|
|Suggest the student does not watch the video but just executes Loupe as described. You may want to buddy up apprentices in breakout rooms and get them to explain timers to each other|Challenge the student to complete the full assignment by making a slide show|

Leave some time for yourself to go through each apprentices slideshow/animation. You'll be able to tell from this if they have got the right idea or not. Give feedback when the apprentice has made a mistake.

# Lesson 2 - Airports Async

## Learning Objectives
* Create async functions to read airport data from a file

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
Some handy airport codes:

|Code|Airport|
|:---|:------|
LAX|Los Angeles International Airport
LHR|London Heathrow Airport
CDG|Charles de Gaulle International Airport
SKL|Skye Bridge Ashaig Airport

## Materials
* [Loupe reference video](https://youtu.be/8aGhZQkoFbQ)

## Assignment
Sample solution - https://github.com/MultiverseLearningProducts/swe-solutions/tree/main/bootcamp/wk1/day4

|**Lower ability**|**Higher ability**|
|-----------------|------------------|
|This is a tough assignment! If necessary drop this assignment and ask the student to focus solely on timers|Challenge the student to look at how to mock timers in Jest and test async code|