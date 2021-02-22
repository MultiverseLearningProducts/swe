# Mod 2 > Week 1 > Day 4

# Overview of the day

Today we'll look at objects before we looking at value vs reference.

# Lesson 1

## Learning Objectives

- Understand what an object is
- Understand how and when to use an object in our programs
- How to create, access and modify an object
- Looping through an object

### What is an object?

We looked at arrays on day two. Arrays are great for storing independent values, but don't scale well when we want to describe the subject in more detail.

```javascript
// not ideal!
["name: Dan", "age: 35", "shoeSize: 9"];
```

The example above would be very tricky to manage and wouldn't be an efficient approach. This is where objects come to the rescue. An object is a collection of information
about, well, an object!

```javascript
let person = {
  name: "Daniel",
  age: 35,
  shoeSize: 9,
  smokes: false,
  hobbies: ["motorbikes", "cats", "dogs", "football"],
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
console.log(person["name"]); // Daniel
```

### Modifying an object

Objects are mutable, so any change you make will change the object directly. Changing is as easy as re-assigning the value:

```javascript
person.name = "Dan";

console.log(person.name); // Dan
```

You can also push new items to an array with an object:

```javascript
person.hobbies.push = "Scrabble";

console.log(person.hobbies); //  hobbies: ["motorbikes", "cats", "dogs", "football", "Scrabble"]
```

### Looping through an object

To loop through an object, we can utilise a variation on the for loop called the `for..in` loop.

```javascript
for (let key in person) {
  console.log(person[key]); // "Dan", 35, 9, false, ["motorbikes", "cats", "dogs", "football", "Scrabble"]
}
```

## Assignment

### Part 1

Create a function that takes a bunch of arguements that will then assign to an object (include at least one array). Once done, loop through this object and console log the values.

### Part 2

Can you also loop through the array in your object and log the values to the console? Will a for..in loop work here? Other than the standard for loop i.e `for (let i = 0; i < something.length; i++)`, what other for loop could you use?

# Lesson 2

## Learning Objectives

- Understand the difference between value and reference

## Assignment

[main](/swe)|[prev](/swe/mod2/wk1/day3.html)|[next](/swe/mod2/wk1/day5.html);
