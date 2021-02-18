# Bootcamp > Week 2 > Day 3

## Overview of the day
Today we are starting to use our SQL skills in our Node.js code. This is an important step where we start to connect our code to a database.

## Lesson 1 - SQLite3 installation

## Learning Objectives
* Install SQLite3 

## Assignment
There is no differentiation in this assignment, all students require sqlite installed. Where necessary, use breakout rooms to allow apprentices to help each other.

---
## Lesson 2 - Using Node.js to run queries
## Learning Objectives
* How to integrate SQL into Node.js code
* Awareness of SQL injection

## Assignment
Sample solution - https://github.com/MultiverseLearningProducts/swe-solutions/tree/main/bootcamp/wk2/day3

|**Lower ability**|**Higher ability**|
|-----------------|------------------|
|Refer the student to the sample solution|Challenge the student to find media references to instances of SQL injection attacks on companies|

---
## Lesson 3 - Visualising your database
## Learning Objectives
* Use a VSCode plugin to view tables

## Assignment
There is no differentiation in this assignment, all students require sqlite installed. Where necessary, use breakout rooms to allow apprentices to help each other.

---
## Lesson 4 - Loading JSON data into SQLite3 using Node.js
## Learning Objectives
In this lesson you will learn how to load your restaurant tables with data from file using Node.js. You will use nested iteration to loop through the data and relate data using foreign keys.

## Pre-work or Assumed knowledge

## Materials

* [airports.json](https://raw.githubusercontent.com/WhiteHatLearningProducts/airports/master/airportsData.json) file from week  _you can run the following command to download the file into your project folder_

```sh
curl https://raw.githubusercontent.com/WhiteHatLearningProducts/airports/master/airportsData.json --output airports.json
```

## Notes

The idea in this session is to load the airport data into the database. Walk through setting up SQLite3 in Node.js. It's a great opportunity to go back over their understanding of async functions and the pending callback stack. Dealing with multiple async functions using the recursive pattern seems to fit here really well. The recursive pattern keeps the call stacks small and is considered a more effective ("How Javascript Works - How Tail Calls Work" Douglas Crockford chpt 18.2). 

In this session we have a really nice dual layer of complexity; we are programming in javascript and executing SQL statements on a database.

## Assignment

Tricky challenge. Make sure you are clear about whats being asked here.

Sample solution - https://github.com/MultiverseLearningProducts/swe-solutions/tree/main/bootcamp/wk2/day3

|**Lower ability**|**Higher ability**|
|-----------------|------------------|
|Refer the student to the sample solution|Challenge the student to read about memory leaks resulting from not closing database connections|

