# Week 2 > Day 5

## Overview of the day

The aim of today is to learn the ORM pattern for the most popular SQL ORM available for Node.js - [Sequelize](https://www.npmjs.com/package/sequelize). There are similar frameworks available for other languages, for example:
   * [Hibernate for Java](https://hibernate.org/)
   * [Entity Framework Core for .NET](https://docs.microsoft.com/en-us/ef/core/get-started/overview/first-app?tabs=netcore-cli)

This is also a day to practice and consolidate what you have learnt this week.

----

## Lesson 1 - Sequelize

## Learning Objectives

* Implement a data model with Sequelize

## Before we start
* You should have completed Day 4 and have built a simple Object Relational Model (ORM) using classes and sqlite3 SQL prepared statements, tested with Jest. 

## Materials needed

* sqlite3, jest, sequelize

## Lesson
You should now understand the ideas behind the "Object Relational Mapping" design pattern. As you have seen, it is possible to build an ORM from scratch for each project, but it is time consuming and requires careful management of resources. There are many frameworks available which do the ORM job for you hence freeing you up to spend time on problems unique to your software solution. Your app will have a much more solid foundation if it is built with an ORM framework. Today we are going to learn to use Sequelize.

Note that you can read complete detail on to use Sequelize in the [documentation](https://sequelize.org/master/) but we will discuss the most important aspects below.

### Installing Sequelize
Sequelize is a promise-based Node.js ORM for multiple database including SQLite. 

To install Sequelize run:
` npm install sequelize`

You must also ensure you have the the driver installed for SQLite:
` npm install sqlite3`

### Testing code written using Sequelize
Let's start with a failing test:

```javascript
const {Restaurant, sequelize} = require('./Restaurant')

describe('Restaurant', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true })
    })

    test('can create a restaurant', async () => {
        const restaurant = await Restaurant.create({name: 'Ronalds', image: 'http://some.image.url'})
        expect(restaurant.id).toBe(1)
    })
})
```
Lets walk through the code above. First of all, we are importing our class from a file called `./Restaurant.js` and an object called `sequelize` represents our database connection. Before we start our tests (or later our server) we need to call and wait for `sequelize.sync()`. This command performs a SQL query to the database and creates tables (based on our class models) or modifies the table structure to match the class models. The `{ force: true }` parameter forces the tables to be recreated each time the test suite is run (this ensures the `expect` line passes as there will only be a single row in the database).

In our test you can see the API for sequelize. To create a new instance of a Restaurant we call a static method on the class called `create`. We pass in an object with the field names, and the values we want to store. In our test which kind of async function are we using?

### Defining the model
Models are fundamental to Sequelize. A model represents a table in your database. It is represented by a class that extends `Model`.

```javascript
const { Sequelize, Model, DataTypes } = require('sequelize')

// create a database connection
const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',
    storage: './restaurants-seq.sqlite'
});

class Restaurant extends Model { 
    /* your normal methods would go here */
}

/* Sequelize specific code to map the class to a DB table */
Restaurant.init({
    name: DataTypes.STRING,
    imagelink: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
});

module.exports = {
    Restaurant,
    sequelize
}
```
In the code above we de-structure assign three constructors from the sequelize module: Sequelize, Model & DataTypes. We create a new instance of a sequelize connector and pass in config for our database. One benefit of using this library is we have a choice of different database we can use, and to swap them out we just change this config.

Our class definition just requires us to extend from the Sequelize class `Model` (note that there are alternative methods to inheritance if required), plus the addition of an `init` method which defines the table columns and their types. The `timestamps: false` setting avoids a `created_at` column appearing. There are many more customisations you can achieve if you refer to the [Sequelize documentation](https://sequelize.org/master/).

## Assignment

* Create a project (run `npm init`) and add dependencies on  sqlite3, jest and sequelize (as per the installation instructions above)
* Create Restaurant, Menu and Item classes
* Add the custom Sequelize code to map each class to a database table in a new database file (ignore relationship for now)
* Create a test based on the code above to check that your tables are created and that you can insert data into them.

If you need help, refer to the [sample solution](https://github.com/MultiverseLearningProducts/swe-solutions/tree/main/bootcamp/wk2/day5).

----

## Lesson 2 - Sequelize relationships

## Learning Objectives

* Complete your knowledge of sequelize by implementing the Restaurant model with relationships between tables

## Before we start
You must have completed Lesson 1

## Materials needed
* sqlite3, jest, sequelize

## Lesson
To connect tables in `sequelize` your model definitions need to specify their relationships.

```javascript
Restaurant.hasMany(Menu)
Menu.belongsTo(Restaurant)
```
Now we can use them like this:
```javascript
describe('Relationships', () => {
    beforeAll(async () => {
        await sequelize.sync()
    })
    
    test('restaurants have menus', async () => {
        const restaurant = await Restaurant.create({name: 'Ronalds', image: 'http://some.image.url'})
        const menu = await Menu.create({title: 'set 1'})
        await restaurant.addMenu(menu)
        const menus = await restaurant.getMenus()
        expect(menus[0].title).toBe('set 1')
    })
})
```
The `sequelize` library is build using promises, so we can use async await in our code.

## Assignment

* Configure the relationships between your models
* Write tests that prove your relationships are all correctly connected

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/162)
[main](/swe)|[prev](/swe/bootcamp/wk2/day4.html)|