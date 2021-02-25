# Mod 2 > Week 1 > Day 5

# Overview of the day

Today we will take a look at dates.

# Lesson 1

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

For this, we can utilise the date object's methods: `getFullYear(), getMonth(), getDay(), getDate()`

```javascript
let myDate = new Date(2021, 0, 25);

console.log(myDate.getDay(), myDate.getMonth(), myDate.getFullYear()); // 1, 0, 2021
console.log(myDate.toDateString()); // "Mon Jan 25 2021"
```

You may have spotted a strange quirk here; adding 0 to the date constructor `new Date(2021, 0, 25)` actually gives us January! Also, `getDay()` returns the day of the week, where 0 is Monday and 6 is Sunday!

This is one of a few quirks that you'll need to get used to when working with dates in JavaScript, and goes some way to explaining why many developers use date libraries in their applications to format dates for them. Anyhow!

## Assignment

Keeping working with the date code above to create a string that reads:

`The date is: Thursday, January 25th, 2021`

# Lesson 2

## Learning Objectives

- Learn how to add and subtract dates

[main](/swe)|[prev](/swe/mod2/wk1/day3.html)|[next](/swe/mod2/wk1/day5.html);
