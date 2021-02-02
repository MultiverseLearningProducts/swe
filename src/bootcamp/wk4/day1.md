# Bootcamp > Week 4 > Day 1

## Overview of the day

Today we turn our attention to the Browser. We look firstly at Web Accessibility, a critical part of website development, ensuring that people with disabilities can use the web equally. 

We then discuss the HTML Document Object Model (DOM), HTML DOM Events and how to write JavaScript in the browser.

Modern web applications are powered by JavaScript. There are lots of popular JavaScript frameworks like React, Angular, Vue that help to organise and support building applications in a browser. We focus on a micro-framework called [AppRun](https://apprun.js.org/) which mimics the design of React, Elm and to some degree Vue and Angular. 

----

## Lesson 1 - Web Accessibility
The Web is an essential part of every day life. Web Accessibility means that people with disabilities can use the web equally. At least 1 in 5 people in the UK have a long term illness, impairment or disability; many more have a temporary disability.

The [standards for Web Accessibility](https://www.w3.org/WAI/standards-guidelines/wcag/) are governed by the World Wide Web Consortium (W3C) and are internationally recognised.

The [UN Convention on the Rights of Persons with Disabilities](https://www.un.org/development/desa/disabilities/convention-on-the-rights-of-persons-with-disabilities/convention-on-the-rights-of-persons-with-disabilities-2.html) defines access to content on the Web as a basic human right. The UK [Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018](https://www.legislation.gov.uk/uksi/2018/952/made) came into force for public sector bodies on 23 September 2018. Public Sector websites are required by law to meet accessibility standards.

Listen to this video introduction to Web Accessibility from the [W3C Web Accesssibility Initiative](https://www.w3.org/WAI/videos/standards-and-benefits/) to understand why Web Accessibility is so important. Enable Closed Captions using the CC option in You Tube if you require it.

!(https://www.youtube.com/watch?v=20SHvU2PKsM&feature=youtu.be)

The WCAG is built around four principle guidelines;
  1. **Perceivable** - information and user interface components must be presentable to users in ways they can perceive
  2. **Operable** - users must be able to navigate the content
  3. **Understanding** - content should be presented in clear and simple language
  4. **Robust** - content must be able to be interpreted by a variety of different assistive technologies

Web Accessibility is essential for many but useful for everyone.

## Assignment
  1. Use the `Lighthouse` tool in Chrome Developer Tools to generate a Web Accessibility report for all the pages in your restaurant application.
     * Add your "before" report to a new folder `/accessibility` in the GitHub repo which has your restaurant code
     * How many issues does Lighthouse find?
     * Why could these issues cause issues for users with disabilities?
     * Now edit your HTML to fix these issues
     * Add your "after" report to the `/accessibility` folder

     <img width="322" alt="how to access lighthouse accessibility report" src="https://user-images.githubusercontent.com/1316724/106430584-eddaa000-6463-11eb-829e-5292749f16d2.PNG">
 
  2. Select to `Emulate vision deficiencies` in the `Rendering` section of Lighthouse. Select each vision deficiency and see whether the user is still able to navigate the site / view content ok

     <img width="323" alt="visionEmulation" src="https://user-images.githubusercontent.com/1316724/106431075-a86aa280-6464-11eb-90c9-50d071ec101f.PNG">
  3. Install the [SiteImprove](https://chrome.google.com/webstore/detail/siteimprove-accessibility/efcfolpjihicnikpmhnmphjhhpiclljc) plugin to Chrome and run a report on each of  the pages in your restaurant app.
    How many issues does SiteImprove find?
    Why could these issues cause issues for users with disabilities?
    Now edit your HTML to fix these issues
  4. Install [Screen Reader](https://chrome.google.com/webstore/detail/screen-reader/kgejglhpjiefppelpmljglcjbhoiplfn) and tab through your website. If you were vision impaired, would you understand which restaurant you were viewing or deleting? If not, what could you do to improve site navigation for those using a screen reader.
  5. If you finish early, try checking out the accessibility of other websites too. Try the [ATG Ticket Website](https://atg.nliven.co/tickets/series/wicked?_ga=2.37698784.1776477192.1605217929-908196991.1605217929) with a Vision Deficiency of 'Achromatopsia' - how does it look?

----

## Lesson 2 - Using JavaScript in the browser

How can you run JavaScript in the browser? There are 2 main ways:

### Inline JavaScript

You can write JavaScript inline, within an HTML file by enclosing your JavaScript in a `<script>` tag. As the page loads in the browser the HTML file is read from top to bottom, and any JavaScript in a `<script>` tag is executed when the page loads.

As an example, [Google Analytics](https://developers.google.com/analytics/devguides/collection/analyticsjs) scripts (which measure how users interact with your website) are added within the <head> tag: 

```js
<!-- Google Analytics -->
<script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-XXXXX-Y', 'auto');
    ga('send', 'pageview');
</script>
<!-- End Google Analytics -->
```
### Loading JavaScript from a source file

You can also load JavaScript from a file by using the `<script>` tag and including the `src` HTML attribute to reference the file: 

```html
<script src="/main.js"></script>
```

When the JavaScript file (in this case `main.js`) has been loaded by the page, it will be executed. 

#### 🐘 Remember HTML files are read from the top down

If we have libraries, modules or 3rd party JavaScript that we want to load (e.g. Google Analytics), these should go in the `<head>` tag of the HTML page. 

JavaScript that targets HTML elements (usually our own application code) should be the final thing on the page to be included. In practice that means your application code should be included in a `<script>` tag just before the closing `</body>` tag. This is because application code will often target an HTML element and if that element has not been loaded, our JavaScript will Error and Fail 😟.

### Organising JavaScript files

Within the Browser, it's very important to understand that each JavaScript file that is loaded, shares the 'global scope' of the open browser `window` object. For example, a class defined in one file, will be available for another file to access once they are both loaded on the page. Any script can freely define/delete/change/call anything in the global scope. This is not the case in `Node.js` where the global scope of a module is the module itself.

You can't use the file system in the browser. In `Node.js` we made use of `module.exports` and `require` to load multiple `.js` files on our page. This allowed us to separate our code into distinct units which made it easier to understand. However, it should be noted that loading of each separate JavaScript file specified by `require` involves a separate round trip to the server and, in addition, there is no guarantee of the order the files will be returned. 

Browsers don't have the `require` method defined, however you can use tools such as [browserify](http://browserify.org/) to allow you to use `module.exports` and `require` within your frontend code, in the same way that you would use it in Node.

You can also use'bundlers', for example, [webpack](https://webpack.js.org/), [rollup](https://rollupjs.org/guide/en/), [parcel](https://parceljs.org/) and [browserify](http://browserify.org/)  to take JavaScript you have written in multiple files and 'bundle' them (with any dependencies) into one single file that you can serve to the client. 

Tools such as [nodemon](https://www.npmjs.com/package/nodemon) and [watchify](https://www.npmjs.com/package/watchify) can also help you develop JavaScript applications 're-bundling' the code when file changes are detected('hot reloading').

## Assignment
Try out the different ways of using JavaScript in front-end code by completing the following 2 assignments:

  1. Modify your restaurant code to include [Facebook 'like' and 'share' icons](https://developers.facebook.com/docs/plugins/like-button/) when you click on a restaurant. If you get problems seeing the icons, please disable 'Ad Blockers' in your browser.

     Notice how you are including a Facebook script. Once this script is included, you are able to use the Facebook 'like' CSS class.

   2. Now use inline JavaScript in your HTML to add a simple counter which increments each time the page is loaded:
```html
    <div>Number of page loads:
        <span id="Counter"></span>
    </div>
```
```javascript
<script>
    var n = localStorage.getItem('on_load_counter');
    if (n === null) {
        n = 0;
    }
    n++;
    localStorage.setItem("on_load_counter", n);
    document.querySelector('#counter').innerText = `Visits to this page: ${localStorage.getItem('on_load_counter')}`
</script>
```
---
## Lesson 3 - The HTML Document Object Model (DOM)
When a web page is loaded, the browser creates an Object Model of the web page. To illustrate this, let's create a DOM representation of this JavaScript:

```js
<html>
    <head>
        <link rel="stylesheet" href="/style.css"/>
    </head>
    <body>
        <section>
            <p id="intro">Introduction</p>
```

![simpleDom](https://user-images.githubusercontent.com/1316724/106388095-cc7ea300-63d4-11eb-94c5-bf25553a8968.png)

To access an element in an HTML page, you always go via the `document` object.

The most common way to access HTML elements with JavaScript is via their id, e.g.

```js
<script>
    const myElement = document.getElementById("intro");
</script>
```

The most common way to retrieve/change the content of an element is by using the `innerHTML` property, i.e.

```js
<script>
    document.getElementById("intro").innerHTML = "Background";
</script>
```

You can also change the value of an attribute using:

```js
<script>
    document.getElementById("intro").setAttribute("href", "/style2.css");
</script>
``` 
---
## Lesson 4 - The HTML DOM Events

## Learning Objectives

* Understand how the `event` object is 'injected' into event handlers
* Add event listeners to HTML elements
* Create event handlers in JavaScript and attach them to event listeners

## Lesson

JavaScript's main primitive is the `Object`. Let's create a simple HTML button that triggers a JavaScript `event` object.

```html
<button id="my-button" onclick="console.log(event)">Click me</button>
```

What kind of `event` is triggered? What else can you learn about the event that just happened? Where on earth does the `event` that we are console.logging come from anyway?

The `event` object (and it must be named 'event' not 'evt', 'e' or anything else) is injected by the browser into every event handler. In this example, we are using the HTML attribute `onclick`with a string value of the JavaScript we wish to run when the event is triggered. We can also have a named function defined in our `main.js` file and include that in the string of JavaScript that is run when the event is triggered.

```javascript
function myButtonHasBeenClicked(event) {
    console.log(event)
}
```
```html
<button onclick="myButtonHasBeenClicked(event)">Click me</button>
```

### Event Listeners & Event Handlers

`onclick` is an **event listener**. It listens for clicks. An event listener will have a companion called an **event handler**. `myButtonHasBeenClicked` is an 'event handler'. 

There are other ways to attach event listeners to elements in the DOM. For example, the code below is another way to do the same thing we are doing above, but just using JavaScript.

```javascript
const button = document.getElementById('my-button');

button.addEventListener('click', myButtonHasBeenClicked);
```

Here, we use the DOM to navigate to the button via its id. Instead of adding the event listener inline, we add it to the instance of the element in JavaScript. We call `addEventListener` with 2 arguments, a string that is the name of the type of listener and the function to call (with the event object) to handle the event.

You can remove an event listener as follows:
```javascript
button.removeEventListener('click', myButtonHasBeenClicked)
```

### Types of listeners
There are many different types of listener including:

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
To experience events in JavaScript you are going to create your own adventure game.

**Step 1** is to make use of a fun website called [Creepy Events](https://codepen.io/prosetech/pen/oRxMmZ) written by [Matthew MacDonald](https://medium.com/young-coder/playing-with-javascript-events-be12f922736f). Your objective is to wire up the JavaScript functions to the buttons and input boxes to complete the story.

**Step 2** is to create your own adventure game based on the code from Step 1 and making use of as many HTML DOM events as possible. As a minimum you should include:
  * onclick()
  * onmouseover()
  * input()
  * focus()
  * keydown()
  * keyup()
  * mouseenter()
  * resize()

----

## Lesson 5 - Frameworks (Optional)

## Learning Objectives

* Create a simple "To Do" list using the state, view, update design pattern in AppRun

## Materials needed

* [AppRun Manual](https://drive.google.com/file/d/1iubYsseCr82Qlo_3pKlAVy0uKVIfMx-o/view?usp=sharing)

## Lesson

Developers use frameworks to help them organise their code. When lots of people work on a codebase having a pattern to follow makes it much easier for team members to join and add to the code. We are going to use a simple framework called AppRun. If you can use AppRun you will find learning React or Elm much easier.

Before we look at the framework lets think about the design pattern that underpins React, Elm and AppRun.

![state view update pattern](https://user-images.githubusercontent.com/4499581/95664104-a2ab2300-0b3c-11eb-8afd-233463f0218d.png)

Both Elm and Redux follow the same pattern. Your app has **state** (this is the data Model). You app renders a **view** of that state. The view can **trigger updates** to some or all of the state. That state update triggers a re-render and your view is redrawn to represent the new state. This kind of programming style is called 'event driven'. It is 'declarative' like a spreadsheet.

![example of a spreadsheet updating](https://user-images.githubusercontent.com/4499581/95664166-3f6dc080-0b3d-11eb-9885-a55e42acf475.gif)

You know how a spreadsheet works. Once your spreadsheet is all setup (or 'declared'), if you change a value in one cell it can trigger updates to other cells that depend on that value. AppRun works like this.

### Load AppRun

To load AppRun, we simply create an HTML page with the content below. This loads the AppRun library in a `<script>` tag from `unpkg.com`. 

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
State in AppRun is simply a plain JavaScript object. <u>ALL</u> the data in our app belongs here. Our 'TODO list' will be a simple array which holds all our tasks.

We'll create a `main.js` file to hold the state:

```javascript
const state = {
    tasks: []
}
```

### View

To display the tasks we need a `view` function. This function will receive the `state` object (i.e. list of tasks) and will return a string of HTML. This is like the templating we did with Handlebars, but AppRun's template syntax employs the full power of JavaScript expressions, while Handlebars’ syntax is quite limited in comparison.

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

Remember the `view` function is just JavaScript, so you can add branching logic, iteration, calculation and do other stunts, we will end up with a string of valid HTML that will get added to the root HTML node (the `<main id="app">` element).

### Update

We want to be able to add a task. This requires us to capture the form submission, get the form data, create a task and add that into the state. Our update object will be the <u>ONLY</u> thing that interacts with the state. This is the most tricky part of AppRun to understand.

```javascript
const update = {
    add: (state, form) => {
        const data = new FormData(form)
        const task = {
            id: window.crypto.getRandomValues(new Uint32Array(2)).join(""),
            text: data.get('text'),
            status: 0
        }
        state.tasks.push(task)
        return state
    }
}
```
What is going on here? We have a JavaScript object. The properties are the names of update functions. In the example above we have defined the 'add' update function. Every update function will receive the state as its first argument. It is injected (like the event object). If we give our update function an argument, that will appear as the second argument. We pass in the form instance. Use `new FormData(form)` to de-serialize the form data, then create a new object that represents a task. I am generating a random id. You can play with `window.crypto.getRandomValues(new Uint8Array(2))` in the browser console and see what it does. We then update the state, and finally as we must in each update function, we return the new version of the state.

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

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/168)
[main](/swe)|[prev](/swe/bootcamp/wk3/day5.html)|[next](/swe/bootcamp/wk4/day2.html)