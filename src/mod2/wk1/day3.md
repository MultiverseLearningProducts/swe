# Mod 2 > Week 1 > Day 3

# Overview of the day

Today we're going to start with a little test, then we'll go on to look at sorting and searching arrays.

# Lesson 1

## Learning Objectives

- Complete the FizzBuzz challenge
- Searching and sorting arrays

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

### Searching an array

You will often need to search an array in your programs, and there are a number of ways to achieve it in JavaScript.

#### Search using indexOf

The indexOf array method returns the index location of the item in question. Check it out:

```javascript
let arr1 = [1, 'holy smokes', '007', "The name's Bond"];

const myIndex = arr1.indexOf('007');

console.log(arr1[myIndex]); // 007
```

Very cool! A nice easy way to get to the item. If it doesn't exist, the method will return `-1`.

#### Search using array.includes

The includes method is a very convenient method that returns a "truthy" result. By that, we mean the method will return true or false.

```javascript
if (!arr1.includes('abcdefg')) {
  console.log("Tell the user that the item doesn't exist...");
}
```

Note the use of of the "bang" operator to allow the if statement to return true if in fact the method can't find `abcdefg` (so a false actually becomes true).

#### Search using array.find

Another useful method to search our array is the find method. This method employs a callback method to return the first value that satisfies the condition.

> Knowledge of callbacks, filter and find is not required for the MTA exam.

```javascript
let arr1 = [1, 2, 'holy smokes', '007', "The name's Bond"];

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

#### Search using array.filter

The last strategy we will look at is array.filter:

```javascript
let arr1 = [1, 2, 'holy smokes', '007', "The name's Bond"];

let result = arr1.filter((el) => el.toString().length > 2);

console.log(result); //  ["holy smokes", "007", "The name's Bond"]
```

Again, this employs a callback function. This time though, the filter method returns an array of all the matches. In the case above, we convert everything to a string, then check if the length is greater than two.


# Lesson 3

## Learning Objectives

- How to sort an array

### Sorting an array of strings

From time to time, you may need to sort your array. Thankfully, Sorting an array of strings in JavaScript is very straightforward:

```javascript
let strings = ['Dan', 'Jim', 'Edy'];

strings.sort();
console.log(strings); // ["Dan", "Edy", "Jim"]
```

> Thinking back to our conversation about primitives, why has the sort method changed the array directly?

### Sorting an array of numbers

Things start to fall apart a bit when we try and sort numbers:

```javascript
let numbers = [1678, 2, 3, 78, 9, 10001];

numbers.sort();
console.log(numbers); // [10001, 1678, 2, 3, 78, 9]
```

> How is JavaScript trying to sort the numbers above?

We can fix this by using a callback to examine the numbers in more detail:

```javascript
numbers.sort(function (a, b) {
  if (a > b) return 1; // switch numbers
  if (a < b) return -1; // switch numbers
  return 0; // numbers are the same
});
```

# Test your knowledge from today
* Try out the [Arrays Quiz on Applied](https://applied.multiverse.io/course/view.php?id=310)
* Try out the [Day 3 revision checker quiz on Applied](https://applied.multiverse.io/course/view.php?id=310)


[main](/swe)|[prev](/swe/mod2/wk1/day2.html)|[next](/swe/mod2/wk1/day4.html);
