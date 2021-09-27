# Mod 2 > Week 1 > Day 4

# Overview of the day

Today we'll look at how primitives and objects are stored and what happens to them when they are passed into functions.

# Lesson 1

## Learning Objectives

- Understand what an object is
- Understand how and when to use an object in our programs
- How to create, access and modify an object
- Looping through an object

### What is an object?

We looked at arrays on day two. Arrays are great for storing independent values, but don't scale well when we want to describe a subject in more detail.

```javascript
// not ideal!
['name: Dan', 'age: 35', 'shoeSize: 9'];
```

The example above would be very tricky to manage and wouldn't be an efficient approach. This is where objects come to the rescue. An object is a collection of information about, well, an object!

```javascript
let person = {
  name: 'Daniel',
  age: 35,
  shoeSize: 9,
  smokes: false,
  hobbies: ['motorbikes', 'cats', 'dogs', 'football'],
};
```

Information in objects is stored in key/value pairs. Above, `name` is the key and `Daniel` is the value.

### Accessing an object

Accessing an object is as easy as using what's known as dot notation:

```javascript
console.log(person.name); // Daniel
```

You may see other ways of accessing the object, such as:

```javascript
console.log(person['name']); // Daniel
```

### Modifying an object

Objects are mutable, so any change you make will change the object directly. Changing is as easy as re-assigning the value:

```javascript
person.name = 'Dan';

console.log(person.name); // Dan
```

You can also push new items to an array within an object:

```javascript
person.hobbies.push = 'Scrabble';

console.log(person.hobbies); //  hobbies: ["motorbikes", "cats", "dogs", "football", "Scrabble"]
```

#### Try this exam question

You have been asked to construct a for loop that can list the contents of an array in an object, in reverse order. How should you complete the code below?

```javascript
/* 

Expected result in console:

"Claude"
"Whiskers"
"Smokey"
"Tiddles"

*/

var myObject = {
  names: ['Tiddles', 'Smokey', 'Whiskers', 'Claude'],
};

for (;;) {
  console.log();
}
```

# Lesson 2

## Learning Objectives

- Understand how primitives and objects are stored in memory
- Understand the difference between mutable and immutable variables
- Understand what happens when a primitive or object are passed into a function

### Primitives versus objects
JavaScript primitives include:
* string
* number
* boolean

Here are some examples of primitives:
```javascript
"Bob"
true
35
```

> Primitives are **immutable**, meaning they cannot change. The size of a primitive is fixed, so JavaScript stores the value in memory on the call "stack".

Imagine a variable as a box containing a primitive value. The variables could be assigned a new value (unless they are `const`s, however the primitive value itself cannot be changed. 

<img width="294" alt="primitives" src="https://user-images.githubusercontent.com/1316724/134978246-ca88424d-ee45-4204-8a6e-1c74651bf0a4.PNG">

A box with no value in it is an "undefined"  variable.

Using what you have learnt above, can you explain how the following snippet of code works?

```javascript
let name = "daniel";
name.toUpperCase();
console.log(name);      // still "daniel" - strings are immutable
```

> In contrast to primitives, objects are **mutable**, meaning they can change.

Here is an example to help explain further:
```javascript
let person = {
  name: 'Daniel',
  age: 35,
  shoeSize: 9,
  smokes: false,
  hobbies: ['motorbikes', 'cats', 'dogs', 'football'],
};

person.name = 'Dan';

console.log(person.name);  // Dan - has been modified
```

We don't know how big an object will get therefore JavaScript holds the object in an area in something called the "heap" - imagine this as a very large area of memory that can handle objects growing or shrinking. Continuing with our box analogy from early, the box representing the variable "person" above, actually holds a *reference* or *pointer* to the memory address of the object on the heap. 

<img width="247" alt="object" src="https://user-images.githubusercontent.com/1316724/134981058-cf1f6a4f-6ce3-4484-837d-c59a9a9224ab.PNG">

### Passing variables to functions
When we pass a *primitive* to a function, a *copy* of the primitive is taken and stored in a *new variable* which just has function scope. The 2 variables are completely unrelated so any change to either has no effect on the other. Here's an example to help illustrate this:

```javascript
function addTen(a, b) {  // a & b are *copies* of the variables passed in
    a = a+10;
    b = b+10;
}

let x = 2;
let y = 4;

addTen(2, 4)

console.log(x);   // unchanged - still 2
console.log(y);   // unchanged - still 4
```

When we pass an object to a function, a copy of the variable holding the *reference* is taken - the original and copy both point to exactly the *same* object in memory, hence changes affect both.

<img width="247" alt="object" src="https://user-images.githubusercontent.com/1316724/134981058-cf1f6a4f-6ce3-4484-837d-c59a9a9224ab.PNG">

Look at this example:

```javascript
function updateNames(cats, firstCatsName) {
  firstCatsName = 'Ginger';
  cats.names[0] = 'Ginger';
}

var cats = {
  names: ['Tiddles', 'Smokey', 'Whiskers', 'Claude'],
};

var firstCatsName = 'Gizmo';

updateNames(cats, firstCatsName);

console.log(cats, firstCatsName); 
```
Remember, primitives can't be modified after they've been created, whereas objects and arrays can.  `firstCatsName` is a string primitive so will not be changed. `cats` is an object so any changes will be reflected.

The result will be:
```javascript
/*
{
  names: ["Ginger", "Smokey", "Whiskers", "Claude"]
}, "Gizmo"
*/
```

> Objects passed into a function can be modified by the function, primitive values passed to function are never modified

#### Try these exam questions

What is logged in the console?

```javascript
function multiplyIt(x) {
    x *= 3;
    return x;
}

var a = 2;
var result = multiplyIt(a);

console.log(a); 
console.log(result); 
```

What is logged in the console?

```javascript
function borrow(name, number, book) {
  name = name.toUpperCase();
  number = number + "-1";
  book.name.toUpperCase();
  book.author.toUpperCase();
}

let name = 'shanie';
let number = '123678';
let book = {name: 'Intro to Java', author:'A. Guru'};

borrow(name, number, book);

console.log(name, number, book.name);
```

1. shanie 123678 Intro to Java
2. SHANIE 123678-1 INTRO TO JAVA
3. shanie 123678 INTRO TO JAVA

# Video resources
* [JavaScript Value vs Reference Types](https://www.youtube.com/watch?v=fD0t_DKREbE)
* [Reference Vs Value In JavaScript](https://www.youtube.com/watch?v=-hBJz2PPIVE)

[main](/swe)|[prev](/swe/mod2/wk1/day3.html)|[next](/swe/mod2/wk1/day5.html);
