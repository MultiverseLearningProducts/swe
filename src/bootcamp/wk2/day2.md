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

## Assignment

1. Compose the SQL queries to do the following:
    * Create table if not exists
    * Implement the restaurants table
    * Create an entry for a restaurant using "INSERT"
    * Read back your restaurant using "SELECT"
    * Update your restaurant using "UPDATE"
    * Delete your restaurant using "DELETE"

<hr/>

## Lesson 2 - JOIN tables

## Learning Objectives

* Execute SQL commands
* Relate data using foreign keys

## Before we start

* Have you SQL queries for creating a table handy

## Materials needed

* Sqlite3

## Lesson

Its great to be able to save a restaurant in a database. Our data model requires our restaurants to also have menu's associated with them. A restaurant might have many menus; for example a main menu, a set menu, a wine menu (wine list) and best of all the dessert menu! How can we store one or more menu items on the restaurant? We could make a new field on the restaurant table called 'menu'. But what would we do if we wanted to add a 2nd menu 'menu2'? And a third?

The way this is done is by creating a separate table for the menus. When we create an entry into the 'menus' table we create a special field to store the id of the restaurant we want the menu to be associated with. The convention is to call the field something like 'restaurant_id'. This is why databases that have tables like this are called 'relational databases'.

How do we use the association we just created? When we query our database we are going to use the 'JOIN' keyword in SQL. Read the query below:

```sql
SELECT restaurants.name, menus.name FROM restaurants JOIN menus ON restaurants.id = menus.restaurant_id WHERE restaurants.id = 1;
```
This statement selects the columns we want to Retrieve from both tables the restaurants table and the menus table. Are use the joint keyword to make an association between the primary key and the foreign key. In this example the primary key is the restaurants table id and the menus table restaurant_id. Can you explain why 'restaurant_id' is referred to as the foreign key?

## Assignment

* Write some JOIN statements

[attendance log](https://applied.whitehat.org.uk/mod/questionnaire/complete.php?id=6702)

[main](/swe)|[prev](/swe/bootcamp/wk2/day1.html)

