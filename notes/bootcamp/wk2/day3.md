# Bootcamp > Week 2 > Day 3

## Overview of the day

More SQLite3 only now via Node.js.

# Session 1 - SQLite3 in Node.js

## Learning Objectives

* Install and initiate a database in a Node.js project
* Execute queries on our database in Node.js
* Implement a recursive function

## Pre-work or Assumed knowledge

## Materials

* [airports.json](https://raw.githubusercontent.com/WhiteHatLearningProducts/airports/master/airportsData.json) file from week  _you can run the following command to download the file into your project folder_

```sh
curl https://raw.githubusercontent.com/WhiteHatLearningProducts/airports/master/airportsData.json --output airports.json
```

## Notes

The idea in this session is to load the airport data into the database. Walk through setting up SQLite3 in Node.js. It's a great opportunity to go back over their understanding of async functions and the pending callback stack. Dealing with multiple async functions using the recursive pattern seems to fit here really well. The recursive pattern keeps the call stacks small and is considered a more effective ("How Javascript Works - How Tail Calls Work" Douglas Crockford chpt 18.2). 

In this session we have a really nice dual layer of complexity; we are programming in javascript and executing SQL statements on a database.

## Assignment

Tricky challenge. Make sure you are clear about whats being asked here.

## Additional Reading

<hr/>

# Session 2 - Consolidate SQLite3 in Node.js

## Learning Objectives

* Implement nested iteration
* Relate data using foreign keys correctly

## Pre-work or Assumed knowledge

* Loaded an array of data into a database

## Materials

```sh
curl https://raw.githubusercontent.com/WhiteHatLearningProducts/restaurant-data/master/restaurants.json --output restaurants.json
```

## Notes

Building on the mornings activity. Now things get more complex as we have a nested array. You might need to remind apprentices of this piece of SQLite3 API:

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
You can imagine here they will be inserting a restaurant, need to capture the `restaurant_id` value and use that when they iterate over the menus, and then capture the `menu_id` to insert the items correctly.

## Assignment

Look for a set of tests that crawl over the model.

## Additional Reading