# Mod 2 > Week 2 > Day 1

# Overview of the day

# Lesson 1

## Learning Objectives

- Learn about the DOM

### What is the DOM?

The DOM is a browser-based representation of a web page, which consists of a number of objects. It is represented as a tree structure, where each child element (called a node) belongs to a parent:

![](https://miro.medium.com/max/700/1*5zKczvG219FSLibHQH4jSA.png)

> At the top level, above `document` is `window`

As you can see from the image, each node can have a number of attributes. If you know HTML, you'll know an anchor has a `href`, and can also have a `class` attribute. A node can also have a text node as a child. HTML elements like headings and anchors will typically have a text node.

> In your browser console, type `window.document.head`. This will retrieve the head element of the page.

# Lesson 2

## Learning Objectives

- Working with DOM events
- How to write an event handler
- How to use standardised DOM methods in our programs

### Working with DOM events

Standardisation of the DOM comes with many benefits for the JavaScript developer. It means that numerous methods are available across many different browsers.

One of the primary uses of DOM methods is to create an event handler that can respond to a user event. What would some typical user events be?

To create an event, we first need to get the element we want to assign the event to. There are a number of ways to accomplish this task:

| Method                   | Description                                                                    |
| :----------------------- | :----------------------------------------------------------------------------- |
| getElementById()         | Returns the element that has the ID attribute with the specified value         |
| getElementsByClassName() | Returns a HTMLCollection containing all elements with the specified class name |
| getElementsByTagName()   | Returns a HTMLCollection containing all elements with the specified tag name   |

> You will need to know `getElementByld; getElementsByTagName; getElementsByClassName` for the exam.

#### Try this exam question

You have been asked to get the page URL and insert it into a text field. How would you complete the code that is commented out to achieve this?

```html
<html lang="en">
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <form action="/action_page">
      <label for="url">URL:</label><br />
      <input type="text" id="url" name="url" />
    </form>
    <script>
      var url = // ________

      // _______.____________("url")._____ = ___
    </script>
  </body>
</html>
```

### Working with event handlers

Event handlers can be added both inline or within an inline or external script:

```javascript
// inline event handler
<button onclick="document.getElementById('demo').innerHTML = Date()">
  The time is?
</button>
```

Within an inline or external script:

```javascript
// get form and add listener using DOM path strategy
const targetForm = document.forms.todoCreateForm;

// first example
targetForm.addEventListener('submit', (e) => {
  console.log(e.target.name.value);
});

// second example
targetForm.onsubmit = (e) => {
  console.log('Form submitted!');
};
```

> For the exam, you'll need to know: `onchange, onmouseover, onload, onclick, onmouseout and onkeydown`

#### Try this exam question

You've been given the following HTML source code. It renders a green square and a green circle. You have been asked to complete the code so that when the user hovers over either the square or the cicle, the background color turns red, then goes back to green when the user hovers out.

Tip: one is in inline event and the other is in an inline script.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <style>
      .squareBox {
        display: block;
        background-color: green;
        height: 2rem;
        width: 2rem;
        text-indent: -999px;
      }

      .circle {
        display: block;
        background-color: green;
        height: 2rem;
        width: 2rem;
        border-radius: 100%;
        text-indent: -999px;
      }
    </style>
  </head>

  <body>
    <a
      class="squareBox"
      id="squareBox"
      href="#"
      __________="__________________________ = '____'"
      __________="__________________________ = '____'"
    >
      Square box
    </a>

    <a class="circle" id="circle" href="#"> Circle </a>

    <script>
      var circle = document.______________('circle');

      circle.__________ = () => {
        circle._____________________________;
      };

      circle.__________ = () => {
        circle._____________________________;
      };
    </script>
  </body>
</html>
```

[main](/swe)|[prev](/swe/mod2/wk1/day5.html)|[next](/swe/mod2/wk2/day2.html);
