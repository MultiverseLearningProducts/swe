# Week 2 > Day 5

## Overview of the day

Knowing the ORM pattern learn to use the most popular SQL ORM avaliable for Node.js - [Sequelize](https://www.npmjs.com/package/sequelize). This is a day to practice and consolidate what you have learnt this week.

<hr/>

## Lesson 1 - Sequelize

## Learning Objectives

* Implement a data model with Sequelize

## Before we start

* You should have built a simple ORM from scratch with jest and sqlite3

## Materials needed

* sqlite3, jest, sequelize

## Lesson

You should now understand the ideas behind the "Object Relational Mapping" design pattern. You can build an ORM from scratch for each project, but this problem has already been solved, better to spend your time on problems unique to your software solution. Your app will have a much more solid foundation if it is built with this well used library. Today we are going to learn to use this library.

Start with a failing test:

```javascript
const {Restaurant, sequelize} = require('./model')

describe('Restaurant', () => {
    beforeAll(async () => {
        await sequelize.sync()
    })

    test('can create a restaurant', async () => {
        const restautant = await Restaurant.create({name: 'Ronalds', image: 'http://some.image.url'})
        expect(restautant.id).toBe(1)
    })
})
```
You can read about how to use sequelize in the [documentation](https://sequelize.org/master/) (that's all I have done). Lets go through the code above. First of all we are importing our class from a file called `./model.js` and an object called `sequelize` that represents our database connection. Before we start our tests (or later our server) we need to call and wait for `sequelize.sync()` that is going to set up all our tables ready for our models. You did this in your code.

In our test you can see the API for sequelize. To create a new instance of a Restaurant we call a static method on the class called `create`. We pass in an object with the field names, and the values we want to store. In our test which kind of async function are we using?

### Defining the model

```javascript
const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = new Sequelize('sqlite::memory:')

class Restaurant extends Model {}

Restaurant.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING
}, { sequelize, modelName: 'restaurant' })

module.exports = {
    Restaurant,
    sequelize
}
```
In the code above we destructure assign three constructors from the sequelize module. We create a new instance of a sequelize connector and pass in config for the database. One benefit of using this library is we have a choice of different database we can use, and to swap them out we just change this config.

Our class definition is very simple (seems like cheating) we get all the functionality we need from `sequelize`. Then we define out fields and their types by passing an object to the static class function `init`, the second argument is the database connection and a short name for the model.

## Assignment

* Set up a project with sqlite3, jest and sequelize
* Create a data model with Restaurant, Menu and Item (like we have before)

<hr/>

## Lesson 2 - Sequelize relationships

## Learning Objectives

* complete your knowledge of sequelize by implementing the Restaurant model with relationships

## Before we start

You should have a project with the three classes Restaurant, Menu, Item with tests all set up

## Materials needed

* sqlite3, jest, sequelize

## Lesson

Relationships. Very powerful. Lets figure out the simple way to work with relationships in `sequelize`. First of all in your model definitions need to include the relationships.

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

[attendance log](https://applied.whitehat.org.uk/mod/questionnaire/complete.php?id=6702)
[main](/swe)|[prev](/swe/bootcamp/wk2/day4.html)|