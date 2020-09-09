# Bootcamp > Week 1 > Day 1

## Overview of the day

Day one is about the cohort getting to know each other. Being introduced to the standard and getting their computer set up. Introduce Objects and functions in Javascript

<hr/>

# Session 1

## Flying start

Your apprenticeship starts today

## Learning Objectives

* Recall the names of other members of the cohort
* List the places other members of the cohort work
* Share a fact about another member of the cohort
* Recall 3 key competencies from the standard

## Before we start

* You will need your appli.ed/platform login credentials

## Materials needed

* [applied](https://applied.whitehat.org.uk)
* [cognassist](https://cognassist.com/)

## Lesson

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRpv5_qiaX5Ob2GF-NS0YgOEF8G3TwMsJBLVsLp0ok8nSmlBR_Nk85Go4_L8nBNpElT5YcKM5Mk9NaK/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

## Assignment

* In pairs in your breakout rooms find out about each other be ready to come back to the group and introduce your partner.
* Complete the Cognassist exercise.

<hr/>

# Session 2

## Objects and Functions

Understanding objects and functions is key to reading and writing Javascript. This session assumes you understand how to use Arrays, so if you are unsure about how to references items in an array you can go find out about that now.

## Learning Objectives

* Demonstrate creating objects in Javascript
* Demonstrate creating functions with the function keyword in Javascript
* Use arrays to organise objects into groups
* Create references to objects inside other objects

## Before we start

This session assumes you understand how to use Arrays, so if you are unsure about how to references items in an array you can go find out about that now. You will also need Node.js installed and be able to access the node REPL in a terminal programme like 'terminal', 'PowerShell' or 'iTerm'.

## Materials needed

* Node.js

## Lesson

Objects are the main primitive in Javascript. Lets start by looking at the three different ways we can make an object:

```javascript
const person1 = {}
const person2 = new Object()
const person3 = Object.create({})
```
You can just declare a new object using `{}`. The other two methods do the same kind of thing. `Object.create()` gives you the option to inherit the prototypal chain from an object you pass to create. We will come back to this later.

Once you have an object you can add properties to it. We are creating a person so lets give them a `name` property:

```javascript
person1.name = 'Bosola'
```
Very easy we just use the 'dot' notation and equal's oporator to assign the property and a value. Now we can read the value from the property in a couple of different ways:
```javascript
person1.name
person1['name']
```
Both do the same think. The reason for using the bracket notation is when our property is a string that has an unusual characture in it. For example this will not work:
```javascript
person1.full-name = 'Bosola Randle'
```
but this will
```javascript
person1['full-name'] = 'Bosola Randle'
```
Try for yourself.

## Assignment

Can you create an object that represents your family tree? A person in your family tree should have the following properties:

* name String
* parents Array
* says Function

The name property should be a string, the parents property should be an array, and that array should contain references to that persons parents. The say property should be a function that console.logs that persons catch phrase.

Use a combination of objects arranged in arrays to represent different generations.

Once constructed you should be able to traverse from you to your grand-parents, and then call the function to log out your grand-parent's catch phrase.

[next](/swe/bootcamp/wk/day2.html)
[main](/swe)