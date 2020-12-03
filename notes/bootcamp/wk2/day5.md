# Bootcamp > Week # > Day #

## Overview of the day

Use an ORM library i.e. Sequelize

# Session 1 - Sequelize

## Learning Objectives

* Implement a data model with Sequelize

## Pre-work or Assumed knowledge

* You should have built a simple ORM from scratch with jest and sqlite3

## Materials

## Notes

This session introduces Sequelize. You can make a new branch and blow away the previous ORM implementation. Step through adding the sequelize library, and show how to re-create the Restaurant class.

You can keep the tests, but you'll have to refactor them a bit. Use `test.skip()` to narrow down the failing tests as you alter the interfaces for the `Restaurant` entity.

## Assignment

## Additional Reading

<hr/>

# Session 2 - Sequelize relationships

## Learning Objectives

* complete your knowledge of sequelize by implementing the Restaurant model with relationships

## Pre-work or Assumed knowledge

* should have a project with the three classes Restaurant, Menu, Item + tests

## Materials

N/A

## Notes

There are different ways to do the same thing in sequelize. You can add a menu like this:

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

Or like this:

```javascript
describe('Relationships', () => {
    beforeAll(async () => {
        await sequelize.sync()
    })
    
    test('restaurants have menus', async () => {
        const restaurant = await Restaurant.create({name: 'Ronalds', image: 'http://some.image.url'})
        restaurant.createMenu({title: 'set 1'})
        const menus = await restaurant.getMenus()
        expect(menus[0].title).toBe('set 1')
    })
})
```

The docs are quite good for sequelize and there is lots on stack overflow. You can use the 'include' API to get entities with their dependents pre-populated. For example get a restaurant and its menus like this:

```javascript
describe('Relationships', () => {
    beforeAll(async () => {
        await sequelize.sync()
    })
    
    test('restaurants have menus', async () => {
        const _restaurant = await Restaurant.create({name: 'Ronalds', image: 'http://some.image.url'})
        _restaurant.createMenu({title: 'set 1'})
        
        const restaurant = await Restaurant.getByPk(_restaurant.id, {
            include: {model: 'Menu'}
        })

        expect(restaurant.Menu[0].title).toBe('set 1)
    })
})
```

This would be good to demo.

## Assignment

You are looking for correct usage of the sequelize library to create entities, relate them together, perform CRUD operations and fetch entities with their dependents.

## Additional Reading