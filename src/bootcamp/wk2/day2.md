# Bootcamp > Week 2 > Day 2

## Overview of the day

You have a data model for a restaurant ordering app. The problem is all the data is lost when your app stops. The data that makes the app persists only in memory, so when the process dies, so does the data. Today is about fixing that.

<hr/>

## Lesson 1 - SQLite3

## Learning Objectives

* Connect to a database
* Execute CRUD statements on a database

## Before we start

* Make sure you have SQLite3 installed `npm i sqlite3` will do it

## Materials needed

* Sqlite3
* Jest

## Lesson

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQpmJ3NMHXf3v-uh4nT3O0keOjivstLweqSi7ZUbhvdFI1M6o4b2cDSFKFdz5YfakbewFyNjIdbrmBI/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="480" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

* Create table if not exists
* Implement the restaurants table
* Implement the menus table
* Use a JOIN query

## Assignment

1. Complete the rest of the data model
1. Compose the query to select a restaurant, all it's menus, and all the items for each menu

<hr/>

## Lesson 2 - Object Relational Mapping

## Learning Objectives

* Execute SQL in Node.js
* Construct promises to handle async database transactions

## Before we start

* Remind yourself how to construct a promise

## Materials needed

* Sqlite3
* Jest

## Lesson

The aim of this session is to integrate our classes with a persistent layer. So the state in our app will last from one running instance to the next. You know how to create a class. When we create a new instance of a Restaurant we also want to create a new entry in our database. When we create a new Menu we will also want to create that menu in the database, and associate it with the right restaurant, and have a instance of a menu in the menus array in our restaurant.



## Assignment

[attendance log](https://applied.whitehat.org.uk/mod/questionnaire/complete.php?id=6702)

[main](/swe)|[prev](/swe/bootcamp/wk2/day1.html)

