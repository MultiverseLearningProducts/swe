# Bootcamp > Week 1 > Day 2

[Bootcamp > Week 1 > Day 2](https://whitehatlearningproducts.github.io/swe/bootcamp/wk1/day2.html)

# Day 2 Session 2 - Airports

## Learning Objectives

* Create an object using the `new` keyword
* Explain what the `new` keyword does when you use it to create an object 

## Pre-work or Assumed knowledge

* using objects in javascript accessing properties

## Materials

* [Airport Ambience Sounds](https://youtu.be/zQG5OdBnYfA)

## Notes

Let the cohort name objects in an airport, we are going to pick just 4 Bags, People, Planes and the Airport itself. The analogy of a rubber stamp is some what simplified. What is interesting to underscore is the class definition is not really used in the programmes we write, they serve as the source of objects that actually play a part in a programme.

Get them creating bags and testing the properties. This should be a code along session. With bags you can introduce Passengers, later we will talk about inheritance and use a Person base class then extend it to be a Passenger. Make sure everyone has a test that traverses the person and checks they have a bag or bags within them, and that they can read the weight.

This idea of creating structures in code is important. 

## Assessment Criteria 
Apprentices should begin to create more structure in their  code. In their final assignment for the session make sure apprentices are showing better use of creating objects, working with inheritance, and base classes to create effective tests and structure. All work should be shared via GitHub with the coach. 


## Overview 
| Overview | Timing    |
| ------ | --------- |
| [Welcome](#Welcome) | 10 mins   |
| [Objects and Classes](#Objects-and-Classes) | 15 mins   |
| [TDD for bags](#TDD-for-bags) | 15 mins   |
| [Bags belong to a Passenger ](#Bags-belong-to-a-Passenger ) | 15 mins|
| [Assignment](#Assignment) | 5 min overview |
| **Overall** | **1 hr** |

## Detailed Notes: Day 2 Session 2 - Airports 

### Welcome 
[back](#Overview)
#### 10 minutes 
We are going to create an Airports system. This exercise is designed to introduce you to the idea of Object Orientated Programming (OOP). In OOP we construct our programmes using objects. These objects are often abstractions of real life objects. For example it is common for a person who uses a programme to be represented in the programme with a User object.

#### Turn and Talk/Separate into breakout rooms
What are some of the objects that you might expect to find in an airport? All answers are correct!  (Give apprentices 5 minutes)

So what were some of the things you would expect to find in an airport? _Hear a few responses_

### Objects and Classes 
[back](#Overview)
#### 15 minutes 
There are a lot of objects that we can find in an airport. For today, we are going to focus on four to get us started and then maybe we can program the rest of them. 
Our airport system is going to have the following objects in it:
* Bag
* Person
* Plane
* Airport

What does a bag have? A weight. It also has a relationship to a person. A person owns a bag.

One of the important things to think about in Object Oriented Programming (OOP) is which object is responsible for what properties or behaviors. Our bag should have a weight. Now in our airport system there are going to have lots and lots of bags. We can make a bag each time in our code like this:

`const bag = {weight: 16}`

That is fine for a simple object, but someone might come along and make a bag like this:

`const bag = {kg: 16}`

We actually want to standardise our bags. Why do you think we might want to do that? 
_Take apprentice responses. Some responses, to make the code easier to read, run tests that reference specific types of code, etc. _

What we want is a way to create bags that all follow the same format. Like a rubber stamp, stamping out the same graphic each time.

The way to make yourself a "rubber object stamper" is to create a class and use the `new` keyword to instantiate instances of your class. In other words you use the `Bag` class to make bag objects in your programme.

`class Bag {
	constructor(weight) {
        this.weight = weight
    }
}
`const bag = new Bag(16)`
`console.log(bag.weight) // 16`

In the code example above we declare a `class` using the class keyword. The name of the class should be capitalised and singular. After the class name comes the block that contains the class definition. Seeing as when we create a new bag we want it to have a weight, we have declared a "constructor" function. This is called when we use the new keyword, and any arguments are passed into this function. Can you see how we add a property `weight` to the `this` object? `this` refers to the instance of the class that we just created.

#### On Your Own
Try it out! Take a few minutes to create your class and give your bag a unique weight. When you are ready to move on let me now by tilting your screen or if on zoom give a “thumbs up” reaction emoji. 

### TDD for bags 
[back](#Overview)
#### 15 minutes 
We know that as we programme we should be writing tests for our code. 

Can you create a unit test for this Bag class?

If you try to create a bag without a weight - the constructor should throw an Error. This protects our programme from trying to do calculations on bag.weight and reading undefined as the value for weight. Why would the weight be `undefined`?

So let’s try to write a failing test first. Take 5 minutes to think of what it could be and write it out. 

_Coach Note
If needed because you are getting blank faces after 2 minutes share the hint below: 
HINT for the error to look for: 
`expect(() => new Bag()).toThrowError('bag must have a weight')`_

So what was the test you created? 
_Get 2 to 3 responses from apprentices. Once you have their ideas share what you did for a fail test_

Notice how we have to run a function inside `expect` to trigger the error and catch it. If we just wrote the following:
`expect(new Bag()).toThrowError('bag must have a weight')`

It would be like calling expect with `Error` and then expecting the Error to throw (which it wont, it's too late the trap has been sprung). You'll need to update your Bag class to throw an error if no weight is passed into your constructor. Below is the syntax to throw an error.

`throw new Error('some error message in here')`

Can you spot the `new` keyword above? What do you think that is doing in the Error class definition?

### Bags belong to a Passenger  
[back](#Overview)
#### 15 minutes 
Our airport system has bags. We also need passengers. Let's make a Passenger class. Passengers should have:
* A name
* Bags

People often fly with a few bags. Our passengers should be able to carry a few bags. Which data structure would work well here?

Create new files for your Passenger tests and Passenger class. Write the tests as you go. To add a bag to a passenger I should be able to call a function on the instance of a passenger. Read the code below:

`const bob = new Passenger('Bob the Builder')
`const bobsCabinBag = new Bag(9)
`const bobsHullBag = new Bag(23)
`bob.addBag(bobsCabinBag)
`bob.addBag(bobsHullBag)
`console.log(bob.bags) // [ Bag { weight: 9 }, Bag { weight: 23 } ]

The way to define a function on a class is like this:

`class Passenger {
    constructor(name) {
        this.name = name
        this.bags = []
    }
    addBag(bag) {
        this.bags.push(bag)
    }
`}
`module.exports = Passenger

#### Check for understanding
Ask apprentices if they can identify what is happening in each code. You can label the code as below: 

`class Passenger {              A
    constructor(name) {         B
        this.name = name        C
        this.bags = []
    }
    addBag(bag) {               D 
        this.bags.push(bag)     E
    }
`}
`module.exports = Passenger     F

You can describe something that is happening and have apprentices write on a piece of paper and share on their screen which letter is the thing happening. 

For example, class Passenger is created is A

If you notice anyone shows the wrong letter explain why the description matches the letter

### Assignment  
[back](#Overview)
#### 5 minutes 
Now we have passengers with bags, they are ready to board their flight! Can you:
* Create a Plane class
* Instances of a Plane should have a function to board passengers
* A Plane should also have a destination that is an Airport name
* Create an Airport class
* Airports should have a name
* Instances of an Airport should have a function to land planes
* One test should assert you have an airport, with a plane, on the plane are passengers & you can read the weight of one of the bags of a passenger
* Write tests as you go in the test driven development style. You should be able to create any number of airports, create planes, land planes at airports, create passengers with bags, have the passengers board a plane.
* Remember to create your code via GitHub and share with your coach. If needed, you can pair program for this assignment

