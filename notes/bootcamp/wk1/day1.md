# Bootcamp > Week 1 > Day 1 (Coach Notes)

[Bootcamp > Week 1 > Day 1](https://whitehatlearningproducts.github.io/swe/bootcamp/wk1/day1.html)

## Overview of the day

Day one is about the cohort getting to know each other. Being introduced to the standard and getting their computer set up. Introduce Objects and functions in Javascript.

<hr/>

# Session 1 - Flying start

Your apprenticeship starts today

## Learning Objectives

* Recall the names of other members of the cohort
* List the places other members of the cohort work
* Share a fact about another member of the cohort
* Recall 3 key competencies from the standard

## Pre-work or Assumed knowledge

* accounts created apprentices should be able to log in with their platform credentials.

## Materials

* [slide deck](https://docs.google.com/presentation/d/1ec5SgzTACT3lrgcRwKoDiOHqJEDCDoQOiWgArq_j_jA/edit?usp=sharing)

## Notes

Cognassist can take a while to complete (45mins).

## Assignment

Cognassist will give you a bar chart of an apprentices neuro-diversity. This is very interesting in itself. You at this point need to encourage those that lit up the system that they will have useful side projects each month to complete with you their coach from Cognassist. See [here](https://sites.google.com/whitehat.org.uk/delivery-wiki-wip/apprentice-support/at-risk-and-interventions#h.q1mngyqvwqsj) for more information about additional learning needs.

<hr/>

# Session 2 - Objects and functions

## Learning Objectives

* Demonstrate creating objects in Javascript
* Demonstrate creating functions with the function keyword in Javascript
* Use arrays to organise objects into groups
* Create references to objects inside other objects

## Pre-work or Assumed knowledge

* Working with arrays, how to create them, put items inside them and use indexes to reference items in an array
* using JSON.stringify to console.log a nested object in their shell

## Materials

* [lesson](https://whitehatlearningproducts.github.io/swe/bootcamp/wk1/day1.html)
* [assignment code example](https://gist.github.com/bmordan/72cc6820141fa976a7b8e443df65a206)

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
