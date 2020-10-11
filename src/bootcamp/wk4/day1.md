# Bootcamp > Week 4 > Day 1

## Overview of the day

Today we are turning our attention to the Browser. Modern web applications are powered by javascript. There are lots of popular javascript frameworks like; React, Angular, Vue and others that help to organise and support building applications in a browser.

We are going to look at a micro-framework call [AppRun](https://apprun.js.org/). I have selected this framework because of the design pattern it implements. It mimics the design of React, Elm and to some degree Vue and Angular. Learn this pattern of event driven programming and you'll feel at home as you pick up React or Elm.

----

## Lesson 1 - The Event Object

## Learning Objectives

* understand how the `event` object is 'injected' into event handlers
* add event listeners to HTML elements
* create event handlers in javascript and attach them to event listeners

## Before we start

* You will need a new empty project
* Create a index.html, style.css and main.js

## Materials needed

* You just need your html file and a browser

## Lesson

First of all how can you run javascript in the browser? There are 2 main ways:

### Inline javascript

You can write javascript in an HTML file. You enclose your javascript in a `<script>` tag. As the page loads in the browser the HTML file is read from top to bottom, and any javascript in a `<script>` tag is executed when the page loads.

Often times there is javascript included like this, for example the Google analytics function is often included inline in an HTML file.

### Loaded from a source

You can load javascript from one or more files. When your javascript file has been loaded by the page, it will be executed. The way to include javascript that is loaded from an external file is to use the `<script>` tag and include the `src` HTML attribute with a URL as it's value. For example:

```html
<script src="/main.js"></script>
```
The line above will load and execute our `main.js` file. The final consideration for now is where and when our javascript is loaded.

#### 🐘 Remember HTML files are read from the top down

If we have libraries, modules or 3rd party javascript that we want to load these usually go in the `<head>` tag of the HTML page. Javascript that targets HTML elements (usually our app code) should be the final thing on the page to be included. In practice that means your app code should be included in a `<script>` tag just before the closing `</body>` tag. Often app code will target an HTML element, and if that element has not been loaded our javascript will Error and Fail 😟.

#### module.exports and require

You can't use the file system in the browser. Things like `module.exports` and `require` are part of Node.js. We can load multiple `.js` files on our page, that is one way to breakup our code and make it easier to work with. However, you must be aware that each separate file is a separate round trip to the server, and you can't guarantee the order the files will be returned to you. You should be aware that each file that loads shared the Global scope of the window object; for example a class defined in one file, will be available for another file to access once they are both loaded on the page.

#### Browserify

You can use `module.exports` and `require` if you add a 'build step' to your frontend javascript. There are a few 'bundlers'; Webpack, rollup, parcel and browserify are the main ones. These bundlers will take javascript you have written in multiple files and 'bundle' them (with any dependencies) into one single file that you can server to the client. There is other set up that works best with these build steps (like nodemon) you need to re-pack or re-bundle your javascript after each file change you make. Tools like watchify can help with this, rollup has this built into it. Its called 'hot reloading'.

### The Event Object

Javascript's main primitive is the `Object`. Lets start to learn about javascript in the browser by understanding the Event object. We can target parts of the HTML DOM (Document Object Model) using javascript HTML attributes. For example lets create a simple HTML button that triggers a javascript `Event` object.

```html
<button onclick="console.log(event)">Click me</button>
```
What kind of `Event` is triggered? What else can you learn about the event that just happened? Where on earth does the `event` that we are console.logging come from anyway?

The `event` object (and it must be named 'event' not 'evt', 'e' or anything else) is injected by the browser. The event object is injected into every event handler. We are using the HTML attribute `onclick` and the value is a string that is the javascript to run upon that event.

We can also have a named function defined in our `main.js` file, and include that in the string of javascript that is run when the event is triggered.

```javascript
function myButtonHasBeenClicked(event) {
    console.log(event)
}
```
```html
<button onclick="myButtonHasBeenClicked(event)">Click me</button>
```

### Event Listeners & Event Handlers

`onclick` is an 'event listener'. It listens for clicks. An event listener will have a companion called an 'event handler'. `myButtonHasBeenClicked` is an 'event handler'. There are other ways to attach event listeners to elements in the DOM. For example the code below is another way to do the same thing we are doing above, but just using javascript.

```javascript
const button = document.getElementById('my-button')
button.addEventListener('click', myButtonHasBeenClicked)
```
The button has an id of 'my-button' that enables me to target the HTML element. Then instead of adding the event listener inline, we add it to the instance of the element in javascript. I am calling `addEventListener` with 2 arguments, a string that is the name of the type of listener, and the second argument is the function to call (with the event object) to handle the event.

You can remove an event listener:
```javascript
button.removeEventListener('click', myButtonHasBeenClicked)
```

### Types of listeners

|type|description|Belongs To|
|:---|:----------|----------|
abort|The event occurs when the loading of a media is aborted|UiEvent, Event
afterprint|The event occurs when a page has started printing, or if the print dialogue box has been closed|Event
animationend|The event occurs when a CSS animation has completed|AnimationEvent
animationiteration|The event occurs when a CSS animation is repeated|AnimationEvent
animationstart|The event occurs when a CSS animation has started|AnimationEvent
beforeprint|The event occurs when a page is about to be printed|Event
beforeunload|The event occurs before the document is about to be unloaded|UiEvent, Event
blur|The event occurs when an element loses focus|FocusEvent
canplay|The event occurs when the browser can start playing the media (when it has buffered enough to begin)|Event
canplaythrough|The event occurs when the browser can play through the media without stopping for buffering|Event
change|The event occurs when the content of a form element, the selection, or the checked state have changed (for `<input>`, `<select>`, and `<textarea>`)|Event
click|The event occurs when the user clicks on an element|MouseEvent
contextmenu|The event occurs when the user right-clicks on an element to open a context menu|MouseEvent
copy|The event occurs when the user copies the content of an element|ClipboardEvent
cut|The event occurs when the user cuts the content of an element|ClipboardEvent
dblclick|The event occurs when the user double-clicks on an element|MouseEvent
drag|The event occurs when an element is being dragged|DragEvent
dragend|The event occurs when the user has finished dragging an element|DragEvent
dragenter|The event occurs when the dragged element enters the drop target|DragEvent
dragleave|The event occurs when the dragged element leaves the drop target|DragEvent
dragover|The event occurs when the dragged element is over the drop target|DragEvent
dragstart|The event occurs when the user starts to drag an element|DragEvent
drop|The event occurs when the dragged element is dropped on the drop target|DragEvent
durationchange|The event occurs when the duration of the media is changed|Event
ended|The event occurs when the media has reach the end (useful for messages like "thanks for listening")|Event
error|The event occurs when an error occurs while loading an external file|ProgressEvent, UiEvent, Event
focus|The event occurs when an element gets focus|FocusEvent
focusin|The event occurs when an element is about to get focus|FocusEvent
focusout|The event occurs when an element is about to lose focus|FocusEvent
fullscreenchange|The event occurs when an element is displayed in fullscreen mode|Event
fullscreenerror|The event occurs when an element can not be displayed in fullscreen mode|Event
hashchange|The event occurs when there has been changes to the anchor part of a URL|HashChangeEvent
input|The event occurs when an element gets user input|InputEvent, Event
invalid|The event occurs when an element is invalid|Event
keydown|The event occurs when the user is pressing a key|KeyboardEvent
keypress|The event occurs when the user presses a key|KeyboardEvent
keyup|The event occurs when the user releases a key|KeyboardEvent
load|The event occurs when an object has loaded|UiEvent, Event
loadeddata|The event occurs when media data is loaded|Event
loadedmetadata|The event occurs when meta data (like dimensions and duration) are loaded|Event
loadstart|The event occurs when the browser starts looking for the specified media|ProgressEvent
message|The event occurs when a message is received through the event source|Event
mousedown|The event occurs when the user presses a mouse button over an element|MouseEvent
mouseenter|The event occurs when the pointer is moved onto an element|MouseEvent
mouseleave|The event occurs when the pointer is moved out of an element|MouseEvent
mousemove|The event occurs when the pointer is moving while it is over an element|MouseEvent
mouseover|The event occurs when the pointer is moved onto an element, or onto one of its children|MouseEvent
mouseout|The event occurs when a user moves the mouse pointer out of an element, or out of one of its children|MouseEvent
mouseup|The event occurs when a user releases a mouse button over an element|MouseEvent
mousewheel|Deprecated. Use the wheel event instead|WheelEvent
offline|The event occurs when the browser starts to work offline|Event
online|The event occurs when the browser starts to work online|Event
open|The event occurs when a connection with the event source is opened|Event
pagehide|The event occurs when the user navigates away from a webpage|PageTransitionEvent
pageshow|The event occurs when the user navigates to a webpage|PageTransitionEvent
paste|The event occurs when the user pastes some content in an element|ClipboardEvent
pause|The event occurs when the media is paused either by the user or programmatically|Event
play|The event occurs when the media has been started or is no longer paused|Event
playing|The event occurs when the media is playing after having been paused or stopped for buffering|Event
popstate|The event occurs when the window's history changes|PopStateEvent
progress|The event occurs when the browser is in the process of getting the media data (downloading the media)|Event
ratechange|The event occurs when the playing speed of the media is changed|Event
resize|The event occurs when the document view is resized|UiEvent, Event
reset|The event occurs when a form is reset|Event
scroll|The event occurs when an element's scrollbar is being scrolled|UiEvent, Event
search|The event occurs when the user writes something in a search field (for `<input="search">`)|Event
seeked|The event occurs when the user is finished moving/skipping to a new position in the media|Event
seeking|The event occurs when the user starts moving/skipping to a new position in the media|Event
select|The event occurs after the user selects some text (for `<input>` and `<textarea>`)|UiEvent, Event
show|The event occurs when a `<menu>` element is shown as a context menu|Event
stalled|The event occurs when the browser is trying to get media data, but data is not available|Event
storage|The event occurs when a Web Storage area is updated|StorageEvent
submit|The event occurs when a form is submitted|Event
suspend|The event occurs when the browser is intentionally not getting media data|Event
timeupdate|The event occurs when the playing position has changed (like when the user fast forwards to a different point in the media)|Event
toggle|The event occurs when the user opens or closes the `<details>` element|Event
touchcancel|The event occurs when the touch is interrupted|TouchEvent
touchend|The event occurs when a finger is removed from a touch screen|TouchEvent
touchmove|The event occurs when a finger is dragged across the screen|TouchEvent
touchstart|The event occurs when a finger is placed on a touch screen|TouchEvent
transitionend|The event occurs when a CSS transition has completed|TransitionEvent
unload|The event occurs once a page has unloaded (for `<body>`)|UiEvent, Event
volumechange|The event occurs when the volume of the media has changed (includes setting the volume to "mute")|Event
waiting|The event occurs when the media has paused but is expected to resume (like when the media pauses to buffer more data)|Event
wheel|The event occurs when the mouse wheel rolls up or down over an element|WheelEvent

## Assignment

Please take a little time for yourself to create listeners and events for as many examples in the table above as you can in the time between sessions. Begin by trying some of the ones you are most interested in. We don't expect you to trigger each different type of event, but you should know what is possible.

----

## Lesson 2 - Frameworks

## Learning Objectives

* create an example of the state, view, update design pattern

## Before we start

* You need an html file

## Materials needed

* [AppRun Manual](https://drive.google.com/file/d/1iubYsseCr82Qlo_3pKlAVy0uKVIfMx-o/view?usp=sharing)

## Lesson

Developers use frameworks to help them organise their code. When lots of people work on a codebase having a pattern to follow makes it much easier for team members to join and add to the code. We are going to use a simple framework called AppRun. If you can use AppRun you will find learning React or Elm much easier.

Before we look at the framework lets think about the design pattern that underpins React, Elm and AppRun.

![state view update pattern](https://user-images.githubusercontent.com/4499581/95664104-a2ab2300-0b3c-11eb-8afd-233463f0218d.png)

Both Elm and Redux follow the same pattern. Your app has state (this is the data Model). You app renders a view of that state. The view can trigger updates to some or all of the state. That state update triggers a re-render and your view is redrawn to represent the new state. This kind of programming style is called 'event driven'. It is 'declarative' like a spreadsheet.

![example of a spreadsheet updating](https://user-images.githubusercontent.com/4499581/95664166-3f6dc080-0b3d-11eb-9885-a55e42acf475.gif)

You know how a spreadsheet works. Once your spreadsheet is all setup (or 'declared') if you change a value in one cell it can trigger updates to other cells that depend on that value. AppRun works like this.

### Load AppRun

Load the AppRun library in a `<script>` tag from `unpkg.com` see below. You need an HTML element into which your app will be added. Your HTML page can be as simple as this. That is all the HTML we'll be writing in this file. Make yourself a `main.js` file for your javascript, and a stylesheet too if you want to make your app not look really offensive and brutal.
```html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="style.css"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://unpkg.com/apprun/dist/apprun-html.js"></script>
    </head>
    <body>
        <main id="app"></main>
        <script src="main.js"></script>
    </body>
</html>
```

### State

State in AppRun is (funnily enough) a plain javascript object. <u>ALL</u> the data in our app belongs here. We are going to make a quick todo list app, that will help us understand how to use AppRun. Our state is going to be a simple object which holds all our tasks.

```javascript
const state = {
    tasks: []
}
```

### View

To display the tasks we need a `view` function. This function will receive the `state` object and should return a string of HTML. We are going to write HTML in our javascript file. This is like the templating we did with Handlebars, only its just javascript string interpolation. We need a list and a form (like every app you are likely to ever work on).

```javascript
const view = state => `
    <section>
        <h2>Tasks</h2>
        <ul>
            ${state.tasks.map(task => `<li>${task.text}</li>`).join("")}
        </ul>
    <section>
    <section>
        <form>
            <input name="text" placeholder="Add a task" />
            <button>Add</button>
        </form>
    </section>
`
```
![empty tasks](https://user-images.githubusercontent.com/4499581/95664952-e6edf180-0b43-11eb-9fc1-8cbda429b42d.png)

Remember the view function is just javascript so you can add branching logic, iteration, calculation and do other stunts, just end up with a string of valid HTML that will get added to your root HTML node, for us that is our `<main id="app">` element.

### Update

We want to be able to add a task. This requires us to capture the form submission, get the form data, create a task and add that into the state. Our update object will be the <u>ONLY</u> thing that interacts with the state. This is the most tricky part of AppRun to understand.

```javascript
const update = {
    add: (state, form) => {
        const data = new FormData(form)
        const task = {
            id: window.crypto.getRandomNumber(new Uint8Array(2)).join("")
            text: data.get('text'),
            status: 0
        }
        state.tasks.push(task)
        return state
    }
}
```
What is going on here? We have a javascript object. The properties are the names of update functions. In the example above we have defined the 'add' update function. Every update function will receive the state as it's first argument. It is injected (like the event object). If we give our update function an argument, that will appear as the second argument. We pass in the form instance. Use `new FormData(form)` to de-serialize the form data, then create a new object that represents a task. I am generating a random id. You can play with `window.crypto.getRandomNumber(new Uint8Array(2))` in the browser console and see what it does. We then update the state, and finally as we must in each update function, we return the new version of the state.

This update will trigger a re-render of our view function.

### Event listeners

For this to work we need to add an event listener to our view, and add the update function as the event handler.

```html
<section>
    <form onsubmit="app.run('add', this); return false;">
        <input name="text" placeholder="Add a task" />
        <button>Add</button>
    </form>
</section>
```
What event are we listening for? Notice we call `app.run('add', this);` _this_ is the form. We return `false` as this will prevent the default behavior of the form submission reloading the page! Will all this declared we are ready to initiate our app. Add the following to your `main.js`

```javascript
app.start('app', state, view, update)
```
![with tasks](https://user-images.githubusercontent.com/4499581/95664960-f66d3a80-0b43-11eb-995d-b86eaec0a4c3.png)

## Assignment

* Implement the state -> view -> update design pattern
* Can you complete the CRUD operations for each task?
* Use the id property to make a status update to 1 indicating that the task has been completed.
* Use the id property to delete a task, you should only be able to delete a task once it has been marked as done.

[attendance log](https://applied.whitehat.org.uk/mod/questionnaire/complete.php?id=6702)
[main](/swe)|[prev](/swe/bootcamp/wk3/day5.html)|[next](/swe/bootcamp/wk4/day2.html)