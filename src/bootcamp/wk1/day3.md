# Bootcamp > Week 1 > Day 3

## Overview of the day

Today we take flight! The first session introduces static class functions. These will help us add a new layer of interactivity to our airports exercise. 

## Additional resources
If you are struggling with any of the concepts from today, the following resources will help:
  * [Introduction to JavaScript Classes](https://www.w3schools.com/js/js_classes.asp)
  * [JavaScript Class Reference](https://www.w3schools.com/jsref/jsref_classes.asp)
  * [Using test coverage with Jest](https://egghead.io/lessons/javascript-track-project-code-coverage-with-jest)

## Lesson 1 - Take off and landing

## Learning Objectives

* Define static class functions and properties
* Access static class functions and properties

## Before we start

You need to have completed the work on airports so you have a codebase with the following classes defined and tested:

* Bag
* Passenger
* Plane
* Airport

## Materials needed

* Jest

## Lesson

Previously we have been created objects using classes and the `new` keyword. We have been constructing data structures in our code. For example the plane class contained passengers and each passenger had 1 or more bags. To complete our programme we really want to be able to move our planes (and the passengers they contain) from one airport to another.

To do this, we need to be able to access one airport from another airport. We can't do this using the properties and functions of an instance of an airport. For example if we created London Heathrow (LHR). Then Los Angles (LAX). How can we connect them?

`london.addAirport(LAX)`

You can see that is clumsy, hard to keep track of. Each new airport needs to be in sync with all the rest.

### Static properties

You can tell we need somewhere we can keep all the airports that we create. If we use a static class property we can easily keep all the instances of the airports we create in one place. Read the code snippet below. Can you see what we are doing here?

```javascript
class Airport {
    static airports = []
    
    constructor(name) {
        this.name = name
        this.planes = []
        this.constructor.airports.push(this)
    }
    
    land(plane) {
        this.planes.push(plane)
    }
}
```

On the `Airport` class itself we are able to access each instance of an airport that is created `Airport.airports` is an array of all instance of `Airport`.

## Assignment

Can you write the `takeOff` function on an instance of an airport that should take a plane as an argument, find that plane in the airport's planes array and remove it, then push it into the inbound airport's array of planes. This will effectively move the plane object from one airport to another.

Remember to write tests that prove all the functionality that we have talked about.

<hr/>

## Lesson 2 - Inheritance

## Learning Objectives

* Demonstrate sharing functionality through inheritance

## Before we start

* You should have created a Passenger class in your airports exercise

## Materials needed

## Lesson

The final object orientated pattern we are going to look at is inheritance. This is a way to share functionality in an object orientated paradigm. The idea is very simple. You extend base classes that already exist with additional functionality. If we look at our airports system we have 2 kinds of travellers.

|Passengers|Crew|
|-----|-----|
|![passengers](https://user-images.githubusercontent.com/4499581/93331580-6b38a780-f818-11ea-835c-1c579dfe481d.jpg)|![crew](https://user-images.githubusercontent.com/4499581/93331575-67a52080-f818-11ea-8308-af97a9a6d6cc.jpg)|

Both are people, both have a name and bags when they travel.

### Base class `Person`

A base class is the base from which you might create other types of classes. Lets refactor our code to use a base class `Person`. A person will have a name and bags - basically the current Passenger class definition we have now needs to be renames to be `Person`. Now to restore our `Passenger` class we should import the base class into our `Passenger` definition and extend it like this.

```javascript
const Person = require('./Person')

class Passenger extends Person {}
```
That is enough to fix all our current tests. Everything should work as it was. When we create a `new Passenger('bob')` we will be able to call `addBag` as this functionality has been inherited from the `Person` class. Our passengers might want particular functionality like `callAttendant`.

```javascript
const Person = require('./Person')

class Passenger extends Person {
    callAttendant() {
        console.log('Excuses me, Hay there!')
    }
}
```

### instanceof

Can you see where this is going? One useful operator I want to introduce at this point is `instanceof`. Now you can make classes, in your code some times you'll want to know what an object is. For example, you might want to know is this person a `Passenger` or a `Crew` member? You can use `instanceof` to help you work that out.

```javascript
test('is an instance of a Passenger', () => {
    const betty = new Passenger('Betty')
    expect(betty instanceof Passenger).toBeTruthy()
})
```

## Assignment

* Can you create the `Crew` class by extending the `Person` class?
* Refactor the `Plane` class to have a `crew` property
* When `board` is called on an instance of a plane, you should iterate over the array and put crew and passengers in the correct property in the plane instance.
* `Crew` members should be able to `crossCheck` make sure you can call `crossCheck` on a crew member, it should return a boolean. If all the crew on the plane are instances of the `Crew` class `crossCheck` should return true, otherwise it should return false.
* All your refactoring should have tests that cover it

When you have completed these tasks can you create a coverage report using Jest. Add the following line to your package.json

```json
{
  "scripts": {
    "test": "jest --watchAll",
    "test:report": "jest --coverage=true"
  },
  "dependencies": {
    "jest": "^26.4.2"
  }
}
```
Then run `npm run test:report` you are aiming for 100% test coverage. When you run this you should see that Jest generated a 'coverage' report in your project folder. If you navigate to `/coverage/Icov-report/index.html` and open it in your browser you'll see a helpful report of your test coverage.

![test coverage report](https://user-images.githubusercontent.com/4499581/93334401-cc627a00-f81c-11ea-9c98-4825235c06a4.png)

This is interactive try clicking on one of the class definitions.

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/155)

[main](/swe)|[prev](/swe/bootcamp/wk1/day2.html)|[next](/swe/bootcamp/wk1/day4.html)

