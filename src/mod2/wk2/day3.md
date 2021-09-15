# Mod 2 > Week 2 > Day 3

# Overview of the day

Today we look at GET vs POST, the History object and local and session storage.

# Lesson 1

## Learning objectives

- Understand the difference between GET and POST
- Understand the form submission process
- Understand how to store the session history
- Understand the difference between local and session storage

## GET vs POST

HTTP defines a number of standard methods that can be used to send and retrieve data to/from a server. By far the most common are `GET` and `POST`.

- When you request for a resource like a web page or image, the GET request will be used.

- For GET requests, additional information can be sent in the query parameters where it's visible to all e.g. `q=apple&category=fruit` GET requests **do not** have message bodies.

- A form POST request sends data to the server for processing in the message body, hidden from the user (but not encrypted!)

- Typically, POST is used to submit form data. If a GET is used, the data is sent in the query parameters.

### Key things to know for the exam

* The response to GET requests can be cached
* The response to POST requests should not be cached
* GET requests are stored in the browser's history
POST requests are not
* There is a limit to how many characters you can send in a GET request URL
* You should always use the POST method when handling sensitive data

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

```javascript
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

# Lesson 3

## Learning objectives

- Understand `localStorage` and `sessionStorage`

## Storing data in local storage
`localStorage` and `sessionStorage` allow us to save key/value pairs in a browser.

> `localStorage` persists even when the browser is closed or the user's computer is shutdown

> `sessionStorage` is removed when a browser tab is closed

### Try these exam questions

Research how you would set/retrieve/remove items from localStorage and sessionStorage.

[main](/swe)|[prev](/swe/mod2/wk2/day2.html)|[next](/swe/mod2/wk2/day4.html);
