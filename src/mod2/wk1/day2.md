# Mod 2 > Week 1 > Day 2

# Overview of the day

Today we're going to look at all things Array!

# Lesson 1

## Learning Objectives

- Defining an array
- Accessing an array
- Looping over an array

### Defining an array

An array is a datatype in JavaScript (and many other languages!) that can contain one or more values. There are two main ways to declare an array:

```javascript
let myArray1 = ["Hi!", 1, 2, 3.3]; // preferred method
let myArray2 = new Array(1, "two", true);

console.log(myArray1, myArray2); // ["Hi!", 1, 2, 3.3], [1, "two", true]
```

Notice that we can mix in strings, numbers, booleans and just about any datatype.

### Accessing an array

To access an array we can use the square bracket notation with an index number:

```javascript
console.log(myArray1[0], myArray2[2]); // "Hi!", true
```

Notice that to access the first element in the array, we need to use a zero. This because arrays in JavaScript are zero-based, which is to say that the index starts
at zero. This is common across many programming languages.

### Looping over an array

You will often find that you need to loop over an array to check or output the values. If you're not familiar with loops, they are used in programming to make repetitive
tasks more efficient. One of the most common loops is the For loop.

```javascript
let myArray1 = ["Hi!", 1, 2, 3.3];

// inefficient - multiple console.log lines

console.log(myArray[0] // 1
console.log(myArray[1] // 2
console.log(myArray[2] // 3.3
```

```javascript
let myArray1 = ["Hi!", 1, 2, 3.3];

// more efficient - one console.log line

for (let i = 0; i < myArray1.length; i++) {
  console.log(myArray[i]); // 1, 2, 3.3
}
```

Let's break this loop down:

First, we initialise a variable and assign it zero

```javascript
let i = 0;
```

The next part of the loop effectively says "while the variable `i` is less than the length of myArray, continue looping"

```javascript
i < myArray1.length;
```

Last is a compound operator that adds one to i on each iteration of the loop

```javascript
i++;
```

## Assignment

Given an array of integers, return a new array with each value doubled.

For example:

`[1, 2, 3] --> [2, 4, 6]`

# Lesson 2

## Learning Objectives

- Multi-dimensional arrays
- Accessing multi-dimensional arrays
- Looping over multi-dimensional arrays

### Multi-dimensional arrays

A multi-dimensional array is an array that's held in another array. Let's see how we can declare a multi-dimensional array:

```javascript
let myMdArray = [
  [1, 2, 3],
  [2, 3, 4],
  [5, 6, 7],
];

console.log(myMdArray); // [[1, 2, 3], [2, 3, 4], [5, 6, 7]]
```

Notice how we now have arrays in an array.

### Acessing multi-dimensional arrays

Accessing multi-dimensional arrays is somewhat similar to how we'd access a single-dimensional array, except this time, we need tell JavaScript which nested array to target, and which element in the target array we want to extract. For example:

```javascript
let myMdArray = [
  [1, 2, 3],
  [2, 3, 4],
  [5, 6, 7],
];

console.log(myMdArray[0][2]); // 3
```

In the code example above, we're accessing the first nested array, then the third element in that nested array.

### Looping over multi-dimensional arrays

To loop over a multi-dimensional array, we can deploy our trusty for loop again except this time, we need to use a nested for loop:

```javascript
let myMdArray = [
  [1, 2, 3],
  [2, 3, 4],
  [5, 6, 7],
];

for (let i = 0; i < myMdArray.length; i++) {
  let nestedArrayLength = myMdArray[i].length;

  for (let j = 0; j < nestedArrayLength; j++) {
    console.log(myMdArray[i][j]); // 1, 2, 3, 2, 3, 4, 5, 6, 7
  }
}
```

Eeeeek! Looks scary, doesn't it? Let's break it down:

1. The First loop loops over the contents of the first array:

```javascript
for (let i = 0; i < myMdArray.length; i++) {
  console.log(myMdArray[i]); // [1, 2, 3], [2, 3, 4], [5, 6, 7]
}
```

2. The second loop gets the length if the nested array, e.g. for the array [1, 2, 3], the length is three.

```javascript
let nestedArrayLength = myMdArray[i].length;
```

3. We then construct a second loop to loop through the second array, and use the square bracket notation to extract the elements

```javascript
for (let j = 0; j < nestedArrayLength; j++) {
  console.log(myMdArray[i][j]); // 1, 2, 3, 2, 3, 4, 5, 6, 7
}
```

Congratulations! You've written your first algorithm in JavaScript! :-)

## Assignment

The assignment is the same as the one above, except this time you're looping over you nested array, doubling the values, and returning the result.

# Lesson 3

## Learning Objectives

- Learn the various array methods

### Array methods

When we looked at primitives, we identified that they are immutable, meaning that we can't change the existing value. Arrays on the other hand, are mutable, meaning any change we make
to the array will change its values directly.

Arrays have a number of built-in methods you can use to manipulate them in some way. Here are some examples:

| Method  | Example               | Effect                              |
| :------ | :-------------------- | ----------------------------------- |
| Push    | `myArray1.push(1)`    | Adds item to the end of array       |
| Pop     | `myArray1.pop()`      | Removes the last item in the array  |
| Shift   | `myArray1.shift()`    | Removes the first item in the array |
| Unshift | `myArray1.unshift(1)` | Adds item to beginning of array     |

## Assignment

- Create a function that takes an array that contains a single element, e.g. `[121]`
- Minus this value by the same value, and plus the value by the same value, then add the results before and after the element in the array
- Continue subtracting and adding the first and last values until you have an array that is nine elements in length
- You should end up with function that returns an array like this: `[-968, -484, -242, -121, 0, 121, 242, 484, 968]

[main](/swe)|[prev](/swe/mod2/wk1/day1.html)|[next](/swe/mod2/wk1/day3.html);
