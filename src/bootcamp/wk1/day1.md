# Bootcamp > Week 1 > Day 1

## Overview of the day

Day one is about the cohort getting to know each other. Being introduced to the standard and getting their computer set up. Introduce Objects and functions in Javascript

<hr/>

# Session 1 - Flying start

Your apprenticeship starts today

## Learning Objectives

* Recall the names of other members of the cohort
* List the places other members of the cohort work
* Share a fact about another member of the cohort
* Recall 3 key competencies from the standard

## Before we start

* You will need your platform login credentials

## Materials needed

* [applied](https://applied.whitehat.org.uk)
* [cognassist](https://cognassist.com/)

## Lesson

!(https://docs.google.com/presentation/d/e/2PACX-1vRpv5_qiaX5Ob2GF-NS0YgOEF8G3TwMsJBLVsLp0ok8nSmlBR_Nk85Go4_L8nBNpElT5YcKM5Mk9NaK/embed)

## Assignment

* In pairs in your breakout rooms find out about each other be ready to come back to the group and introduce your partner.
* Complete the Cognassist exercise.

<hr/>

# Session 2 - Objects and Functions

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
Very easy we just use the 'dot' notation and equal's operator to assign the property and a value. Now we can read the value from the property in a couple of different ways:
```javascript
person1.name
person1['name']
```
Both do the same thing. The reason for using the bracket notation is when our property is a string that has an unusual character in it i.e. "full-name". For example this will not work:
```javascript
person1.full-name = 'Bosola Randle'
```
but this will
```javascript
person1['full-name'] = 'Bosola Randle'
```
Try it for yourself.

Objects can reference other objects. Lets say we have a person. They will have parents. If we made a couple of parents, we could reference them inside our original person object. To group objects together we can use an array.

How can we create a parents property on our person?
How can we assign the value of an array of parents to that property?
Can you access the name of the two parents?

If we ask someone "who are your parents" that person can usually tell us. Our person should have that functionality. Lets add a new property called `childOf` and it should return the names of that object's parents.

So in our function, we want to be able to access the parents array of itself. To do this we use the `this` keyword. From within the function that is assigned as a property of the object, we can reference the parent's array like this.

```javascript
function () {
  return this.parents.map(parent => parent.name).join(' & ') || "parents unknown"
}
```
In the function above we map over the array and just pick out the name properties from the parents objects, at that point we have an array of names, then we chain the array method `join` and give it a delimiter to use as it takes all the names in our array and joins them together with an "&" in between them and returns a string. If the array is empty, join will return an empty string, which evaluates as falsey, so we can use the `||` double pipes of the OR operator to return a default value.

Finally since we want all our person objects to have this function we can declare the function once by assigning it to a variable. Now our `childOf` property can have as it's value a reference to the `childOf` function. You must use the `function` keyword for this to work. Arrow functions reference the `this` of the parent's scope so it will not work the same way. We'll come back to that.

## Assignment

Can you create an object that represents 3 generations of your family tree? A person in your family tree should have the following properties:

* name String
* parents Array
* childOf Function

The name property should be a string, the parents property should be an array, and that array should contain references to that person's parents. The childOf property should return a string of the parent's names.

Use a combination of objects arranged in arrays to represent different generations. Use the `this` keyword to create a childOf function that references the parents array of itself.

Once constructed you should be able to traverse from you to your grand-parents. You should be able to call childOf on any person and that function should return a string i.e. "Bob & Samantha" or "parents unknown".

Commit your code into Github and share the link with your coach.

[attendance log](https://applied.whitehat.org.uk/mod/questionnaire/complete.php?id=6702)

[main](/swe)|[next](/swe/bootcamp/wk1/day2.html)