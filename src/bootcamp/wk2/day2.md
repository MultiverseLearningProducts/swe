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

Note that the `WHERE` clause is really important when querying. Often we want one record, or a set of records only. Use the `WHERE` clause to filter out the data you need. 

----

## Lesson 2 - SQLite3 Installation
SQLite3 is a lightweight SQL database. It is often used in embedded devices such as phones and games consoles.

!(https://docs.google.com/presentation/d/e/2PACX-1vQpmJ3NMHXf3v-uh4nT3O0keOjivstLweqSi7ZUbhvdFI1M6o4b2cDSFKFdz5YfakbewFyNjIdbrmBI/embed)

## Learning Objectives

* Connect to a database (in-memory)
* Execute CRUD statements on the database

## Before we start
You need to install SQLite3. 

Execute `npm install sqlite3` in the directory where your `package.json` lives. If you get errors, try `npm install sqlite3@5.0.0` instead. 

If you still have errors, follow the instructions below (note these are Windows specific):

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
In this lesson you need to recreate the `Customer` table you used in the [W3Schools SQL Tutorial](https://www.w3schools.com/sql/sql_syntax.asp). To simplify things, you can use an in-memory sqllite database. 

You may find the following links useful:
[How to connect to a database](https://www.sqlitetutorial.net/sqlite-nodejs/connect/)
[How to insert data into a database](https://www.sqlitetutorial.net/sqlite-nodejs/insert/)
[How to query data from a database](https://www.sqlitetutorial.net/sqlite-nodejs/query/)

Here is an example of how to create a table and insert some rows into the table - please note this is very simplified and you will need to expand the code to include more columns.

```js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

/**
 * Executes the SQL statements one at a time.
 * 
 * Please note that this does not have any error 
 * handling as yet.
 */
db.serialize(function() {
    db.run("CREATE TABLE CUSTOMERS (name TEXT)");

    const stmt = db.prepare("INSERT INTO CUSTOMERS VALUES (?)");

    for (let i = 0; i < 10; i++) {
        stmt.run("Customer" + i);
    }

    stmt.finalize(); // releases any any internal resources 
                     // and deallocates any memory

    db.each("SELECT rowid AS id, name FROM CUSTOMERS", function(err, row) {
        console.log(row.id + ": " + row.name);
    });
});

db.close();
```

## Assignment
  * Recreate the Customer table from your [W3Schools SQL Tutorial](https://www.w3schools.com/sql/sql_syntax.asp) in an in-memory database
  * Insert a number of rows into the table
  * Query the table and print out the results
  * Work out how to create a persistent database (i.e. one which is held on file rather than in-memory)

## Lesson 4 - Restaurant tables
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

[attendance log](https://platform.whitehat.org.uk/apprentice/attendance-log/159)
[main](/swe)|[prev](/swe/bootcamp/wk2/day1.html)|[next](/swe/bootcamp/wk2/day3.html)

