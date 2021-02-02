# Bootcamp > Week 4 > Day 2

## Overview of the day

Your group project will be to create a 'Task List' application similar to this (note you are free to design the UI however you like!):

![to do list](https://user-images.githubusercontent.com/1316724/106533527-42286300-64ea-11eb-9cb3-049171f4b772.PNG) 

You may therefore want to use `drag and drop` to move tasks from one list (e.g. To Do) to another (e.g. In Progress) hence today we will discover how to implement this using JavaScript.

----
## Lesson 1 - Drag and Drop
## Learning Objectives

* Understand the event listeners which support drag and drop, for example, `ondragstart`, `ondragover`, `ondrop` and the HTML attribute `draggable`.

## Lesson
To make an element 'draggable', you simply set the `draggable` attribute to true. For example:

```js
<img id="myImageElement" src="image.png" draggable="true">
```
When you start dragging, an `dragstart` event is triggered. We want to intercept this event and keep track of which element is being dragged.

```js
<img id="myImageElement" src="image.png" draggable="true"> ondragstart="drag(event)">

function drag(event) {
  <!-- record which element is being dragged -->
  event.dataTransfer.setData("text", event.target.id);
}
```

To allow an element to be dragged into a second element, we need to disable the default behaviour of the second element on `dragover` to allow this:

```js
<div id="myTargetElement" 
        ondrop="drop(event)" 
        ondragover="allowDrop(event)">
</div>

function allowDrop(event) {
    event.preventDefault();
}
```

On `drop` we retrieve the data from the dragged element and add it as a child element of the target:

```js
function drop(event) {
    <!-- determine the element which was dragged -->
    const data = event.dataTransfer.getData("text");
    <!-- add it to our HTML -->
    event.target.appendChild(document.getElementById(data));
}
```
By using Chrome's Developer Tools (Elements) we can see how the drag and drop has affected the HTML:

![prior to dragging an image](https://user-images.githubusercontent.com/1316724/106565337-94877500-6526-11eb-8365-93ed999c27ef.PNG)

![after dragging an image](https://user-images.githubusercontent.com/1316724/106565519-d9131080-6526-11eb-84de-7d96afc05719.PNG)

Note that there are a number of Drag and Drop libraries for JavaScript for example [SortableJS](https://github.com/SortableJS/Sortable).

## Assignment
  1. Run through the [W3Schools Tutorial on Drag & Drop](https://www.w3schools.com/html/html5_draganddrop.asp). This is a very short lesson but explains the basic of drag & drop. 
  2. Follow the [How To Build Sortable Drag & Drop With Vanilla Javascript](https://www.youtube.com/watch?v=jfYWwQrtzzY) You Tube video (22 mins) which walks you through a more complex example of using drag and drop. If you want a copy of the final code, please refer to `index.html` in the [Day 2 solution](https://github.com/MultiverseLearningProducts/swe-solutions/tree/main/bootcamp/wk4/day2).
  3. Armed with this knowledge, or, if you prefer, using the [SortableJS library](https://github.com/SortableJS/Sortable), try to create a To Do list which looks similar to the image at the top of this page, enabling the functionality to move tasks between boards.


## TODO - ignore the following content for now as we are not covering AppRun

## Lesson 1 - Drag and Drop

## Learning Objectives

* Understand the event listeners which support drag and drop, for example, `ondragstart`, `ondrop` and the html attribute `draggable`.

## Before we start

* Have your todo list handy

## Materials needed

* [Drag and Drop API](https://www.w3schools.com/html/html5_draganddrop.asp)

## Lesson

To take on this weeks coding challenge you will need to know how to drag and drop. Lets start by making our HTML element 'draggable'. Add the 'draggable' HTML attribute to your task element. What effect has this had?

### Dragging

When you start dragging an event is triggered. We want to intercept this event and keep track of which element is being dragged.

```javascript
`<li id="${task.id}" draggable="true" ondragstart="app.run('ondragstart', event)">`
```
Make the `task.id` the id of the HTML element. Add the update function `onDragStart`. Notice we are going to pass in the event object.
```javascript
    onDragStart: (state, event) => {
        event.dataTransfer.setData('text', event.target.id)
        return state
    }
```
When we start dragging we set the drag event up to transfer some data, the id of the task being dragged. Can you see how we read the id of the element being dragged from the `event` object and in particular the `event.target` object.

### Dropping

Lets make it so if you drag a task from the list it will delete it. For that we need to detect the drop event, and we need to make a drop zone. Can you put another element next to your list? Get them to sit next to each other on the page.

![flexbox example](https://user-images.githubusercontent.com/4499581/95676057-55b66380-0bb3-11eb-97ef-be07d2948bd5.png)

The hotpink section is the drop zone. HTML elements by default are NOT droppable. To make a drop zone, we need to override the default behavior of the browser. To do this you will have to add a `ondragover` event listener to your drop zone element. You can also add the `ondrop` event listener, and add the event handler to `ondrop`.

```html
<div ondragover="event.preventDefault()" ondrop="app.run('onDrop', event)"></div>
```

Here we are calling `event.preventDefault()` whenever an element is dragged over this element. By doing this we will enable dropping on that element. Then we add our `ondrop` event handler and capture the drop event. We need the `event` object from the drop to get the data values we passed from the dragging element.

Delete the item from the array in `state.tasks`.

```javascript
onDrop: (state, event) => {
    event.preventDefault()
    const id = event.dataTransfer.getData('text')
    const index = state.tasks.findIndex(task => task.id == id)
    state.tasks.splice(index, 1)
    return state
}
```

### stopPropagation

What happens if we have nested drop zones? For now imagine I want to either 'highlight' a task or delete it.

![nested drop zones](https://user-images.githubusercontent.com/4499581/95676910-ba74bc80-0bb9-11eb-9f7e-e448e3888812.png)

I'm going to add a different update function that will add a 'highlight' class to my task. The behavior I am looking for is when I drag and drop on the highlight zone, my task should become highlighted. However! It doesn't work. My task just gets deleted. Why is that?

The drop event will cause <u>BOTH</u> event handlers to be triggered; `onDrop` and my `onHighlight`. The event propagates up through the DOM. This behavior is called bubbling. I don't want this. When the `ondrop` listener triggers my `onHighlight` event handler I want the event propagation to stop. I will have to call `event.stopPropagation()` to stop the event triggering other event handlers.

```javascript
onHighlight: (state, event) => {
    event.preventDefault()
    event.stopPropagation()
    const id = event.dataTransfer.getData('text')
    const index = state.tasks.findIndex(task => task.id === id)
    state.tasks[index].highlight = 'highlight'
    return state
}
```

![highlight task now works thanks to stop propagation](https://user-images.githubusercontent.com/4499581/95677015-9bc2f580-0bba-11eb-8894-8657e1a852f0.png)

### Summary

There are some important concepts we have looked at in this lesson. First of all we have learnt more about the event object. We have seen how it can be used to:

* transfer data
* override default browser behaviors
* stop event propagation

## Assignment

* Implement drag and drop to delete a task in your todo app

----

## Lesson 2 - Ajax

## Learning Objectives

* Explain what ajax means?
* Understand what makes a single page app (SPA)?
* Use `XMLHTTPRequest` and `fetch`

## Before we start

* You will need your todo app
* You will need to create an express server

## Materials needed

* [slides](https://docs.google.com/presentation/d/1At1OJ_pqLOt9oW9YpfbQ5NahzM4C4Y18TbO8C4B0FRU/edit?usp=sharing)

## Lesson

!(https://docs.google.com/presentation/d/e/2PACX-1vT4wCJjWXLsTFfoX-0JzvXu4bNZa-wDE2QfXAn5cOrYhchUekDfDw52QSR_FSfHSeAzCD7aQbokFW4t/embed)

The ajax pattern lead to a different kind of web site. A site that was closer to an app, one HTML page is loaded, then the following pages, and interactions are all driven by javascript. It is this pattern that we are going to implement in our group projects. To follow along we'll make a simple server that will store our tasks.

### Create our data server

This express server will server our single HTML page, and then all Consequential requests will be for the data it needs to run. Create a `server.js` file in your project folder. Create a `public` folder and put your `index.html`, `style.css` and `main.js` in that folder. Set express up to serve static assets from the `public` folder, and deal with json requests, finally run your server on port 3000.

```javascript
const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const tasks = [
    {
        id: 1,
        text: 'Fetch all the tasks',
        status: 0
    },
    {
        id: 2,
        text: 'Create a new task',
        status: 0
    }
]

app.listen(3000, () => {
    console.log('app server running on port', 3000)
})
```
I have added some tasks on the server. Our first job will be to fetch these once the page has loaded.

### Making ajax requests

We are going to use the `fetch` API that comes bundled in the javascript runtime in the browser. We need an update function in our AppRun update object that is going to get all the tasks on the server.

```javascript
    getTasks: async (state) => {
        state.tasks = await fetch('/tasks').then(res => res.json())
        return state
    }
```
What kind of function is getTasks? We can make a simple 'get' request using `fetch` it uses the `Promise` object. `fetch` will return an HTTP response object, we then need to transform that into usable JSON. In the example above we can expect the `/tasks` endpoint to return an Array of tasks. We assign that into state and that will trigger a re-render.

On the server we can add the `/tasks` endpoint:

```javascript
app.get('/tasks', (req, res) => {
    res.send(tasks)
})
```

The key take away here is - no templates. We don't do templating on the server, we just respond with the data our single page app needs. The next refactor is to create a task on the server, not just on the frontend. Update your `add` update function, don't push the new task into `state.tasks`. Instead post it to the server, and then trigger `app.run('getTasks')`.

```javascript
    add: (state, form) => {
        const data = new FormData(form)
        const task = {
            id: window.crypto.getRandomValues(new Uint8Array(2)).join(''),
            text: data.get('text'),
            highlight: '',
            status: 0
        }
        const postRequest = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        }
        fetch('/tasks', postRequest).then(() => app.run('getTasks'))
        return state
    },
```
Making a POST request is similar to a GET request, only now we include a javascript object with the settings for;

* method - "POST"
* headers - we have to set the type of content we are posting in the header of the request
* body - this must be a string, it is where we put our data we want to send to the server

On the server we can create an endpoint to receive the `postRequest`;

```javascript
app.post('/tasks', (req, res) => {
    tasks.push(req.body)
    res.send()
})
```
here we reply with `res.send()` on the frontend we are waiting for this, we can then make a request for the updated tasks by calling `app.run('getTasks')`. This is a design choice to demonstrate how one AppRun update function can call another update function, like a chain of events. You could return all the tasks from the POST request above, and then update the state with the new task list all within the 'add' update function.

## Assignment

* Set up an app server for yourself
* Make ajax GET requests using `fetch`
* Make ajax POST requests using `fetch`

[attendance log](https://applied.multiverse.io/mod/questionnaire/complete.php?id=6702)
[main](/swe)|[prev](/swe/bootcamp/wk4/day1.html)|[next](/swe/bootcamp/wk4/day3.html)