# Bootcamp > Week 2 > Day 4

## Overview of the day

Today brings together SQLite3 Node.js and creating classes in code. The idea is to implement ORM so when a class is created it is persisted in the database, and when a row from the database is fetched it is returned as a class.

# Session 1 - Object Relational Mapping

## Learning Objectives

* Implement an ORM design pattern

## Pre-work or Assumed knowledge

## Materials

## Notes

Use tests to drive the development. Show your apprentices how to create a Restaurant. Once you feel you've got them started they can continue to build out the whole data model. Possible extentions might be adding static methods like `Restaurant.all()` which would return all the Restaurants from the database with a `SELECT * FROM restaurants;` query.

## Assignment

This code should be committed into the apprentices Github repo, you can check their implementation before the next session.

## Additional Reading

ActiveRecord - the ruby gem that comes with Rails is considered one of the most classic ORM implementations. It is a design pattern identified by [Martin Fowler](https://en.wikipedia.org/wiki/Active_record_pattern).

<hr/>

# Session 2 - hasMany & belongsTo

## Learning Objectives

* Write logical code in javascript to interact with a SQL database
* Write async code in javascript

## Pre-work or Assumed knowledge

* The apprentices have a set of tested classes that persist to a database

## Materials

## Notes

This session builds on the previous by adding relationships between the classes. Step through adding a 'menu' to a 'restaurant', and identify the work they will now have to do when a restaurant is fetch from the database - they will have to go check for menus and create them as instances of Menu if it does. You should not need to go overboard with lots of explanation just show them the next steps in implementing the pattern, then let them spend some hours working their way through the data model.

## Assignment

There should be tests. You are looking for complete, tested implementations of the data model. Get them to send you their test coverage reports.

## Additional Reading
