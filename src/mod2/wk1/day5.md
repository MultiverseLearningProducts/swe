# Mod 2 > Week 1 > Day 5

# Overview of the day

Today we will take a look at a number of string methods available befor looking at the date object and the various methods we can call on it.

# Lesson 1

## Learning Objectives

- Learn and apply string methods

### Common string methods

JavaScript comes with a number of convenient, built-in string methods that can help us find and change strings.

## Assignment

# Lesson 2

## Learning Objectives

- Learn how to initialize a date object
- Formatting and logging the date
- Get the date, month, year from the date object

### Initialize a date object

There are four ways to initialise a date object:

```javascript
const date1 = new Date(); // now
const date2 = new Date(1900, 0, 17, 0, 0, 0, 0); // year, month, day, hours, minutes, seconds, milliseconds
const date3 = new Date(10000000000); // milliseconds
const date4 = new Date("October 13, 2014 11:13:00"); // date string

console.log(
  date1.toString(), // "Thu Feb 25 2021 14:20:51 GMT+0000 (Greenwich Mean Time)"
  date2.toString(), // "Sun Jan 17 2021 00:00:00 GMT+0000 (Greenwich Mean Time)"
  date3.toString(), // "Sun Apr 26 1970 18:46:40 GMT+0100 (Greenwich Mean Time)"
  date4.toString() // "Mon Oct 13 2014 11:13:00 GMT+0100 (British Summer Time)"
);
```

### Formatting and logging the date

The outputs above are pretty good, but what if you didn't want the time to display? What if you just wanted to show the date?

```javascript
console.log(date1.toDateString()); // "Thu Feb 25 2021"
```

### Get the date, month, and year

The above format is more readable, but what if we wanted complete control over the format?

What if we wanted: `The date is: Thursday, January 25th, 2021`?

For this, we can utilise the date object's methods: `getFullYear(), getMonth(), getDay(), getDate()`. These methods however, return integers. We then have to do the work of transforming them into a formatted date like the one above.

```javascript
let myDate = new Date(2021, 1, 25);

// get the integers
console.log(myDate.getDate(), myDate.getMonth(), myDate.getFullYear()); // 25, 1, 2021
console.log(myDate.getDay()); // 4

// do the work here to get the text based string
```

There are a couple of quirks to be aware of: the month is being reported as "1", or January. All good right? Wrong! A "1" is actually February. This is because the months are zero-based.

In addition, `getDay()` is returning "4" and not "Thursday". This is because the days in JavaScript are represented by the integers 0-6. Zero is Monday, six is Sunday.

## Assignment

Keep working with the date code and the information above to create a string that reads:

`The date is: Thursday, January 25th, 2021`

# Lesson 3

## Learning Objectives

- Learn how to add and subtract dates

### Setting, adding and subtracting dates

Along with the various `get` methods available to us, we also have a number of `set` methods. These methods can set the day, month, year and so on. We can combine these methods with an arithmetic operator to add and subtract dates:

```javascript
let myDate = new Date(2021, 0, 25);

myDate.setDate(myDate.getDate() - 2);

console.log(myDate.getDate(), myDate.getMonth(), myDate.getFullYear()); // 23, 0, 2021
```

Can you think of a use for adding and subtracting dates in an application?

## Assignment

### Part 1

Create a function that can create and return a new date. Your function should except the date, month and year as parameters.

### Part 2

Create another function that can modify and return the date created above. The function should accept a negative value to indicate you want to subtract the passed value from the date, or a positive value meaning you want to add the value to the date.

[main](/swe)|[prev](/swe/mod2/wk1/day3.html)|[next](/swe/mod2/wk1/day5.html);
