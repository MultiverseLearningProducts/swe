# Bootcamp > Week 1 > Day 1

## Before we start
You must have familiarity with basic JavaScript concepts, specifically:
  * [JavaScript Syntax](https://www.w3schools.com/js/js_syntax.asp)
  * [JavaScript Data Types](https://www.w3schools.com/js/js_datatypes.asp)
  * [JavaScript Variables](https://www.w3schools.com/js/js_variables.asp)
  * [JavaScript Arrays](https://www.w3schools.com/js/js_arrays.asp)
  * [JavaScript Array Methods](https://www.w3schools.com/js/js_array_methods.asp)
  * [JavaScript Arrow Functions](https://www.w3schools.com/js/js_arrow_function.asp)
  * [An overview of Node](https://www.codecademy.com/articles/what-is-node) - also watch the first 5.30 minutes of [An Introduction to Node in Visual Studio Code](https://www.youtube.com/watch?v=EIQgVdoYb0M)
  * There is a great article on the [Community Hub](https://community.multiverse.io/topics/16826/feed) which compares statically typed languages (like JavaScript) and dynamically typed languages (like Java) - well worth a read!

You must also be confident using Git to clone, add, commit and push to your Git repository.

## Overview of the day

Day one enables the cohort to get their computer set up so that they can write JavaScript using Node.js. We introduce the concepts of Arrays, Objects and functions in Javascript.

# Session 1 - Setup (could also be done prior to course)
(Note that if students are unable to install software to their computer, it is possible to use the online editor [Repl.it](https://repl.it/) to create and run JavaScript and Node.js instead).

Please install the following:
   * [VSCode](https://code.visualstudio.com/) - this is a code editor
   * [Node](https://nodejs.org/en/) - Node.js is an open-source, cross-platform, back-end, JavaScript runtime environment that executes JavaScript code outside a web browser. Check if this is already installed by typing `node` on a Command Promt. If not, then select the LTS version. 
   * Enable `Auto Save` in VSCode via `File -> Auto Save`
   * Install [JsDoc](https://jsdoc.app/) (an API documentation generator for JavaScript) by typing the following command in your command prompt after you have installed Node: `npm install -g jsdoc`
   * Ensure you have the Chrome browser installed

Validate your setup as follows:
  1. Create a new folder called `coursework` under the `Documents` folder in your home directory
  2. Open VSCode and select `File->Open Folder` - select your `coursework` folder
  3. In the `coursework` folder, create a new file (`File->New File`) called `script.js` with the following content: 
```js
console.log('hello from JavaScript');
```
  4. Check your code has been saved by looking at the timestamp for the file in `File Explorer`
  5. Using a Command Prompt, type `node script.js`. You should see the console log output. Here we are running the JavaScript server-side, i.e. within Node.

# Session 2 - Objects and Functions

Understanding objects and functions is key to reading and writing Javascript. 

## Learning Objectives

* Demonstrate creating objects in Javascript
* Demonstrate creating functions with the function keyword in Javascript
* Use arrays to organise objects into groups
* Create references to objects inside other objects

## Lesson

Objects are the main data type in Javascript. Think of objects as nouns (person, place or thing), something you can touch, see, smell, feel or taste.

Lets start by looking at the three different ways we can make an object:

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

Lets add a function called `childOf` which returns the names of that object's parents. In our function, we want to be able to access the parents array of itself. To do this we use the `this` keyword. From within the function that is assigned as a property of the object, we can reference the parent's array like this:

```javascript
function () {
  return this.parents.map(parent => parent.name).join(' & ') || "parents unknown"
}
```
In the function above we map over the array and just pick out the name properties from the parents objects, at that point we have an array of names, then we chain the array method `join` and give it a delimiter to use as it takes all the names in our array and joins them together with an "&" in between them and returns a string. If the array is empty, join will return an empty string, which evaluates as falsey, so we can use the `||` double pipes of the OR operator to return a default value.

Finally since we want all our person objects to have this function we can declare the function once by assigning it to a variable. Now our `childOf` property can have as its value a reference to the `childOf` function. You must use the `function` keyword for this to work. Arrow functions reference the `this` of the parent's scope so it will not work the same way. We'll come back to that.

## Assignment

Create a new directory in your local Git repositoty called `familyTree`. As a general rule, do NOT use spaces or special characters in directory or filenames.

Can you create an object that represents 3 generations of a family tree? You could use the [Royal Family](https://i.insider.com/5e17677224fe1248eb288e84?width=1000&format=jpeg&auto=webp) or a celebrity family to model the concepts! A person in the family tree should have the following properties:

* name String
* parents Array 
* childOf Function

The name property should be a string, the parents property should be an array, and that array should contain references to that person's parents. The childOf property should return a string of the parent's names.

Use a combination of objects arranged in arrays to represent different generations. Use the `this` keyword to create a childOf function that references the parents array of itself.

Once constructed you should be able to traverse from an individual to their grand-parents. You should be able to call childOf on any person and that function should return a string i.e. "Bob & Samantha" or "unknown".

Commit your code into Github and share the link with your coach.

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/153)

[main](/swe)|[next](/swe/bootcamp/wk1/day2.html)