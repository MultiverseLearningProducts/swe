# API Documentation

## OpenAPI

OpenAPI is the most popular format for describing RESTful APIs. It was originally part of the Swagger framework. Swagger became very popular and the developer community embraced the specification, it has become a recognised standard used across the industry. OpenAPI became a separate project in 2016, overseen by the OpenAPI Initiative, an open-source collaboration project of the Linux Foundation.

## Learning Objectives

-   Implement the OpenAPI specification

## Pre-requisites

-   You should know what the HTTP verbs are see [2.2.1](https://multiverselearningproducts.github.io/curriculum/Module-2/Unit-2-What_is_REST/2.2.1-REST_and_the_openAPI_spec.html)

## Lesson

Lets use [OpenAPI](https://www.openapis.org/)/[Swagger](https://swagger.io/) to define our API in a standard structure. There are lots of benefits from becoming familiar with this standard.

-   You will become confident and familiar will all the things you need to consider when you design your own API endpoints.
-   Other developers will be able to integrate with your API easily.
-   Other tools can read the information about your API from the OpenAPI standard structure and generate web based documentation for you!

Below is a starter example of an OpenAPI `airports-config.yaml` file.

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
