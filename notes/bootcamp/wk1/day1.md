# Bootcamp > Week 1 > Day 1 (Coach Notes)

[Bootcamp > Week 1 > Day 1](https://multiverselearningproducts.github.io/swe/bootcamp/wk1/day1.html)

## Overview of the day

Day one enables the cohort to get their computer set up so that they can write JavaScript using Node.js. We introduce the concepts of Arrays, Objects and functions in Javascript.

__Invite the line managers and CSMs to the end of Bootcamp preentation (3-5pm on the last Friday) if you have not done so already!__

<hr/>

## Pre-work or Assumed knowledge

Installation of the tools specified in 'Setup' section of the course notes will mean the day will run much more smoothly and that Session 1 can be omitted.

<hr/>

# Session 1 - Setup
## Learning Objectives
* Install the software required for the apprenticeship 

## Notes
If the apprentices have not yet setup the tools described in the 'Setup' section of the course notes then set aside 1.5hrs for this to be completed.

|**Lower ability**|**Higher ability**|
|-----------------|------------------|
|If a TA is available, take the student(s) into a breakout room to support|Ask the student to pair with someone who is struggling and help them, remind them that coaching / pair programming is a key skill of a software engineer!|


# Session 2 - Objects and functions

## Learning Objectives

* Demonstrate creating objects in Javascript
* Demonstrate creating functions with the function keyword in Javascript
* Use arrays to organise objects into groups
* Create references to objects inside other objects

## Pre-work or Assumed knowledge

* Working with arrays, how to create them, put items inside them and use indexes to reference items in an array
* using JSON.stringify to console.log a nested object in their shell

## Materials
* [assignment code example](https://gist.github.com/bmordan/72cc6820141fa976a7b8e443df65a206)

## Notes

Walk them through creation of objects in 3 ways. The third way is more advanced. Basically if you create an object like this `Object.create(null)` it does not inherit any thing from the prototypal chain, but if you give it another object it will. We visit this again in Mod 2 when talking about prototypal inheritance. Plant the seed now, then move on.

One really important thing to start doing is introducing the terminology of an object, for example a property, what a key is, what a value is. How to access properties, how to call functions on an object and how you can create structures using objects and arrays.

Talk about `this` when you create the `childOf` function. It's the `this` of the object to which it belongs.


## Assignment

Be conscious that not all students have a stable family environment hence we suggest they model the Royal Family. Start with the current generation, group the generation together in an array. Have them assign that grouping to a variable.

Then do the same with the next generation but write the definition above the `firstGen` variable (because you will not be able to reference some thing that has not been defined yet), and the third generation above the second.

Then you can start to relate them together. Use a `parents` property on the person object and in an array make references to the parents in the correct generation array.

Finally add a `childOf` function that uses this to reference the parents array of itself. You can also return a cheeky default using the `||` or operator.

Check out a finished [example](https://gist.github.com/bmordan/72cc6820141fa976a7b8e443df65a206)

|**Lower ability**|**Higher ability**|
|-----------------|------------------|
|Allow them to look at the finished example and create their own version of this|Challenge the student to enhance the solution to return a JSON object containing the family tree|
