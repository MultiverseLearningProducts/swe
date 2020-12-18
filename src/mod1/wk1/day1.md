# Mod 1 > Week 1 > Day 1

## Overview of the day

Today we are going to learn about Representational state transfer (REST) and what makes an API RESTful. We covered this topic briefly in the Bootcamp but over the next 2 weeks we'll be going into a lot more depth.
Today we will use [Postman](https://www.postman.com/) to call some RESTful APIs and look in detail at the requests we send and responses we receive.

----

## Lesson 1 - The Anatomy of HTTP

## Learning Objectives

* Understand the Hypertext Transfer Protocol (HTTP)
* Understand the difference between HTTP and HTTPS
* Understand the different HTTP verbs and which one is appropriate for modelling CRUD operations
* Understand the most common HTTP response codes and how these indicate success or failure in RESTful operations
* Become familiar with using Postman to call RESTful APIs

## Before we start

* Install [Postman](https://www.postman.com/)

## Materials needed

## Lesson

HTTP stands for the 'hyper text transfer protocol'. It is a protocol or 'way of doing things' which means if you meet a standard set of requirements you can implement HTTP in any language. Lets have a look at what goes into an HTTP request:

### Method (Verb)

The method part of HTTP helps to communicate what this request is trying to do. The most commonly used verbs are GET & POST.

|Method|Function|
|:-----|:-------|
|GET|to retrieve data|
|POST|to create data|
|PUT|to replace data|
|PATCH|to update data|
|DELETE|to remove data|

❓ Can you see how to select these in postman?

### Protocol

This is the part at the very beginning of the request. `http://` this tells the browser we are making an http request. Protocols you might come across are:

* `http://` - hyper text transfer protocol
* `https://` - secure hyper text transfer protocol (encrypted)
* `file://` - when you open a local file in your browser
* `ws://` - open a websocket
* `ftp://` - when you connect to a remote file server ftp stands for file transfer protocol
* `ipfs://` - the inter-planetary file system find out more about this at [https://ipfs.io/](https://ipfs.io/)

### Host

This is the address or place on the internet we are trying to reach. The host address (sometimes referred to as the domain address) of the HTTP request forms the main part of the address.

### Path

This comes after the host address. This is the part of the address that is subject to the RESTful pattern. If we want to get all the albums from spotify then we would use the following address.

```sh
https://api.spotify.com/v1/albums
```
* `/v1/albums` - is the path
* `api.spotify.com` - is the host.

### Parameters

There are often variables that contribute toward a RESTful address. These are called parameters if they are included in the path. In the example above if we include the id number at the end of the path, we will be returned the album with that id. The id can be different and will relate to the resource that we want to access. In the example below we can compose an address using the album id `12345`, but if we wanted a different album we can change this.

```sh
https://api.spotify.com/v1/albums/12345
```

❓ What is the difference between the path and parameters?

### Query parameters

Query parameters can be added to the end of an address. Adding a `?` at the end of an address indicates that the following string is a list of key value pairs. In the example below after the '?' you should see a 'key' `artist` an equals `=` and then the 'value' `Frank%20Zappa` that makes a key=value pair. Look for the ampersand `&` that separates the key value pairs. Query parameters must be encoded so there are no special characters (except '%' or) or spaces. This encoding is called URIEncoding the best API in the browser to use for this is `window.encodeURIComponent`.
```javascript
"?artist=Frank Zappa&album=Hot Rats&track=Peaches Èn Ragalia" // not URI encoded
window.encodeURIComponent("Peaches Èn Ragalia") // returns Peaches%20%C3%88n%20Ragalia
"?artist=Frank%20Zappa&album=Hot%20Rats&track=Peaches%20%C3%88n%20Ragalia" // safe query string
```
All this extra information will be included in the HTTP request. Query strings have a maximum size limit (specific to the browser) and therefore aren’t good for transmitting a large amount of information

❓ What are the 2 ways we can pass data in an HTTP request?
❓ What is the difference between a parameter and a query parameter?

### Body

All HTTP requests can have a body. The body can contain different flavors of encoded data. In the table below you can see the following data encoded in different flavors:

```javascript
{
    artist: "Frank Zappa",
    album: "Hot Rats",
    track: "Peaches Èn Ragalia"
}
```

|flavor|encoding|
|:-----|:-------|
form-data|`artist=Frank+Zappa&album=Hot+Rats&track=Peaches+%C3%88n+Ragalia`
x-www-form-urlencoded|`artist=Frank%20Zappa&album=Hot%20Rats&track=Peaches%20%C3%88n%20Ragalia`
JSON string|`"{"artist":"Frank Zappa","album":"Hot Rats","track":"Peaches Èn Ragalia"}"`
XML|`"<?xml version="1.0" encoding="UTF-8"?><root><artist>Frank Zappa</artist><album>Hot Rats</album><track>Peaches Èn Ragalia</track></root>"`

There are more kinds of encoding for example binary which is for files but this is enough to be getting on with.

### Header

The header is a very important part of the HTTP request. In the header you can pass all manor of meta information about the request. We will be putting authentication credentials in the header later on. For now we can focus on the `Content-Type`. Considering there are different ways we can encode the body content, we need to have a matching header that tells the receiver how to decode our body content. Without the body and Content-Type matching the server may error with a 406 "Not Acceptable" status code (we will look at status codes later).

Here is a list of all the different `Content-Type`s that are supported: [https://www.iana.org/](https://www.iana.org/assignments/media-types/media-types.xhtml)

❓ In postman can you see where to set a header?
❓ Can you match the correct content types to the table of encodings above?

### Response

The response object is similar to the request object. The main difference is a response will have a status code property. It is the responsibility of the developers building and maintaining a service to set the correct status code for a response before sending it back to the client.

|Range|Status|
|:----|:-----|
100 - 103|Informational response
200 - 226|Success
300 - 308|Redirection
400 - 451|Client Errors
500 - 598|Server Errors

Read through the [HTTP Status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) so you know how to handle HTTP responses like a boss.

## Assignment

Below is a list of HTTP requests we want you to try and make with [postman](https://www.postman.com/). Collect the results that you get back from the server as each response is a puzzle piece that will form a message just for you.

1. Make a GET request to https://http.whitehatcoaches.org.uk/start
1. Make a POST request to https://http.whitehatcoaches.org.uk/apprentices with your `name` in the body encoded in x-www-form-urlencoded as a key value pair where the key is `name` and the value is your name
1. Follow the instructions you receive from the responses
1. Send your coach a DM on slack with your final message completed

----

## Lesson 2 - Advances API calls with fetch

In this session we are just going to make sure everyone is comfortable using fetch in the browser to form more advanced HTTP requests. As well as using a tool like postman, we also want you to know how to send HTTP requests in your client-side javascript code.

## Learning Objectives

* Set headers in a HTTP request using fetch
* Set GET and POST methods for a fetch HTTP request

## Before we start

Create a new .html file with a script tag, write your code in the script tag.

## Materials needed

## Lesson

Postman is a great tool, very useful for working with new APIs. In this session we are going to learn to do the things we did with postman using the Promise based fetch API in the browser.
```javascript
fetch(`https://api.thesneakerdatabase.com/v1/sneakers?limit=10`)
```
This is the most basic usage, thats a GET request (by default) to the address passed as an argument. We don't deal with the response. The response is async and is a raw response object.
```javascript
fetch(`https://api.thesneakerdatabase.com/v1/sneakers?limit=10`).then(res => console.table(res))
```
![the response object](https://user-images.githubusercontent.com/4499581/102642314-635d0c00-4155-11eb-9bb6-b91c187d40cd.png)

❓ Can you see the status code?
❓ Are there any headers?

To parse the response into a more friendly JSON object we can call `res.json()` then we can access our data in a convenient format.
```javascript
fetch(`https://api.thesneakerdatabase.com/v1/sneakers?limit=10`)
  .then(res => res.json())
  .then(res => console.log(res))
```
![data from the response](https://user-images.githubusercontent.com/4499581/102642623-ebdbac80-4155-11eb-9d63-29751bbb4a51.png)

### Headers

We are going to be working with the headers of our requests so lets have a look at setting headers in the fetch API. Below we are going to POST some data to our endpoint like we did earlier with postman.

```javascript
const url = "https://http.whitehatcoaches.org.uk/songs"
const payload = {
    artist: "Frank Zappa",
    album: "Hot Rats",
    track: "Peaches Èn Ragalia"
}
fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
})
.then(res => res.json())
.then(song => {
    console.log("newly created song", song.title)
})
```

## Assignment

[attendance log](https://platform.whitehat.org.uk/apprentice/attendance-log/178)
[main](/swe)|[prev](/swe/bootcamp/wk5/day3.html)|[next](/swe/mod1/wk1/day2.html)