# Bootcamp > Week 2 > Day 1

## Overview of the day

This week we are going to build part of a Restaurants app, like Deliveroo or Uber Eats. On this first day we are going to start by designing our data model. An app's data model is like the foundations of a building. Everything is build on top of this foundation.

<hr/>

## Lesson 1 - UML

## Learning Objectives

* Create UML data model diagram
* Use 'has many' and 'belongs to' to correctly label relationship between classes

## Before we start

* You should have completed the Airports exercise

## Materials needed

* [https://planttext.com](https://planttext.com) for UML diagrams || install the plantuml plugin for VSCode

## Lesson

In a restaurant ordering system what are some of the objects you would expect to find?

1. Restaurant
1. Menu
1. Item (a Dish with a price)

What are the relationships between these? A Restaurant can have many menus, for example:

* a drinks menu
* a mains menu
* a desert menu

A Restaurant can have 1 or more menus. A Menu belongs to a Restaurant. A Menu has many Items. An Item belongs to a Menu. Can you figure out all of that? It confusing and quite complicated to imaging if some one is just verbally explaining it to us. We need a way to draw this out or represent it.

### UML

Unified Modeling Language is a standardized way to represent abstract structures in programming, like a data model.

!(https://docs.google.com/presentation/d/e/2PACX-1vTxqagPim3SJ1f4Js8PVwPc8zzgkm-wPSZB6I0LUw9jEIihFYUUjkc7-SB0jcahUZevJZH0avpYUWuQ/embed)

Example of Airports in UML

![UML of airports](https://user-images.githubusercontent.com/4499581/93352652-fa52b900-f832-11ea-81a8-ebd2b8e43f97.png)

## Assignment

Can you design a data model for the following classes:

1. Restaurant
1. Menu
1. Item

A Menu belongs to a Restaurant. A Menu has many Items. An Item belongs to a Menu. Can you figure out all of that? It confusing and quite complicated to imaging if some one is just verbally explaining it to us. We need a way to draw this out so we can clearly communicate our design.

When you think you have something save your model and share the diagram with your coach.

----

## Lesson 2 - Implement your model

## Learning Objectives

* Demonstrate knowledge of unit tests
* Demonstrate knowledge of classes

## Before we start

* Have your coach check through your UML diagram

## Materials needed

* UML data model diagram
* Jest

## Lesson

From the design you can begin to write a set of tests that will prove your model is sound. Use the examples from the Airport exercise to implement your data model for your restaurant ordering app.

When you have completed these tasks, can you create a coverage report using Jest? A coverage report is going to run your tests and analysis the code that your tests hit or execute. This data can be compiled into a coverage report. The "coverage" metric is how much of your code is executed during your tests. Add the following line to your package.json

```json
{
  "scripts": {
    "test": "jest",
    "test:report": "jest --coverage=true"
  },
  "dependencies": {
    "jest": "^26.4.2"
  }
}
```
Then run `npm run test:report` you are aiming for 100% test coverage. When you run this you should see that Jest generated a 'coverage' report in your project folder. If you navigate to `/coverage/Icov-report/index.html` and open it in your browser you'll see a helpful report of your test coverage.

![test coverage report](https://user-images.githubusercontent.com/4499581/93334401-cc627a00-f81c-11ea-9c98-4825235c06a4.png)

This is interactive try clicking on one of the class definitions.

## Assignment

Create a new project folder and use `npm init` to start a new Node.js app. Create 3 class definitions with tests. You should be able to:

1. Create a Restaurant (with a name, image URL, and a city)
1. Create a Menu and associate it with a Restaurant (the Menu should have a 'title' property and an 'icon' you can use emojis for icons)
1. Create an Item and associate it with a Menu (Item should have a name and price)
1. Sumbit your coverage report to your coach

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/158)

[main](/swe)|[prev](/swe/bootcamp/wk1/day5.html)|[next](/swe/bootcamp/wk2/day2.html)

