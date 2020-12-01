# Bootcamp > Week 1 > Day 5

## Overview of the day

Today is about practicing what has been covered/learnt so far.

# Session 1 - London Scooter Hire

## Learning Objectives

* Demonstrate the syntax for defining a class
* Set up Jest tests write unit tests for your classes
* Write Async tests

## Pre-work or Assumed knowledge

* Completed version of airports

## Materials

## Notes

This is a variation on the airports exercise. A great time to consolidate what has been covered so far. If you have apprentices who still need to complete the airports exercise, they could focus on that instead.

## Assignment

You have been asked to create a scooter hire system. Electric scooters need to be charged at scooter charging stations. Users can only hire and unplug a scooter if the battery is fully charged. Users always use up the battery charge, so when a scooter is returned to a charging station, you can expect the battery to be empty. It takes about 12000 milliseconds to charge a scooter (you have to wait, it's async).

Use test driven development and create the classes and interactions that you feel capture this functionality.

Things to look for are:

* how they have designed the async tests?
* are they using state i.e. a "charging" property/flag
* are they thinking about objects like: Station/Dock, Scooter, User
