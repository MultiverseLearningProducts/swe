# Mod 2 > Week 1 > Day 1

![microsoft certificate](https://di3xp7dfi3cq.cloudfront.net/pub/media/magefan_blog/w/h/what-jobs-can-you-get-with-mta-cetification.jpg)

## You are going to be come a Microsoft Technical Associate by gaining an industry recognised qualification.

# Primitives, conditionals, functions and scoping

## Learning Objectives

- Learn about primitives, conditionals, functions and scoping
- Write your first app!
- Review the operators in JavaScript

## Lesson 1

### Primitives

Primitives are variables at the lowest level of the language and are the simplest datatypes. There are 7 primitive data types, but we'll focus on the main 5 for now:

- string `const myString = "Hi, Daniel"`
- number `const myNumber = 3.6`
- boolean `const myBoolean = true`
- undefined `const myUndefined` (no assignment = undefined)
- null `const myNull = null`

The important point about primitives is that they cannot be modified after they have been created. Any modification will create a new variable. Let's illustrate this point:

```javascript
const myString = "Hi, Daniel";

console.log(myString.toUpperCase(), myString); // "Hi, DANIEL", "Hi, Daniel"
```

Note that even though we've transformed the string to uppercase, the original variable has not been changed.

### Conditionals

At the heart of computers are transistors and electrical circuits where electrical currents flow. A presence of a current is a 1, or true, and no current is a 0, or false.
This is at the heart of conditions. If something is there, it's true, if not, it's false. We can write this in code:

```javascript
if (myString === "Hi, Daniel") {
  alert("Hey, it's Dan!"); // true
} else if (myString === "Hi, Bob") {
  alert("Hey, it's Bob!"); // true
} else {
  alert("Hey, new person!"); // false
}
```

Here we've used the "strict" conditional (===). This checks that the datatype AND the check in question match. We'll cover operators in more detail later.

We can daisy-chain if conditionals like our example above as much as we want however, after a while they can become hard to read. The Switch statement solves this by providing more concise
syntax.

```javascript
switch (myString) {
  case "Hi, Daniel":
    alert("Hey, it's Dan!"); // true
    break;
  case "Hi, Bob":
    alert("Hey, it's Bob!"); // true
    break;
  default:
    alert("Hey, new person!"); // false
}
```

Switch statement key points for the exam:

- The break keyword "breaks out" of the whole code block
- The break keyword isn't required in the default block

### Functions

There is not one, not two, but THREE ways to declare functions. This is because there's the older way, a newer way, plus a convenient option where we can assign a variable equal to a function.
Let's look at the syntax:

```javascript
// older way
function addition(value1, value2) {
  return value1 + value2;
}

// assigning a function to a variable using older way
const multiply = function (value1, value2) {
  return value1 * value2;
};

// newer "arrow" function form
const subtract = (value1, value2) => {
  return value1 - value2;
};

console.log(addition(29, 2) // 31
console.log(subtract(29, 2) // 27
console.log(multiply(29, 2)); // 58
```

What do you think the "return" statement does? Also, the functions accept what we call "arguments" or "parameters". What are these?

Assignment: you now have all you need to write a simple application. Fire up [JSFiddle](http://jsfiddle.net) and write a function that takes the day as a string argument, then returns what you're normally doing on that day. You will need a conditional in your function to check the day and to return the appropriate value.

### Scoping

Scoping defines whether a function or block of code can access a variable. Here there are two flavours: local scope and global scope. Let's illustrate the difference in code:

```javascript
const globalConstVariable = "Global scope";

function myFunction() {
  var localVarVariable = "Var local scope";

  try {
    let localLetVariable = "Let local scope";
    console.log(globalConstVariable, localVarVariable, localLetVariable); // "Global scope", "Var local scope", "Let local scope"
  } catch (err) {
    console.log(err.message);
  }

  console.log(localVarVariable); // "Var local scope"
  console.log(localLetVariable); // Uncaught ReferenceError: localLetVariable is not defined
}

myFunction();
```

Key points:

- A globally scoped variable can be accessed anywhere in your code
- A "var" variable can be accessed anywhere in the function where it's defined
- A "let" variable can only be access in the block where it's defined

Don't worry too much about the try/catch block above. This is an error handling strategy that we'll cover later.

# Lesson 2

## Operators

We can categorise the operators as follows:

- Assignment operatoes
- Arithmetic operators
- Comparison operators
- Logical operators

### Arithmetic operators

| Operator | Purpose               | Example    |
| :------- | :-------------------- | :--------- |
| +        | Addition              | x = 2 + 2  |
| -        | Subtraction           | x = 2 - 2  |
| \*       | Multiplication        | x = 2 \* 2 |
| /        | Division              | x = 2 / 2  |
| %        | Remainder of division | x = 2 + 2  |
| ++       | Increment             | x++        |
| --       | Decrement             | x--        |

[main](/swe)|[prev](/swe/mod1/wk2/day5.html)|[next](/swe/mod2/wk1/day2.html)
