# Mod 2 > Week 1 > Day 3

## Overview of the day

----

## Lesson 1 - Javascript

## Learning Objectives

* _ 1.2 Write code that interacts with UI controls Programmatically add and modify HTML elements._

## Before we start

You should now have created the layout of your audio app using semantic HTML elements. Now we want to start introducing some interactivity and that is going to require some javascript.

## Materials needed

## Lesson

The browser has a set of web apis that we can use with Javascript to manipulate the DOM (document object model). For example we can use the keyword `document` in Javascript to access the DOM and that `document` object provides methods we can call to select and change elements on the page.

For example if we have a DOM element with an id attribute of "grid", we can access that DOM element using:

```javascript
const grid = document.getElementById("grid")
```

Now we have got hold of that element we can alter it...

```javascript
grid.classList.add("playing")
```

We can even add to it...

```javascript
const newThing = document.createElement("div")
grid.appendChild(newThing)
```

With plain javascript this api can be quite verbose and awkward to use. It is for this reason that the [jQuery](https://jquery.com/) became really popular. We are going to use the jQuery library to build our music app.

## Including jQuery on the page

```html
<html>
    <head>
        <script
            src="http://code.jquery.com/jquery-3.5.1.slim.min.js"
            integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs="
            crossorigin="anonymous">
        </script>
    </head>
</html>
```

Javascript files are loaded in order on the page. So you MUST load jQuery first -> then the DOM -> then your javascript. If you load your javascript before jQuery or the DOM if you target elements before they have loaded your code might fail or error.

You can wait for the page to load before calling your javascript. Using jQuery this is easy todo by ensuring all your code is called in side the following wrapper around the onload event that the DOM fires when everything has arrived over the wire.

```javascript
$(function () {
    // your code goes in here
})
```

## Using jQuery

!(https://docs.google.com/presentation/d/e/2PACX-1vTh5GmIGakI6Fo7RrT7bZs-h3Qr6GgiJfOKQLY03z230s__zsaRuGwTssYJaVGWu4Es2PvwGPKJJXbo/embed)

## Assignment

Add jQuery to your project

----

## Lesson 2 - Creating Notes

## Learning Objectives

* Use css grid
* Write a class in JS

## Before we start

## Materials needed

## Lesson

## Making a note

The first thing we want to do is create one of the building blocks of the app; an interactive note. We can arrange these notes into an 8 x 4 grid, and offer the user a UI to compose tracks.

A note will be stateful, it can be selected and unselected. It should light up when it is in a bar that is being played. It needs to be clickable, toggling on and off, and it needs to emit a tone.

To me it makes sense to conceptually tie all this state and functionality together into an object in our programme.


```javascript
class Note {
	constructor(freq) {
		this.freq = freq
		this.selected = false
		this.el = $("<samp></samp>")
		this.el.on('click', this.toggle.bind(this))
		this.renderSelected()
	}
	toggle (evt) {
		this.selected = !this.selected
		this.renderSelected()
	}
	renderSelected () {
		this.el.removeClass(["selected", "unselected"])
		this.el.addClass(this.selected ? "selected" : "unselected")
	}
}
```
This is a class definition, a blueprint for notes. It is a constructor function that can be called with the `new` keyword. Instantiating a new instance of a note using the `new `keyword will cause the constructor function to run.

```javascript
new Note(740)
```

The class above has a property called selected that starts its life being false. The `this.el` is short for this.element and is an DOM fragment that the constructor function adds a click event listener and handler too, then adds variable classes (renderSelected).

## Display the note

Make sure you have an empty element on the page with an id of `grid` as the code below will want to append itself to that parent element.

```javascript
const note = new Note(740)
$("#grid").append(note.el)
```
create an instance of a note with a frequency of 740, then add it to the DOM. You should check that the note has been added to the HTML.

```html
<samp class="unselected"></samp>
```
You should be able to toggle the classes.

## `this` Context

You'll notice that the following line uses the `bind` property.

```javascript
this.el.on('click', this.toggle.bind(this))
```
`this.el` is a DOM fragment wrapped by jQuery, so we can add event listeners using `.on`. We give it two arguments.

1. name of the event as a string 'click'
2. the function to call when the element is clicked

In our class `this` has meaning. It means the context of the instance of the Note class. But there are other contexts to consider too. The DOM element `$("<samp></samp>")` also has a `this` context.

We want the click handler `this.toggle` to have as it's context the instance of the Note class. NOT the context of the DOM element on the page. So we `bind` the classes meaning of `this` to the toggle function, so when it is called as a result of a DOM element being clicked, then it can correctly reference `this.selected` and `this.renderSelected`.

Try this code for yourself. What happens if you don't use bind? How would you add a few notes? 

## Assignment

Can you organise the notes into an 8 x 4 grid?

You will need some css to style the note:

```css
samp {
  display: inline-block;
  width: 3rem;
  height: 3rem;
  margin: .25rem;
}
.selected {
  background-color: hotpink;
}
.unselected {
  background-color: orchid;
}
```

What css could you use to set up an 8 x 4 grid?

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/190)
[main](/swe)|[prev](/swe/mod2/wk1/day2.html)|[next](/swe/mod2/wk1/day4.html)