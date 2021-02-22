# Mod 2 > Week 1 > Day 3

# Overview of the day

Today we're going to start with a little test, then we'll go on to look at sorting and searching arrays.

# Lesson 1

## Learning Objectives

- Complete the FizzBuzz challenge

## Assignment - FizzBuzz

We now have enough knowledge under our belts to attempt a typical JavaScript interview question known as FizzBuzz.

- Write a program that prints the numbers from 1 to 100.
- For multiples of three print "Fizz" instead of the number
- For the multiples of five print "Buzz"
- For numbers which are multiples of both three and five print "FizzBuzz"

The first ten numbers, for example, would look like this:

```
1
2
"Fizz"
4
"Buzz"
"Fizz"
7
8
"Fizz"
```

# Lesson 2

## Learning Objectives

- How to search an array
- How to sort an array

### Searching an array

Searching an array is a common requirement, and there are a number of ways to achieve it in JavaScript.

#### Search using indexOf

The indexOf array method returns the index location of the item in question. Check it out:

```javascript
let arr1 = [1, "holy smokes", "007", "The name's Bond"];

const myIndex = arr1.indexOf("007");

console.log(arr1[myIndex]); // 007
```

Very cool! A nice easy way to get to the item. If it doesn't exist, the method will return `-1`. You might think that this has no use, but in fact, it does. By checking if the method returned a `-1` we can provide the user some nice feedback:

```javascript
if (arr1.indexOf("jimbobz") === -1) {
  console.log("Tell the user that the item doesn't exist...");
}
```

#### Search using array.includes

The includes method is a very convenient method that returns a "truthy" result. By that, we mean the method will return true or false.

```javascript
if (!arr1.includes("abcdefg")) {
  console.log("Tell the user that the item doesn't exist...");
}
```

Note the use of of the "bang" operator to allow the if statement to return true if in fact the method can't find `abcdefg` (so a false actually becomes true).

#### Search using array.find

Another useful method to search our array is the find method. This method employs a callback method to return the first value that satisfies the condition.

```javascript
let arr1 = [1, 2, "holy smokes", "007", "The name's Bond"];

let result = arr1.find((el) => {
  return el.toString().length < 5;
});

console.log(result); // 1
```

##### What is a callback?

A callback is a strategy used when a piece of code has to wait to do something first before it can do something else. In our example, our code has to first get the items one by one, then
it can perform the the check on them. The check on them happens in an "anonymous" function. That is, a function with no name:

```javascript
// anonymous callback function with no name
(el) => {
  return el.toString().length < 5;
};
```

In the above example, `el` is each element that is passed into the callback function, so 1, 2, "holy smokes", and so on.

Callbacks are a key feature of JavaScript, so it is definitely worth spending some time getting comfortable with the syntax.

#### Search using array.filter

The last strategy we will look at is array.filter:

```javascript
let arr1 = [1, 2, "holy smokes", "007", "The name's Bond"];

let result = arr1.filter((el) => el.toString().length > 2);

console.log(result); //  ["holy smokes", "007", "The name's Bond"]
```

Again, this employs a callback function. This time though, the filter method returns an array of all the matches. In the case above, we convert everything to a string, then check if the length is greater than two.

Can you spot the difference between the find method and the filter method?

The find method has a return statement and the filter does not. This is one of the advantages of using the arrow functions that we introduced on day one. If you can squeeze the statement onto one line, then the return statement is "implied", therefore we don't need to actually type the word return, nor do we need to utilise the curly function braces over multiple lines.

If this sounds confusing, make sure you ask your coach to explain what's going on!

### Sorting an array

```javascript

```

## Assignment

[main](/swe)|[prev](/swe/mod2/wk1/day1.html)|[next](/swe/mod2/wk1/day3.html);
