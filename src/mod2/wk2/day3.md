# Mod 2 > Week 2 > Day 3

# Overview of the day

Today we look at GET vs POST, the History object and local and session storage. We also discuss Truthy versus Falsy values.

# Lesson 1

## Learning objectives

- Understand the difference between GET and POST
- Understand the form submission process
- Understand how to store the session history
- Understand the difference between local and session storage

## GET vs POST

HTTP defines a number of standard methods that can be used to send and retrieve data to/from a server. By far the most common are `GET` and `POST`.

- When you request a resource like a web page or image, the GET request will be used.

- For GET requests, additional information can be sent in the query parameters where it's visible to all e.g. `q=apple&category=fruit` GET requests **do not** have message bodies.

- A form POST request sends data to the server for processing in the message body, hidden from the user (but not encrypted!)

- Typically, POST is used to submit form data. If a GET is used, the data is sent in the query parameters.

Take a look at this form
```html
<form action="/action_page.php" method="GET">
  <input type="text" id="id1" name="fname"><br><br>
  <input type="text" id="id1" name="lname"><br><br>
  <input type="submit" value="Submit">
</form>
```
When the "Submit" button is pressed, the data will be appended to the URL as key-value pairs as follows:
`http://localhost:5500/action_page.php?fname=asdsad&lname=asdasdsd` note that the keys are the `name` attributes of the input field.

If the method above was changed to `POST`, the data would still be sent as key-value pairs but would be sent in the HTTP request body instead.
```html
http://localhost:5500/action_page.php

fname=asdsad&lname=asdasdsd
```

### Key things to know for the exam

* The response to GET requests can be cached
* The response to POST requests should not be cached
* GET requests are stored in the browser's history
POST requests are not
* There is a limit to how many characters you can send in a GET request URL
* You should always use the POST method when handling sensitive data
* Form values are sent as key-value pairs, the key being the name of the input field

You've been given the source below to evaluate. If a user were to enter a task name of "Do the washing" and an owner of the task as "Simon", then were to submit the form, what would the URL be?

```html
<form action="http://mywebsite.org/search" method="GET">
  <label for="taskName">Task Name</label>
  <input
    type="text"
    class="form-control"
    name="name"
    id="taskid"
    placeholder="Name of the task"
  />
  <input
    type="text"
    class="form-control"
    name="owner"
    id="ownerid"
    placeholder="The person that owns the task"
  />

  <!-- other form fields -->
</form>
```

1. http://mywebsite.org/search?name=Do+the+washing&owner=Simon
2. http://mywebsite.org/search?taskid=Do+the+washing&ownerid=Simon
3. http://mywebsite.org/search?nametaskid=Do+the+washing&ownerownerid=Simon

# Lesson 2

## Learning objectives

- Learn how to handle state with the History object

## Handling state with the History object

Earlier we looked at the DOM. As we now know, the DOM exposes many convenient objects and methods for our use as web developers. One such object is the `History` object. Using the History object, we can navigate through the session history programmatically. 

To access the History object in the browser, simply open the console and type `window.history` or more simply `history`.

> Note for security reasons you can't see the actual history using this method, but you can see the length of the object as well as the data state (more on this below).

Using JavaScript you can programatically navigate back and forward through the history:

```javascript
window.history.forward();
window.history.back();
```
Here is an example of creating a web page with "Back" and "Forward" buttons. These will work the same way the browser's Back and Forward buttons do.

```html
<html>
<head>
<script>
function goBack() {
  window.history.back()
}
function goForward() {
  window.history.forward()
}
</script>
</head>
<body>

<input type="button" value="Back" onclick="goBack()">
<input type="button" value="Forward" onclick="goForward()">

</body>
</html>
```

### Manually modifying the history state
We can manually add an entry to the history state stack using `history.pushState()`:

```javascript
history.pushState({ name: 'Some page' }, 'Some title', '/someURL');
```
We can manually remove an entry from the history state using `history.popState()`

You can also access the history state by typing `history.state`.

> Note that there is a limit of 640k for storage of state data.

# Lesson 3

## Learning objectives

- Understand `cookies`, `localStorage` and `sessionStorage`

## Cookies
A cookie is a small piece of data stored on a user's browser by a website. Cookies are used for analytics or to personalise a user's experience with a website. 

Cookies can be set and modified at with JavaScript using `document.cookie`.

> Cookie storage is very small - typically limited to 4k

> Check out what cookies are stored on your browser through Developer Tools->Application->Cookies

## Storing data in local storage
`localStorage` and `sessionStorage` allow us to save key/value pairs in a browser.

> `localStorage` persists even when the browser is closed or the user's computer is shutdown

> `sessionStorage` is removed when a browser tab is closed

> both `localStorage` and `sessionStorage` can hold at least 5Mb of data, much larger than a cookie

### Try these exam questions

Research how you would set/retrieve/remove items from localStorage and sessionStorage.

# Lesson 4

## Learning objectives

- Understand the difference between JavaScript Falsy and Truthy values

## Truthy versus Falsy
A `falsy` value is a value that is considered false when encountered in a Boolean context.

|**Falsy value**|
|---------------|
|false|
|0|
|"" or ''|
|null|
|undefined|
|NaN|

everything else is a Truthy.

Examples:
* `false && "dog"` // false
* `0 || true` // true
* `"" && true` // false
* `-1 && 0` // false
* `-1 && b` // true

# Lesson 5

## Learning objectives
`use strict` defines that JavaScript code should be executed in "strict mode".

With strict mode, you can not use undeclared variables.
```javascript
"use strict";
a = 5;  // error (a is not defined).
```
# Lesson 6

## Learning objectives
The `<noscript>` tag defines alternate content to be displayed to users that have disabled JavaScript in their browser or have a browser that can't support scripts.

[main](/swe)|[prev](/swe/mod2/wk2/day2.html)|[next](/swe/mod2/wk2/day4.html);
