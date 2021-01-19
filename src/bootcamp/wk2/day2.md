# Bootcamp > Week 2 > Day 2

## Overview of the day

You have a data model for a restaurant ordering app. The problem is all the data is lost when your app stops. The data that makes the app persists only in memory, so when the process dies, so does the data. Today is about fixing that.

<hr/>

## Lesson 1 - SQL
A Relational Database Management System (RDBMS) refers to a database that stores data using rows and columns. Structured Query Language (SQL) is used to query data in RDMSs.

## Learning Objectives

* Understand how to execute basic SQL statements

## Assignment
Work through the [W3Schools SQL Tutorial](https://www.w3schools.com/sql/sql_syntax.asp) up to and including the 'SQL Delete' lesson. This tutorial will enable you to understand how to create, read, update and delete (CRUD) data to / from a SQL database.

----

## Lesson 2 - SQLite3 Installation
SQLite3 is a lightweight SQL database. It is often used in embedded devices such as phones and games consoles.

!(https://docs.google.com/presentation/d/e/2PACX-1vQpmJ3NMHXf3v-uh4nT3O0keOjivstLweqSi7ZUbhvdFI1M6o4b2cDSFKFdz5YfakbewFyNjIdbrmBI/embed)

## Assignment
Follow these instructions to install SQLite:

  1. Create a new directory for this week's work
  2. run `npm init` to create a new `package.json` file. 
  3. Execute `npm install sqlite3` in the directory where your `package.json` lives. If you get errors, try `npm install sqlite3@5.0.0` instead. If you still have errors, follow the instructions below (note these are Windows specific):

    * Right click on VSCode and 'run as Administrator'. Navigate to the directory where your `package.json` file is and run `npm install --global --production windows-build-tools@4.0.0`. 
    * Close VSCode and run it again (this time not as administrator i.e. just double click on the icon). Execute `npm install sqlite3` in the directory where your `package.json` lives.

To check your install is successful, paste this code into a file named `dbconnect.js`:

```js
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
  });
  
  // close the database connection
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
  });
```
run the file with `node dbconnect.js`. You should see the console logs appear. You have successfully connected to the sqlite in-memory database.


## Lesson 3 - Using Node.js to run queries
In this lesson you need to recreate the `Customer` table you used in the [W3Schools SQL Tutorial](https://www.w3schools.com/sql/sql_syntax.asp). You will also use a persistent database (i.e. one which lives on your file system).

You may find the following links useful:
  * [How to connect to a database](https://www.sqlitetutorial.net/sqlite-nodejs/connect/)
  * [How to insert data into a database](https://www.sqlitetutorial.net/sqlite-nodejs/insert/)
  * [How to query data from a database](https://www.sqlitetutorial.net/sqlite-nodejs/query/)

Here is an example of how to create a table and insert some rows into the table - please note this is simplified and in your assignment you will need to expand the code to include more columns.

```js
const sqlite3 = require('sqlite3').verbose();

// use a persistent database named myDb.sqlite
const db = new sqlite3.Database('./myDb.sqlite');

/**
 * Executes the SQL statements one at a time.
 * 
 * Note the use of try/finally to ensure resources get closed 
 * whether an error occurs or not
 * 
 */
try {
    db.serialize(function () { // serialize means execute one statement at a time

        // create the empty table with specific columns and column types
        db.run("CREATE TABLE CUSTOMERS (CustomerName TEXT, ContactName TEXT)");

        let stmt;

        // insert 2 rows
        try {
            stmt = db.prepare(`INSERT INTO CUSTOMERS VALUES 
                        ('Fred Flintstone', 'Wilma Flintstone') , 
                        ('Wilma Flintstone', 'Fred Flintstone')`);
            stmt.run();
        } finally {
            // release resources 
            stmt.finalize();
        }

        // select the rows and print them out
        db.each("SELECT * FROM CUSTOMERS",
            function (err, rows) {  // this is a callback function
                console.log(rows);  // rows contains the matching rows
            }
        );
    });
} finally {
    db.close();
}
```     
This code uses a [try/finally](https://www.w3schools.com/jsref/jsref_try_catch.asp) block to ensure that the statement and database are closed regardless of whether an error occurs. This is best practice to avoid memory leaks.

## Assignment
  * Use the code above to recreate the Customer table from the [W3Schools SQL Tutorial](https://www.w3schools.com/sql/sql_syntax.asp) in a persistent database
  * Insert at least 3 rows into the table
  * Query the table and print out the results
  * Modify the code to query for only the rows which match a specific condition. Hint: use the `WHERE` clause to filter out the data you need. 

## Lesson 4 - Visualising your database
There is an `sqlite` plugin for VSCode which allows you to visualise your database.

## Assignment
Install the `sqlite` plugin for VSCode as follows:
  * Click on the `Extensions` icon and choose `sqlite` by `alexcvzz`
  * Select `View-Command Palette` from the menu
  * Type `SQLite: Open Database`
  * Your database from the previous exercise should appear, select this
  * A `SQLITE EXPLORER` window should appear at the bottom of your VSCode Explorer view. Click on this and expand it until you see the table CUSTOMERS. Click on the play icon and voila, you should see a visual representation of your database.


## Lesson 5 - Restaurant tables
Your coach will provide you with a database design for a restaurant.

## Assignment

1. Compose the SQL queries to do the following:
    * Create a database if one does not exist
    * Implement the restaurants table
    * Create an entry for a restaurant using "INSERT"
    * Read back your restaurant using "SELECT"
    * Update your restaurant using "UPDATE"
    * Delete your restaurant using "DELETE"
    * Use the WHERE clause to filter results

----

## Lesson 3 - JOIN tables

## Learning Objectives

* Execute SQL commands
* Relate data using foreign keys

## Before we start

* Have you SQL queries for creating a table handy

## Materials needed

* Sqlite3

## Lesson

It is great to be able to save a restaurant in our database. However our data model requires our restaurants to also have menu's associated with them. A restaurant might have many menus; for example a main menu, a set menu, a wine menu (wine list) and best of all the dessert menu! How can we store one or more menu items on the restaurant? We could make a new field on the restaurant table called 'menu'. But what would we do if we wanted to add a 2nd menu 'menu2'? And a third 'menu3'?

No. The way this is done is by creating a separate table for the menus. When we create a row in the 'menus' table we create a special field to store the id of the restaurant we want the menu to be associated with. The convention is to call the field something like 'restaurant_id'. This is why databases that have tables like this are called 'relational databases'.

How do we use the association we just created? When we query our database we are going to use the 'JOIN' keyword in SQL. Read the query below:

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

