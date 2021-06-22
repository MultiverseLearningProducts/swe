# Mod 2 > Week 2 > Day 3

# Overview of the day

Today we look at GET vs POST and the History object

# Lesson 1

## Learning objectives

- Understand the difference between GET and POST
- Understand the form submission process

## GET vs POST

HTTP defines a number of standard methods that can be used to send and retrieve data to/from a server. By far the most common are `GET` and `POST`.

- When you request for a resource like a web page or image, the GET request will be used.

- For the GET request, aAdditional information can be set in the query parameters where it's visible to all

- When you submit a form, either the GET or POST can be used - the main difference is where the data to be sent is stored

- A form POST request sends data to the server for processing in the message body, hidden from the user (but not encrypted!)

- A form GET request sends the form data in the query string

### Try these exam questions

True or false?

1. GET requests are cached
2. POST requests are cached
3. GET requests have character limits
4. You should always use the POST method when handling sensitive data

5. You've been given the source below to evaluate. If a user were to enter a task name of "Do the washing" and an owner of the task as "Simon", then were to submit the form, what would the URL be?

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

Earlier we looked at the DOM. As we now know, the DOM exposes many convenient objects and methods for our use as web developers. One such object is the `History` object. Using the History object, we can navigate through the session history programmatically. We can even push new history items to the stack as if the user had navigated to a new page.

To access the History object in the browser, simply open the console and type `window.history` or more simply `history`.

> Note for security reasons you can't see the actual history using this method, but you can see the length of the object as well as the data state (more on this below)

From here, you can programatically navigate back and forward:

```javascript
window.history.forward();
window.history.back();
```

### History.pushState

As mentioned above, we can add URLs and an associated data payload to the history stack by using `history.pushState()`:

```javascript
history.pushState({ name: 'Daniel' }, 'Some title', '/hello');
```

If you were to add this to your console, you will see the URL has updated. You can also access the data state by typing `history.state`, though you can only access the state that belongs to a URL when the URL is active. For instance, I can only access the object `{ name: 'Daniel' }` when on the ``/hello` URL but nowhere else.

### When/where is pushState used?

We live in an internet world where AJAX requests get made and therefore full page refreshes can be avoided. If however, a significant amount of content is changed on a web page with an asynchronous request, we may want to preserve that state with a new URL and an associated data payload. This is where `pushState` can help.

### Try this exam question

The following code is run in the console when the user is on `https://www.google.com`:

```javascript
history.pushState({ name: 'Test' }, 'Test page', '/test');
history.pushState(
  { name: 'Another test' },
  'Another test page',
  '/another-test'
);

history.state; // what is logged?
history.back();
history.back();
```

What URL does the user end up on?

1. https://www.google.com/test
2. https://www.google.com/another-test
3. https://www.google.com

What state is logged?

1. {}
2. Undefined
3. { name: 'Another test' }

[main](/swe)|[prev](/swe/mod2/wk2/day2.html)|[next](/swe/mod2/wk2/day4.html);
