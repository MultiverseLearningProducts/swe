# Bootcamp > Week 1 > Day 1 > Session 2

[Bootcamp > Week 1 > Day 1](https://whitehatlearningproducts.github.io/swe/bootcamp/wk1/day1.html)

# Objects and Functions

## Summary  

Day one is about getting to know your cohort and setting up their computers so they are prepared to start prorgamming. 

## Objectives 

- Demonstrate creating objects in Javascript
- Demonstrate creating functions with the function keyword in Javascript
- Use arrays to organise objects into groups
- Create references to objects inside other objects

## Notes

Walk them through creation of objects in 3 ways. The third way is more advanced. Basically if you create an object like this `Object.create(null)` it does not inherit any thing from the prototypal chain, but if you give it another object it will. We visit this again in Mod 2 when talking about prototypal inheritance. Plant the seed now, then move on.

One really important thing to start doing is introducing the terminology of an object, for example a property, what a key is, what a value is. How to access properties, how to call functions on an object and how you can create structures using objects and arrays.

Talk about `this` when you create the `childOf` function. It's the `this` of the object to which it belongs.

## Assignment 

A family tree. Start with their current generation, group the generation together in an array. Have them assign that grouping to a variable.

Then do the same with the next generation but write the definition above the `firstGen` variable (because you will not be able to reference some thing that has not been defined yet), and the third generation above the second.

Then you can start to relate them together. Use a `parents` property on the person object and in an array make references to the parents in the correct generation array.

Finally add a `childOf` function that uses this to reference the parents array of itself. You can also return a cheeky default using the `||` or operator.

Check out a finished [example](https://gist.github.com/bmordan/72cc6820141fa976a7b8e443df65a206)

## Overview 

| Overview                                            | Timing     |
| --------------------------------------------------- | ---------- |
| [Welcome](#Welcome)                                 | 5 mins     |
| [Creating Objects](#Creating-Objects)               | 20 mins    |
| [Referencing Other Objects](#Referencing-Other-Objects) | 30 mins    |
| [On Your Own](#On-Your-Own)                           | 5 mins     |
| **Total**                                           | **1 hour** |

### Welcome 

[back](#Welcome)

#### 5 minutes 

Welcome to the first official day of code school! We are going to go over a few fundamental aspects of JavaScript and build upon each session every day. 

Before we start, we talked about how you will be assessed for the apprenticeship. Can you share all the ways you will be assessed?

Everything we do from here on is to help you be prepared for your end point assessment and be ready to be developers in your workplace. 

Let’s start building our JavaScript knowledge now! Understanding objects and functions is key to reading and writing Javascript. Today we will learn how to: 

* Create objects in Javascript
* Create functions with the function keyword in Javascript
* Use arrays to organise objects into groups
* Create references to objects inside other objects

This session will reference the Github content heavily, so feel free to follow along.

*Notes to Coaches: After this point you should be sharing your screen as you code to provide examples and narrate over them.* 

### Creating Objects 

[back](#Overview)

#### 20 minutes 

After you share your screen, do some basic understanding of programming. Take time to explain the terminal, how node.js works, and where they will type their code. Most apprentices should know this but it's good to be clear! 

Now we want to discuss the fundamentals of Javascript. There are some primitives you have seen before, String, Number, Function, Booleans. These are the things the language is made from. Objects are the main primitive in Javascript. Let's start by looking at the three different ways we can make an object:

*Coach Note: At this point you can follow along via the GitHub lesson. After each coding example give apprentices time to catch up and ask questions. After apprentices create an object with a full name, check for understanding. Ask them to react with the thumbs-up emoji on Zoom on how confident they fell about the information. If in person, call on 2 - 3 people to share*



### Referencing Other Objects 

[back](#Overview)

#### 30 minutes 

Continue following along on the GitHub page with coding examples. Again, give apprentices time to type their own code and ask questions. 

#### Check for understanding:

Give apprentices 10 minutes and ask them to turn work in pairs (go into a breakout room if on Zoom) to create a `childOf` function to identify their parents. Each apprentice should have their own family tree they are working on, their partner is there to help code, answer any questions. When they are done, they should commit their code into Github and share the link with the coach. This is a short activity and they should be able to accomplish this quickly. It is more of a chance for apprentices to practice communicating together and sharing idea. Note, if apprentices finish early, you can direct them to the assignment for the day and they can work with their partner to code it.

### On Your Own  

[back](#Overview)

#### 5 minutes 

Now that we understand objects and how to create them, let's expand our family tree. You’ve already done half the work with your partner, so expand it a little more tonight! Can you create an object that represents 3 generations of your family tree? A person in your family tree should have the following properties:

* name String

* parents Array

* childOf Function

The name property should be a string, the parents property should be an array, and that array should contain references to that person's parents. The childOf property should return a string of the parent's names.

Use a combination of objects arranged in arrays to represent different generations. Use the this keyword to create a childOf function that references the parents array of itself.

Once constructed you should be able to traverse from you to your grand-parents. You should be able to call childOf on any person and that function should return a string i.e. "Bob & Samantha" or "parents unknown".

Commit your code into Github and share the link with your coach.
