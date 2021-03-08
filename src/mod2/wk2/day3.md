# Mod 2 > Week 2 > Day 3

# Overview of the day

Today we look at bug fixing and debugging strategies.

# Lesson 1

## Learning Objectives

- Understand common debugging strategies
- Leverage Chrome Dev Tools to debug

# Common debugging strategies

Debugging is the process of finding and fixing bugs in your programs. All programs (even ones that are live and deployed!) have bugs. Even operating systems will have bugs that the developers will "patch". A patch is fix for a problem in a computer program.

> Did you know? The first known computer bug was a real bug (an insect) stuck in the electronics

## The console is your friend

In Chrome, right click the page and hit "Inspect" then navigate to "Console". You should keep this open at all times during testing so you catch any errors.

## Console logging

We've already used one of the primary strategies to debug and that is the `console.log` statement. Use this often in the development process to test the output of programs, but do consider removing these statements when your apps go live!

## The stack trace (not required for exam)

Being able to read a stack trace is an important skill when debugging your JavaScript applications. Programs often consist of many functions that call one another to achieve a result. You may have written your validation apps in this modular way.

A stack is a "Last in, First out" data structure, where the last function to get added to the stack gets executed and then "popped" off the stack. If the function being popped throws an error, JavaScript (and other languages) will produce what's known as a `stack trace`. This is a trace of all the function calls, starting with the function in error, all the way down to the function at the base of the stack.

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

The `debugger` keyword can be used anywhere in your applications to launch the debugging tool in the environment you're in. This has the effect of setting a `breakpoint`. Add this to the validation code you wrote yesterday. What happens? What can you see and find in the console?

## Adding break points in Dev Tools

We can add the debugger statement to our code manually, but there is a more convenient way of doing this in Chrome Dev Tools:

![](https://developers.google.com/web/tools/chrome-devtools/javascript/imgs/loc-breakpoint.png)

Now, when you refresh the page, the debugger will kick in. From here, you can analyse the contents of variables by hovering over them. You can also see the local, script and global variables on the right hand side.

## Assignment

Debug this broken app!

[Here](https://drive.google.com/file/d/16a_lShlRY9lMx6FbZYsPJ7HxJSy4Cs-c/view?usp=sharing) is a link to a broken app. The app makes a fetch request to a URL, then attempts to load the results in the page. There are some new concepts (plus many concepts we have learnt!)

The main one to understand is the `Promise`. Remember the work we did callbacks last week? The JavaScript promise was an attempt to make asynchronous requests easier to write and maintain. Below is the syntax:

```javascript
fetch("https://someurl.com")
  .then((result) => {
    // return the result of the fetch
    return result;
  })
  .then((result) => {
    // do something with result here
    console.log(result)
  })
  .catch((error => {
    // handle errors here
    console.log(error)
  });
```

- Can you use some of the debugging strategies introduced above to debug the broken app?
- The working version fetches some colourful blocks and loads them into the page

> Good to know: the fetch request and the anonymous functions within the promise also get added to the stack

# Lesson 2

## Learning Objectives

## Assignment

# Lesson 3

## Learning Objectives

## Assignment

[main](/swe)|[prev](/swe/mod2/wk2/day2.html)|[next](/swe/mod2/wk2/day4.html);

```

```
