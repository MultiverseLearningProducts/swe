# Bootcamp > Week 2 > Day 2

## Overview of the day

Today your apprentices should spend all day playing with SQL in Repl.

# Lesson 1 - SQL

## Learning Objectives
* Understand how to execute basic SQL statements

## Pre-work or Assumed knowledge

## Materials
W3Schools SQL Tutorial 

## Notes

The presentation is a space for you to get everyone thinking about databases. They are everywhere. In breakout rooms with Jam boards you can get your apprentices to think about the databases they interact with on a daily bases. There are a lot:

* twitter / facebook / google - nearly every site on the internet
* contacts in phone / most apps on phone
* supermarket checkout
* bank / money
* Number Plate Recognition (NPR) (ULEZ/congestion charge zones)
* car (On Board Diagnostics CPU)
* alexa / smart home equipment

Get started with `.tables` there are none so make some:

```sql
CREATE TABLE restaurants(id INTEGER PRIMARY KEY, title TEXT);
```
Mention schema's. Point out the name of the column and the type. Introduce CRUD and walk through the 4 queries. Send off the apprentices to go practice this for themselves. You can extend this by playing with the WHERE clause.

## Assignment
|**Lower ability**|**Higher ability**|
|-----------------|------------------|
|The W3Schools tutorial is very well explained and should be accessible for everyone|Challenge the student to look at more advanced SQL by exploring further sections of the W3Schools tutorial|

# Lesson 2 - Creating the Restaurant Tables

## Learning Objectives
* Understand how to create tables using SQL

## Materials
* Repl 

## Notes
Working with Repl means the apprentices can focus on writing SQL only rather than involve Node.js.

## Assignment
|**Lower ability**|**Higher ability**|
|-----------------|------------------|
|Refer the student to the W3Schools tutorial as this will help them compose their SQL|Challenge the student to use the Pragma commands to describe a table. Also get them to look at how SQL syntax varies between database types.

# Session 2 - JOIN tables

## Learning Objectives

* Execute SQL commands
* Relate data using foreign keys

## Pre-work or Assumed knowledge

## Materials

## Notes

Talk about relationships between data points being just as important as the data points. Walk through joins.

Introduce aggregation by example. A good demo is to join the restaurants and menus tables, then list all the restaurants and menus, then aggregate using COUNT. You'll get a single result back, then you can introduce GROUP BY and have each restaurant with the count of the menus they each sport.

## Assignment
You can get your apprentices to post you little screen shots of their query results in slack. Main thing is they get to compose the JOIN queries for themselves.

|**Lower ability**|**Higher ability**|
|-----------------|------------------|
|Refer the student to the W3Schools tutorial as this will help them compose their SQL|Challenge the student to find out about the different types of JOINs|
