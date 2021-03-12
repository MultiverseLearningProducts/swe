# Mod 2 > Week 2 > Day 1

# Overview of the day

Today we briefly look at the history of JavaScript, before looking at the Document Object Model, or DOM for short. Later, we'll take a look at event driven programming with JavaScript.

# Lesson 1

## Learning Objectives

- Understand the history of JavaScript (not required for the exam)

## The History of JavaScript

HTML existed long before the mid-90s and web pages could be styled in rudimentary ways, with styles controlled by HTML (e.g. ``<center>Centred text</center`>). Later, in 1996, CSS would be released and would allow
developers to decouple presentation (CSS) from document structure (HTML). The structure of web pages and styling was now standardised, but what about interactivity? What if the developer wanted to tell the user what the date and time was, or open a new window programmatically?

Around this time, Microsoft and Netscape were duking it out for browser superiority and it was in fact a Netscape developer (Brandan Eich), who created a client-side scripting language in ten days that would later become JavaScript. It was initially called Mocha, then LiveScript, then later, JavaScript. It wasn't without its problems, but JavaScript enabled designers and developers to easily add dynamic features to their websites. For this reason, JavaScript rapidly emerged as the standard scripting language for the web.

> A client-side scripting language is a language that's interpreted at run time in the browser. This is as opposed to a compiled language like C++ or Java, which needs to be compiled before it can be run

You can read more about the history of JavaScript [here](https://www.springboard.com/blog/history-of-javascript/).

## Assignment

Have a read of the article above.

- What other facts and figures can you find about JavaScript?

- Has JavaScript been standardised?

- What is the standard called?

- JavaScript started life as a client-side language, but what can it also be used for now?

# Lesson 2

## Learning Objectives

- Learn about the DOM

### What is the DOM?

The DOM is a browser-based representation of a web page, which consists of a number of objects. It is represented as a tree structure, where each child element (called a node) belongs to a parent:

![](https://miro.medium.com/max/700/1*5zKczvG219FSLibHQH4jSA.png)

> At the top level, above `document` is `window`

As you can see from the image, each node can have a number of attributes. If you know HTML, you'll know an anchor has a `href`, and can also have a `class` attribute. A node can also have a text node as a child. HTML elements like headings and anchors will typically have a text node.

> In your browser console, type `window.document.head`. This will retrieve the head element of the page.

### The history of the DOM

> DOM history isn't required for the exam but it is useful to know

As we learned above, Microsoft and Netscape were the main players in the mid-90s browser market. Each company favoured their own implementation of JavaScript; Microsoft had JScript and Netscape and JavaScript. Microsoft's JScript was actually just JavaScript but with a different name to avoid trademark issues.

The first unofficial version of the DOM was called the `Legacy DOM` and this paved the way for client-side validation and other visual effects. At this point though, implementations of web pages with dynamic behaviour started to diverge. Whilst some Legacy DOM operations remained compatible, other dynamic extensions did not.

By the time JavaScript was standardised in 1997, the W3C set out its recommendations for the stardardisation of the DOM. The DOM is now standardised across all browsers and is maintained by the Web Hypertext Application Technology Working Group (WHATWG).

## Assignment

Find a simple web page and sketch out (yep, pencil and all!) the DOM. Don't forget to ask your coach if you get stuck!

# Lesson 3

## Learning Objectives

- Working with DOM events
- How to write an event handler
- How to use standardised DOM methods in our programs

### Working with DOM events

Standardisation of the DOM comes with many benefits for the JavaScript developer. It means that numerous methods are available across many different browsers. Here are some examples that we will dig into later:

- You can get any element on a page in order to modifying it or add dynamic behaviour
- You can add classes and attributes to elements programatically
- You can add events that respond to user input
- You can control the submission of forms
- You can leverage the `onload` event to know when an asset or the entire page has loaded
- You can write text to the document using `document.write`

One of the primary uses of DOM methods is to create an event handler that can respond to a user event. What would some typical user events be?

To create an event, we first need to get the element we want to assign the event to. There are a number of ways to accomplish this task:

| Method                   | Description                                                                                                |
| :----------------------- | :--------------------------------------------------------------------------------------------------------- |
| getElementById()         | Returns the element that has the ID attribute with the specified value                                     |
| getElementsByClassName() | Returns a HTMLCollection containing all elements with the specified class name                             |
| getElementsByName()      | Returns a HTMLCollection containing all elements with a specified name                                     |
| getElementsByTagName()   | Returns a HTMLCollection containing all elements with the specified tag name                               |
| querySelector()          | Returns the first element that matches a specified CSS selector(s) in the document                         |
| querySelectorAll()       | Returns a static NodeList containing all elements that matches a specified CSS selector(s) in the document |

> You will need to know `getElementByld; getElementsByTagName; getElementsByClassName` for the exam.

As you can see, some of the DOM methods return an array of elements, whereas some return just one element. Choosing the right selector is important
when working with UI as we don't want to get all the elements if we don't need to.

Consider the following scenarios. Which selector would you use?

- You want to get all the forms that exist on a page

- You want to get a form that has an ID of "myForm"

- You want to get a specific button element that has a class name. You don't know if other buttons exist on the page

- You want to get the `footer` element of a web page. It doesn't have a name, ID or class name. There is only ever one footer on a page

### How to write an event handler

A common event handler you might come across is a form submit handler. This fires everytime the form in question is submitted. To show this in action, let's work with the following form markup:

(structural HTML ommitted)

```html
<form name="todoCreateForm">
  <div class="form-group">
    <label for="name">Name</label>
    <input
      type="text"
      class="form-control"
      name="name"
      placeholder="Name of the task"
    />
  </div>
  <button type="submit" class="btn btn-primary">Add Item</button>
</form>
```

> Text inputs can also have a value attribute. E.G. `value="Daniel"`. This is useful for when you want to set the value manually

Here's how we'd write an event handler that also responds to the event by logging the value of the name field to the console:

```javascript
// get form and add listener using DOM path strategy
const targetForm = document.forms.todoCreateForm;

// apply "submit" event handler
targetForm.addEventListener("submit", (e) => {
  // prevent the form from submitting
  e.preventDefault();

  // log out the name field's value
  console.log(e.target.name.value);
});
```

> `e.preventDefault();` is a useful method to stop the form submission process. Very useful for testing! `e` is the event itself.

If you run the code above (see JSFiddle below), you will get whatever value you put into the name field. In just a small amount of lines, your code is responding to an event and getting a value from the form. Very cool!

Notice that we've used the `DOM path` strategy to find the form by its name: `document.forms.todoCreateForm;`. What other ways could we get the form?

> For the exam, you'll need to know: `onchange, onmouseover, onload, onclick, onmouseout and onkeydown`

**Further reading**: The W3C has an excellent resource of all the [HTML events](https://www.w3schools.com/tags/ref_eventattributes.asp).

## Assignment

Use [this](https://jsfiddle.net/s1wk7p94/4/) JSFiddle.

- Experiment with the other ways we can get a handle on the form. Will all of them work? If not, can we make them all work by adding something to the form?

- Can you log out the values of the other forms elements?

[main](/swe)|[prev](/swe/mod2/wk1/day5.html)|[next](/swe/mod2/wk2/day2.html);
