# Bootcamp > Week 1 > Day 4

## Overview of the day

<hr/>

## Lesson 1 - The Event Loop

## Learning Objectives

* Demonstrate a deeper understanding of async code in javascript by naming key parts of the event loop 
* Recall the meaning of 'stack overflow'

## Before we start

* You should have written an async function in the 3 different styles: callbacks, promises and async await

## Materials needed

* [reference video](https://youtu.be/8aGhZQkoFbQ)

## Lesson

Javascript is a single threaded runtime. Single threaded means one thing at a time. In reality that means one stack.

### What is the stack?

The stack is a data structure in the runtime that functions to organise the running or 'execution' of your code.

![an animation of a stack](https://miro.medium.com/max/1280/0*SESFJYWU5a-3XM9m.gif)

Last on first off. Imagine a stick over which you can place hoops. To get to the bottom hoop, all the other hoops above it have to come off first.

![stack of hoops](https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B000U02LXY&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=toy-ideas-20&language=en_US).

When your code is executed, javascript will run it in 2 passes. The first pass optimises your code for execution. The second pass actually runs your code, and it is in this second pass that javascript uses the stack.

### How does javascript use the stack?

Lets take the following code example:

```javascript
function multiply(a, b) {
    return a * b
}
function square(n) {
    return multiply(n, n)
}
function printSquare(n) {
    const result = square(n)
    console.log(result)
}

printSquare(4)
```
Read the code above. First of all there are 3 function definitions, then one of those functions is called. When `printSquare` is called it is put onto the stack. `printSquare` is evaluated and calls `square` which is added to the stack, `square` calls `multiply` which is added to the stack. `multiply` does not call any other function so it returns the value 16. the `return` keyword means that function pops off the stack, now inside `square` that function is evaluated to 16, and returns so `square` is then popped off the stack. Now back in `printSquare` the called to `square` is evaluated and assigned in memory to the variable `result`. Next line console.log is called with 16 and the function implicitly returns (without a value) as there is nothing more to execute. See below:

![call stack](https://user-images.githubusercontent.com/4499581/93218919-af697080-f762-11ea-8a8b-f2ab1b39b4fb.gif)

### What is a stack trace?

The stack is very help to know about. When your code errors, you often get a 'stack trace' as part of the error message. Being able to read the 'stack trace' can help us follow the executing code, and that can lead us to our piece of code that is causing the error.

Try running the code below in your browser.
```javascript
function multiply(a, b) {
    throw new Error(`can't multiply ${a} and ${b}`)
}
function square(n) {
    return multiply(n, n)
}
function printSquare(n) {
    const result = square(n)
    console.log(result)
}

printSquare(4)
```
This is the error. Read the stack trace from the bottom up.
![stack trace](https://user-images.githubusercontent.com/4499581/93219628-78e02580-f763-11ea-9948-81d558dbf65d.png)
What do you think the numbers like (<anonymous:5:12>) refer to?

### Stack overflow

```javascript
function hello() {
    hello()
}
hello()
```
This will break.
![stack overflow error message](https://user-images.githubusercontent.com/4499581/93220411-65818a00-f764-11ea-9a64-b5a92881ecaa.png)
Can you explain what is going on here? What other code might cause a max call stack size exceeded (stack overflow)?

## Assignment

<hr/>

## Lesson 2 - 

## Learning Objectives

## Before we start

## Materials needed

## Lesson

## Assignment