# Mod 1 > Week 1 > Day 3

## Overview of the day

You should have a RESTful web server that exposes the airports as a resource. You have done well to get this far. Today we will focus our attention on "Integration Tests". 

## Lesson 1 - Integration Tests

## Learning Objectives

* Understand the difference between Unit and Integration tests
* Demonstrate the knowledge to implement integration tests in a language

## Before we start

You need to have completed your RESTful web server.

## Materials needed

## Lesson

We have a server. Now we are professional software engineers we know whats missing. Tests. There are 3 different kinds of tests we commonly write for our services:

1. Unit tests
1. Integration tests
1. System tests

Unit tests we wrote lots of these in our first bootcamp for our airport and scooter classes etc. A unit test is often a static test and it verifies the correct output of a part of our programme given a particular input. Unit tests should be run in isolation and not depend on other parts of the programme.

Integration tests are different. We use these to verify the behaviour of different parts of our programme working together. For example our RESTful controllers interact with the server and HTTP requests. These tests don't have to be dynamic, but they often are.

### Static Dynamic

What do I mean by static an dynamic? Unit tests are static and Integration tests are usually dynamic? The easiest way to understand this is to think of a car. We can test a car in the car showroom. We can check things like:

1. Do the lights work
1. Does the steering move the wheels?
1. Can you lock the doors

The car does not have to be moving for us to test these things. These are static tests. If we wanted to test the following:

1. The breaking distances
1. Cornering
1. The noise level

We have to run the car to check these things, the car has to be moving or be dynamic.

With our server we can test particular methods or configuration, but to check that we are getting the right responses from our endpoints it would be helpful to spin up a test version of our server, and actually call the endpoints with different values to verify that our server is behaving the way it should.

### Test cases

We would ideally want to test each endpoint, and trigger all the different responses. For example:

1. 200
1. 404

## Assignment

----

## Lesson 2 - REST experts

## Learning Objectives

* Demonstrate your knowledge of REST
* Demonstrate your knowledge of HTTP

## Before we start

## Materials needed

## Lesson

## Assignment

[attendance log](https://platform.whitehat.org.uk/apprentice/attendance-log/180)
[main](/swe)|[prev](/swe/bootcamp/wk1/day2.html)|[next](/swe/bootcamp/wk1/day4.html)