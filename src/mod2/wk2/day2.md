# Mod 2 > Week 2 > Day 2

# Overview of the day

Today we will look at how to add elements to our page dynamically before adding validation to our event driven app we created yesterday.

# Lesson 1

## Learning Objectives

- Learn how to add an element dynamically to our page
- Add validation to our form submission process

## Adding elements dynamically

Before we crack on with validation, it's worth considering the UX for a minute. In particular; how we tell the user there's been an error. As you'll know, popups and alerts on pages are not fun; we therefore need a subtler way to tell the user there's been an error.

There are many ways to do this, and you will have no doubt come across different strategies whilst submitting forms online yourself. One such way is to add a label dynamically to the page to inform the user what the error is. This is how you might achieve that:

```javascript
// create a label
const errorLabel = document.createElement("label");

// set a "for" attribute equal to the input's ID to help UX
errorLabel.setAttribute("for", input.id);

// create a text node
const errorLabelTextNode = document.createTextNode(errLabel);

// append the text node to the label
errorLabel.appendChild(errorLabelTextNode);

// add a class for styling purposes
errorLabel.classList.add("error-label");
```

> You need to know `createElement` and `setAttribute` for the exam

What you'd end up with would be:

```html
<label for="description" class="error-label">This field cannot be empty</label>
```

> `For` is a useful attribute that sets the focus on the input when the label is clicked

To add the label to the source, you'd append it to a node:

```javascript
// append to the parentNode of an input
input.parentNode.append(errorLabel);
```

## Adding validation

As we covered before, one of the primary uses of JavaScript in the early days was to validate a form before submission. This has all changed now, in that mechanisms within HTML5 can take care of most of the client-side validation for us. In addition, many developers will offload the validation to an already established and tested library.

> You should always validate on the server-side as well as client-side validation is not a complete solution

All that being said, a little validation project is a useful way to flex our new event driven skills.

## Assignment

Using the JSFiddle link from yesterday:

- Validate all of the form inputs before allowing the form to submit

- Provide meaningful error messages to user

- Consider the user experience (UX) here. Errors should be subtle(ish) but clear; nobody likes a jarring alert box popup!

- Errors should tell the user what the problem is. Generic messages are a UX no-no

You need to validate so that:

- The user has filled in all the fields

- Fields are of a certain length (e.g. a required name field with just one letter entered is suspect)

- Extension task: verify that the format of fields such as date, email, credit card number, etc. fit a required pattern (you may need to use RegEx for this)

> RegEx is not required for the exam but is a very useful tool to match strings, e.g. `/\d{4}-\d{2}-\d{2}/.test("2021-01-17")` would return true

## Show and tell

Can you show the cohort your finished validation assignment?

Key points to cover:

- Can you describe your software design approach? E.G. procedural, modular, object oriented
- What are you validating and how?
- What UX considerations did you make?
- How are your error messages displayed?
- Found a cool solution? Please share!

[main](/swe)|[prev](/swe/mod2/wk2/day1.html)|[next](/swe/mod2/wk2/day3.html);
