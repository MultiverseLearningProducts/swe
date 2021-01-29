# Week 2 > Day 5

## Overview of the day
*Coach notes: If students do not have time to reach this lesson then they can checkout the solution code and run it instead. Instructions are at the bottom of this page*

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

Create a file named `sequelize_index.js` with the following content:
```js
const {Sequelize, DataTypes, Model} = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',
    storage: './restaurants-seq.sqlite'
});

 module.exports={sequelize, DataTypes, Model};
```
This file contains code that would otherwise be duplicated in the individual model classes. It sets up a connection to the database and imports sequelize types. You can also see that it would be very easy to specify a different type of database in the future just by changing this config.

### Testing code written using Sequelize
Let's start with a failing test:

```javascript
const {sequelize} = require('./sequelize_index');
const {Restaurant} = require('./Restaurant')

describe('Restaurant', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a restaurant', async () => {
        await sequelize.sync({ force: true }); // recreate db
        const restaurant = await Restaurant.create({ name: 'Ronalds', image: 'http://some.image.url' })
        expect(restaurant.id).toBe(1)
    })
})
```
Before we start our tests (or later our application server) we need to call and wait for `sequelize.sync()`. This command performs a SQL query to the database and creates tables (based on our class models) or modifies the table structure to match the class models. The `{ force: true }` parameter forces the tables to be recreated each time the test suite is run (this ensures the `expect` line passes as there will only be a single row in the database).

In our test you can see the API for sequelize. To create a new instance of a Restaurant we call a static method on the class called `create`. We pass in an object with the field names, and the values we want to store. In our test which kind of async function are we using?

### Defining the model
Models are fundamental to Sequelize. A Model represents a table in your database. It is represented by a class that extends `Model`. Here is an example for the `Restaurant` class.

```javascript
const {sequelize, DataTypes, Model} = require('./sequelize_index');

/**
 * Represents a Restaurant
 */
class Restaurant extends Model {

    // add methods here

}
Restaurant.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
});

module.exports = {
    Restaurant
};
```
In the code above we de-structure assign three constructors from the sequelize module: Sequelize, Model & DataTypes. 

Our class definition just requires us to extend from the Sequelize class `Model` (note that there are alternative methods to inheritance if required), plus the addition of an `init` method which defines the table columns and their types. The `timestamps: false` setting avoids a `created_at` column appearing. There are many more customisations you can achieve if you refer to the [Sequelize documentation](https://sequelize.org/master/).

## Assignment

* Create a project (run `npm init`) and add dependencies on  sqlite3, jest and sequelize (as per the installation instructions above)
* Create Restaurant, Menu and Item classes
* Add code to map each class to a database table in a new database file (ignore relationship for now). use the `Restaurant` class above as an example.
* Create a test based on the code above to check that your tables are created and that you can insert data into them.

---
**Note:**
If you get stuck, here is the [sample solution](https://github.com/MultiverseLearningProducts/swe-solutions/tree/main/bootcamp/wk2/day5).

----

## Lesson 2 - Sequelize relationships

## Learning Objectives

* Complete your knowledge of sequelize by implementing the Restaurant model with relationships between tables

## Before we start
You must have completed Lesson 1

## Materials needed
* sqlite3, jest, sequelize

## Lesson
To connect tables in `sequelize` your model definitions simply need to specify their relationships. For example, we simply add the following 2 lines to the `Restaurant` class:

```javascript
Restaurant.hasMany(Menu, {as: 'menus', foreignKey: 'restaurant_id'})
Menu.belongsTo(Restaurant, {foreignKey: 'restaurant_id'})
```

Sequelize will do all the hard work of creating the new foreign key columns!

We can test the relationships have been setup correctly using the following code:
```javascript
const {sequelize} = require('./sequelize_index');
const {Restaurant} = require('./Restaurant');
const {Menu} = require('./Menu');
const {MenuItem} = require('./MenuItem')


describe('Relationships', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    })
    
    test('restaurants have menus', async () => {
        const restaurant = await Restaurant.create({name: 'Ronalds', image: 'http://some.image.url'})
        const menu = await Menu.create({title: 'set 1'});
        await restaurant.addMenu(menu);
        const menus = await restaurant.getMenus();
        const menuItem = await MenuItem.create({name: 'egg', price: 2.00});
        await menus[0].addMenuItem(menuItem);
        const menuItems = await menus[0].getMenuItems();

        expect(menuItems.length).toBe(1);

        expect(menus[0].title).toBe('set 1');
    })

})
```
Note that the `sequelize` library is build using promises, so we can use async await in our code.

## Assignment

* Configure the relationships between your models
* Write tests that prove your relationships are all correctly connected
---

**Note:**
If you get stuck, here is the [sample solution](https://github.com/MultiverseLearningProducts/swe-solutions/tree/main/bootcamp/wk2/day5).

If you have been given the solution, you should copy it into a new directory and run `npm install` which will create all the node_module dependencies. 

You will see 3 classes, Restaurant, Menu and MenuItem and some commented out code at the end of each. Try uncommenting this code and run `node Restaurant.js`. This should create a new table in a database called `restaurants-seq.sqlite` with a single row inserted. Try the same thing with the Menu and MenuItem classes and make sure the tables and rows get created ok. 

Now put the commented code in each class back and then run the `Relationships.test.js` file. You should see a Restaurant, Menu and MenuItem get inserted. Play around with the test to add more data and then try to query the data.

---

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/162)
[main](/swe)|[prev](/swe/bootcamp/wk2/day4.html)|