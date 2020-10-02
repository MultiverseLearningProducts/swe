# Bootcamp > Week 3 > Day 1

## Overview of the day

Today we need to understand servers. In particular stateless and stateful servers. In the second part of the day we are going to look at the steps to render our Restaurant data in a browser.

----

## Lesson 1 - Web Server

## Learning Objectives

* Define what makes a computer a server
* Create html pages
* Create css files and apply them to a html page
* Create links between pages

## Before we start

Have your project with the Restaurant models handy

## Materials needed

* the node module 'express'

## Lesson

What is a server? The simple answer is a computer that provides services to other computers. From that definition you can tell servers are often found on networks. For example an office might have a 'file server' a computer were office workers can read and write files that can be accessed by any other computer on the network.

The kind of servers we are going to focus on are a 'web server' and an 'app server'. A 'web server' responds to requests for .html files by sending back the .html contents of that file. Lets look at setting up a simple 'web server'.

Install the node module 'express' and create a new file called `server.js`. Create a folder called `public` and then in your server file add the following.
```javascript
const express = require('express')
const app = express()

app.use(express.static('public'))

app.listen(3000, () => console.log('web server running on port 3000'))
```
The code above is doing the following. We import the express module. We create an instance of an server and call it `app`. Then we configure the server to serve 'static' assets from the 'public' folder. A 'static' asset is a file that is simply read off of disc and then returned to the user.

Ready to test this out? We need to add an html file in our `public` folder called `index.html`. For now it can just be a very simple "hello world" page, see below. Naming the file `index.html` makes it the default page express will respond with when requests are made to the root of the server i.e. no routes.
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

We can serve different kinds of files from our public folder. For example a .css file or a javascript file. Lets try to add some style to our html page using a `style.css` file.

Create a `style.css` file and add the following

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
Now we need to update our `index.html` file to also request this file from the server.
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
Notice the `"/style.css"` this is not a file path. It is a URL a universal remote locator. The browser will actually read this URL as `http://localhost:3000/style.css` and if you visit that in your browser you'll see the content of your css.

So now we make a request to our server for an `index.html` page, when that loads in the browser that `index.html` page makes Further requests for more files; for example our style.css file. In the inspector of the browser you should be able to see in the network tab, the request our page makes for the `style.css` file. Once all these additional requests for assets and files has finished, then the browser `document` will emit an 'onload' event signalling your page has loaded.

So 1 http request actually spawned a number of additional requests. You can see this on other pages from your favorite sites.

## Assignment

* Can you create a mini website? Add html pages in the public folder.
* Link between your pages using anchor tags (see below)
* Change the style of the page

```html
<a href="/about.html">About me</a>
```
----

## Lesson 2 - Static vs Dynamic pages

## Learning Objectives

* Explain the difference between static and dynamic content
* Name the libraries we are using to server dynamic content

## Before we start

* install express-handlebars

## Materials needed

* N/A

## Lesson

What makes content static? Static content is usually read from disc, it is the same every request, it is the same for everyone. We have been working with static files so far on our web server.

Dynamic content is content that can change from request to request, and might be different for different people. For example everyone has the same basic facebook page, but each persons page is filled with content that is particular to them. What is shared between users is the page's template. The content that is changeable or dynamic.

Templates are easy to understand they are static assets. So where does the dynamic content come from?

### Create a Route

Our server need to intercept the http request. It's not good just responding with the content of a static file. The way we intercept or 'handle' requests is by declaring a 'route'

```javascript
app.get('/', (request, response) => {
    const date = new Date()
    response.send(date)
})
```
Add this route definition <u>after</u> setting your config with `app.use`, but <u>before</u> you call `app.listen`. Start your server, visit `http://localhost:3000` refresh your page. What happens as you continue to refresh the page?

### Create a Template

Our dynamic content is going to be driven by our data model. We will want to display our particular list of restaurants. For this we are going to set up 'handlebar' templates. This is a well known and supported template library in which you write html (which is good for you an an apprentice) and have place holders for dynamic content. Follow these steps;

1. `npm install express-handlebars`
1. require `express-handlebars` in your server and set it up (see below)
1. create a `views` folder
1. create a `layouts` folder in the `views` folder
1. create a `main.handlebars` file in the `layouts` folder
1. create a `restaurants.handlebars` file in your `views` folder

```sh
views
├── home.handlebars
└── layouts
    └── main.handlebars
```

```javascript
const express = require('express')
const handlebars = require('express-handlebars')
const app = express()

app.use(express.static('public'))
app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')

app.get('/', (request, response) => {
    response.render('restaurants', {date: new Date()})
})

app.listen(3000, () => console.log('web server running on port 3000'))
```
Your `main.handlebars` has the scaffold for the html page. Can you see the placeholder for other templates?
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
Your `restaurants.handlebars` will be rendered in the main layout template, and have a variable named 'date' that we can render in our template.
```html
<h1>Restaurants</h1>
<small>{{date}}</small>
```
Finally remove the `public/index.html` file as that will interfere with your `/` route.

## Assignment

* Put all of this together and render out some dynamic content
* Display the time of day on the `restaturants` page
* Add a link to an about page
* Create another route handler on your server `/about`
* Create another template for your new `/about` page
* Display your name on the about page
