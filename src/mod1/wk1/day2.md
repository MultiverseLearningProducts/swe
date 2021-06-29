# Mod 1 > Week 1 > Day 2

## Overview of the day

Today we are going to focus on creating and using RESTful APIs. Yesterday we looked at the anatomy of an HTTP request and response. Today we will build on that knowledge and look at the most popular way to organise accessing resources using HTTP.

---

## Lesson 1 - What is RESTful

REST is a shortened form of "<u>RE</u>presentative <u>S</u>tate <u>T</u>ransfer".

> REST is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other.

Note the word **style** - REST is a style of designing APIs in the same way that Object-Oriented Progrmamming is a style for designing programmes. The term is often used fairly loosely on the internet so be careful!

Before REST was first proposed in a [dissertation by Roy Thomas Fielding](https://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm) servers implemented their own endpoints named in ways that different development teams saw fit. For example, in your restaurant app, some teams had endpoints like `/createRestaurant` and others like `/addRestaurant`. REST introduced a standard way to address resources on a server which made it much easier for other services to discover and use those resources.

Today REST is widely implemented across the internet and we are going to learn about how to read and create our own RESTful web services.

## Learning Objectives

-   Connect the correct HTTP verbs to RESTful operations
-   Implement the OpenAPI specification

## Before we start

-   Create a free Spotify account so you can use their API (optional)

## Materials needed

-   [airports.json](https://raw.githubusercontent.com/WhiteHatLearningProducts/airports/master/airportsData.json) (airport data)

## Lesson

There are 2 aspects to RESTful architectures.

1. Using the right VERBS in your request
1. Using the right path for your resources

### VERBS/METHODS

Built into the HTTP spec are the http 'methods' or 'verbs'. `GET` `POST` `PATCH` `PUT` `DELETE` _(there are more these are the main ones)_ one fundamental concept in REST is that these verbs should be used for particular operations. For example we might have a resource `/albums`; to read all the albums we would make an http request and use the `GET` method. If we wanted to add a new album we would make an http request to the <u>same</u> address `/albums` but use the `POST` method and include data in the body of the request. The method indicates the kind of operation that will be performed for that resource; reading with `GET` or creating with `POST`. We CAN make a `GET` request with a body and create a new `/albums` resource BUT that would not be RESTful.

### Resources

A 'resource' some thing we want to access or interact with is also a fundamental concept in REST. Usually this is our service or data. For example on Spotify albums are a resource; so are artists and playlists. There is a standard set of paths used to interact with any resource:

| HTTP Method | URL            | Status code   | Description                                         |
| ----------- | -------------- | ------------- | --------------------------------------------------- |
| GET         | `/albums`      | 200           | return all the albums (resources are always plural) |
| POST        | `/albums`      | 201           | create a new album                                  |
| GET         | `/albums/{id}` | 200           | return the album with the id specified in the URL   |
| PUT         | `/albums/{id}` | [200,204]     | Replace the album with a new one, but keep the id   |
| PATCH       | `/albums/{id}` | [200,202,204] | Update 1 or more of the album's properties          |
| DELETE      | `/albums/{id}` | [200,202,204] | delete the album with the id specified in the URL   |

Nested resources simply extend the same pattern:

| HTTP Method | URL                                    | Status code | Description                                                                                       |
| ----------- | -------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------- |
| GET         | `/albums/{id}/tracks`                  | 200         | return the tracks for the album with the id specified in the URL                                  |
| POST        | `/albums/{id}/tracks`                  | 201         | create a new track for the album with the id specified in the URL                                 |
| GET         | `/albums/{album_id}/tracks/{track_id}` | 200         | return the track with the id specified in the URL from the album with the id specified in the URL |

Can you see the pattern?

❓ How might you update a track for a given album?

❓ Can you match the CRUD operations to http methods?

You might wonder why can't I just reference a track with the URL below?

| URL                  | VERB | Resource                                          |
| :------------------- | :--: | :------------------------------------------------ |
| `/tracks/{track_id}` | GET  | return the track with the id specified in the URL |

You can address a single track resource. However we are not capturing the relationship between this resource and the album resource that it belongs to. Often you will need to redirect back to a route that requires you to identify which album the track belongs to. The nested RESTful pattern helps you to do this cleanly in your controllers. REST is just a convention or as Roy Thomas Fielding put it 'connector semantics'.

## Lesson 2 - Build your own API

## Learning Objectives

-   Produce an API server
-   Implement CRUD operations on a single resource using RESTful endpoints

## Lesson

In this session we are going to build our service from the ground up and practice defining RESTful routes for ourselves. If you would like to build your server in another language (rather than Node.js/express) like Java or C# you are very welcome to do so. You might need to look online for instructions to perform the following steps for the framework you are using. i.e. for PHP you can use [Symfony](https://symfony.com/).

## Assignment

### Part 1

Build out a RESTful server. Your server should have the ability to serve requests to Create, Read, Update and Delete airports.

| HTTP Method | URL              | Status code | Description                 |
| ----------- | ---------------- | ----------- | --------------------------- |
| GET         | `/airports`      | 200         | retrieve all airports       |
| POST        | `/airports`      | 201         | create a new airport        |
| GET         | `/airports/{id}` | 200         | retrieve a specific airport |
| PUT         | `/airports/{id}` | 200         | update a airport            |
| DELETE      | `/airports/{id}` | 200         | delete a airport            |

Extension exercise: writing to and from your JSON file in memory is fine for this exercise, but if you want to go a step further, try and write the new file to disk.

### Part 2

We have 28,000 airport records. That's a lot. This would be much easier to consume in smaller chunks. Often large resources will be managed like this in "pages" of results. So lets say we have a page size of 25 that would mean we have to return only the first 25 airports (0 - 24 array indexes) that response would represent page 1. Page 2 would consist of the next 25 airports (25 - 49 array indexes). You will often see this handled as query parameters.

`http://localhost:3000/airports?page=2&pageSize=25`

Implement pagination for the GET `/airports` route enabling users to define a page number (required) and an optional `pageSize` query parameter (this should default to 25).

❓ What pagination errors might you now need to handle?

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/179)
[main](/swe)|[prev](/swe/mod1/wk1/day1.html)|[next](/swe/mod1/wk1/day3.html)
