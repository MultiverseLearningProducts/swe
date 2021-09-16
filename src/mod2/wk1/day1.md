# Mod 2 > Week 1 > Day 1

# Overview of the day

You are going to become a Microsoft Technical Associate by gaining an industry recognised qualification. This course covers the content necessary to prepare for MTA 98-382: Introduction to JavaScript exam. This is a multiple choice exam with 39 questions with a time limit of 45 minutes. You can check out the spec [here](https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RE4tiyb).

## How to book the exam

- If you feel you are entitled to reasonable adjustments such as extra time, contact your coach who will explain how to apply for this.

- To schedule your exam, go [here](https://examregistration.microsoft.com/?action=1&locale=en-us&examcode=98-382&examname=Introduction%20to%20Programming%20Using%20JavaScript&returnToLearningUrl=https://docs.microsoft.com/learn/certifications/exams/98-382). Note - if you have been given reasonable adjustments you will be used to book via the phone instead.

- You'll need a voucher code, which your coach will give to you

- Decide whether to book at a test centre or [online](https://home.pearsonvue.com/microsoft/onvue). Note the [system requirements and rules](https://home.pearsonvue.com/microsoft/onvue) for online tests.

# Course stucture

**Week 1** - we focus on the "nuts and bolts" of the JavaScript language. Primitives, variables, functions, arrays, objects, conditionals, loops and more.

**Week 2** - we look at the Document Object Model (DOM), events, forms, GET/POST, debugging and more.

# Lesson 1

## Learning Objectives

- Learn about JavaScript types
- Learn about conditionals

## JavaScript types

### Primitives (Value types)

Primitives are the simplest datatypes and are "built-in" to the JavaScript language. Examples include:

| Primitive | Example                         |
| :-------- | :------------------------------ |
| string    | `const myString = "Hi, Daniel"` |
| number    | `const myNumber = 3.6`          |
| boolean   | `const myBoolean = true`        |
| undefined | `const myUndefined`             |
| null      | `const myNull = null`           |

The important point about primitives is that they cannot be modified after they have been created, though you can re-assign the primitive variable. Primitives that cannot be modified are known as "immutable" and any modification will create a new variable. Let's illustrate this point:

```javascript
// string primitive
const myString = 'Hi, Daniel';

console.log(myString.toUpperCase(), myString); // HI, DANIEL Hi, Daniel
```
> Don't know what datatype you're dealing with? `console.log(typeof myString)`

Note that even though we've transformed the string to uppercase, the original variable has not been changed.

Primitives are compared by value. Two primitives are strictly equal if they have the same value.

### Objects (Reference Types)
Objects include functions and arrays. Objects are mutable - their values can change.

Objects are compared by reference instead of value. Two objects are only strictly equal if they refer to the same underlying object.

```javascript
const obj1 = { name: 'sha' };
const obj2 = { name: 'sha' };
obj1 === obj2;  // false
```
```javascript
const obj1 = { name: 'sha' };
const obj2 = obj1;
obj1 === obj2;  // true
```

#### Try this exam question

The following variables have been initialised.

```javascript
let destination = 'London';
let flightNumber = 123578;
let hasPassengers = true;
let hasTakeoffClearance = false;
let fuelAmount = 2000.0;
let passengers = [
  {
    name: 'Cyril Simon',
    passportNumber: 323334343,
  },
  {
    name: 'Paul Daniels',
    passportNumber: 435454664,
  },
];
let id = flightNumber + destination;
let flightTime;
```

What are their datatypes?

### Conditionals

At the heart of computers are transistors and electrical circuits where electrical currents flow. A presence of a current is a 1, or true, and no current is a 0, or false.
This is at the heart of conditions. If something is there, it's true, if not, it's false. We can write this in code:

```javascript
if (myString === 'Hi, Daniel') {
  alert("Hey, it's Dan!"); // true
} else if (myString === 'Hi, Bob') {
  alert("Hey, it's Bob!"); // true
} else {
  alert('Hey, new person!'); // false
}
```

Here we've used the "strict" conditional (===). This checks that the datatype AND the check in question match. We'll cover operators in more detail later.

We can daisy-chain if conditionals like our example above as much as we want however, after a while they can become hard to read. The Switch statement solves this by providing more concise
syntax.

```javascript
switch (myString) {
  case 'Hi, Daniel':
    alert("Hey, it's Dan!"); // true
    break;
  case 'Hi, Bob':
    alert("Hey, it's Bob!"); // true
    break;
  default:
    alert('Hey, new person!'); // false
}
```

Key points for the exam:

- The break keyword "breaks out" and exits the whole code block (including loops)

- The break keyword isn't required in the default block if the default block is the last statement (but you can still add it if you want)

#### Try this exam question

The "Blown Away" hair salon offers discounts of 20% on Wednesdays and Thursdays.
You need to write a JavaScript function that meets the following requirements:

Accepts the day of the week as a string. 
Returns the appropriate discount

How should you complete the following code?

```javascript
function getDiscount(day) {
  var discount = 0



      discount = .2;
      break;

      discount = 0
      break;
  }

  return discount
}
```

### Functions

There are not one, not two, but three ways to declare functions. This is because there's the older way, a newer way, plus a convenient option where we can assign a variable equal to a function. Find the different function strategies in the exam questions below.

#### Try these exam questions

What is logged in the console?

```javascript
// older way
function addition(value1, value2) {
  return value1 += value2;
}

console.log(addition(567, "56"))
```

1. NaN
2. 56756
3. "56756"

```javascript
// assigning a function to a variable using older way
const multiply = function (value1, value2) {
  return value1 * value2;
};

console.log(multiply(29, 2));
```

1. 58
2. 52
3. A syntax error is thrown

```javascript
// newer "arrow" function form
const subtract = (value1, value2) => {
  return value1--;
};

console.log(subtract(12, 25));
```

1. 11
2. 12
3. 13

# Lesson 2

## Learning Objectives

- Learn about variables and scoping
- Learn the various operators

### Variables and scoping

JavaScript variable naming rules:
* Variables must begin with a Unicode letter, dollar sign or underscore. (Note - Unicode is an international character set).
* Variables can contain letters, digits, underscores, and dollar signs
* JavaScript keywords (e.g. break) cannot be used to name variables
* Variable names are case sensitive 

#### Try this exam question
Which of the following are valid JavaScript variable names?

```javascript
const continue = 123
const £cost = 29.99
const @name = "ali"
const $cost = 20.99
const _name = "marcos"
const 123_name = "dinah"
const früh = 27
```

Scoping defines whether a function or block of code can access a variable. Here there are two flavours: local scope and global scope. Let's illustrate the difference in code:

```javascript
const globalConstVariable = 'Global scope';

function myFunction() {
  var localVarVariable = 'Var local scope';

  try {
    let localLetVariable = 'Let local scope';
    console.log(globalConstVariable, localVarVariable, localLetVariable);
    // Output: "Global scope", "Var local scope", "Let local scope"
  } catch (err) {
    console.log(err.message);
  }

  console.log(localVarVariable); // "Var local scope"

  console.log(localLetVariable);
  // Uncaught ReferenceError: localLetVariable is not defined
}

myFunction();
```

Key points:

- A globally scoped variable can be accessed anywhere in your code

- A `const` (constant) variable cannot be reassigned

- A `var` variable can be accessed anywhere in the function where it's defined (or globally if set as a global variable).

- A `let` variable can only be accessed in the block where it's defined (or globally if set as a global variable).

Don't worry too much about the try/catch block above. This is an error handling strategy that is useful to prove we can't access a `let` variable outside of its scope. We'll cover try/catch in more detail later.

#### Try these exam questions

What is logged in the console?

```javascript
let a = '2';
const b = 50;

function addition(num1, num2 = 4) {
  a = num1;
  const b = num2;
  return a + b;
}

console.log(addition(3));
```

1. A syntax error is thrown
2. NaN
3. 7

What is logged in the console?

```javascript
let a = 40;
const b = 5;

function divide1() {
  let a = 20;
  const b = 10;

  return a / b;
}

function divide2() {
  return a / b;
}

console.log(divide1()+" "+divide2());
```

1. 2 8
2. 8 8
3. 2 2

What is logged in the console?

```javascript
const myString = 'Hey, how you doing?';
let newString;

(function () {
  newString = myString.length + ' Fine, thanks.';
})();

console.log(newString);
```

1. "Fine, thanks."
2. "19 Fine, thanks."
3. Uncaught ReferenceError

What is logged in the console?

```javascript
const myString = 'Hey, how you doing?';

(function () {
  myString = myString.length + ' Fine, thanks.';
})();

console.log(myString);
```

1. "Fine, thanks."
2. "19 Fine, thanks."
3. TypeError

> `NaN` literally means `Not-a-Number`

### Operators

We can categorise the operators as follows:

- Arithmetic operators
- Assignment operators
- Math methods (not quite operators but very useful!)
- Comparison operators
- Logical operators

#### Arithmetic operators

| Operator | Purpose               | Example     |
| :------- | :-------------------- | :---------- |
| +        | Addition              | `x = 2 + 2` |
| -        | Subtraction           | `x = 2 - 2` |
| \*       | Multiplication        | `x = 2 * 2` |
| /        | Division              | `x = 2 / 2` |
| %        | Remainder of division | `x = 2 % 2` |
| ++       | Increment by one      | `x++`       |
| --       | Decrement by one      | `x--`       |

The modulus operator is an interesting one that will pop up in your code from time to time. This operator takes a number, divides it by another number, then returns the remainder.

```javascript
let x = 4;

x %= 2;

console.log(x); // 0
```

#### Try this exam question

What will be logged in the console?

```javascript
const modulo = (value) => {
  const referenceValue = 2;
  return value % referenceValue === 0 ? 'Even number' : 'False number';
};

console.log(modulo(320));
```

1. "Even number"
2. "False number"

> Knowledge of the ternary operator isn't required for the exam

#### Assignment operators

Whenever we want to assign a value to a variable, or we want to do something and then assign a value to a variable, we will use the assignment operator.

| Operator | Purpose             | Example  | Same as     |
| :------- | :------------------ | :------- | ----------- |
| =        | Assignment          | `x = 2`  | n/a         |
| +=       | Addition assignment | `x += 2` | `x = x + 2` |
| -=       | Subtract assignment | `x -= 2` | `x = x - 2` |
| \*=      | Muliply assignment  | `x *= 2` | `x = x - 2` |
| /=       | Divide assignment   | `x /= 2` | `x = x / 2` |
| %=       | Modulus assignment  | `x %= 2` | `x = x % 2` |

Operators such as `+=` are referred to as compound operators. This is because two things are happening.

```javascript
let x = 2;

x -= 2;

console.log(x); // 0
```

The line `x -= 2;` in plain English would be: "Take x, subtract 2, then assign the result back to x"

#### Try these exam questions

What is logged in the console?

```javascript
let result = 20;

result += 20;
result -= 10;
result *= 3;

console.log(result);
```

1. 90
2. 60
3. 20

What is wrong with this code?

```javascript
if (a = b) {
  console.log("numbers are the same!")
} else {
  console.log("numbers are not the same!")
}
```

Read this code carefully. What is printed to the console?

```javascript
let a = 3;
let b = 2;

if (a = b) {
  console.log("numbers are the same!")
} else {
  console.log("numbers are not the same!")
}
```

#### Math methods

JavaScript contains a number of useful Math methods that can do the hard work for you. For the exam, you'll need to know: random; round; abs; floor; ceiling; min; max; pow and sqrt. We've detailed four of them below and the other Math operators can be found [here](https://www.w3schools.com/js/js_math.asp).

| Operator      | Purpose                                                | Example                             |
| :------------ | :----------------------------------------------------- | :---------------------------------- |
| Math.random() | Returns a random number in the range 0 to less than 1 (inclusive of 0, but not 1)                 | `Math.random()`  |
| Math.ceil()   | Returns the value rounded up to nearest whole number   | `Math.ceil(4.4) // 5`    |
| Math.floor()  | Returns the value rounded down to nearest whole number | `Math.floor(4.9) // 4` |
| Math.round()  | Returns the value rounded to the nearest whole number | `Math.round(4.4) // 4` |
| Math.abs()  | Make the number positive | `Math.abs(-1) // 1` |

#### Try this exam question

What will be logged in the console?

```javascript
console.log(Math.floor(Math.random() * 10 + 1));
```

1. A random decimal number between 0-10
2. A random whole number between 1-10
3. A random whole number between 0-10

What will be logged in the console?

```javascript
console.log(Math.round(2.5));
```

1. 2
2. 2.5
3. 3

#### Comparison operators

Comparison operators are typically used in conditional statements to check one or more values before doing something else.

| Operator | Purpose                     | Example         |
| :------- | :-------------------------- | :-------------- |
| ==       | Equal to value              | `'2' == 2 `   |
| ===      | Equal to value and type     | `2 === 2` |
| !=       | Not equal to value          | `2 != 3`    |
| !==      | Not equal to value and type | `2 !== '2'` |
| >        | Greater than                | `2 > 1`     |
| <        | Less than                   | `2 < 3`     |
| <=       | Less than or equal to       | `2 <= 2`    |
| >=       | Greater than or equal to    | `3 >= 2`    |

#### Try these exam questions

What will be logged in the console?

```javascript
let val1 = 2;
let val2 = 1;

console.log(val1-- > ++val2);
```

1. True
2. False


```javascript
console.log(null === 0);
```

1. True
2. False

```javascript
console.log({ greeting: 'Hi!' } === { greeting: 'Hi!' });
```

1. True
2. False

#### Logical operators

Logical operators are mostly used in conditional statements and provide the developer with more flexibility when checking values.

| Operator | Purpose                                     | Example                             |
| :------- | :------------------------------------------ | :---------------------------------- |
| &&       | Check if statement1 AND statement2 are true | if ( age > 17 && age < 65 )         |
| \|\|     | Check if statement1 OR statement2 is true   | if (age <=5 &#124;&#124; age >= 65) |
| !        | Check if a statement is NOT true            | if (!age)                           |

Perhaps the NOT operator (also referred to as a "bang") here could do with some more explanation. The NOT operator returns true if the value is false or false if the value is true.

```javascript
let x = false;
let y = true;

if (!x) {
  // this line prints because x === false
  console.log(x);
}

if (!y) {
  // this line is never reached
  console.log(y);
}
```

#### Try these exam questions

What is logged to the console?

```javascript
if (!true && !false) {
  console.log('true');
} else {
  console.log('false');
}
```

1. "true"
2. "false"

# Video resources
* [Javascript types](https://www.youtube.com/watch?v=e-_mDyqm2oU)
* [Equality](https://www.youtube.com/watch?v=nQJrfphxKBg)
* [Switch statement](https://www.tabnine.com/academy/javascript/how-to-use-switch-statements-in-javascript/)
* [Operators](https://www.youtube.com/watch?v=xlz3akrBhRI&t=5s)
* [Scope](https://www.youtube.com/watch?v=XgSjoHgy3Rk) - up to 3:30



[main](/swe)|[prev](/swe/mod1/wk2/day5.html)|[next](/swe/mod2/wk1/day2.html)
