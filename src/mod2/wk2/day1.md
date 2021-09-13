# Mod 2 > Week 2 > Day 1

# Overview of the day

# Lesson 1

## Learning Objectives

- Learn about the DOM
- Understand how to retrieve elements of the DOM

### What is the DOM?

The DOM is a browser-based representation of a web page, which consists of a number of objects. It is represented as a tree structure, where each child element (called a node) belongs to a parent:

![](https://miro.medium.com/max/700/1*5zKczvG219FSLibHQH4jSA.png)

> At the top level, above `document` is `window`

As you can see from the image, each node can have a number of attributes. If you know HTML, you'll know an anchor has a `href`, and can also have a `class` attribute. A node can also have a text node as a child. HTML elements like headings and anchors will typically have a text node.

> In your browser console, type `window.document.head`. This will retrieve the head element of the page.

There are a number of ways in which we can retrieve specific elements of the DOM.

| Method                   | Description                                                                    |
| :----------------------- | :----------------------------------------------------------------------------- |
| document.getElementById()         | Returns the element that has the ID attribute with the specified value         |
| document.getElementsByClassName() | Returns a HTMLCollection containing all elements with the specified class name |
| document.getElementsByTagName()   | Returns a HTMLCollection containing all elements with the specified tag name   |
| document.forms() | Returns an HTMLCollection listing all the `<form>` elements contained in the document|

> You will need to know `getElementByld; getElementsByTagName; getElementsByClassName; document.forms` for the exam.

You will also need to know how to change the value of an element or element attribute.
> To change the value of an HTML attribute use element`.setAttribute()` e.g. `button.setAttribute("class", "visible")`;

> To change the value of a form field use `.value` e.g. `document.getElementById("someFormField").value=newValue`

> To change the value of any other type of element use `.innerHTML` e.g. `document.getElementById("p1").innerHTML = "New text!"`

> To retrieve the URL of a web page, type `window.location.href` (note this can be simplified to `location.href`). 

#### Try these exam questions

Edit the commented code below to change the paragraph text:

```html
<html>
<body>

<p id="p1">Good morning!</p>

<script>
   document./*____________*/("p1")./*____________*/ = "Good evening!";
</script>

</body>
</html>
```

Edit the commented code below to change the selected item:

```html
<!DOCTYPE html>
<html>
<body>

<form>
  Select your favorite programming language:
  <select id="myChoice">
    <option value="c++">C++</option>
    <option value="java">Java</option>
    <option value="javascript">JavaScript</option>
    <option value="python">Python</option>
  </select>
</form>

<p>Click the button to change the selected language to Java.</p>

<button type="button" onclick="myFunction()">Change it</button>

<script>
function myFunction() {
  document./*_____________*/("myChoice")./*__________*/ = "Java";
}
</script>

</body>
</html>
```

You have been asked to get the URL of the current web page and display it as placeholder text in the "url" form text field. How would you edit the commented code to achieve this? Hint - `placeholder` is an attribute of an text field.


```html
<html lang="en">
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <form action="/restaurants" method="post">
      <label for="restaurantName">Name:</label><br/>
      <input type="text" id="restaurantName" name="restaurantName"/><br/>
      <label for="url">URL:</label><br/>
      <input type="text" id="url" name="url"/><br/>
    </form>
    <script>
      var page_url = window.// ___________ . ___________

      document./*____________*/("url")/*.____________*/("placeholder", page_url)
    </script>
  </body>
</html>
```

# Lesson 2

## Learning Objectives

- Working with DOM events
- How to write an event handler
- How to use standardised DOM methods in our programs

### Working with DOM events

Standardisation of the DOM comes with many benefits for the JavaScript developer. It means that numerous methods are available across many different browsers.

One of the primary uses of DOM methods is to create an event handler that can respond to a user event such as a button click. What other user events can you think of?

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

> For the exam, you'll need to know about the following event types: `onchange, onmouseover, onload, onclick, onmouseout and onkeydown`

#### Try these exam questions
Edit the commented code below to change the form text field from "Jamie" to "Joe":

```html
<!DOCTYPE html>
<html>
<body>

Name: <input type="text" id="myText" value="Jamie">

<p>Click the button to change the value of the text field.</p>

<button onclick="myFunction()">Change it</button>

<script>
function myFunction() {
  document./*_____________.__________*/ = "Joe";
}
</script>

</body>
</html>
```

You've been given the following HTML source code. It renders a green square and a green circle. You have been asked to complete the code so that when the user hovers over either the square or the cicle, the background color turns red, then goes back to green when the user hovers out.

Tip: one is an inline event and the other is in an inline script.

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

## Challenges
1. Create an HTML page containing a Button. Add another Button with the words "Switch it" on it, which disables `myButton` when pressed and then enables it when pressed again. Clue - there is a `.disabled` property on a button! 

2. Create an HTML page which prints out the name of the key pressed (in the correct case) when a user types into a text box. 

3. Create an HTML page which changes from one image to another when the user hovers their mouse over the image.

4. Create an HTML page which displays the current date when a button is clicked


[main](/swe)|[prev](/swe/mod2/wk1/day5.html)|[next](/swe/mod2/wk2/day2.html);
