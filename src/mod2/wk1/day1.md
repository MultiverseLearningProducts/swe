# Mod 2 > Week 1 > Day 1

# Introduction to JavaScript

Welcome to the Introduction to JavaScript course! In this course, you will learn the basics of JavaScript. By the end of the course, you will have created a number of JavaScript applications and you'll be ready to tackle so more technical concepts. Ready? Let's begin...

## Overview of the day

Today, we will look at:

* Declaring and using primitive data types
* Assignment and arithmetic operators
* Built-in maths functions to save you time
* JavaScript best practices

## Learning Objectives

* Understand what primitive data types are and how to use them
* Understand the different assignment and arithmetic operators and their use
* Understand how to leverage JavaScript's built-in maths functions to save you time
* Understand some of the best practices when working with JavaScript

## Before we start

We will be using [JSFiddle](https://jsfiddle.net/) to run JavaScript in the browser. Using the link, in the JavaScript box, write:

``console.log("Hello, world!")``

Click the run button and observe the text that has been printed in the console. Congratulations! You've written your first JavaScript program! Console.log is a very useful tool that can output anything we like to the console. 

# Lesson 1

## Declaring and using primitive datatypes

hat is a primitive? I hear you say... Well, a primitive is the simplest datatype in JavaScript. The primitives we're interested in, are:

* number
* boolean
* string
* null
* undefined

### Task 

Let's dive write in and create some primitive! Open up your JSFiddle and type or copy/paste the following:

```
console.log(
  typeof "Daniel",
  typeof 3.14,
  typeof true,
  typeof false,
  typeof null,
  typeof undefined
)
```

```typeof``` is a neat little tool that tells us what type a datatype is. It's especially useful when when you don't know ahead of time what a variable's datatype will be. Note the outputs are primitive, except typeof null is returning the datatype as an object?! Alert the church elders! No, actually no need. This is just a JavaScript 'quirk'. It should be of type null but for reasons known only to a select few, it's of type object. More on objects later!

number; boolean; string; null; undefined; typeof operator; type checking functions; use strict; converting between data types; formatting numbers; string operations; single quote vs double quote (nesting); initialization

[next](/swe/mod2/wk1/day2.html)
[main](/swe)