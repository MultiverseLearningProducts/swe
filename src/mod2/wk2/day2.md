# Mod 2 > Week 2 > Day 2

# Overview of the day

Today we will look to add validation to our event driven app we created yesterday. Then later, we'll look at bug fixing and debugging strategies.

# Lesson 1

## Learning Objectives

- Add validation to our form submission process

## Adding validation

As we covered before, one of the primary uses of JavaScript in the early days was to validate a form before submission. This has all changed now, in that mechanisms within HTML5 can actually do most of the client-side validation for us. In addition, many developers will offload the validation to an already established and tested library.

All that being said, a little validation project is a useful way to flex our new event driven skills.

> Basic validation skills are required for the exam: `case; string comparisons; Not-A-Number (NaN)`

## Assignment

Using the JSFiddle link from yesterday:

- Validate all of the form inputs before allowing the form to submit
- Provide meaningful error messages to user
- Consider the user experience (UX) here. Errors should be subtle but clear; nobody likes a jarring alert box popup!
- Errors should tell the user _exactly_ what the problem is. Generic messages are a UX no-no

## Show and tell

Can you show the cohort your finished validation assignment?

Key points to cover:

- Can you describe your software design approach? E.g procedural, modular, object oriented
- What are you validating and how?
- What UX considerations did you make?
- How are your error messages displayed?

# Lesson 2

## Learning Objectives

- Understand common debugging strategies
- Leverage Chrome Dev Tools to debug

# Common debugging strategies

Debugging is the process of finding and fixing bugs in your programs. All programs (even ones that are live and deployed!) have bugs. Even operating systems will have bugs that the developers will "patch". A patch is fix for a problem in a computer program.

> Did you know? The first known computer bug was a real bug (an insect) stuck in the electronics

## Console logging

We've already used one of the primary strategies to debug and that is the `console.log` statement. Use this often in the development process to test the output of programs, but do consider removing these statements when your apps go live!

## The debugger statement

The `debugger` keyword can be used anywhere in your applications to launch the debugging tool in the environment you're in.

## Assignment

# Lesson 3

## Learning Objectives

## Assignment

[main](/swe)|[prev](/swe/mod2/wk2/day1.html)|[next](/swe/mod2/wk2/day3html);
