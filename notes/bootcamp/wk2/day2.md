# Bootcamp > Week 2 > Day 2

## Overview of the day

Today your apprentices should spend all day playing with SQLite3 in the CLI version.

# Session 1 - SQLite3

## Learning Objectives

* Connect to a database
* Execute CRUD statements on a database

## Pre-work or Assumed knowledge

## Materials

* Make sure you have SQLite3 installed `npm i sqlite3` will do it

## Notes

The presentation is a space for you to get everyone thinking about databases. They are everywhere. In breakout rooms with Jam boards you can get your apprentices to think about the databases they interact with on a daily bases. There are alot:

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

* Create table if not exists
* Implement the restaurants table
* Create an entry for a restaurant using "INSERT"
* Read back your restaurant using "SELECT"
* Update your restaurant using "UPDATE"
* Delete your restaurant using "DELETE"
* Use the WHERE clause to filter results

## Additional Reading

<hr/>

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

## Additional Reading