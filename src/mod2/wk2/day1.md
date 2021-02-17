# Mod 2 > Week 2 > Day 1

## Overview of the day

----

## Lesson 1 - WebSockets

## Learning Objectives

*   _2.4 Implement a callback Receive messages from the HTML5 WebSocket API_

## Before we start

## Materials needed

## Lesson

# Sharing tracks over WebSockets

You have tracks saved in localStorage. Let's make them available so everyone else can enjoy them. We are going to use WebSockets to connect to a relay server that we can send our tracks to and have them broadcasted to everyone connected.

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRcUuangOTH4PvIyU9V409kMkt2SOKOlJ3QZ1ywh8MO8ZJceAG7xohX7H5L7k41tHSpqPTmpoig8UrP/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" width="100%" height="444" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

You should connect to this web socket endpoint when your app loads:
```javascript
    const ws = new WebSocket('ws://fathomless-reaches-81353.herokuapp.com/socket')
```
You can visit [http://fathomless-reaches-81353.herokuapp.com/](http://fathomless-reaches-81353.herokuapp.com/) for instructions about how to use this relay service. It basically works something like this.

![illustration of the web socket relay server](https://user-images.githubusercontent.com/4499581/71779386-1fa5dc80-2fae-11ea-8c0c-aa179892c729.png)

Once you have a websocket instance you can add event listeners to it like this:
```javascript
    ws.onmessage = function (msg) {
        msg.data // payload from the server
    }
    ws.onclose = function () {
        // do something when the socket connection closes
    }
```
Each peer stores their tracks in localStorage.

```javascript
_save(track) {
    let tracks = JSON.parse(localStorage.getItem("tracks") || "[]")
    localStorage.setItem("tracks", JSON.stringify([...tracks, track]))
}
```
When you save tracks you have to read them out of localStorage, deserialise them, then append your new track. Then do the reverse and serialise the tracks and re-writing the updated data in localStorage.

Upon connection peers receive a `msg.data` that equals “collect”, you should then send your tracks from localStorage to the socket server. The socket server then broadcasts those tracks to all the connected peers (including you). Anything that is not a “collect” msg is going to be an array of serialised tracks.

No tracks are stored on a central server, the socket server is “stateless”, tracks are distributed among the connected peers. Update your code to render tracks from the incoming messages from your WebSocket NOT from localStorage!

You can use the spread operator to append items to an array. It’s similar to the way the spread operator works with objects:
```javascript
    const a = [1,2,3]
    const b = [4,5,6]
    const c = [...a, ...b]
    c // [1,2,3,4,5,6]
```
There is enough going on here to warrant an object in our programme that deals with tracks.

## Assignment

Let us add a `Tracks` class that will encapsulate the logic and state of all our tracks.

----

## Lesson 2 - Tracks

## Learning Objectives

* Interpret a UML diagram
* Use data serialisation

## Before we start

## Materials needed

## Lesson

![example of tracks rendered in the DOM](https://user-images.githubusercontent.com/4499581/89508534-f3617100-d7c5-11ea-9301-316ed45acd3b.png)

Above is an example of the tracks rendered in an `<aside>` element next to the composing grid interface.

## onclick

In the next section we are going to build out the `Player` component. In preparation for this we should have our track call the following function when it is clicked:

```html
<button onclick="player.load('${btoa(JSON.stringify(track))}')">${track.trackname}
</button>
```

Earlier we looked at serialising data. Here we are using a a function called `btoa()` which is part of the browser's javascript API. It will base64 encode our track. We have to do this as just stringifying our track and including it inline as an argument to a javascript function, is not enough to escape all the quotes and other punctuation.

We are going to turn this:

{"trackname":"rain down","data":[[1047,523.3,261.6,130.8],[1175,587.3,293.7,146.8],[1319,659.3,329.6,164.8],[1397,698.5,349.2,174.6],[1480,740,370,185],[1568,784,392,196],[1760,880,440,220],[1976,987.8,493.9,246.9],[1047,523.3,261.6,130.8],[1175,587.3,293.7,146.8],[1319,659.3,329.6,164.8],[1397,698.5,349.2,174.6],[1480,740,370,185],[1568,784,392,196],[1760,880,440,220],[1976,987.8,493.9,246.9],[1047,523.3,261.6,130.8],[1175,587.3,293.7,146.8],[1319,659.3,329.6,164.8],[1397,698.5,349.2,174.6],[1480,740,370,185],[1568,784,392,196],[1760,880,440,220],[1976,987.8,493.9,246.9],[1047,523.3,261.6,130.8],[1175,587.3,293.7,146.8],[1319,659.3,329.6,164.8],[1397,698.5,349.2,174.6],[1480,740,370,185],[1568,784,392,196],[1760,880,440,220],[1976,987.8,493.9,246.9],[1047,523.3,261.6,130.8],[1175,587.3,293.7,146.8],[1319,659.3,329.6,164.8]],"city":"","countryCode":""}

Into this:

<div style="word-wrap:break-word;max-width:100%;">eyJ0cmFja25hbWUiOiJyYWluIGRvd24iLCJkYXRhIjpbWzEwNDcsNTIzLjMsMjYxLjYsMTMwLjhdLFsxMTc1LDU4Ny4zLDI5My43LDE0Ni44XSxbMTMxOSw2NTkuMywzMjkuNiwxNjQuOF0sWzEzOTcsNjk4LjUsMzQ5LjIsMTc0LjZdLFsxNDgwLDc0MCwzNzAsMTg1XSxbMTU2OCw3ODQsMzkyLDE5Nl0sWzE3NjAsODgwLDQ0MCwyMjBdLFsxOTc2LDk4Ny44LDQ5My45LDI0Ni45XSxbMTA0Nyw1MjMuMywyNjEuNiwxMzAuOF0sWzExNzUsNTg3LjMsMjkzLjcsMTQ2LjhdLFsxMzE5LDY1OS4zLDMyOS42LDE2NC44XSxbMTM5Nyw2OTguNSwzNDkuMiwxNzQuNl0sWzE0ODAsNzQwLDM3MCwxODVdLFsxNTY4LDc4NCwzOTIsMTk2XSxbMTc2MCw4ODAsNDQwLDIyMF0sWzE5NzYsOTg3LjgsNDkzLjksMjQ2LjldLFsxMDQ3LDUyMy4zLDI2MS42LDEzMC44XSxbMTE3NSw1ODcuMywyOTMuNywxNDYuOF0sWzEzMTksNjU5LjMsMzI5LjYsMTY0LjhdLFsxMzk3LDY5OC41LDM0OS4yLDE3NC42XSxbMTQ4MCw3NDAsMzcwLDE4NV0sWzE1NjgsNzg0LDM5MiwxOTZdLFsxNzYwLDg4MCw0NDAsMjIwXSxbMTk3Niw5ODcuOCw0OTMuOSwyNDYuOV0sWzEwNDcsNTIzLjMsMjYxLjYsMTMwLjhdLFsxMTc1LDU4Ny4zLDI5My43LDE0Ni44XSxbMTMxOSw2NTkuMywzMjkuNiwxNjQuOF0sWzEzOTcsNjk4LjUsMzQ5LjIsMTc0LjZdLFsxNDgwLDc0MCwzNzAsMTg1XSxbMTU2OCw3ODQsMzkyLDE5Nl0sWzE3NjAsODgwLDQ0MCwyMjBdLFsxOTc2LDk4Ny44LDQ5My45LDI0Ni45XSxbMTA0Nyw1MjMuMywyNjEuNiwxMzAuOF0sWzExNzUsNTg3LjMsMjkzLjcsMTQ2LjhdLFsxMzE5LDY1OS4zLDMyOS42LDE2NC44XV0sImNpdHkiOiIiLCJjb3VudHJ5Q29kZSI6IiJ9</div>

Our `load(track)` function in our `Player` will be passed this encoded string which it will then decode and load into the player.

## Assignment

|Spec|UML|
|:--|:--|
Create a `Tracks` class by following the UML diagram on the right.<br/><br/>Assign a web socket connection to `ws` property. `tracks` is going to be your local state of tracks received via the web socket. Remember to register an `onmessage` handler in the constructor function that listens for "collect" or an updated list of tracks. `save(track)` should take a track instance and save it to `localStorage`. `_send()` can be called on "collect" to send all the tracks from your `localStorage`, and when a new track is saved you can call `_send()` so everyone sees your new track. `_render()` this should empty your parent HTML element that will hold the list of tracks, and then create the HTML for each track (including an onclick event to load the track into a `Player`) then add it into the DOM|![UML Track class](https://user-images.githubusercontent.com/4499581/87775782-90139d00-c81e-11ea-93e2-169f23427e9b.png)

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/193)
[main](/swe)|[prev](/swe/mod2/wk1/day5.html)|[next](/swe/mod2/wk2/day2.html)