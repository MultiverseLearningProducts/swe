# Mod 2 > Week 2 > Day 4

# Overview of the day

To we will look at the form submission process before we tackle the final project for this module.

# Lesson 1

## Learning Objectives

- Understand the basics of HTTP
- Understand the URL pattern
- Understand the difference between GET and POST
- Understand what happens when you submit a form

## Understand the basics of HTTP

> Knowledge of HTTP is not required for the exam, but does helps explain what GET and POST do.

The web is one big collection resources: HTML files, JavaScript file, images, videos, etc. When you request one of these resources, the HTTP protocol handles the request and response exchange between the client and the server. When you load a webpage, numerous HTTP requests will be made to the server for each resource. Once the request has been fulfilled (i.e. the resource has been sent to the client), the connection is closed.

![](https://cdn.tutsplus.com/net/authors/jeremymcpeak/http1-request-response.png)

> To see HTTP requests in action, open up Chrome, go to the network tab and refresh the page

You can read more about HTTP [here](https://docs.google.com/presentation/d/1OFtwlhE-3qTp7qid4m7wlV2iKMvHQF_SYf2rbD_caKA/edit?usp=sharing).

## Understand the URL pattern

> Knowledge of the URL pattern is not required for the exam, but helps to understand the difference between GET and POST

The Uniform Resource Locator (URL) is used to find the resource on the internet.

![](https://cdn.tutsplus.com/net/authors/jeremymcpeak/http1-url-structure.png)

Notice the query string on the end - this is used to send additional (insensitive) information to the server.

## Understand the difference between GET and POST

> Understanding the differences between Get and Post is required for the exam

HTTP defines a number of standard methods that can be used to send and retrieve data to/from a server. By far the most common are `GET` and `POST`.

- When you request for a resource like a web page or image, the GET request will be used. Additional information can be set in the query parameters where it's visible to all (see above)

- When you submit a form, either the GET or POST can be used

- A form POST request sends data to the server for processing in the message body, hidden from the user (but not encrypted!)

- A form GET request sends the form data in the query string

## Understand what happens when you submit a form

> Understanding the form submission process is required for the exam

Checkout this search engine called Google. On the home page, their form submits a request to the server using the GET method. When you submit your search, your query and a bunch of other information is sent to Google in the query parameters. Try it yourself!

```html
<form action="/search" method="GET">
  <!-- form fields -->
</form>
```

When you login to Google, a POST request is used. Your data is sensitive, and we don't want it in the query string where everyone can see it!

```html
<form action="/signin/v2/challenge/password/empty" method="POST">
  <!-- form fields -->
</form>
```

Key points for the exam:

- Don't use GET to send sensitive data, use POST instead
- Browsers place character limits on query strings
- POST requests are never cached and won't show up in your browser history. Why do you think this is?
- GET requests are cached and will show up in your history
- The form action is the endpoint on the server that will receive the submission

# Lesson 2

## Final Assignment

The final assignment is to build a music player in JavaScript.

You will need to:

- Use [this](https://drive.google.com/file/d/1zyS7SvLBcGgKt1eabDHn95CAcl1yJqZ3/view?usp=sharing) markup
- Find some MP3s
- Store your songs in an array of objects (with a relative path to the mp3 on disk)
- Store song information such as title, album, date released etc
- Display this info on the UI when the song is playing
- Leverage DOM methods to play, pause, skip, etc. See [this](https://www.w3schools.com/jsref/met_audio_play.asp) link
- If there's time, add a shuffle function and a favourite function
- Extension: can you get the time elapsed bar to work?

[main](/swe)|[prev](/swe/mod2/wk2/day3.html)|[next](/swe/mod2/wk2/day5.html);
