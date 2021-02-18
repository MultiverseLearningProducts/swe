# Bootcamp > Week 1 > Day 3

## Overview of the day

Today we take flight! The first session introduces static class functions. These will help us add a new layer of interactivity to our airports exercise. We then look at inheritance, a core concept of object oriented programming (OOP).

# Lesson 1 - Take off and landing

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

Sample solution - https://github.com/MultiverseLearningProducts/swe-solutions/tree/main/bootcamp/wk1/day3

|**Lower ability**|**Higher ability**|
|-----------------|------------------|
|Refer the student to the additional resources section. If necessary, allow them to look at the sample solution and create their own version of this|Challenge the student to enhance the solution to include exception handling e.g. max number of takeoffs reached |


<hr/>

# Lesson 2 - Inheritance

## Learning Objectives
Demonstrate sharing functionality through inheritance

## Notes
Explain that inheritance is a core OO concept. We often say it is a 'type of' relationship. Give them a real-life example, e.g. an electric car is a type of car. Ask them to tell you what kind of features the electric car might inherit. Explain that in languages like Java you can only inherit from a single class so inheritance is not always the best option. Use UML to illustrate an inheritance relationship.

## Assignment
Sample solution - https://github.com/MultiverseLearningProducts/swe-solutions/tree/main/bootcamp/wk1/day3

|**Lower ability**|**Higher ability**|
|-----------------|------------------|
|Refer the student to the additional resources section. If necessary, allow them to look at the sample solution and create their own version of this|Challenge the student to look at other types of association e.g. composition and aggregation and see how they differ from inheritance|
