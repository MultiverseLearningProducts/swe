# Bootcamp > Week 3 > Day 5

## Overview of the day

Today is about consolidating everything you have learnt this week. 

You will extend your restaurant app to create a review ratings service and implement server-side validation.

If you complete this, you can then add further functionality to allow menus and menu items to be created, read, updated and deleted. 

----

## Lesson 1 - Ratings 

## Learning Objectives

* Extend your data model to include a star rating for each restaurant. Get ideas from sites like [Trip Advisor](https://www.tripadvisor.co.uk/) or [Trust Pilot](https://uk.trustpilot.com/)


## Materials needed

* Sequelize
* Star icons ☆ ★

## Lesson

Customers of each restaurant are able to rate their visit to a restaurant. 

This means we need to extend our data model to include a `Rating` class/table which is associated to the `Restaurant` table as follows:
```js
Restaurant.hasMany(Rating, {as: 'ratings', foreignKey: 'restaurant_id'})
Rating.belongsTo(Restaurant, {foreignKey: 'restaurant_id'})
```

A Rating will consist of a 'number of stars', from 0-5.
> ☆ ☆ ☆ ☆ ☆ 

> ★ ★ ★ ★ ★

To display the overall rating you will need to `findAll` the ratings associated to a restaurant and then calculate the average, displaying this as a star (or other) icon on the screen.

Extend the rating functionality even further by allowing review comments to be added alongside the star rating.


## Assignment

Add a ratings system for the restaurant model.

* The restaurant should display the average rating out of 5 stars, from all the ratings that have been awarded to it.
* On a restaurant page you should be able to add a rating.
* Ratings need to be displayed on the restaurant page, and the card.
* If you want to include the names of random users in your reviews then checkout [Mockaroo](https://www.mockaroo.com/) for mock data.

## Lesson 2 - Server side validation
In previous lessons we have added client side validation to check for the user entering a valid restaurant name and url. However, client side validation can be subverted either by disabling JavaScript in the browser, or, my using a tool such as Postman to call the API directly, bypassing the form.

Listen to this [short video (3mins)](https://www.youtube.com/watch?v=vVJ2ukke34s) which explains why this can be a problem. Also think back to last week when we discussed [SQL injection attacks](https://portswigger.net/web-security/sql-injection). 

In this lesson you are going to use [express validator](https://express-validator.github.io/docs/) to add some server side validation to ensure the user's review cannot be used by a malicious user to enter content such as html or sql or even to enter a huge amount of text which could break the backend. 

To install `express validator` run:

`npm install express-validator`

Require this in your `server.js` file
```js
const { check, validationResult } = require('express-validator');
```

You can now add validation to your route to ensure the star rating is a number and `sanitise` the review:

```js
app.post('/restaurants/:id/ratings', [
    check('stars').isNumeric(),
    check('review').not().isEmpty().trim().escape()
    ], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
```

## Assignment

Add server-side validation for all routes which accept form data. Use the [express validator](https://express-validator.github.io/docs/index.html) website for more validation options.


### TODO - relocate this content - please ignore for now
You will find yourself thinking "what shall I name this route". This morning I want to introduce you to the RESTful pattern.

!(https://docs.google.com/presentation/d/e/2PACX-1vQS_RdDgrFiEHaD2Nxm0aNLw6ICCpntv638tO0ITZjZdHXRVSMMJ7bXEZE4x0tmpHdNwOQpEBOwCvOg/embed)

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/167)
[main](/swe)|[prev](/swe/bootcamp/wk3/day3.html)|[next](/swe/bootcamp/wk3/day5.html)