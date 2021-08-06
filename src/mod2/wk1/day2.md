# Mod 2 > Week 1 > Day 2

# Overview of the day

Today we're going to look at arrays and loops.

# Lesson 1

## Learning Objectives

- Defining an array
- Accessing an array
- Looping over an array
- Array methods

### Defining an array

An array is a datatype in JavaScript (and many other languages!) that can contain one or more values. There are two main ways to declare an array:

```javascript
let myArray1 = ['Hi!', 1, 2, 3.3]; // preferred method
let myArray2 = new Array(1, 'two', true);

console.log(myArray1, myArray2); // ["Hi!", 1, 2, 3.3], [1, "two", true]
```

Notice that we can mix in strings, numbers, booleans and just about any datatype.

### Accessing an array

To access an array we can use the square bracket notation with an index number:

```javascript
console.log(myArray1[0], myArray2[2]); // "Hi!", true
```

Notice that to access the first element in the array, we need to use a zero. This because arrays in JavaScript are zero-based, which is to say that the index starts at zero. This is common across many programming languages.

### Looping over an array

You will often find that you need to loop over an array to check or output the values. If you're not familiar with loops, they are used in programming to make repetitive tasks more efficient. One of the most common loops is the For loop.

```javascript
let myArray1 = ["Hi!", 1, 2, 3.3];

// inefficient - multiple console.log lines

console.log(myArray[0] // 1
console.log(myArray[1] // 2
console.log(myArray[2] // 3.3
```

```javascript
let myArray1 = ['Hi!', 1, 2, 3.3];

// more efficient - one console.log line

for (let i = 0; i < myArray1.length; i++) {
  console.log(myArray[i]); // 1, 2, 3.3
}
```

> The `break` keyword we saw yesterday can be used to exit a loop

> Another keyword related to break is `continue`. This keyword skips the current loop iteration and continues with the next one. Note that `continue` is NOT valid in a switch statement.

### Try these exam questions
In the code below, the name and age of students are held in the arrays. How would you output Fariah's age?

```javascript
let student1 = ['Jay', 24];
let student2 = ['Mia', 45];
let student3 = ['Fariah', 19];

let students = [student1, student2, student3];
```


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

### Accessing multi-dimensional arrays

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

To loop over a multi-dimensional array, we can deploy our trusty for loop again except this time, we need to use a nested for loop. See the exam question below for an example and a challenge.

### Try this exam question

You want to skip over the loop iterations that are even numbers and break out of the loop altogether if a duplicate value is found. Extend the code below to do this.

```javascript
let myMdArray = [
  [1, 2, 3],
  [4, 5, 6],
  [6, 8, 9],
];

for (let i = 0; i < myMdArray.length; i++) {
  let nestedArrayLength = myMdArray[i].length;

  for (let j = 0; j < nestedArrayLength; j++) {
    console.log(myMdArray[i][j]); // 1, 2, 3, 2, 3, 4, 5, 6, 7
  }
}
```

# Lesson 3

## Learning Objectives

- Learn the various array methods

### Array methods

When we looked at primitives, we identified that they are immutable, meaning that we can't change the existing value. Arrays on the other hand, are mutable, meaning any change we make to the array will change its values directly.

Arrays have a number of built-in methods you can use to manipulate them in some way. Here are some examples:

| Method  | Example               | Effect                              |
| :------ | :-------------------- | ----------------------------------- |
| Push    | `myArray1.push(1)`    | Adds item to the end of array       |
| Pop     | `myArray1.pop()`      | Removes the last item in the array  |
| Shift   | `myArray1.shift()`    | Removes the first item in the array |
| Unshift | `myArray1.unshift(1)` | Adds item to beginning of array     |

Here is a [fun animation](https://simplestepscode.com/array-push-pop-shift-unshift/) to help you remember these methods.

### Try this exam question

What does the array contain after calling the following methods on it?

```javascript
let myArray = [12, 'test', 3, '@', 5];

myArray.pop();
myArray.unshift(12);
myArray.shift();
myArray.push(6);
```

Also try out this [Applied Arrays Quiz](https://applied.multiverse.io/mod/quiz/view.php?id=9863)


[main](/swe)|[prev](/swe/mod2/wk1/day1.html)|[next](/swe/mod2/wk1/day3.html);
