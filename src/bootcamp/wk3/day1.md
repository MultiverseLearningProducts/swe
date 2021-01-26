# Bootcamp > Week 3 > Day 1

## Overview of the day

Today we are going to build a web server. In particular we want to understand the difference between static and dynamic content. We are going to set up a simple express server, and also use some templating to create dynamic content.

## Additional resources
If you are struggling with any of the concepts from today, the following resources will help:
   * [Get started with Express Handlebars](https://www.youtube.com/watch?v=erfN7fH7A6s) 
   * [Create default Layout - Express Handlebars](https://www.youtube.com/watch?v=Yh5qW_L5YNQ)
----

## Lesson 1 - Web Server

## Learning Objectives

* Define what makes a computer a server
* Create an html page
* Create a static web server
* Create css files and apply them to an html page
* Create links between pages

## Before we start

Have your project with the Restaurant models handy.

## Materials needed

* the node module 'express'

## Lesson

What is a server? The simple answer is a computer that provides services to other computers. From that definition you can tell servers are often found on networks. For example an office might have a 'file server' a computer where office workers can read and write files that can be accessed by any other computer on the network.

In this lesson we are going to focus on creating a 'web server' and an 'app server' using the [Express](https://expressjs.com/) web framework for Node.js.

A 'web server' responds to requests for `.html` files by sending back the .html contents of that file. 

Tp create a web server we firstly install the node module 'express' using `npm install express`. Next we create a file called `server.js` containing the following logic:
```javascript
const express = require('express');

const app = express();
const port = 3000;

// serve static assets from the public/ folder
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
```
After importing the express module we create an instance of a web server and call it `app`. Then we configure the server to serve 'static' assets from the 'public' folder. A 'static' asset is a file that is simply read off of disc and then returned to the user. 

We then need to add an html file in our `public` folder called `index.html`. For now it can just be a very simple "hello world" page, see below. Naming the file `index.html` makes it the default page express will respond with when requests are made to the root of the server.
```html
<!DOCTYPE html>
<html>
    <head></head>
    <body>
        <h1>Hello World</h1>
    </body>
</html>
```
To start your server from the root of your project run the command `node server.js` you should see your message being logged out and now your web server is running. Visit `http://localhost:3000/` to see your html page.

Your server will serve your html page to any other computer that asks for it. The computer needs to be publicly accessible, so it will not work on your computer, unless you expose it to the wider internet, or deploy your server code online.

We can serve different kinds of files from our public folder. For example a .css file or a javascript file. Let's try to add some style to our html page using a `style.css` file.

```css
* {
    padding: 0;
    margin: 0;
}
body {
    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
    color: rgb(35, 1, 35);
    background-color: rgb(255, 228, 225);
}
```
Now we update our `index.html` file to also request this file from the server.
```html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="/style.css"/>
    </head>
    <body>
        <h1>Hello World</h1>
    </body>
</html>
```
Notice the `"/style.css"` this is not a file path. It is a URL ( Uniform Resource Locator). The browser will actually read this URL as `http://localhost:3000/style.css` and if you visit that in your browser you'll see the content of your css.

So, in summary, when a request is made to our web server for the `index.html` page, when that loads in the browser the `index.html` page makes a request for another file, our style.css file. 

Under `Developer Tools` in your Chrome browser you should be able to see in the `Network` tab, the request the index.html page makes for the `style.css` file. Once all these additional requests for assets and files have finished, the browser `document` will emit an 'onload' event signalling your page has loaded.

<img width="424" alt="httpRequests" src="https://user-images.githubusercontent.com/1316724/105642249-89767a00-5e80-11eb-9deb-2e8f753e8b9b.PNG">


## Assignment
* Create a new directory for this week's work
* Run `npm init` to create a new project
* Install Express using `npm install express`
* Use the instructions above to create a web server running on port 3000, serving static content from the `public` directory
* Create an `index.html` page with a linked css file
* Visit `http://localhost:3000/` to see your html page
* Validate that you see the files being loaded in the `Network` section of your browser's `Developer Tools`. Look at the HTTP status codes, what happens to them when you refresh?
* Now try creating additional HTML pages and link them using anchor tags e.g.
```html
<a href="/about.html">About me</a>
```
---
**Note:**
If you get stuck, here is the [solution to Lesson 1](https://github.com/MultiverseLearningProducts/swe-solutions/tree/main/bootcamp/wk3/day1/lesson1)

----

## Lesson 2 - Static vs Dynamic pages

## Learning Objectives

* Explain the difference between 'static' and 'dynamic' content
* Create dynamic pages with the Handlebars templating framework

## Before we start

* install express-handlebars

## Materials needed

* N/A

## Lesson

What makes content static? **Static content** is usually read from disc, it is the *same* every request, it is the same for everyone. Examples include, image files, .mp3 files, html files etc. We have been working with static files so far on our web server.

**Dynamic content** is content that can *change* from request to request, and might be different for different people. For example everyone has the same basic Facebook page, but each person's page is filled with content that is particular to them. What is shared between users is the page's template. The content is changeable or dynamic.

So where does the dynamic content come from? Dynamic content is usually stored in a database, or comes from another service. The app responds to a request by fetching some specific content for that user/request and parses that content with a template to create the resulting html. The page is built per request "on-the-fly" and is assembled by our app.

If we are serving dynamic content like this our server is now called an **app server**.

### Create a Route

Our server needs to intercept the HTTP request. It's no good just responding with the content of a static file or template. The way we intercept or 'handle' requests is by declaring a 'route' in our server.js file. Here is an example route which returns the current date when the user navigates to the root URL e.g. http://localhost:3000:

```javascript
app.get('/', (request, response) => {
    const date = new Date()
    response.send(date)})
```
Route definitions appear <u>after</u> setting config with `app.use`, but <u>before</u> the call to `app.listen`. 

Be sure to remove the `public/index.html` file as that will interfere with your `/` route.

### Create a Template
Our dynamic content is going to be driven by our Restaurant data model. We will want to display our list of restaurants within a web page. For this, we are going to use a templating framework called [Handlebars](https://handlebarsjs.com/). This is a well supported template library in which you write html and have place holders for dynamic content. 

A Handlebars expression is content surrounded by `{{` `}}`. When the template is executed, the expression is replaced with values from an input object. 

Handlebars expects a specific folder structure:
```sh

views
├── restaurants.handlebars
└── layouts
    └── main.handlebars

```
The `views` folder contains Handlebars templates which get rendered into `layouts`. 

A `layout` is an HTML page with a `{{{body}}}` placeholder into which views are rendered. The `layouts` folder typically holds a default `main.handlebars` layout. 

In our Restaurants app we will set the `main.handlebars` layout as follows: 
```html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="/style.css"/>
    </head>
    <body>
        {{{body}}}
    </body>
</html>
```
The `restaurants.handlebars` file will be rendered in the `main.handlebars` layout  and for now, will simply print out the date. 
```html
<h1>Restaurants</h1>
<small>{{date}}</small>
```

### Handlebars installation
To install Handlebars, run `npm install handlebars express-handlebars @handlebars/allow-prototype-access`. Once installed, the code is used as below:

```javascript
const express = require('express');
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

const app = express();
const port = 3000;

// setup our templating engine
const handlebars = expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
})
app.engine('handlebars', handlebars)
app.set('view engine', 'handlebars')

// serve static assets from the public/ folder
app.use(express.static('public'));

// this route matches any GET request to the top level URL
app.get('/', (request, response) => {
    response.render('restaurants', {date: new Date()})
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
```

## Assignment

  * (optional) - watch these video to reinforce your learning:
     * [Get started with Express Handlebars](https://www.youtube.com/watch?v=erfN7fH7A6s) 
     * [Create default Layout - Express Handlebars](https://www.youtube.com/watch?v=Yh5qW_L5YNQ)

  * Modify `server.js`  to serve both static and dynamic content as per the code above. Start your server by navigating to `http://localhost:3000`. You should see the date displayed. Use `Developer Tools` to see the HTTP requests as you refresh the page
  * Create another route handler on your server, `/about`
  * Create another template in the `views` folder for your new `/about` page
  * Add a link from the `restaurants` page to the `about` page
  * Display your name on the about page

---
**Note:**
If you get stuck, here is the [solution to Lesson 2](https://github.com/MultiverseLearningProducts/swe-solutions/tree/main/bootcamp/wk3/day1/lesson2)

---


[attendance log](https://platform.multiverse.io/apprentice/attendance-log/163)
[main](/swe)|[prev](/swe/bootcamp/wk2/day5.html)|[next](/swe/bootcamp/wk3/day2.html)
