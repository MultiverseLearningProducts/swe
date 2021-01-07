# Mod 1 > Week 1 > Day 2

## Overview of the day

Today we are going to focus on creating and using RESTful APIs. Yesterday we looked at the anatomy of an HTTP request and response. Today we build on that protocol and look at the most popular way to organise accessing resources using HTTP.

----

## Lesson 1 - What is RESTful

REST is a shortened form of "<u>RE</u>presentative <u>S</u>tate <u>T</u>ransfer".

> REST is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other.

Before REST was first proposed in a PhD paper servers implemented their own endpoints named in ways that we might name functions in our code. For example one application might have an endpoint called `/getUsers` another might call it `/allUsers` there was no agreed pattern.

REST introduced a standard way to address resources on a server which made it much easier for other services to discover and use those resources. Today REST is widely implemented across the internet and we are going to learn about how to read and understand RESTful web services.

## Learning Objectives

* Connect the correct HTTP verbs to RESTful operations

## Before we start

* Create a free Spotify account so you can use their API

## Materials needed

## Lesson

There are 2 aspects to RESTful architectures.

1. Using the right VERBS in your request
1. Using the right path for your resources

### VERBS/METHODS

Built into the HTTP spec are the http 'methods' or 'verbs'. `GET` `POST` `PATCH` `PUT` `DELETE` _(there are more these are the main ones)_ one fundamental concept in REST is that these verbs should be used for particular operations. For example we might have a resource `/albums`; to read all the albums we would make an http request and use the `GET` method. If we wanted to add a new album we would make an http request to the <u>same</u> address `/albums` but use the `POST` method and include data in the body of the request. The method indicates the kind of operation that will be performed for that resource; reading with `GET` or creating with `POST`. We CAN make a `GET` request with a body and create a new `/albums` resource BUT that would not be RESTful.

### Resources

A 'resource' some thing we want to access or interact with is also a fundamental concept in REST. Usually this is our service or data. For example on Spotify albums are a resource; so are artists and playlists. There is a standard set of paths used to interact with any resource:

|URL|VERB|Resource|
|--:|:---:|:------|
|`/albums`|GET|return all the albums (resources are always plural)|
|`/albums`|POST|create a new album|
|`/albums/{id}`|GET|return the album with the id specified in the URL|
|`/albums/{id}`|PUT|Replace the album with a new one, but keep the id|
|`/albums/{id}`|PATCH|Update 1 or more of the album's properties|
|`/albums/{id}`|DELETE|delete the album with the id specified in the URL|

Nested resources simple extend the same pattern.

|URL|VERB|Resource|
|--:|:---:|:------|
|`/albums/{id}/tracks`|GET|return the tracks for the album with the id specified in the URL|
|`/albums/{id}/tracks`|POST|create a new track for the album with the id specified in the URL|
|`/albums/{album_id}/tracks/{track_id}`|GET|return the track with the id specified in the URL from the album with the id specified in the URL|

Can you see the pattern?

❓ How might you update a track for a given album?
❓ Can you match the CRUD operations to http methods?

You might wonder why can't I just reference a track with the URL below?

|URL|VERB|Resource|
|--:|:---:|:------|
|`/tracks/{track_id}`|GET|return the track with the id specified in the URL

REST is just a pattern so you can address a single track resource. However we are not capturing the relationship between this resource and the album resource that it belongs to. Often you will need to redirect back to a route that requires you to identify which album the track belongs to. The nested RESTful pattern helps you to do this cleanly in your controllers.

### Spotify API

Consider these 2 RESTful fundamentals; verbs and paths. We can expect to see these 2 things in most RESTful APIs. Lets have a look at the [Spotify API](https://developer.spotify.com/documentation/web-api/reference-beta/#endpoint-get-multiple-albums) and try to identify these 2 things.  

❓ Can you identify all the different components of the http request we need to form?
❓ There are quite a few albums on Spotify and we can't actually `GET` all of them. What is the mechanism Spotify have used to limit the albums you can request?

```
3QrEk9Va9qO4uobczNUtqe,6ra4GIOgCZQZMOaUECftGN,4Qjd3K1HhL1N2ee1V22Icw
```

### OpenAPI

As well as creating your own RESTful services, you will often find yourself consuming other 3rd party services. Spotify is a good example of an easy to use API. The documentation is generated from the API code itself. This is a popular way to document your API. Have a look at the 4 examples of online API documentation below:

* [Github](https://docs.github.com/en/free-pro-team@latest/rest/reference/repos)
* [Dropbox](https://www.dropbox.com/developers/documentation/http/documentation#sharing-list_folders)
* [Twilio](https://www.twilio.com/docs/usage/bulkexport/job#fetch-a-job-resource)
* [Twitter](https://developer.twitter.com/en/docs/twitter-api/tweets/lookup/api-reference/get-tweets)

❓ What are the common elements you can identify in each?
❓ Why do you think auto generated documentation is a popular choice for dev teams who create and maintain public facing APIs?

How is this possible? We can use something like [OpenAPI](https://www.openapis.org/)/[Swagger](https://swagger.io/) to define our API in a standard structure, then other tools can read the information about your API from that standard structure and generate web based documentation for you. Below is a starter example of an OpenAPI airports-config.yaml file.

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

        ![airport](https://i.pinimg.com/564x/b9/7d/20/b97d2043d0a2237ee295580f7bea9e49.jpg)

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
                      type: float
                    lon:
                      type: float
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

You can upload this to a site like [readme.com](https://readme.com/) and generate a page of documentation like the ones we have looked at above.

![a page of OpenAPI markup rendered as a webpage](https://user-images.githubusercontent.com/4499581/103781816-b7f5f780-502e-11eb-8e60-c5f5e5648d85.png)

## Assignment

In an OpenAPI `airports-config.yaml` file create a complete set of documented RESTful endpoints for the `/airports` resource. The resource we can use is the Airports we used in the first 5 week bootcamp. You can look up the specification for [openapi](https://swagger.io/resources/open-api/). We want routes to create, read (all airports and a single airport), update and delete;

Once you have got your .yaml file completed you can have a go at generating a server from that definition. In the examples below are instructions to try using javascript and java.

|Javascript|Java|
```javascript
// npm install -g swagger-node-codegen
// snc airports_config.yaml -o airports-node
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

Be ready to demo your generated server and documentation.

----

## Lesson ? - ???

## Learning Objectives

## Before we start

## Materials needed

## Lesson

## Assignment

[attendance log](https://platform.whitehat.org.uk/apprentice/attendance-log/179)
[main](/swe)|[prev](/swe/mod1/wk1/day1.html)|[next](/swe/mod1/wk1/day3.html)

## Getting started (Java)

Goto https://start.spring.io and generate a project with the group 'org.whitehat' and package name 'org.whitehat.swagger-api' that includes 'Spring Boot Web' as a dependency. Once you have downloaded and unzipped your project, add the following dependencies to your `pom.xml` file (in the `<dependencies>` list).

```xml
<dependency>
    <groupId>io.springfox</groupId>
    <artifactId>springfox-boot-starter</artifactId>
    <version>3.0.0</version>
</dependency>

<dependency>
    <groupId>io.springfox</groupId>
    <artifactId>springfox-swagger-ui</artifactId>
    <version>3.0.0</version>
</dependency>
```

Tell Spring Boot that you are using Swagger by adding the notation `@EnableSwagger2` after `@SpringBootApplication` in your entry file (the one with your `main()` function). Add a `@Bean` Docket to expose your endpoints to Swagger.

```java
package org.whitehat.swaggerapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
public class SwaggerApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(SwaggerApiApplication.class, args);
	}
	@Bean
	public Docket mySwaggerApi() {
	   return new Docket(DocumentationType.SWAGGER_2).select()
		  .apis(RequestHandlerSelectors.basePackage("org.whitehat.swaggerapi")).build();
	}
}
```
Now create a new class file with some endpoints just for testing:
```java
// org/whitehat/swagger-api/FruitsController.java

package org.whitehat.swaggerapi;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FruitsController {
   @RequestMapping(value = "/fruits", method = RequestMethod.GET)
   public List<String> getFruits() {
      List<String> fruitList = new ArrayList<>();
      fruitList.add("Apples");
      fruitList.add("Oranges");
      return fruitList;
   }
   @RequestMapping(value = "/fruits", method = RequestMethod.POST)
   public String createFruit() {
      return "Fruit has been eaten successfully";
   }
}

```

`http://localhost:8080/swagger-ui/` ⚠️ This address will not work without the trailing slash
