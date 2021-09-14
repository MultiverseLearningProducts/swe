# Mod 2 > Week 2 > Day 2

# Overview of the day

Today we will look at how to add elements to our page dynamically. We'll also look at error handling with try/catch, where JavaScript can be placed in a web page and the different type of dialog boxes that can be used.

# Lesson 1

## Learning Objectives

- Learn how to add an element dynamically to a page

## Adding elements dynamically

The exam requires you to know how to use the `document.write()` and `document.createElement()` methods to content to an HTML page.  

`document.createElement()` allows us to create elements of a particular type and insert them in specific places. For example, this is how we could create a button and add it to the body of the HTML.

```javascript
let myButton = document.createElement("button");   
myButton.innerHTML = "CLICK ME";                   
document.body.appendChild(myButton);            
```

`document.write` allows us to write HTML expressions or JavaScript code directly to a document. Content is output precisely where the JavaScript statement is embedded.

For exampe, let's assume we have the following HTML we'd like to append to our source code.

```html
<h1>Hello World!</h1><p>Have a nice day!</p>
```

We can add this using the following JavaScript.
```javascript
document.write("<h1>Hello World!</h1><p>Have a nice day!</p>")
```
> Note that if `document.write` is used after the HTML document is fully loaded, it will delete all existing HTML.

### Try this exam question

You have been asked to evaluate the following source code. What happens when the function is called?

```html
<!DOCTYPE html>
<html>
  <body onload="writeToPage()">
    <h1>Welcome to my website!</h1>

    <script>
      function writeToPage() {
        document.write('Hello World!');
      }
    </script>
  </body>
</html>
```

1. "Hello World!" is written to the page below the `<h1>` tag
2. Nothing is written to the page dynamically, though the `h1` tag remains visible
3. "Hello World!" is written to the page, replacing all other content

> Note that the `onload` DOM method is very useful to run some code **after** the page has completed loading

# Lesson 2

## Learning objectives

- Understand the try/catch block

### Exception handling with Try/Catch

Sometimes you know ahead of time that a codeblock may fail, or you would like the codeblock to fail in a "graceful" way without breaking your entire application. For this with can use a `try/catch` block:

```javascript
try {
  // try and remove an element
  field.nextElementSibling.remove();
} catch (e) {
  // print the error message
  console.log(e.message);
} finally {
  // this section always runs
}
```

In the code above, we try to remove an element from the HTML. If the element isn't there, then a type error will be thrown. If we wrap it in a try/catch block, we can handle this exception, knowing that it may occur.

#### Try this exam question

You have been asked to evaluate the following code. What is printed out to the console?

```javascript
try {
  throw new Error("There's been a problem!");
} catch (e) {
  console.log("e.message");
} finally {
  console.log("finally called");
}
```

1. "There's been a problem!" "finally called"
2. "There's been a problem!"
3. Nothing is printed out

# Lesson 3

## Learning Objectives

- Understand the difference between inline and external scripts
- Implement the strategies in code

### Inline vs external scripts

If you've worked with CSS before, you may know that you can write CSS directly into the HTML source or you can link to an external file. The same holds true for JavaScript. We could inline a script as follows:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Inline script</title>
    <script type="text/javascript">
      console.log("Hello! I'm an inline script");
    </script>
  </head>
  <body></body>
</html>
```

Alternatively, you can place your JavaScipt in an external `.js` file, and link to it in your HTML source:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>External script</title>
    <script type="text/javascript" src="./assets/js/external.js"></script>
  </head>
  <body></body>
</html>
```

### Key things to know for the exam

* Inline scripts are **not** cached (a browser can't cache part of a file)
* External scripts can be cached (they are their own file)
* Inline scripts can go in both the `<body>` and `<head>` sections of an HTML page
* External scripts can also go in both the `<body>` and `<head>` sections of an HTML page
* Placing JavaScript in an external file separates HTML and code and makes files easier to read

For more information and to try out some examples refer to [this tutorial](https://www.w3schools.com/js/js_whereto.asp)

# Lesson 4

## Learning Objectives

- Understand the difference between confirm, alert and prompt popup boxes

### Popup boxes
JavaScript has three types of popup boxes. These are
* Alert box - just has an "OK" button
* Confirm box - displays text plus "OK" or "Cancel" 
* Prompt box - requires the user to click either "OK" or "Cancel" after entering an input value

### Try these exam questions

Create instances of all 3 dialog box types.


[main](/swe)|[prev](/swe/mod2/wk2/day1.html)|[next](/swe/mod2/wk2/day3.html);
