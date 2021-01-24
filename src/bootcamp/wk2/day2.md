# Bootcamp > Week 2 > Day 2

## Overview of the day

Here is a class diagam representing a model for a restaurant ordering app. 

![restaurantClassDiagram](https://user-images.githubusercontent.com/1316724/105141638-5d11d500-5af1-11eb-98ee-d177df9c5894.png)

Imagine we write some code to create instances of these classes with real restaurant and menu data. The problem is all the data is lost when your app stops. The data that makes the app persists only in memory, so when the process dies, so does the data. Today is about fixing that.

<hr/>

## Lesson 1 - SQL
A Relational Database Management System (RDBMS) refers to a database that stores data using rows and columns. Structured Query Language (SQL) is used to query data in RDMSs.

## Learning Objectives

* Understand how to execute basic SQL statements

## Assignment
Work through the [W3Schools SQL Tutorial](https://www.w3schools.com/sql/sql_syntax.asp) up to and including the 'SQL Delete' lesson. This tutorial will enable you to understand how to create, read, update and delete (CRUD) data to / from a SQL database.

Once you are comfortable with this syntax, move on to look at how to [create a table](https://www.w3schools.com/sql/sql_create_table.asp) & [drop a table](https://www.w3schools.com/sql/sql_drop_table.asp).

----
## Lesson 2 - Creating the Restaurant Tables
It's important to note that the syntax for creating tables and naming of data types does vary slightly from vendor to vendor.

The Data Types for SQLite are as follows:

|Data type|Description|
|---------|-----------|
|NULL|The value is a NULL value|
|INTEGER|The value is a signed integer|
|REAL|The value is a floating point value|
|TEXT|The value is a text string|
|BLOB|The value is a blob of data|

A column (or set of columns) marked as a **PRIMARY KEY** is a column (or set of columns) that has to be unique i.e. you cannot insert rows with the same value in this column/s and cannot be null. It is good practice to have a PRIMARY KEY on each table. The syntax for adding a PRIMARY KEY is as follows:

```sql
CREATE TABLE RESTAURANTS (id INTEGER PRIMARY KEY, 
                          name TEXT, 
                          image TEXT);
```
Here, we are specifying that the `id` column is the PRIMARY KEY i.e. has to have unique values.

An alternative to creating your own unique identifier to populate an `id` column is to use an AUTO INCREMENTing number. SQL provides [a way to to do this](https://www.w3schools.com/sql/sql_autoincrement.asp).


## Assignment
We will use a website called [Repl](https://repl.it/) to practise our SQL syntax before we move on and incorporate the SQL into some Node.js code.

You should also be aware of 2 SQLite specific SQL statements which will help you.

The `PRAGMA` command describes a table by listing its columns and indicating which column is the primary key.
```sql
PRAGMA table_info(CUSTOMERS);
``` 

The following command lists all the tables in the database:
```sql
SELECT name FROM sqlite_master WHERE type='table'
```
In this assignment you need to use SQL to create the tables which correspond to the Restaurant class diagram above. 

  1. Sign up for a (free) Repl account
  2. Create a new repl and select `SQLite` as the language
  3. Compose the SQL queries to do the following:
     * Implement the Restaurants, Menus and MenuItems tables - make the id of each a PRIMARY KEY (this has to be unique) and make this AUTO INCREMENTing
     * Insert rows into each table using "INSERT"
     * Read back your row data using "SELECT"
     * Update your rows using "UPDATE"
     * Delete your rows using "DELETE"
     * Use the WHERE clause to filter results  
  4. Share your repl with your coach on Slack

----

## Lesson 3 - JOIN tables & FOREIGN KEYS

## Learning Objectives
* Execute SQL commands
* Relate data using foreign keys

## Lesson
It is great to be able to save a restaurant in our database. However our data model requires our restaurants to also have menus associated with them. A restaurant might have many menus; for example a main menu, a set menu, a wine menu (wine list) and best of all the dessert menu! How can we store one or more menu items on the restaurant? We could make a new field on the restaurant table called 'menu'. But what would we do if we wanted to add a 2nd menu 'menu2'? And a third 'menu3'?

No. The way this is done is by creating a separate table for the menus. When we create a row in the 'menus' table we create a special field to store the id of the restaurant we want the menu to be associated with. The convention is to call the field something like 'restaurant_id'. This is why databases that have tables like this are called 'relational databases'.

We can use the [FOREIGN KEY](https://www.w3schools.com/sql/sql_foreignkey.asp) keyword to form a strong link between 2 tables. A FOREIGN KEY must refer to the PRIMARY KEY in another table. Take a look at the UML diagram again, you can see that there is a 1 to many relationship between the Restaurant and its Menus. In a relational database, this is implemented by multiple rows in the MENUS table pointing to a specific RESTAURANT row id.

This means that the MENUS table (child) needs a column which links it to the RESTAURANTS table (parent). If we declare this new column as a FOREIGN KEY, then if an attempt is made to delete the associated restaurant row we will get an error. Here is an example of how to add a FOREIGN KEY:

```sql
CREATE TABLE MENUS (id INT PRIMARY KEY, title TEXT, restaurant_id INT, FOREIGN KEY (restaurant_id) REFERENCES RESTAURANTS(id))
```

## Assignment
Modify your tables to include these relationships:
   * add a `restaurant_id` column to the Menu table and mark it as a FOREIGN KEY 
   * add a `menu_id` column to the MenuItem table and mark it as a FOREIGN KEY 

Note that Repl may not accurately support the foreign key constraint (i.e. may allow you to delete linked data) - to be checked.

How do we use the association we just created? When we query our database we are going to use the 'JOIN' keyword in SQL.

Read about the [SQL Join command](https://www.w3schools.com/sql/sql_join.asp) to understand its syntax.

Now read the query below:

```sql
SELECT restaurants.name, menus.name 
FROM restaurants 
JOIN menus ON restaurants.id = menus.restaurant_id 
WHERE restaurants.id = 1;
```
This statement selects the columns we want to retrieve from both tables; the restaurants table and the menus table. Notice now we have mixed fields coming from different tables, we have to name our columns with both the `table_name.field_name` i.e. `menus.name`. Use the `JOIN` keyword to make an association between the primary key from one table and the foreign key of another. In this example the primary key is the restaurants table id and the menus table restaurant_id. Can you explain why 'restaurant_id' is referred to as the foreign key?

## Assignment

Write some JOIN statements that do the following:

* SELECT a restaurant, a menu and all the menu items using a JOIN statement
* SELECT all the restaurants with a count of the number of menus each restaurant has
* SELECT all the menus, with the total cost of all the menu items summed, and have the list in descending order (most expensive first)
* [extension activity] explore the documentation for SQL the `SUM`, `COUNT` and `GROUP BY` aggregate functions


[attendance log](https://platform.multiverse.io/apprentice/attendance-log/159)
[main](/swe)|[prev](/swe/bootcamp/wk2/day1.html)|[next](/swe/bootcamp/wk2/day3.html)

