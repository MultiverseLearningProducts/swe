# Week 2 > Day 4

## Overview of the day

The aim of today is to integrate our classes with a persistent layer. So the state in our app will last from one running instance to the next. You know how to create a class. You know how to write data into a database. When we create a new instance of a Restaurant we also want to create a new entry in our database. When we create a new Menu we will also want to create that menu in the database, and associate it with the right restaurant, and have an instance of a menu in the menus array in our restaurant. When we get a restaurant out of the database, we want to instantiate a new instance of our Restaurant class with that data, and fetch the menus, and fetch the items for each menu.

This mapping between databases and classes is called Object Relational Mapping (ORM).

----

## Lesson 1 - Object Relational Mapping

## Learning Objectives

* Implement an ORM design pattern

## Before we start

* install jest & sqlite3

## Materials needed

* Find your class definitions for Restaurant, Menu & Item

## Lesson

We are representing objects in our programme with classes, and in the database as rows. We can't store an instance of class in the row of a database. We can't really use the row of a database in our programme. The ORM pattern is about abstracting away the database layer. In our programme we just need to think about instances of Restaurant the work of adding them and getting them from the database is removed from our programme interface, and contained in the class definition.

Lets start in a simple way by looking at the work of adapting our class definition for Restaurant to also create and be able to fetch Restaurants backed by a database. In both our tests and our programme we have to make sure the database is set up with the tables we need to store our restaurants in. I would suggest creating a file that initialises the database and exports it.

```javascript
// db.js
const {Database} = require('sqlite3')
const location = process.env.NODE_ENV === 'test' ? ':memory:' : './db.sqlite'
module.exports = new Database(location)
```
In the example above if we are running out tests, the value of `process.env.NODE_ENV` will be 'test', so when our tests are running we always start with an empty database, it will be a new instance of the database each time we run our tests. When we come to just run this code in 'development' or 'production' we'll locate a file that will hold our data.

We should start with a failing test, and practice "Test Driven Development" (TTD). Our class can assume that the database is ready to read and write to. So for our tests we can use the `beforeAll` function that Jest gives us to run some async code <u>before</u> all our tests run. Our test wants to make sure when we create a new restaurant it is saved to the database.

```javascript
const Restaurant = require('./Restaurant')
const db = require('./db.js')

describe('Restaurants', () => {
    beforeAll((done) => {
        db.run('CREATE TABLE IF NOT EXISTS restaurants(id INTEGER PRIMARY KEY, name TEXT, image TEXT);', done)
    })

    test('When a Restaurant is created it is stored in the database', async (done) => {
        const restaurant = await new Restaurant({name: 'Boo Jangles', image: 'https://some.image.url'})
        expect(restaurant.id).toBe(1)
        db.get('SELECT * FROM restaurants WHERE id=?;', 1, (err, row) => {
            expect(row.name).toBe('Boo Jangles')
            done()
        })
    })
})
```
Nice. We also want to test that we can create a new instance of a Restaurant from a row. Can you make sure this test also passes:
```javascript
test('can create an instance of an restaurant from a row', (done) => {
    db.get('SELECT * FROM restaurants WHERE id=?', 1, async (err, row) => {
        const restaurant = await new Restaurant(row)
        expect(restaurant.id).toBe(1)
        expect(restaurant.name).toBe('Boo Jangles')
        db.get('SELECT COUNT(id) AS total FROM restaurants;', (err, count) => {
            expect(count.total).toBe(1)
            done()
        })
    })        
})
```

## Assignment

* Completely build out the whole data model, with tests, for Restaurant, Menu, Item
* Don't worry about the associations just yet, we will do that next

----

## Lesson 2 - hasMany & belongsTo

## Learning Objectives

* Write logical code in javascript to interact with a SQL database
* Write async code in javascript

## Before we start

* You will need your 3 classes defined (with tests)

## Materials needed

* Jest and Sqlite3

## Lesson

There is an important dimension missing from our implementation. Relationships. Our restaurants have menus. We want to be able to access our menus like this:

```javascript
restaurant.menus // [Menu, Menu]
```
and each menu we want to be able to access the items of a menu:
```javascript
menu.items // [Item, Item]
```
That means there is more work to be done. Our Restaurant class needs a function that will create and add a menu instance to the restaurant. The same will apply with the menu class and an item.

```javascript
async addMenu(title) {
    const menu = await new Menu({title, restaurant_id: this.id})
    this.menus.push(menu)
}
```
Then we have the work to go get the items for a menu, and the menus for a restaurant. So when I instantiate a Restaurant with a row from the database (the restaurant is stored with an id), I will also need to go get all the menus. That way a new instance of a restaurant has all it's menus in place, and each of those menus have their items in place. I expect to be able to drill down through all my connected data like this:
```javascript
restaurant.menus[0].items[0].price // 12.50
```

## Assignment

* Complete the relationships between your classes
* Make sure you have tests that cover the functionality
* Share your test coverage report with your coach (screen grab in Slack will be fine)

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/161)
[main](/swe)|[prev](/swe/bootcamp/wk2/day3.html)|[next](/swe/bootcamp/wk2/day5.html)
