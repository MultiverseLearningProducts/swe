# Week 2 > Day 3

## Overview of the day

Today we are starting to use our SQL skills in our Node.js code. This is an important step where we start to connect our code to a database.

<hr/>

## Lesson 1 - SQLite3 in Node.js

## Learning Objectives

* Install and initiate a database in a Node.js project
* Execute queries on our database in Node.js

## Before we start

* ensure you have `sqlite3` installed

## Materials needed

* [airports.json](https://raw.githubusercontent.com/WhiteHatLearningProducts/airports/master/airportsData.json) file from week  _you can run the following command to download the file into your project folder_

```sh
curl https://raw.githubusercontent.com/WhiteHatLearningProducts/airports/master/airportsData.json --output airports.json
```

## Lesson

Make a new project folder and `cd` into it. `npm init` and install sqlite3 in your node project.

### Initiation and connection to the database

```javascript
const sqlite3 = require('sqlite3')
const db = new sqlite3.Database('./db.sqlite')
```
In the lines above we import the `sqlite3` package then on the next line we access a constructor on the `sqlite3` object and use the `new` keyword to instantiate a new instance of our database for our programme. We can pass some config to our `Database` constructor. We are passing in a relative path where the database file either already exists, or if it doesn't exist where we would like it to be created and with what name.

This file/database will be written to disc, data we store here we can access even when our programme has stopped running. We are going to interact with our database using javascript. The challenge we can use to start working with a database in our Node.js programme is to load the data from our file of airports into our database.

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
    // this callback function runs after Node.js has run the query on sqlite3 database, and the database has emitted an event saying it's finished. In this callback function on the `this` context you can access the id of the last record you inserted. This will be useful later
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
* the first thing your `load` function needs to do is make sure the airports table has been created i.e. `CREATE TABLE IF NOT EXISTS airports`
* once the table is ready call the `insert` function you created in your load.js file with the airports array, the callback passed to `load`, the database instance `db`
* in your `insert` function check if the airports array is empty. If it is empty call the callback function with the `db` instance and return from the function.
* if the airport array is not empty, in your `insert` function call `.pop()` on the airport array to remove the last airport from the array, then insert that item into the database
* in the `db.run` callback call the `insert` function <u>again</u> with the same arguments (this is called recursion)
* check that your tests are passing ok

----

## Lesson 2 - Consolidate SQLite3 in Node.js 

## Learning Objectives

* Use the following sqlite3 functions; `all`, `get`, `run`
* Create your own valid JSON
* Relate data using foreign keys

## Before we start

* Have your UML diagram for restaurants handy

## Materials needed

## Lesson

Practice what we have looked at so far. Begin by creating; a `restaurants.json` file, a `menus.json` file, a `items.json` file. Create for yourself a few restaurants, create menus for those restaurants and finally, make some items for the menus. This is  called "seed" data. The idea is to seed our database with a data set we can use later. Remember to include ids and foreign keys to relate your menus to the right restaurants.

`restaurants.json`
```json
[
    {
        "id": 1,
        "name": "reup princess"
    },
    {
        "id": 2,
        "name": "Coming soom"
    }
]
```

`menus.json`
```json
[
  {
    "id": 1,
    "title": "set menu 1",
    "restaurant_id": 1
  }
]
```
## Assignment

* Make a Node.js script that will load these javascript files into your database. The tables will all have to be created, if they don't exist. Create a recursive function that loads each item into the database. Once all your data is in the database in your Node.js script.
* Write unit tests that verify your seed data has loaded into the in memory database ok.

[attendance log](https://applied.whitehat.org.uk/mod/questionnaire/complete.php?id=6702)
[main](/swe)|[prev](/swe/bootcamp/wk2/day2.html)|[next](/swe/bootcamp/wk2/day4.html)