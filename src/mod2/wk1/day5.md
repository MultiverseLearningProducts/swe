# Mod 2 > Week 1 > Day 5

# Overview of the day

Today we will take a look at a number of string methods available before looking at the date object and the various methods we can call on it.

# Lesson 1

## Learning Objectives

- Learn and apply string methods

### Common string methods

JavaScript comes with a number of convenient, built-in string methods that can help us find and manipulate strings. We've already seen `toString()`, `length` and `indexOf`. Here are some common ones you will come across:

| Method       | Purpose                                                             | Example                       |
| :----------- | :------------------------------------------------------------------ | :---------------------------- |
| `.length`    | Returns the length of a string                                      | `"abc".length`                |
| `toString()` | Converts a variable to a string                                     | `x = y.toString()`            |
| `indexOf`    | Returns the starting index of the first occurence of a string       | `"abc".indexOf('abc')`        |
| `slice`      | Extracts a part of a string, starting and ending at defined indexes | `"abcdefg".slice(0, 3)`       |
| `replace`    | Replaces an occurence of a string                                   | `"abc".replace('abc', 'xyz')` |

Check out the full list of methods over on the [W3C website](https://www.w3schools.com/js/js_string_methods.asp).

## Assignment

- Create a function that can take a phone number, e.g `01803 312 698` and a country code to apply to the number

- Your function should remove the `0` and add the country code to the beginning of the string, then return the result

- For example: `01803 312 698` would become `+44 1803 312 698`

Test cases (+44 in all cases): 

`020 208 8000`
`07985 427 937`
`01626 455 000` 


# Lesson 2

## Learning Objectives

- Learn how to initialize a date object
- Formatting and logging the date
- Get the date, month, year from the date object

### Initialize a date object

There are four ways to initialise a date object:

```javascript
const date1 = new Date(); // date now

// year, month, day, hours, minutes, seconds, milliseconds
const date2 = new Date(1900, 0, 17, 0, 0, 0, 0); 

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

For this, we can utilise the date object's methods: `getFullYear(), getMonth(), getDay(), getDate()`. These methods however, return integers. This means we have to do the work of transforming them into a formatted date like the one above.

```javascript
let myDate = new Date(2021, 1, 25);

console.log(myDate.getDate(), myDate.getMonth(), myDate.getFullYear()); 
// 25, 1, 2021

console.log(myDate.getDay()); // 4

// Do the work here to get the text based string
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

console.log(myDate.getDate(), myDate.getMonth(), myDate.getFullYear()); 
// 23, 0, 2021
```

Can you think of a use for adding and subtracting dates in an application?

## Assignment

### Part 1

- Create a function called `centuryFromYear`
- Given a year, the function should return the century it is in

Input/Output Examples

- centuryFromYear(1705), returns (18)
- centuryFromYear(1900), returns (19)
- centuryFromYear(1601), returns (17)
- centuryFromYear(2000), returns (20)

### Part 2

Here are some famous events:

- London Olympics, 27 July 2012 to 12 August 2012
- Wedding of Prince William and Catherine Middleton, 29 April 2011
- Apollo 13, April 11, 1970 to April 17, 1970

- For each famous event, create a date object that represents the date the event started and the date it ended

- Create a function that returns how many days the event lasted. If it lasted for one day, simply return `1 day`

- Create another function that returns how long ago the event was from today's date


[main](/swe)|[prev](/swe/mod2/wk1/day3.html)|[next](/swe/mod2/wk1/day5.html);
