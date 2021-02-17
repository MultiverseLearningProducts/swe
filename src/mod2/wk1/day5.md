# Mod 2 > Week 1 > Day 5

## Overview of the day

![dance gif](https://media1.tenor.com/images/32c5067a73959d69217cfb91a151fc65/tenor.gif)

----

## Lesson 1 - Serialise Data

## Learning Objectives

*   _3.1 Validate user input by using HTML5 elements Choose the appropriate controls based on requirements; implement HTML input types and content attributes (for example, required) to collect user input_
*   _3.2 Validate user input by using JavaScript Evaluate a regular expression to validate the input format; validate that you are getting the right kind of data type by using built-in functions; prevent code injection_
*   _3.4 Serialise, de-serialise, and transmit data Binary data; text data (JSON, XML); implement the jQuery serialise method; Form.Submit; parse data; sanitise input by using URI/form encoding_

## Before we start

## Materials needed

## Lesson

Wow, you can really dance! Now we want to be able to save our tracks! We should keep all the bars and the notes that are played (or not) and then give the user the option to save a track when they stop.

There are a few things we’ll need to do in order to save our track.

1.  Keep a record of all bars, and the notes that have to be played in that bar
2.  Name the track
3.  Serialise our data into a data structure that we can persist in localStorage i.e. a stringified JSON object of key value pairs

First of all we should change our play button to a record button. When we press record we should start to save the audio data (bars & notes) when we stop recording we can prompt the user to give the track a title, and save this track title along with the track audio data, or to cancel and dismiss saving the track.

1.  Update your play button to a record button
2.  Update the Grid class to have a property called `track` that will be an empty array into which we can push the bars as they are played.
3.  As bars are played by the `_play` method push them into the track array.
3.  On stop, the user should be presented with the option to save the track by giving it a name, or to cancel and not save that track. i.e. pop up a modal with a form?
4.  The track name should not contain any special characters that might enable script injection on our page. That means no html, javascript i.e `<script>` tags in our track name.

## Form Validation

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQPDtqqUC5Yluyx6bNjYS4F7QkY8dPW3mq1PBQJ7QZ-iz5p3S7ofGAiBIXzovbZpMhkNtjvxb-mlIu9/embed?start=false&amp;loop=true&amp;delayms=3000" frameborder="0" width="100%" height="444" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

Use the pattern attribute to validate your user’s input!

## Regular Expressions

Regular Expressions (regex) are a means to match patterns in strings. They are very powerful and give our programmes the ability to ask questions like:

> is this pattern in this string?

We can use regex to replace patterns in strings or remove them. When users give their tracks a title we want to make sure they are safe strings. This is partly for practice, but also we want our titles to be sent over websockets, stored in local storage, serialised, deserialised, and rendered in different browsers. It is important that our titles are robust and don’t contain doggy script tags for example.

The easiest way to start with regex is to literally match strings.

    /dog/

![](https://user-images.githubusercontent.com/4499581/74018079-29e03f80-498d-11ea-84de-5476c747fd2e.png)

In the example above the forward slashes indicate the beginning and end of the regex. We are then declaring the pattern “dog”. And we have a match. We could just match one letter “o”.

    /o/

![](https://user-images.githubusercontent.com/4499581/74018089-2d73c680-498d-11ea-8434-e681bea541a2.png)

Which “o” was matched? To match all the “o” we need the _**global**_ flag which we add like this:

    /o/g

![](https://user-images.githubusercontent.com/4499581/74018092-2f3d8a00-498d-11ea-95a8-577a22b931e2.png)

Neat. Now lets get more fancy and match all the letters between “a” and “g” in the alphabet.

    /[a-gA-G]/g

![](https://user-images.githubusercontent.com/4499581/74018097-31074d80-498d-11ea-8005-abc6f6aa6bec.png)

The square brackets indicate a character class, we are saying any of the characters between “a” and “g”. Usually you’ll see this [a-zA-Z] which matches any letter.

We can match non characters like white space.

    /\s/g

![](https://user-images.githubusercontent.com/4499581/74018098-3369a780-498d-11ea-9542-0bdba590f857.png)

and then start to combine these rules to make more specific patterns. For example match the first word and space and the last word and space.

    (^[a-zA-Z]+\s)|(\s[a-zA-Z]+$)

![](https://user-images.githubusercontent.com/4499581/74021097-da9d0d80-4992-11ea-88ad-f64f400afe3a.png)

Thats more advanced. In the brackets are capture groups, they are sub regex patterns (patterns within patterns) the “|” means **OR** the “+” plus means must match at least once, I think of it like saying _keep going until_ “\s” is a space. The “^” caret means the start of the string, whilst the “$” means the end. Below is a table of essential symbols.

<table>

<thead>

<tr>

<th style="text-align:center">**Symbol**</th>

<th style="text-align:left">**Description**</th>

</tr>

</thead>

<tbody>

<tr>

<td style="text-align:center">^</td>

<td style="text-align:left">The caret character denotes the beginning of a string</td>

</tr>

<tr>

<td style="text-align:center">$</td>

<td style="text-align:left">The dollar sign denotes the end of a string</td>

</tr>

<tr>

<td style="text-align:center">.</td>

<td style="text-align:left">The period indicates to match on any character</td>

</tr>

<tr>

<td style="text-align:center">[A-Z]</td>

<td style="text-align:left">Alphabet letters indicate to match any alphabetic character. This is case-sensitive. To match lowercase letters, use [a-z]</td>

</tr>

<tr>

<td style="text-align:center">\d</td>

<td style="text-align:left">This combination indicates to match any numeric character</td>

</tr>

<tr>

<td style="text-align:center">+</td>

<td style="text-align:left">The plus sign denotes that the preceding character or character set must match at least once</td>

</tr>

<tr>

<td style="text-align:center">*</td>

<td style="text-align:left">The asterisk denotes that the preceding character or character set might or might not match. This generates zero or more matches</td>

</tr>

<tr>

<td style="text-align:center">[^]</td>

<td style="text-align:left">When included in a character set, the caret denotes a negation. [^a] would match a string that doesn’t have an ‘a’ in it</td>

</tr>

<tr>

<td style="text-align:center">?</td>

<td style="text-align:left">The question mark denotes that the preceding character is optional</td>

</tr>

<tr>

<td style="text-align:center">\w</td>

<td style="text-align:left">This combination indicates to match a word character consisting of any alphanumeric character, including an underscore</td>

</tr>

<tr>

<td style="text-align:center">\</td>

<td style="text-align:left">The backslash is an escape character. If any special character should be included in the character set to match on literally, it needs to be escaped with a . For example, to find a backslash in a string, the pattern would include \</td>

</tr>

<tr>

<td style="text-align:center">\s</td>

<td style="text-align:left">This combination indicates to match on a space. When it’s combined with + or *, it can match on one or more spaces</td>

</tr>

</tbody>

</table>

## Assignment

We want a pattern that will replace any special characters or spaces with “_”. So if we have a track title like this:

**Th3 thundern@ughts are Gø!**

Our regex needs to target and replace the offending characters so we are left with this:

**th3_thundern_ughts_are_G__**

Can you figure out a regex to do that? You can use an online regex playground like [RegExr](https://regexr.com/). This also has a cheatsheet to help you.

----

## Lesson 2 - LocalStorage

## Learning Objectives

* _3.4 Serialize, deserialize, and transmit data Binary data; text data (JSON, XML);_

## Before we start

## Materials needed

## Lesson

**window.localStorage** is a place in the browser where you can store values as key => value pairs. It will be scoped to that domain, so for example things you save to localStorage when you are on **[https://www.amazon.co.uk](https://www.amazon.co.uk)** will only be available in the browser when you are on pages served from that domain. The same is true for **[http://localhost](http://localhost)**.

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vT4wCJjWXLsTFfoX-0JzvXu4bNZa-wDE2QfXAn5cOrYhchUekDfDw52QSR_FSfHSeAzCD7aQbokFW4t/embed?slide=id.g5c77bf21ca_0_172&start=false&loop=true&delayms=3000" frameborder="0" width="100%" height="444" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

The localStorage API is very simple:
```javascript
    // save an item
    localStorage.setItem('score', 9)
    // get an item
    localStorage.getItem('score') // returns 9
    // remove an item
    localStorage.removeItem('score') // returns "true"
    // blow the lot away
    localStorage.clear()
```
We’ll need to serialise our data to store all the track information in a string. To be compatible and play each others tracks we need a common standard or agreed format. Below is the spec for a single “Track” object. This should be serialised and saved in localStorage with a key i.e. `localStorage.setItem('tracks', tracks)` where tracks is a serialised array of track objects like this.
```json
    [
        {
            "trackname": "example-track-name",
            "data": [
                [440, null, 580, 332],
                [220, null, null, 709],
                [null, null, null, 709],
                [560, 364, null, null]
            ],
            "city": "London",
            "countryCode": "gb"
        }
    ]
```

You can show and hide elements in the DOM using jQuery like this.

```javascript
$("#modal").show()
$("#modal").hide()
```

## Assignment

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/192)
[main](/swe)|[prev](/swe/mod2/wk1/day4.html)|[next](/swe/mod2/wk2/day1.html)