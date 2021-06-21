# Mod 2 > Week 2 > Day 2

# Overview of the day

Today we will look at how to add elements to our page dynamically.

# Lesson 1

## Learning Objectives

- Learn how to add an element dynamically to a page

## Adding elements dynamically

Let's pretend we have the following label we'd like to append to the source code:

```html
<label for="someInput" class="error-label">This field cannot be empty</label>
```

How could you create this dynamically in JavaScript and insert it? How could you add the `for` attribute as well as the class and the inner text?

### Try this exam question

Research the questions above then fill in the blanks:

```javascript
var myLabel = document.___________('_____');

myLabel.____________setAttribute('___', '_________');
myLabel._________.add('error-label');
myLabel._________ = 'Error label content';
```

How could you then write this to the source? There are a number of ways to achieve this, but in terms of the exam, we only need to know `document.write`. This DOM method will insert anything you wish into the source, including our dynamically generated label above.

### Try this exam question

You have been asked to evaluate the following source code. What is written to the page?

```html
<!DOCTYPE html>
<html>
  <body>
    <script>
      document.write('Hello World!');
    </script>
  </body>
</html>
```

1. Hello World!
2. Hello Kitty!
3. Nothing is written to the page

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

> The `onload` DOM method is very useful to run some code after the page has completed loading

# Lesson 2

## Learning objectives

- Understand the try/catch block

### Exception handling with Try/Catch

Sometimes you know ahead of time that a codeblock may fail, or you would like the codeblock to fail in a "graceful" way without breaking your entire application. For this with can use a `try/catch` block:

```javascript
try {
  // try and remove the sibling
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
  console.log(e.message);
} finally {
  console.log(e.message);
}
```

1. "There's been a problem!" ... Uncaught ReferenceError: e is not defined
2. "There's been a problem!"
3. Nothing is printed out

# Lesson 3

## Lesson objectives

- Understand inline vs external scripts

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

### Try these exam questions

True or false?

1. Inline scripts can be cached

- True
- False

2. External scripts can be cached

- True
- False

3. You should always use external scripts where possible

- True
- False

4. You shouldn't inline large JavaScript files

- True
- False

5. You should put large JavaScript files in an external script

- True
- False

[main](/swe)|[prev](/swe/mod2/wk2/day1.html)|[next](/swe/mod2/wk2/day3.html);
