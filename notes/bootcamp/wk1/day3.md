# Bootcamp > Week 1 > Day 3

## Overview of the day

Today we take flight! The first session introduces static class functions. These will help us add a new layer of interactivity to our airports exercise. During the second session we start to look at async functions, and how to test code that work asynchronously.

# Session 1 - Take off and landing

## Learning Objectives

* Define static class functions and properties
* Access static class functions and properties

## Pre-work or Assumed knowledge

* Apprentices should have defined 4 classes Bag, Passenger, Plane and Airport
* Array methods: splice, find, indexOf

## Materials

* Jest

## Notes

This session just introduces the concept of static classes. You can mention global scope here if you think that will help. Having all the instances of airports available on the Airport class as a static property is a pattern well established by ActiveRecord in the Ruby on Rails framework. You'll have to point out the different syntax to access a static property using `this.constructor`.

## Assignment

> Can you write the `takeOff` function on an instance of an airport that should take a plane as an argument, find that plane in the airport's planes array and remove it, then push it into the inbound airport's array of planes. This will effectively move the plane object from one airport to another.

> Remember to write tests that prove all the functionality that we have talked about.

The idea here is to figure out some array manipulation. Going over splice, find and indexOf might also help some. To write this function will also require accessing the static `Airport.airports` property.

## Additional Reading

<hr/>

# Session 2 - Airports Async

## Learning Objectives

* Explain the differences between the way synchronous and asynchronous functions work.
* Demonstrate the methods to test async code in Jest

## Pre-work or Assumed knowledge

* Should be familiar with Object.keys as a way to access the keys of an object
* Should have iterated over an object in javascript before
* Should recognise deconstructing assignment

## Materials

* You need [this file](https://github.com/mwgg/Airports/blob/master/airports.json) saved in your airports project folder

## Notes

This session is all about writing the 3 kinds of async functions in javascript. This often throws beginners and learning to manage async code can take some time. This is a code along session so have your project set up ready to create the `getInfo` async function. Some handy airport codes:

|Code|Airport|
|:---|:------|
LAX|Los Angeles International Airport
LHR|London Heathrow Airport
CDG|Charles de Gaulle International Airport
SKL|Skye Bridge Ashaig Airport

## Assignment

* run some breakout rooms for some chat
* they can complete the code as a solo exercise

## Additional Reading