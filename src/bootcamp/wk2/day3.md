# Week 2 > Day 1

## Overview of the day

<hr/>

## Lesson 1 - SQLite3

## Learning Objectives

* Install and initiate a database in a Node.js project
* Execute queries on our database in Node.js

## Before we start

* ensure you have `sqlite3` installed

## Materials needed

## Lesson

Make a new project folder and `cd` into it. `npm init` and install sqlite3 in your node project.

### Initiation and connection to the database

```javascript
const sqlite3 = require('sqlite3')
const db = new sqlite3.Database('./db.sqlite')
```


## Assignment

<hr/>

## Lesson ? - ???

## Learning Objectives

## Before we start

## Materials needed

## Lesson

The aim of this session is to integrate our classes with a persistent layer. So the state in our app will last from one running instance to the next. You know how to create a class. When we create a new instance of a Restaurant we also want to create a new entry in our database. When we create a new Menu we will also want to create that menu in the database, and associate it with the right restaurant, and have a instance of a menu in the menus array in our restaurant.

## Assignment

