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

# Lesson 1

## Learning Objectives

- How to search an array

### Searching an array

You will often need to search an array in your programs, and there are a number of ways to achieve it in JavaScript.

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

NB: knowledge of callbacks, filter and find is not required for the MTA exam.

```javascript
let arr1 = [1, 2, "holy smokes", "007", "The name's Bond"];

// arrow function
let result = arr1.find((el) => {
  return el.toString().length < 5;
});

// older style function
let result = arr1.find(function (el) {
  return el.toString().length < 5;
});

console.log(result); // 1
```

##### What is a callback?

A callback is a strategy used when a piece of code has to wait to do something first before it can do something else. In our example, our code has to first get the items one by one, then it can perform the the check on them. The check on them happens in an "anonymous" function. That is, a function with no name:

```javascript
// anonymous callback function with no name
(el) => {
  return el.toString().length < 5;
};
```

In the above example, `el` is each element that is passed into the callback function, so `1, 2, "holy smokes"`, and so on.

**Further reading**: Callbacks are a key feature of JavaScript, so it is definitely worth spending some time getting comfortable with the syntax. Also try and read more and practice Promises and Async/Await. Don't be afraid to ask your coach how this stuff works!

#### Search using array.filter

The last strategy we will look at is array.filter:

```javascript
let arr1 = [1, 2, "holy smokes", "007", "The name's Bond"];

let result = arr1.filter((el) => el.toString().length > 2);

console.log(result); //  ["holy smokes", "007", "The name's Bond"]
```

Again, this employs a callback function. This time though, the filter method returns an array of all the matches. In the case above, we convert everything to a string, then check if the length is greater than two.

Can you spot the difference between the find method earlier and the filter method above?

One of the advantages of using the arrow functions that we introduced on day one is if you can squeeze the statement onto one line, then the return statement is "implied", therefore we don't need to actually type the word return, nor do we need to utilise the curly function braces over multiple lines.

If this sounds confusing, make sure you ask your coach to explain what's going on!

# Lesson 2

## Learning Objectives

- How to sort an array

### Sorting an array of strings

From time to time, you may need to sort your array. Thankfullly, Sorting an array of strings in JavaScript is very straightforward:

```javascript
let numbersAsStrings = ["1424242", "13220", "1000"];

numbersAsStrings.sort();
console.log(numbersAsStrings); // ["1000", "13220", "1424242"]
```

**Question:** thinking back to our conversation about primitives, why has the sort method changed the array directly?

### Sorting an array of numbers

Things start to full apart a bit when we try and sort numbers:

```javascript
var numbers = [1678, 2, 3, 78, 9, 10001];

numbers.sort();
console.log(numbers); // [10001, 1678, 2, 3, 78, 9]
```

How is JavaScript trying to sort the numbers above?

We can fix this by using a callback to examine the numbers in more detail:

```javascript
numbers.sort(function (a, b) {
  if (a > b) return 1; // switch numbers
  if (a < b) return -1; // switch numbers
  return 0; // numbers are the same
});
```

In the example above, if the callback returns either 1 or a -1, we know that the numbers need switching because one is greater or less than the other. If a zero is returned, the numbers are the same, so no switch is required. The function will keep checking and switching the values until the array is sorted.

## Assignment

### Part 1

Using the arrays below, set-up a search function that can take the array and a search parameter as an argument. Your function should return the item if it can be found, or a message saying that the item could not be found.

### Part 2

Using the arrays below, create a sort function that can take an array, sort the contents, then return the sorted array.

```javascript
[1678, 2, 3, "Hihihi", 9, "435454"];
[1678, 2, 3, -78, 9, 10001];
[32466, 2, 3, "dinosourraahh", 9, 10.6];
["SHARK!", 2, -1, 78, -9, 100.5];
[000, 2, 3, "78", 9, 1.13435];
```

[main](/swe)|[prev](/swe/mod2/wk1/day2.html)|[next](/swe/mod2/wk1/day4.html);
