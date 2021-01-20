# Week 2 > Day 3

## Overview of the day

Today we are starting to use our SQL skills in our Node.js code. This is an important step where we start to connect our code to a database.

<hr/>

## Lesson 1 - SQLite3 Installation
SQLite3 is a lightweight SQL database. It is often used in embedded devices such as phones and games consoles.

!(https://docs.google.com/presentation/d/e/2PACX-1vQpmJ3NMHXf3v-uh4nT3O0keOjivstLweqSi7ZUbhvdFI1M6o4b2cDSFKFdz5YfakbewFyNjIdbrmBI/embed)

## Assignment
Follow these instructions to install SQLite:

  1. Create a new directory for this week's work. `cd` into it.
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

----
  
## Lesson 2 - Using Node.js to run queries

You may find the following links useful:
  * [How to connect to a database](https://www.sqlitetutorial.net/sqlite-nodejs/connect/)
  * [How to insert data into a database](https://www.sqlitetutorial.net/sqlite-nodejs/insert/)
  * [How to query data from a database](https://www.sqlitetutorial.net/sqlite-nodejs/query/)

Here is  simplified example of how to create a table and insert some rows into the table.

```js
const sqlite3 = require('sqlite3').verbose();

// use a persistent database named myDb.sqlite
const db = new sqlite3.Database('./db.sqlite');

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

```javascript
const sqlite3 = require('sqlite3')
const db = new sqlite3.Database('./db.sqlite')
```
In the above lines above we import the `sqlite3` package then on the next line we access a constructor on the `sqlite3` object and use the `new` keyword to instantiate a new instance of our database for our programme. We can pass some config to our `Database` constructor. We are passing in a relative path where the database file either already exists, or if it doesn't exist where we would like it to be created and with what name.

This file/database will be written to disc, data we store here we can access even when our programme has stopped running. We are going to interact with our database using javascript. The challenge we can use to start working with a database in our Node.js programme is to load the data from our file of airports into our database.

## Assignment
  * Use your SQL commands from the previous day to create your 3 Restaurant tables
  * Insert at least 2 rows into each table
  * Query data from the tables
  * Modify the code to query for only the rows which match a specific condition. Hint: use the `WHERE` clause to filter out the data you need. 
  * Use a JOIN to query tables and print out the results

---

## Lesson 3 - Visualising your database
There is an `sqlite` plugin for VSCode which allows you to visualise your database.

## Assignment
Install the `sqlite` plugin for VSCode as follows:
  * Click on the `Extensions` icon and choose `sqlite` by `alexcvzz`
  * Select `View-Command Palette` from the menu
  * Type `SQLite: Open Database`
  * Your database from the previous exercise should appear, select this
  * A `SQLITE EXPLORER` window should appear at the bottom of your VSCode Explorer view. Click on this and expand it until you see the table CUSTOMERS. Click on the play icon and voila, you should see a visual representation of your database.

---

**PLEASE NOTE THAT THE REMAINDER OF THIS PAGE NEEDS FURTHER WORK**
 
## Lesson 4 - Loading JSON data into SQLite3 using Node.js

## Learning Objectives

* Load a table with existing data using Node.js

## Materials needed

* [airports.json](https://raw.githubusercontent.com/WhiteHatLearningProducts/airports/master/airportsData.json) file from week  _you can run the following command to download the file into your project folder_

```sh
curl https://raw.githubusercontent.com/WhiteHatLearningProducts/airports/master/airportsData.json --output airports.json
```

Have a look at an example of an airport object:

```json
{
  "icao": "KPAE",
  "iata": "PAE",
  "name": "Snohomish County (Paine Field) Airport",
  "city": "Everett",
  "state": "Washington",
  "country": "US",
  "elevation": 606,
  "lat": 47.90629959,
  "lon": -122.2819977,
  "tz": "America/Los_Angeles"
}
```
What are the field names and types we will need to set up in our database? This is called the schema. Once you have figured out the schema, can you compose a query that will create the airports table if it does not exist? We will want to run this <u>before</u> we read the data out of our file.

```sql
CREATE TABLE IF NOT EXISTS airports(id INTEGER PRIM...etc);
```

Once you have your query ready how do we run it? You can use the `run` function see below.

```javascript
db.run('YOUR SQL QUERY;', function (error) {
    /* this callback function runs after Node.js has 
    run the query on sqlite3 database, and the database 
    has emitted an event saying it's finished. In this 
    callback function on the `this` context you can 
    access the id of the last record you inserted. 
    This will be useful later */
    const id = this.lastID
})
```

### Extract & Load

#### Extract airport data from file

Once our database is setup. We are ready to go get the data into it. Can you read the data from your .json file into an array of javascript objects? Try this and console.log your array to your terminal. (or you can just use `require` to load the file see below).

```javascript
const airports = require('./airport.json')
```

#### Load each airport object into the database

To insert the data we need to iterate over our array of airports and use the airport object to form an SQL insert query.
```json
{
  "icao": "KPAE",
  "iata": "PAE",
  "name": "Snohomish County (Paine Field) Airport",
  "city": "Everett",
  "state": "Washington",
  "country": "US",
  "elevation": 606,
  "lat": 47.90629959,
  "lon": -122.2819977,
  "tz": "America/Los_Angeles"
}
```

```SQL
INSERT INTO airports (icao, iata, name, city, state, country, elevation, lat, lon, tz) VALUES (?,?,?,?,?,?,?,?,?,?);
```
All the "?" are placeholders for the different values that we will be inserting as we iterate over our array of airports. When you call `db.run` the first argument is the string above, and the second argument is an array of all the values you want to store, the values get swapped with the "?", your values have to be in the same order as the fields.

#### Async?

Maybe this seems easy. We have an array of airports, we just iterate over the array and call `db.run` on for each airport. The thing is; inserting into a database is an async function. If we just call `db.run` on every item in the array what do you think will happen to the "pending callbacks" stack? Also how do we know when all the airports have been inserted into the database?

When we have a queue of async tasks we want to perform a recursive pattern is a better option that `Array.forEach`. Let's start with a failing test:

```javascript
const load = require('./index')

describe('SQLite3', () => {
    beforeAll(done => {
        db.exec('CREATE TABLE IF NOT EXISTS airports(...);', done)
    })
    test('airports are loaded into the database', (done) => {
        load((db) => {
            db.all('SELECT * FROM airports LIMIT 3;', (err, row) => {
                expect(row.length).toBe(3)
                expect(row[0].name).toBe('Shenyang Dongta Airport')
                db.get('SELECT COUNT(id) AS total FROM airports;', (err, count) => {
                    expect(count.total).toBe(28868)
                    done()
                })
            })
        })
    })
})
```

## Assignment

* write a `load` function that will take a callback and call it when all the airport data has been inserted into the database.
* export this load function from your file.
* write an `insert` function in your load.js file that will take; the airports array, the callback passed to `load`, the database instance `db`.
* your `load` function can assume the airports table has been created i.e. `CREATE TABLE IF NOT EXISTS airports....` can be run in your test setup `beforeAll` function.
* once the table is ready call the `insert` function you created in your load.js file with the airports array, the callback passed to `load`, the database instance `db`
* in your `insert` function check if the airports array is empty. If it is empty call the callback function with the `db` instance and return from the function.
* if the airport array is not empty, in your `insert` function call `.pop()` on the airport array to remove the last airport from the array, then insert that item into the database
* in the `db.run` callback call the `insert` function <u>again</u> with the same arguments (this is called recursion)
* check that your tests are passing ok

----

## Lesson 2 - TODO Consolidate SQLite3 in Node.js 

## Learning Objectives

* Implement nested iteration
* Relate data using foreign keys correctly

## Before we start

* Have your UML diagram for restaurants handy

## Materials needed

## Lesson

Practice what we have looked at so far. Download some restaurant data from Github (run the following command in your project folder);

```sh
curl https://raw.githubusercontent.com/WhiteHatLearningProducts/restaurant-data/master/restaurants.json --output restaurants.json
```

 This is  called "seed" data. The idea is to seed our database with a data set we can use later. Remember to include ids and foreign keys to relate your menus to the right restaurants.

## Assignment

* Make a Node.js script that will load these javascript files into your database. The tables will all have to be created, if they don't exist. Create a recursive function that loads each item into the database. Once all your data is in the database in your Node.js script.
* Write unit tests that verify your seed data has loaded into the in memory database ok.

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/160)
[main](/swe)|[prev](/swe/bootcamp/wk2/day2.html)|[next](/swe/bootcamp/wk2/day4.html)