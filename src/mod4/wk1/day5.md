# Mod 4 > Week 1 > Day 5

## Overview of the day

Code review day. Today you should finish off your app as best you can. You coach will give you a 1:1 code review during the day so you can talk through your plan for the synoptic project with them.

----

## Learning Objectives

* Demonstrate skills and knowledge to build a full stack application

## Lesson

5 days is the maximum time you have to spend on your synoptic project. You need to learn to cut your cloth accordingly. You should pick your tools, services and products before you start. You should practice building things with your stack before you start.

You are less likely to get stuck if you have prepared and feel familiar with your chosen tools, services or products. What follows is just some pieces of advice to have in your mind when you are working.

* Working software 90% of the time
* The Data model is your app
* Use REST where you can
* Plan time for styling

## Working software 90% of the time

Try to have working software 90% of the time. Build to a waypoint, then stop and commit working code. Plan a small step of what you will do next (what you can do in 45 minutes). Now execute your plan.

If you complete your step before 45mins. Well done! Commit and plan the next step.

If your app remains broken for more than an hour you should check:

* Are you starting to veer off from your original plan? Why?
* Have you made an assumption about how something works that is wrong?
* Do you have bugs/faults occurring but don't know why?

### STOP ☕️ tea break

![lady drinking tea](https://media.giphy.com/media/3o7btLQZrOU4ssEew8/giphy.gif)

Stop and have a tea break. You should be able to roll back to your last working version. You need to re-think what you are doing:

* Don't be cleaver - go for simple solutions that work
* Don't guess how things work - read software docs carefully
* Go sideways - if you can't progress forward go sideways

Get your app back to a working state. Try again but plan a smaller step. I have found that having your app working about 90% of the time increases the pace of your development, and helps you avoid the rabbit holes of your app falling into an indeterminate state (being broken) for many hours.

## The Data model is your app

The quality of everything I have built and worked on has come down to the thought and care that has gone into the data model. Bad data structures cause you to write extra code, that introduces the chance of more bugs. You can end up fighting yourself if you don't think carefully about how and what data you store.

* Don't store data that can be derived
* Store one copy of each data point (one source of truth)
* Store the very latest value for each data item
* Relationships are as important as data points

Once you have figured your data model the rest of the app is much easier to build because that structure will help you make other design decisions. For example what RESTful endpoints you need, what controllers you should create or what collections your'll need on which pages.

## Use REST where you can

Single page apps can be fast and snappy, but they are complex and harder to build. For a 5 day project you'll find building a RESTful app much quicker and your app will be less prone to bugs. If you plan to take on a single page app then the complexity is usually in the state management.

### REST

REST is a proven easy to follow design pattern. Your data model should have identifiable "resources" for example a quiz might have these endpoints:

```java
GET /quizzes //get all the quizzes
GET /quizzes/1 //get all the quiz with id 1
POST /quizzes //create a new quiz
PUT /quizzes/1 //update the quiz with id 1
DELETE /quizzes/1 //delete the quiz with id 1
```

The design pattern saves you time and your app's structure will be robust and easy to extend. One of the current BCS synoptic projects explicitly asks you to build a RESTful app.

### SPAs

With single page apps your data model needs to be loaded into the browser, and not necessarily all at once. You need a backend that will give you your data in the right shape for your page or component. You'll end up implementing a data model on the backend, and frontend.

The classic pattern is to load an HTML page that executes your React app. That React app makes calls to the backend server to get data as and when the user navigates around the app. You'll need spinners indicating that data is loading...

![pink head spinner](https://i2.wp.com/media.boingboing.net/wp-content/uploads/2015/10/tumblr_nlohpxGdBi1tlivlxo1_12801.gif)

Just be aware of the extra work and practice before you start. You should also find a good routing library to help you structure your frontend code. This is a warning for apprentices planing to build in React, a frontend framework made for single page apps (SPAs). Know what you are doing before you start.

## Plan time for styling

Users equate quality with good looking frontends. If your app looks great users believe that is is of good quality. 5 days is such a short amount of time you'll be really pushed to create CSS from scratch that looks good. Use a design system and leverage the components and styling that it gives you. 

You'll still need to spend time making your app look consistent. Plan for that time. Make that time. Be mindful of spacing. Inconsistent spacing is the one thing that makes your UI look amateurish.

This is most effective toward the end of your build when all the views, pages and components are in place and wired up. Make a pass to ensure consistent spacing around form elements, buttons, lists, menu items etc.

![carbon example](https://css-tricks.com/wp-content/uploads/2019/04/carbon.png)

## Assignment

Arrange a code review slot with your coach

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/212)
[main](/swe)|[prev](/swe/mod4/wk1/day4.html)|[next](/swe/mod4/wk2/day1.html)