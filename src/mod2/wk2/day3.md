# Mod 2 > Week 2 > Day 3

# Overview of the day

Today we look at bug fixing and debugging strategies. Later, we'll take a look at inline vs external scripts.

# Lesson 1

## Learning Objectives

- Understand common debugging strategies
- Leverage Chrome Dev Tools to debug

# Common debugging strategies

Debugging is the process of finding and fixing bugs in your programs. All programs (even ones that are live and deployed!) have bugs. Even operating systems will have bugs that the developers will "patch". A patch is fix for a problem in a computer program.

> Did you know? The first known computer bug was a real bug (an insect) stuck in the electronics

## The console

In Chrome, right click the page and hit "Inspect" then navigate to "Console". You should keep this open at all times during testing so you catch any errors.

## Console logging

We've already used one of the primary strategies to debug and that is the `console.log` statement. Use this often in the development process to test the output of programs, but do consider removing these statements when your apps go live.

## Document.write

`document.write` allows you to write HTML to the page source dynamically and can be useful for testing. Bear in mind that if you write to the page after the content has been loaded, it will remove all of the body content. See [this](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_doc_write4) example.

## The stack trace

Being able to read a stack trace is an important skill when debugging your JavaScript applications. Programs often consist of many functions that call one another to achieve a result. You may have written your validation apps in this modular way.

> Stack trace knowledge isn't required for the exam, but is useful to know

A stack is a "Last in, First out" data structure, where the last function to get added to the stack gets executed and then "popped" off the stack. If the function being popped throws an error, JavaScript (and other languages) will produce what's known as a `stack trace`. This is a trace of all the function calls, starting with the function in error, all the way down to the function at the base of the stack.

> You may have come across the website StackOverflow. This was named after an error that occurs when too many items get added to the stack.

You can view a trace of your app any anytime just by adding `console.trace();` in any function.

Below is a very simple stack trace:

```javascript
Uncaught TypeError: invalidFields.cannieFinditCapt is not a function
    at validateSelectFields (validation.js:134)
    at HTMLFormElement.validateForm (validation.js:74)
```

- What is the error?
- Where did the error occur?
- At what line did the error occur?
- What is the function at the base of the stack?

## The debugger statement

The `debugger` keyword can be used anywhere in your applications to launch the debugging tool in the environment you're in. This has the effect of setting a `breakpoint`.

- Add this to the validation code you wrote yesterday
- What happens when you refresh?
- What can you see and find in the console?

> You'll need to have an understanding of the debugger keyword for the exam
## Adding break points in Dev Tools

We can add the debugger statement to our code manually, but there is a more convenient way of doing this in Chrome Dev Tools:

![](https://developers.google.com/web/tools/chrome-devtools/javascript/imgs/loc-breakpoint.png)

Right click the line you want to break on, then click "Add breakpoint".

Now, when you refresh the page, the debugger will kick in. From here, you can analyse the contents of variables by hovering over them. You can also see the local, script and global variables on the right hand side.

## Exception handling with Try/Catch

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

> The `finally` block also runs irrespective of whether there was an error. This section is optional.

## Assignment

Debug this broken app!

[Here](https://drive.google.com/file/d/16a_lShlRY9lMx6FbZYsPJ7HxJSy4Cs-c/view?usp=sharing) is a link to a broken app. The app makes a fetch request to a URL, then attempts to load the results in the page. There are some new concepts (plus many concepts we have learnt!)

The main one to understand is the `Promise`. Remember the work we did callbacks last week? The JavaScript promise was an attempt at making asynchronous requests easier to read and write. Below is the syntax:

```javascript
fetch("https://someurl.com")
  .then((result) => {
    // return the result of the fetch
    return result;
  })
  .then((result) => {
    // do something with returned result
    console.log(result);
  })
  .catch((error) => {
    // handle any errors here
    console.log(error);
  });
```

- Can you use some of the debugging strategies introduced above to debug the broken app?
- The working version fetches some colourful blocks and loads them into the page

> **Good to know:** the fetch request and the anonymous functions within the promise also get added to the stack

# Lesson 2

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

> Inline (and external) scripts typically go in the `<head>` section of the HTML, but this isn't a strict rule.

So, which method should you choose?

Well, larger scripts are almost certainly better in an external file. Here's why:

- A big script would "pollute" the HTML and make it tricky to work with

- Larger scripts are normally written in a modular way across multiple files. Inline scripting goes against this design pattern.

- External files can be cached by the browser, meaning if the file hasn't changed, then it won't download the file if it doesn't need to. This has huge performance benefits.

When should you use an inline script?

- When you're doing small development tasks/testing that don't require an external file

- When you need _very_ lightweight code to run that doesn't require an external file

- When a script is dynamically loaded to the source (e.g. Google Analytics)

## Assignment

- Take the validation work you've done and add it to local files
- Experiment with inline and external strategies
- Which do you prefer?
- How can you see if an external JS file is cached?

[main](/swe)|[prev](/swe/mod2/wk2/day2.html)|[next](/swe/mod2/wk2/day4.html);
