# Mod 2 > Week 2 > Day 2

## Overview of the day

Today is all about the `<canvas>` element.

----

## Lesson 1 - The Player

## Learning Objectives

## Before we start

## Materials needed

## Lesson

We are going to make a player to play and visualise our tracks. For times when we want to render graphics or draw to the DOM there is the `<canvas>` element. This is going to be at the heart of our `Player` component.

## `atob()`

Previously we constructed our tracks so when they were are clicked they will call:

```javascript
onclick="player.load('${btoa(JSON.stringify(track))}')"
```

To decode the string that `load(track)` will receive we need to call the decode version of `btoa()` which is `atob()` that will take a base64 encoded string and return you a JSON stringified track. You can then hide the grid, show the player, add the `JSON.parse` version of the track into the `Player`'s track property and then call `_render()`.

# 👩🏾‍💻🧑🏽‍💻👨🏻‍💻

Create a `Player` class using the UML diagram above as a guide. When a user clicks on a track it should hide the grid and display the player. The player should have the track that was clicked loaded into the `track` property.

## `play()`

The track is in the `Player` can you play it? Use the worker to get a 'tick'. Then play the bars in the loaded track.

# Visualising the Track

We will be able to hook into the audio data by inserting an "Analyser" node into our audio graph. That will give us a stream of audio data that we can use to draw on the canvas element.

Before we look at that let first of all try to draw some simple lines and shapes on the canvas.

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vS2qKAx1X2_HWsPd0AdE5QN-jF0PgJGhjA_1n-rp09m34Zo8t4EE8j9JE2XjI2CGO-RVVSRsGjAL34w/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="444" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

## Assignment 👩🏾‍💻🧑🏽‍💻👨🏻‍💻

|Description|UML|
|:---|:---|
|The `Player` class should have an instance of the `Worker` like the `Grid` does, because the `Player` will need to play a track so we will want a `_tick()` function to consume and play the bars of the track.<br/><br/>We want somewhere to store the track that the player is going to play. Then add functions to `load(track)`, `play()`, & `stop()` a track.<br/><br/>The `_render()` function should return the HTML that will make up our player interface.|![UML Player class](https://user-images.githubusercontent.com/4499581/89511951-71277b80-d7ca-11ea-9abb-cb58c683548c.png)|

```javascript
_render() {
    const playerElement = `
        <article style="position:relative;">
            <h2>${this.track.trackname}</h2>
            <canvas></canvas>
            <nav style="position:absolute:bottom:0;">
                <button onclick="player.play()">Play</button>
                <button onclick="player.stop()">Stop</button>
            </nav>
        </article>
    `
    $("#player").append(playerElement)
    $('canvas').get(0).setAttribute('width', $("#player").width())
    $('canvas').get(0).setAttribute('height', $("#player").height() - 130)
    this.canvas = {
        ctx: $('canvas').get(0).getContext('2d'),
        w: $('canvas').width(),
        h: $('canvas').height()
    }
    this.canvas.ctx.fillStyle = "burlywood"
}
```

Can you spot the canvas context interface? We call `getContext('2d')` to access an instance of the canvas context. It is calling commands on this interface that enable us to draw on our canvas. Given the `_render()` function above. Can you draw a series of bars on your canvas?

----

## Lesson 2 - Request Animation Frame

## Learning Objectives

* Use inheritance
* Draw on the canvas element

## Before we start

## Materials needed

## Lesson

![track being visualised](https://user-images.githubusercontent.com/4499581/90388072-2be33380-e07f-11ea-98f5-1001f1c5182a.gif)

Above is the kind of thing we are aiming for. We need to extend 2 of our classes. We are going to add an analyser node to our audio graph when we play tracks using the MyAppAudio base class. We also need to add some code to animate the bars in the Player class.

## Assignment

## Extend the MyAppAudio class

|instructions|UML|
|:-----------|:--|
|Can you extend this class by adding two new static properties; analyser and audioData. All of these will be set when you call `MyAppAudio.setContext()` as the analyser is created from the AudioContext instance.|![MyAppAudio UML diagram](https://user-images.githubusercontent.com/4499581/90389291-2f77ba00-e081-11ea-8e0a-7b912a62eb38.png)|

Adding an analyser node means when we connect our source (an oscillator) through this node, we will be able to access some of the audio data. That snapshot of data we are going to place in an Uint8Array - thats an array with a fixed size, which we can iterate over, and use those values to set the height of our bars as the audio plays.

```javascript
class MyAppAudio {
    static context = undefined
    static analyser = undefined
    static audioData = undefined
    static setContext = () => {
        this.context = new AudioContext()
        this.analyser = this.context.createAnalyser()
        this.audioData = new Uint8Array(this.analyser.frequencyBinCount)
    }
}
```

Instances of the Note class need to know if they should pass through the analyser node or not. Can you think of a way to refactor the `Note.play()` method to conditionally pass through the analyser node if it is being played back by the Player?

## Extend the Player class

How too animate? Think about a flick book.
![flick book](https://images.squarespace-cdn.com/content/v1/5b1e8e5e12b13fe583922460/1528835374841-5QV6TRZ76LEK6GAU8DQQ/ke17ZwdGBToddI8pDm48kDwcMOkWjB-dh5UJuaCAkzJZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpx7gYYqsE3-d3T-rAujCsKB6Ebg7BE-3tI4Wg3H92DuXshSGXJoxzxQyr_LXYiHo9c/Meteor-anim-gif+2.gif?format=1500w)
To get the impression of movement you need to flick the pages pretty quickly. We need to do something similar. We can wipe our canvas clean and draw on it. If we do this fast enough, it will look like things are moving. How about 60 times a second?

The browser API has a function we can call called `requestAnimationFrame`. If we call `requestAnimationFrame(this._draw.bind(this))` with a function, it will cause that function to be called with every paint of the browser (about 60 times a second). If you don't call the function the animating will stop. We will have to use `.bind` to preserve our executing context. Below is a suggested `_draw()` function.

```javascript
_draw() {
    if (!MyAppAudio.context) MyAppAudio.setContext()
    if (this.isPlaying) requestAnimationFrame(this._draw.bind(this))
    MyAppAudio.analyser.getByteFrequencyData(MyAppAudio.audioData)
    this.canvas.ctx.clearRect(0, 0, this.canvas.w, this.canvas.h)
    const barWidth = 32
    
    MyAppAudio.audioData.reduce((x, barHeight) => {
        const y = barHeight / 2
        this.canvas.ctx.fillRect(x, this.canvas.h - y, barWidth, y)
        return x + barWidth + 1
    }, 0)
}
```

`MyAppAudio.analyser.getByteFrequencyData(MyAppAudio.audioData)` this fills the `MyAppAudio.audioData` array with values. We then wipe the canvas clean and then draw a series of bars across the canvas.

❓ How does the `x` value increase?

❓ What happens when you alter the `barWidth` variable?

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/194)
[main](/swe)|[prev](/swe/mod2/wk2/day1.html)|[next](/swe/mod2/wk2/day3.html)