# Bootcamp > Week 2 > Day 4

## Overview of the day
The aim of today is to integrate our classes with a persistent layer. So the state in our app will last from one running instance to the next. You know how to create a class. You know how to write data into a database. When we create a new instance of a Restaurant we also want to create a new entry in our database. When we create a new Menu we will also want to create that menu in the database, and associate it with the right restaurant, and have a instance of a menu in the menus array in our restaurant. When we get a restaurant out of the database, we want to instantiate a new instance of our Restaurant class with that data.

This mapping between databases and classes is called Object Relational Mapping.

# Session 1 - Object Relational Mapping

## Learning Objectives
Implement an ORM design pattern

## Pre-work or Assumed knowledge
install jest & sqlite3

## Materials
Find your class definitions for Restaurant, Menu & Item

## Notes

## Assignment
*Completely build out the whole data model, with tests, for Restaurant, Menu, Item
*Don't worry about the associations just yet, we will do that next

## Additional Reading

<hr/>

# Session 2 - ChasMany & belongsTo

## Learning Objectives

*Write logical code in javascript to interact with a SQL database
*Write async code in javascripty

## Pre-work or Assumed knowledge

Apprentices will need their 3 classes defined (with tests)

## Materials
Jest and Sqlite3

## Notes

## Assignment
*Complete the relationships between your classes
*Make sure you have tests that cover the functionality
*Share your test coverage report with your coach (screen grab in Slack will be fine)
## Additional Reading
