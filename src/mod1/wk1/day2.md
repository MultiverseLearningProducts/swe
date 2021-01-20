# Mod 1 > Week 1 > Day 2

## Overview of the day

Today we are going to focus on creating and using RESTful APIs. Yesterday we looked at the anatomy of an HTTP request and response. Today we will build on that knowledge and look at the most popular way to organise accessing resources using HTTP.

----

## Lesson 1 - What is RESTful

REST is a shortened form of "<u>RE</u>presentative <u>S</u>tate <u>T</u>ransfer".

> REST is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other.

Before REST was first proposed in a [dissertation by Roy Thomas Fielding](https://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm) servers implemented their own endpoints named in ways that different development teams saw fit. For example one application might have an endpoint called `/getUsers` another might call it `/allUsers` there was no agreed path name for fetching all users from an endpoint.

REST introduced a standard way to address resources on a server which made it much easier for other services to discover and use those resources. 

> This is achieved by placing constraints on connector semantics where other styles have focused on component semantics. <small><i>Roy Thomas Fielding</i></small>

Today REST is widely implemented across the internet and we are going to learn about how to read and create our own RESTful web services.

## Learning Objectives

* Connect the correct HTTP verbs to RESTful operations
* Implement the OpenAPI specification

## Before we start

* Create a free Spotify account so you can use their API (optional)

## Materials needed

* [airports.json](https://raw.githubusercontent.com/WhiteHatLearningProducts/airports/master/airportsData.json) (airport data)

## Lesson

There are 2 aspects to RESTful architectures.

1. Using the right VERBS in your request
1. Using the right path for your resources

### VERBS/METHODS

Built into the HTTP spec are the http 'methods' or 'verbs'. `GET` `POST` `PATCH` `PUT` `DELETE` _(there are more these are the main ones)_ one fundamental concept in REST is that these verbs should be used for particular operations. For example we might have a resource `/albums`; to read all the albums we would make an http request and use the `GET` method. If we wanted to add a new album we would make an http request to the <u>same</u> address `/albums` but use the `POST` method and include data in the body of the request. The method indicates the kind of operation that will be performed for that resource; reading with `GET` or creating with `POST`. We CAN make a `GET` request with a body and create a new `/albums` resource BUT that would not be RESTful.

### Resources

A 'resource' some thing we want to access or interact with is also a fundamental concept in REST. Usually this is our service or data. For example on Spotify albums are a resource; so are artists and playlists. There is a standard set of paths used to interact with any resource:

|HTTP Method|URL|Status code|Description|
|-----------|---|-----------|-----------|
|GET|`/albums`|200|return all the albums (resources are always plural)|
|POST|`/albums`|201|create a new album|
|GET|`/albums/{id}`|200|return the album with the id specified in the URL|
|PUT|`/albums/{id}`|[200,204]|Replace the album with a new one, but keep the id|
|PATCH|`/albums/{id}`|[200,202,204]|Update 1 or more of the album's properties|
|DELETE|`/albums/{id}`|[200,202,204]|delete the album with the id specified in the URL|

Nested resources simple extend the same pattern.

|HTTP Method|URL|Status code|Description|
|-----------|---|-----------|-----------|
|GET|`/albums/{id}/tracks`|200|return the tracks for the album with the id specified in the URL|
|POST|`/albums/{id}/tracks`|201|create a new track for the album with the id specified in the URL|
|GET|`/albums/{album_id}/tracks/{track_id}`|200|return the track with the id specified in the URL from the album with the id specified in the URL|

Can you see the pattern?

❓ How might you update a track for a given album?

❓ Can you match the CRUD operations to http methods?

You might wonder why can't I just reference a track with the URL below?

|URL|VERB|Resource|
|:--|:---:|:------|
|`/tracks/{track_id}`|GET|return the track with the id specified in the URL

You can address a single track resource. However we are not capturing the relationship between this resource and the album resource that it belongs to. Often you will need to redirect back to a route that requires you to identify which album the track belongs to. The nested RESTful pattern helps you to do this cleanly in your controllers. REST is just a convention or as Roy Thomas Fielding put it 'connector semantics'.

### Documentation

You will often find yourself consuming 3rd party APIs. Consider these 2 RESTful fundamentals; verbs and paths. We can expect to see these 2 things in most RESTful APIs. How quickly and easily it is to integrate with 3rd party APIs is largely down to the quality of their documentation. Often documentation is generated from the API code itself. This is a popular way to document APIs. Have a look at the examples of online generated API documentation below:

* [Github](https://docs.github.com/en/free-pro-team@latest/rest/reference/repos)
* [Dropbox](https://www.dropbox.com/developers/documentation/http/documentation#sharing-list_folders)
* [Twilio](https://www.twilio.com/docs/usage/bulkexport/job#fetch-a-job-resource)
* [Twitter](https://developer.twitter.com/en/docs/twitter-api/tweets/lookup/api-reference/get-tweets)
* [Spotify](https://developer.spotify.com/documentation/web-api/reference-beta/#endpoint-get-multiple-albums)
* [The Sneaker Database](https://app.swaggerhub.com/apis-docs/tg4solutions/the-sneaker-database/1.0.0)

❓ What are the common elements you can identify in each of the API documentation sites above?

❓ There are quite a few albums on Spotify and we can't actually `GET` all of them. What is the mechanism Spotify have used to limit the albums you can request? 

❓ Why do you think auto generated documentation is a popular choice for dev teams who create and maintain public facing APIs?

### OpenAPI

OpenAPI was originally part of the Swagger framework. Swagger became very popular and the developer community embraced the specification, it has  become a recognised standard used across the industry. OpenAPI became a separate project in 2016, overseen by the OpenAPI Initiative, an open-source collaboration project of the Linux Foundation.

Lets use [OpenAPI](https://www.openapis.org/)/[Swagger](https://swagger.io/) to define our API in a standard structure. There are lots of benefits from becoming familiar with this standard.
You will become confident and familiar will all the things you need to consider when you design your own API endpoints. Other developers will be able to integrate with your API easily. Other tools can read the information about your API from the OpenAPI standard structure and generate web based documentation for you! Below is a starter example of an OpenAPI `airports-config.yaml` file.

```yaml
openapi: 3.0.0
info:
  title: Airports API
  description: Get all your airport data here https://raw.githubusercontent.com/WhiteHatLearningProducts/airports/master/airportsData.json 
  version: 1.0.0
servers:
  - url: http://localhost:3000
    description: if you are using NodeJS your dev port might be 3000
  - url: http://localhost:8080
    description: if you are using Spring your dev port will be 8080
  - url: https://airports-api.whitehatcoaches.org.uk
    description: this is the production baseURL
paths:
  /airports:
    get:
      summary: Returns a list of all the airports
      description: |
        blar blar 28,000 airports etc

        * you can also use
        * markdown in this section

        ![airport](https://twistedsifter.com/wp-content/uploads/2014/11/mexico-city-international-airport-drone-video.jpg)

        Including images!
      responses:
        200:
          description: an array of JSON objects that represent each airport
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  properties:
                    icao:
                      type: string
                    iata:
                      type: string
                    name:
                      type: string
                    city:
                      type: string
                    state:
                      type: string
                    country:
                      type: string
                    elevation:
                      type: integer
                    lat:
                      type: number
                      format: double
                    lon:
                      type: number
                      format: double
                    tz:
                      type: string
                  example:
                    icao: "00AK"
                    iata: ""
                    name: "Lowell Field"
                    city: "Anchor Point"
                    state: "Alaska"
                    country: "US"
                    elevation: 450
                    lat: 59.94919968
                    lon: -151.695999146
                    tz: "America/Anchorage"
```

You can upload this to a site like [readme.com](https://readme.com/) (or use a [url](https://whitehatlearningproducts.github.io/swe/api-example.yaml)) and generate a page of documentation like the ones we have looked at above.

![a page of OpenAPI markup rendered as a webpage](https://user-images.githubusercontent.com/4499581/104598397-712b8180-566e-11eb-97b3-05f2c0d577b5.png)

## Assignment

In an OpenAPI `airports-config.yaml` file create a complete set of documented RESTful endpoints for the `/airports` resource. The resource we can use is the Airports we used in the first 5 week bootcamp. You can look up the specification for [openapi here](https://swagger.io/resources/open-api/). We want routes to create, read (all airports and a single airport), update and delete;

You might find this [list of HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) useful when defining your endpoint's responses.

Once you have got your `airports-config.yaml` file completed you can even have a go at generating a server from that definition. Below are instructions using javascript and java.

|Javascript|Java|
```javascript
/**
* npm install -g swagger-node-codegen
* snc airports_config.yaml -o airports-node
* cd into the airports-node folder and start the server with npm start
*/

npm start
```
```java
/*
  download swagger-codegen-cli-3.0.24.jar from https://repo1.maven.org/maven2/io/swagger/codegen/v3/swagger-codegen-cli/3.0.24/swagger-codegen-cli-3.0.24.jar

  in the same folder create a config.json file with the following as its contents:

  {
    "basePackage": "org.whitehat",
    "configPackage": "org.whitehat.app.config"
  }

  now run the command below

  java -jar swagger-codegen-cli-3.0.24.jar generate \
    -i $PWD/airports-config.yaml \
    -l spring \
    -o airports-java \
    -c $PWD/config.json \
    -DhideGenerationTimestamp=true
*/
```

Be ready to demo your generated server and share your `airports-config.yaml` file with your coach.

----

## Lesson 2 - Build your own OpenAPI

## Learning Objectives

* Produce an API server with integrated documentation
* Implement CRUD operations on a single resource using RESTful endpoints

## Before we start

You will need a valid `airports-config.yaml` openAPI definition file.

## Materials needed

## Lesson

Auto generated code is all very well, but you also need to know how to build your own RESTful service. In this session we are going to build our service from the ground up and practice defining RESTful routes for ourselves. You will be integrating OpenAPI documentation using swagger. There are a few steps below to get you started. If you would like to build your server in another language like PHP or C# you are very welcome to do so. You might need to look online for instructions to perform the following steps for the framework you are using. i.e. for PHP you can use [Symfony](https://symfony.com/).

### Dependencies

First of all find and install the dependencies your server is going to need to create auto generated documentation.

|Javascript|Java|
```javascript
{
  "name": "airports",
  "version": "1.0.0",
  "description": "Use this package.json to start your assignment",
  "main": "index.js",
  "scripts": {
    "start": "node server.js"
  },
  "author": "your Github username can go here",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1",
    "swagger-jsdoc": "^6.0.1",
    "swagger-ui-express": "^4.1.6",
    "js-yaml": "^4.0.0"
  }
}
```
```java
/*
  Goto https://start.spring.io and generate a project with the group 'org.whitehat' and package name 'org.whitehat.airports' that includes 'Spring Boot Web' as a dependency. Once you have downloaded and unzipped your project, add the following dependencies to your `pom.xml` file (in the `<dependencies>` list).  
*/
		<dependency>
			<groupId>org.springdoc</groupId>
			<artifactId>springdoc-openapi-ui</artifactId>
			<version>1.5.2</version>
		</dependency>

		<dependency>
			<groupId>com.googlecode.json-simple</groupId>
			<artifactId>json-simple</artifactId>
			<version>1.1.1</version>
		</dependency>

		<dependency>
			<groupId>com.fasterxml.jackson.core</groupId>
			<artifactId>jackson-databind</artifactId>
			<version>2.11.1</version>
		</dependency>
```

### Configuration

The next step is to configure your server to create API documentation from your code. Previously we used the OpenAPI yaml file to describe our routes, but that method means we would have to keep updating the config yaml file if we made changes to the endpoint. Instead now we are going to use swagger to generate docs NOT from a yaml file - but from the actual code itself. You can remove the `paths` property from your yaml file.

|Javascript|Java|
```javascript
const express = require('express')
const app = express()
const swaggerUi = require('swagger-ui-express')
const airports = require('./airports.json')
const YAML = require('js-yaml')
const fs = require('fs')
const docs = YAML.load(fs.readFileSync('./airports-config.yaml').toString())
const swaggerDocs = require('swagger-jsdoc')({
    swaggerDefinition: docs,
    apis: ['./server.js']
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, {explorer: true}))

app.listen(3000, () => console.log("Airport API ready. Documents at http://localhost:3000/api-docs"))
```
```java
// in a file named AirportsApplication.java
package org.whitehat.airports;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.servers.Server;

@SpringBootApplication
public class AirportsApplication {

	public static void main(String[] args) {
		SpringApplication.run(AirportsApplication.class, args);
	}

	@Bean
	public OpenAPI customOpenAPI(@Value("${springdoc.version}") String appVersion) {

		return new OpenAPI()
			.info(new Info()
				.title("Airports")
				.version(appVersion)
				.description("28,000 airports")
			)
			.addServersItem(new Server().url("http://localhost:8080/"))
			.addServersItem(new Server().url("https://api.whitehatcoaches.org.uk/"));
	}
}

/*
in /src/main/resources/application.properties
  springdoc.swagger-ui.path=/api-docs
  springdoc.version=1.0.0
*/

// `http://localhost:8080/api-docs`
```

### Auto Document Paths

Now we can start to annotate our routes to support swagger auto documenting our paths.

|Javascript|Java|
```javascript
// server.js
/**
 * @swagger
 * /airports:
 *   get:
 *     summary: returns an array of airports
 *     responses:
 *       200:
 *         description: all the airports
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 properties:
 *                   icao:
 *                     type: string
 *                   iata:
 *                     type: string
 *                   name:
 *                     type: string
 *                   city:
 *                     type: string
 *                   state:
 *                     type: string
 *                   country:
 *                     type: string
 *                   elevation:
 *                     type: integer
 *                   lat:
 *                     type: float
 *                   lon:
 *                     type: float
 *                   tz:
 *                     type: string
 *                 example:
 *                   icao: "00AK"
 *                   iata: ""
 *                   name: "Lowell Field"
 *                   city: "Anchor Point"
 *                   state: "Alaska"
 *                   country: "US"
 *                   elevation: 450
 *                   lat: 59.94919968
 *                   lon: -151.695999146
 *                   tz: "America/Anchorage"                 
 */
app.get('/airports', (req, res) => {
    res.send(airports)
})
```
```java
package org.whitehat.airports;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/airports")
public class AirportsController {
    private static List<Airport> airports;

    static {
        // next line is using the Try-With-Resource syntax to ensure that the
        // input stream gets closed (very important else get memory leaks!)
        try (InputStream is = AirportsController.class.getResourceAsStream("/static/airports.json");){
            ObjectMapper mapper = new ObjectMapper();

            airports = mapper.readValue(is, new TypeReference<List<Airport>>() {
            });
        } catch(IOException e) {
            e.printStackTrace();
        }

    }
    
    @GetMapping("/")
    public List<Airport> getAirports() {
        return AirportsController.airports;
    }

    // You can build out the rest of the endpoints
    // just a heads-up http://localhost:8080/airports/ remember the trailing slash.
    // Because Java is strongly typed swagger will to most of the work to document your endpoint - you can add extra information (go see the docs https://springdoc.org/)
}
```

in _javascript_ You can use schemas to save yourself repeating the definition of an `Airport`. If you create a class definition for an Airport you can annotate it then reference it in your route annotations. i.e. in an `Airport.js` file you can define your airport:

```javascript
/**
 * @swagger
 *   components:
 *     schemas:
 *       Airport:
 *         type: object
 *         properties:
 *           icao:
 *             type: string
 *           iata:
 *             type: string
 *           name:
 *             type: string
 *           city:
 *             type: string
 *           state:
 *             type: string
 *           country:
 *             type: string
 *           elevation:
 *             type: integer
 *           lat:
 *             type: float
 *           lon:
 *             type: float
 *           tz:
 *             type: string
 *         example:
 *           icao: "00AK"
 *           iata: ""
 *           name: "Lowell Field"
 *           city: "Anchor Point"
 *           state: "Alaska"
 *           country: "US"
 *           elevation: 450
 *           lat: 59.94919968
 *           lon: -151.695999146
 *           tz: "America/Anchorage"
 */

module.exports = class Airport {
    icao = ""
    iata = ""
    name = ""
    city = ""
    state = ""
    country = ""
    elevation = 0
    lat = 0.0
    lon = -0.0
    tz = ""

    constructor (data) {
        Object.assign(this, data)
    }
}
```

Then this can be referenced in your route definitions like this (you also have to reference the file in the `swagger-jsdoc` config):

```javascript
const swaggerDocs = require('swagger-jsdoc')({
    swaggerDefinition: docs,
    apis: ['./server.js', './Airport.js'] // <- reference the file your schema is in here
})
/**
 * @swagger
 * /airports:
 *   get:
 *     summary: returns an array of airports
 *     responses:
 *       200:
 *         description: all the airports
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Airport'                 
 */
app.get('/airports', (req, res) => {
    res.send(airports)
})
```

### Pagination

We have 28,000 airport records. Thats a lot. This would be much easier to consume in smaller chunks. Often large resources will be managed like this in "pages" of results. So lets say we have a page size of 25 that would mean we have to return only the first 25 airports (0 - 24 array indexes) that response would represent page 1. Page 2 would consist of the next 25 airports (25 - 49 array indexes). You will often see this handled as query parameters.

`http://localhost:3000/airports?page=2&pageSize=25`

❓ What pagination errors might you now need to handle?

❓ What different HTTP codes might an endpoint like this return?

## Assignment

Based on your `airports-config.yaml` OpenAPI definition file, can you build out a RESTful server with the same spec, only now the documented endpoints will be generated from the code itself. Implement pagination for the GET `/airports` route enabling users to define a page number (required) and an optional `pageSize` query parameter (this should default to 25).

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/179)
[main](/swe)|[prev](/swe/mod1/wk1/day1.html)|[next](/swe/mod1/wk1/day3.html)

