# Mod 2 > Week 1 > Day 1

# Overview of the day

You are going to become a Microsoft Technical Associate by gaining an industry recognised qualification. This course covers the content necessary to prepare for MTA 98-382: Introduction to JavaScript exam. You can check out the spec [here](https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RE4tiyb).

# Lesson 1

## Learning Objectives

- Learn about primitives, conditionals, functions and scoping
- Write your first app

### Primitives

Primitives are the simplest datatypes and are "built-in" to the JavaScript language. There are 7 primitive data types, but we'll focus on the main 5 for now:

| Primitive | Example                         |
| :-------- | :------------------------------ |
| string    | `const myString = "Hi, Daniel"` |
| number    | `const myNumber = 3.6`          |
| boolean   | `const myBoolean = true`        |
| undefined | `const myUndefined`             |
| null      | `const myNull = null`           |

The important point about primitives is that they cannot be modified after they have been created, though you can re-assign the variable. Primitives that cannot be modified are known as "immutable" and any modification will create a new variable. Let's illustrate this point:

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

## Assignment

You now have all you need to write a simple application. Fire up [JSFiddle](http://jsfiddle.net) and write a function that takes the day as a string argument, then returns what you're normally doing on that day. You will need a conditional in your function to check the day and to return the appropriate value.

# Lesson 2

## Learning Objectives

- Learn the different types of operators
- Write a tax app

### Variables and scoping

Scoping defines whether a function or block of code can access a variable. Here there are two flavours: local scope and global scope. Let's illustrate the difference in code:

```javascript
const globalConstVariable = "Global scope";

function myFunction() {
  var localVarVariable = "Var local scope";

  try {
    let localLetVariable = "Let local scope";
    console.log(globalConstVariable, localVarVariable, localLetVariable);
    // Output: "Global scope", "Var local scope", "Let local scope"
  } catch (err) {
    console.log(err.message);
  }

  console.log(localVarVariable); // "Var local scope"
  console.log(localLetVariable); // Uncaught ReferenceError: localLetVariable is not defined
}

myFunction();
```

| Variable | Example                         | Usage                                                                    |
| :------- | :------------------------------ | ------------------------------------------------------------------------ |
| const    | `const myString = "Hi, Daniel"` | When you know the variable won't change - useful for global variables    |
| var      | `var myNumber = 3.6`            | Use sparingly as var can be redeclared and doesn't support block scoping |
| let      | `let myBoolean = true`          | Use as needed in function/block scoping                                  |

Key points:

- A globally scoped variable can be accessed anywhere in your code
- A "var" variable can be accessed anywhere in the function where it's defined
- A "let" variable can only be access in the block where it's defined

Don't worry too much about the try/catch block above. This is an error handling strategy that we'll cover later.

### Operators

We can categorise the operators as follows:

- Assignment operators
- Arithmetic operators
- Comparison operators
- Logical operators

#### Assignment operators

| Operator | Purpose             | Example | Same as   |
| :------- | :------------------ | :------ | --------- |
| =        | Assignment          | x = 2   | n/a       |
| +=       | Addition assignment | x += 2  | x = x + 2 |
| -=       | Subtract assignment | x -= 2  | x = x - 2 |
| \*=      | Muliply assignment  | x \*= 2 | x = x - 2 |
| /=       | Divide assignment   | x /= 2  | x = x / 2 |
| %=       | Modulus assignment  | x %= 2  | x = x % 2 |

Operators such as `+=` are referred to as compound operators. This is because two things are happening.

```javascript
let x = 2;

x -= 2;

console.log(x); // 0
```

The line `x -= 2;` in plain English would be: "Take x (2), subtract 2, then assign the result back to x"

#### Arithmetic operators

| Operator | Purpose               | Example    |
| :------- | :-------------------- | :--------- |
| +        | Addition              | x = 2 + 2  |
| -        | Subtraction           | x = 2 - 2  |
| \*       | Multiplication        | x = 2 \* 2 |
| /        | Division              | x = 2 / 2  |
| %        | Remainder of division | x = 2 % 2  |
| ++       | Increment by one      | x++        |
| --       | Decrement by one      | x--        |

The modulus operator is a funky one that will pop up in your code from time to time. This operator takes a number, divides it by another number, then returns the remainder.

```javascript
let x = 3;

x %= 2;

console.log(x); // 1
```

#### Comparison operators

| Operator | Purpose                     | Example       |
| :------- | :-------------------------- | :------------ |
| ==       | Equal to value              | x = 2 == 2    |
| ===      | Equal to value and type     | x = 2 === "2" |
| !=       | Not equal to value          | x = 2 != 2    |
| !==      | Not equal to value and type | x = 2 !== "2" |
| >        | Greater than                | x = 2 > 2     |
| <        | Less than                   | x = 2 < 2     |
| <=       | Less than or equal to       | x = 2 <= 2    |
| >=       | Greater than or equal to    | x = 2 >= 2    |

Challenge: in breakout rooms, look at the examples above, in each case, what would x be equal to after the comparison has been done?

#### Logical operators

| Operator | Purpose                                     | Example                     |
| :------- | :------------------------------------------ | :-------------------------- |
| &&       | Check if statement1 AND statement2 are true | if ( age > 17 && age < 65 ) |
| \|\|     | Check if statement1 OR statement2 is true   | if (age <=5 \|\| age >= 65) |
| !        | Check if a statement is NOT true            | if (!age)                   |

Perhaps the NOT operator (also referred to as a "bang") here could do with some more explanation. The NOT operator returns true if the value is false or false if the value is true.

```javascript
let x = false;
let y = true;

if (!x) {
  console.log(x); // this line prints out because x = false, therefore the check returns true
}

if (!y) {
  console.log(y); // this line is never reached
}
```

## Assignment

Write an application that can calculate a person's tax.

- Your app should be able to accept the gross amount a person has earned
- Your app should be able to calculate income tax and national insurance
- Your app should be able to show the student loan repayment amount, if applicable
- Your app should be able to tell the person their tax code, depending on how much they earn
- Finally, your app should tell the person their net pay for the month

[main](/swe)|[prev](/swe/mod1/wk2/day5.html)|[next](/swe/mod2/wk1/day2.html)
