# Mod 2 > Week 1 > Day 5

# Overview of the day

Today we will take a look at a number of string and number methods available before looking at the date object and the various methods we can call on it.

# Lesson 1

## Learning Objectives

- Learn and apply string methods
- Learn and apply number methods

### Common string methods

JavaScript comes with a number of convenient, built-in string methods that can help us find and manipulate strings Here are some common ones you will come across:

| Method       | Purpose                                                             | Example                   |
| :----------- | :------------------------------------------------------------------ | :------------------------ |
| `.length`    | Returns the length of a string                                      | `console.log('Multiverse'.length) // 10`                |      |
| `indexOf`    | Returns the starting index of the first occurence of a string       | `console.log('Multiverse'.indexOf('e')) // 6`        |
| `lastIndexOf`    | Returns the starting index of the last occurence of a string       | `console.log('Multiverse'.lastIndexOf('e')) // 9`        |
| `endsWith`    | Does the string ends with the characters of a specified string?     | `console.log('Multiverse'.endsWith('e')) // true`        |
| `slice`      | Extracts a part of a string, starting and ending at defined indexes | `console.log('HelloWorld'.slice(0, 5)) // Hello`           |
| `replace`    | Returns a new string with the first instance of the target string replaced with a new string | `console.log('Java Java'.replace('Java', 'Python')); // Python Java` |
| `substring`    | Returns a new string containing part of the original string                                   | ` console.log('Java'.substring(1, 3))  // av`|
| `trim`    | Returns a new string with whitespace removed from both ends                                   | `console.log(' Java '.trim())  // Java`|
| `repeat`    | Returns a new string copied x times                                   | ` console.log('Java'.repeat(2))  // JavaJava`|
| `concat`    | Returns a new string of both strings concatenated                                   | ` console.log('Java'.concat('Script')) // JavaScript`|

Check out the full list of methods over on the [W3C website](https://www.w3schools.com/js/js_string_methods.asp).


#### Try these exam questions

What is logged to the console?

```javascript
function findText() {
  let loremIpsum =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  let i = loremIpsum.indexOf('Duis');
  let newString = loremIpsum.substring(0, i);

  newString = newString.trim();

  let result;

  if (newString.endsWith('consequence')) {
    result += newString.toUpperCase();
  } else {
    result += loremIpsum.lastIndexOf('consequat');
  }

  return result;
}

console.log(findText());
```

1. NaN
2. 221
3. LOREM IPSUM DOLOR SIT AMET

Also try the [Applied Strings Quiz](https://applied.multiverse.io/mod/quiz/view.php?id=9958)

### Common number methods

In addition to the string methods, there are a number of built-in number methods. Here are the ones you'll need to know for the exam:

| Method        | Purpose                                                                       | Example                  |
| :------------ | :---------------------------------------------------------------------------- | :----------------------- |
| `toFixed`     | Returns a string with the specified number of digits after the decimal point. The number is rounded if necessary. | `x.toFixed(1)`           |
| `toPrecision` | Returns a string, with a number written with a specified length               | `x.toPrecision(2);`      |
| `valueOf`     | Returns the value of a primitive or object                                    | `x.valueOf()`            |
| `Number`      | Returns a number, converted (typically) from a string                         | `x = Number("10")`       |
| `parseInt`    | Returns an integer, converted from its argument (same as Number)              | `x = parseInt("10")`     |
| `parseFloat`  | Returns a floating point number, converted from its argument                  | `x = parseFloat("10.2")` |

#### Try these exam questions

The code below should log the number 3000.94 

```javascript
function toDecimalPlaces(figure, decimalPlaces) {
  // add code here
}

console.log(toDecimalPlaces(3000.939, 2));
```

What is the most appropriate line to add in place of the comment?

1. return figure.toFixed(decimalPlaces);
2. return figure.toPrecision(decimalPlaces);
3. return figure.valueOf(figure);
4. return figure.toString();


What will be logged in the console?

```javascript
console.log((12.345).toPrecision(2));
```

1. 12.34
2. 12
3. 12.3

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

const date4 = new Date('October 13, 2014 11:13:00'); // date string

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

There are a couple of quirks to be aware of: 
* months start at 0. So January is 0, December is 11.
* days of the week start at 0 with Sunday being day 0, Saturday day 6. 

Also, if you see a date in this format:
`2021-09-09T13:02:21.463Z`
- the `Z` refers to "Zulu time" (UTC) - think of it as GMT

# Lesson 3

## Learning Objectives

- Learn how to add and subtract dates

### Setting, adding and subtracting dates

Along with the various `get` methods available to us, we also have a number of `set` methods. These methods can set the day, month, year and so on. We can combine these methods with an arithmetic operator to add and subtract dates:

```javascript
let myDate2 = new Date(); // 3, 5, 2021

myDate2.setDate(myDate2.getDate() - 2);

myDate2.setMonth(myDate2.getMonth() - 2);

myDate2.setFullYear(myDate2.getFullYear() - 2);

console.log(myDate2.getDate(), myDate2.getMonth(), myDate2.getFullYear());
// 1, 3, 2019
```

Can you think of a use for adding and subtracting dates in an application?

### Localised date format

So what if you want your date to be presented in the British format; dd/mm/yyyy? Or perhaps the US format; mm/dd/yyyy?

No problemo!

```javascript
console.log(myDate2.toLocaleDateString('en-GB')); // "01/04/2019"

console.log(myDate2.toLocaleDateString('en-US')); // "4/1/2019"
```

Note that the representation of the months here is not zero-indexed.

> You can also used `toLocaleString` to work with currency

#### Try these exam questions

What is logged in the console?

```javascript
const date1 = new Date(1986, 0, 17);

console.log(date1.toLocaleString('en-GB'));
```

1. "17/01/1986, 00:00:00"
2. "1/17/1986, 00:00:00"
3. "1986/01/17, 00:00:00"

You've been asked to complete a function that can add any number of days to a date.

What do you need to add in place of the comment?

```javascript
function myDateFunction(date, days) {
  // add code here
}

const myDate = new Date(1986, 0, 17);
myDateFunction(myDate, 21);
```

1. date.setDate(date.getFullYear() + days)
2. myDate.setDate(date() + days)
3. date.setDate(date.getDate() + days)


Now try the [Applied Dates Quiz](https://applied.multiverse.io/mod/quiz/view.php?id=9904)


[main](/swe)|[prev](/swe/mod2/wk1/day4.html)|[next](/swe/mod2/wk2/day1.html);
