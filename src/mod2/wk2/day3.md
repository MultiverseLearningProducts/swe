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

- True
- False

2. POST requests are cached

- True
- False

3. GET requests have character limits

- True
- False

4. You should always use the POST method when handling sensitive data

- True
- False

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

- http://mywebsite.org/search?name=Do+the+washing&owner=Simon
- http://mywebsite.org/search?taskid=Do+the+washing&ownerid=Simon
- http://mywebsite.org/search?nametaskid=Do+the+washing&ownerownerid=Simon

# Lesson 2

## Learning objectives

- Learn how to handle state with the History object

## Handling state with the History object

To do

[main](/swe)|[prev](/swe/mod2/wk2/day2.html)|[next](/swe/mod2/wk2/day4.html);
