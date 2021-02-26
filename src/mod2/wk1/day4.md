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
["name: Dan", "age: 35", "shoeSize: 9"];
```

The example above would be very tricky to manage and wouldn't be an efficient approach. This is where objects come to the rescue. An object is a collection of information about, well, an object!

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
  console.log(person[key]); 
}

// "Dan", 35, 9, false, ["motorbikes", "cats", "dogs", "football", "Scrabble"]
```

## Assignment

Can you find the killer?

The deceased: 

```javascript
['Lucas', 'Bill']
```

You have managed to narrow the suspects down to just a few. Luckily, you know every person who the suspects have seen on the day of the murders.

```javascript
{'James': ['Jacob', 'Bill', 'Lucas'],
 'Johnny': ['David', 'Kyle', 'Lucas'],
 'Peter': ['Lucy', 'Kyle']}
 ```

Write a function that can return the name of the killer!

# Lesson 2

## Learning Objectives

- What is meant by value vs reference
- Become a more effective programmer

### Value vs reference

To understand what is meant when we say value vs reference, take a look at the following code. What will be logged after we call the change function?

```javascript
let sampleStudent = "HTML Student";

let sampleCourse = {
  name: "HTML",
  grade: 90,
};

function change(student, course) {
  student = "JavaScript Student";
  course.name = "JavaScript";
  course.grade = 100;
}

change(sampleStudent, sampleCourse);

// What will be logged?
console.log(sampleStudent, sampleCourse.name, sampleCourse.grade); 
```

The answers might surprise you! Let's come back to that shortly. For now, cast your mind back to day one when we spoke about primitives. As you'll know, primitives can't be modified after they've been created, whereas objects and arrays can. Primitives are `immutable`; arrays and objects are `mutable`.

For this rule to hold, we _should_ be able to modify the object, but we _shouldn't_ be able to modify the string

```javascript
function change(student, course) {
  // this creates a new variable and does not modify sampleStudent
  student = "JavaScript Student";

  // this references sampleCourse and modifies it directly
  course.name = "JavaScript";
  course.grade = 100;
}
```

Sure enough, if we log the result, we get:

```javascript
console.log(sampleStudent, sampleCourse.name, sampleCourse.grade); 

// "HTML Student", "JavaScript", 100
```

[main](/swe)|[prev](/swe/mod2/wk1/day3.html)|[next](/swe/mod2/wk1/day5.html);
