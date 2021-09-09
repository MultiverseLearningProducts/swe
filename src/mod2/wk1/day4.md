# Mod 2 > Week 1 > Day 4

# Overview of the day

Today we'll look at objects before looking at value vs reference.

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

You can also push new items to an array with an object:

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

- What is meant by value vs reference
- Become a more effective programmer

### Value vs reference

To understand what is meant when we say value vs reference, take a look at the following code. What will be logged after we call the `updateNames` function?

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

console.log(cats, firstCatsName); // what's logged here?
```

The answers might surprise you! Let's come back to that shortly. For now, cast your mind back to day one when we spoke about primitives. As you'll know, primitives can't be modified after they've been created, whereas objects and arrays can. Primitives are `immutable`; arrays and objects are `mutable`.

For this rule to hold, we _should_ be able to modify the object, but we _shouldn't_ be able to modify the string

Sure enough, if we log the result, we get:

```javascript
console.log(cats, firstCatsName);

/*
{
  names: ["Ginger", "Smokey", "Whiskers", "Claude"]
}, "Gizmo"
*/
```

> Objects are passed to functions by reference, primitives are passed by value

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
