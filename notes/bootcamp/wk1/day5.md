# Bootcamp > Week 1 > Day 5

## Overview of the day

Today is just about practicing what you have learnt so far. We will also briefly discuss TypeScript.

*(Note to coaches - it is prefereable to provide a class diagram, sequence diagram and use case diagram for this Scooter Hire System so that students can focus just on implementing classes and writing tests, rather than having to do a system analysis. Alternatively, you can present the introduction to UML from Week 2 Day 1 and then allow the students to create their own class diagram, sequence diagram and use case diagram for this Scooter Hire System prior to writing their classes and tests)*

# Lesson 1 - London Scooter Hire

## Learning Objectives
* Demonstrate what you have learnt this week by writing classes for a new domain
* Set up Jest tests to unit test these classes
* Write tests to test asynchronous timer functions

## Pre-work or Assumed knowledge

* Completed version of airports

## Materials

## Notes

This is a variation on the airports exercise. A great time to consolidate what has been covered so far. There are a couple of options for this day as discussed above. My preference is actually to present Week 2 Day 1 content on UML and then allow the students to create their own class diagram, sequence diagram and use case diagram for this Scooter Hire System prior to writing their classes and tests. If you decide not to do this then provide the group with a class diagram, sequence diagram and use case diagram for this Scooter Hire System.

## Assignment

You have been asked to create a scooter hire system. Electric scooters need to be charged at scooter charging stations. Users can only hire and unplug a scooter if the battery is fully charged. Users always use up the battery charge, so when a scooter is returned to a charging station, you can expect the battery to be empty. It takes about 12000 milliseconds to charge a scooter (you have to wait, it's async).

Use test driven development and create the classes and interactions that you feel capture this functionality.

Things to look for are:

* how they have designed the async tests?
* are they using state i.e. a "charging" property/flag
* are they thinking about objects like: Station/Dock, Scooter, User
* has inheritance been used?
* have timeouts been used to simulate charging?

|**Lower ability**|**Higher ability**|
|-----------------|------------------|
|It's fine to ignore the async timer, just focus on creating a Scooter class and it's associated test |Challenge the student to implement async code using a variety of async methods|

# Lesson 2 - Typescript

## Learning Objectives
* Understand that Typescript is a typed version of JavaScript which shows concepts such as encapsulation well and is much more akin to other languages

There is no assignment for this topic.