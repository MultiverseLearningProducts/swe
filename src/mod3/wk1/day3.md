# Mod 3 > Week 1 > Day 3

## Overview of the day

Today we look at the Design stage of the SDLC

----

## Lesson 1 - Design

### Learning Objectives

*   Explain the purpose and scope of design. 
*   Explain the difference between functional design that aims to make the software fit for purpose according to functional requirements and non-functional design that aims to make the software fit for use according to non-functional requirements.
*   Show how functional and non-functional requirements impact software design. 
*   Identify the system components that need to be considered when designing software, including software architecture; user interface; user ergonomics; infrastructure / platform components; tools; operational processes; measures and metrics. 
*   Explain why human computer interaction is an important consideration for design of software. 
*   Explain why good design leads to better operational software, and why the quality of design can have a direct impact on operational cost as well as quality. 
*   Explain how prototyping and modelling can be used to aid analysis and design. 

### Inputs to the Design stage

The inputs to the Design stage are requirements. 

### Purpose of the Design stage
The _purpose_ of Design is to formulate a solution to realise the system's requirements. 

The _scope_ of Design is:

1. Input and output design
1. Process design
1. Data design
1. Security and control design

Good design simplifies the job of the developer during the Implementation state of the SDLC and results in a system which meets the requirements of its users.

Poor design leads to costly re-work further into the SDLC and risks disengaging users or even losing customers.

### Design constraints
The system designer/architect wil be constrained by the non-functional requirements of the system such as:
* budget
* timescales
* requirements for using specific technologies

They will also be affected by the quality of requirements and the availability of stakeholders for clarification of requirements.

### Input/Output design

_Input design_ focusses on the interaction between the user and the system.

_Output design_ focusses on the interaction between the system and an external actor (person or other system). It considers how data will be stored and processed.

We can identify inputs from Use Case diagrams created as part of the Requirements Analysis stage. 

Within the system boundary (shown as a rectangle) are the requirements (shown as elipses). Outside the system boundary are Actors who either provide inputs or consume outputs. 

<img width="250" alt="Food delivery service Use Case diagram" src="https://user-images.githubusercontent.com/1316724/141701063-414e71fb-2571-41b4-9d36-f3385d8ada92.png">

### User Interface design
User Interface (UI) design focusses on making the process of inputting data to the system "user-friendly". 

> Check out [these examples](https://www.elegantthemes.com/blog/resources/bad-web-design-a-look-at-the-most-hilariously-terrible-websites-from-around-the-web) of really poorful designed websites!

Jakob Nielsen is one of the world's leading expert on UI design. Read his [top 10 usability principles](https://www.nngroup.com/articles/ten-usability-heuristics/) to find out what makes a usable UI.

_Wireframes_ express the UI in a visual form and allow a basis for discussion before software is built.

<img width="250" alt="wireframe for food delivery site" src="https://user-images.githubusercontent.com/1316724/141701337-05f9464f-fce7-45e8-8761-4411a3704d5f.PNG">

### Process Design
_Process Design_ focusses on how a requirement/Use Case will be realised via a set of software components. We refer to _Design Patterns_ to find solutions to commonly occuring problems.  

Our order system could be broken down into the following set of software components.

<img width="250" alt="process diagram" src="https://user-images.githubusercontent.com/4499581/75778926-9feb8280-5d50-11ea-8179-519a861ecf95.jpg">

Here, the website is a static site hosted on Surge. The organisation runs its own bespoke accounting software solution hosted on its own servers. The databases are hosted on Amazon Web Wervices (AWS) and exposed via a RESTful API. Authentication of HTTP requests is done via a dedicated service which is also hosted on AWS.

The process of placing an order can be expressed either in a worded format, or, as a UML sequence diagram, showing the flows between software components and Actors.

TODO - add a sequence diagram

#### High level to lower level

Our process design at the moment is quite high level, we can now go into more and more detail as we design the system in more and more detail.

For example in the diagram above we have an Authentication step in our process. That might need a more detailed design. Below is an activity diagram that shows how to handle incoming requests.

![activity diagram](https://user-images.githubusercontent.com/4499581/75785433-a16e7800-5d5b-11ea-9edc-405fb8d53d29.jpg)

TODO - move this to previous stage

### Data Design

Next we might want to start thinking about our data structures. In object oriented (OO) programming, our data structures are mirrored in code and in the datastore. For example, our program might have an **Order** class that we interact with in our program, and each instance of an **Order** is also persisted as a row in a datastore.

Data design starts with the requirements. Once it is clear what needs to be persisted, often data is then **_normalised_**.

#### Normalisation

This is a technique used in data design  to ensure data structures:

*   do not contain data that can be derived
*   have only one copy of each logical point
*   contain the latest values
*   combine items into logical groupings

A good example of normalisation is the way we can store a one-to-many relationship in a relational database. For example, our Customers will have many Orders. To normalise that data structure we should store the Customer once and use their id in the Orders table to create that relationship.

### Security and control design
Security and control design are the mechanisms we use to ensure the system has integrity and conforms to legislation such as GDPR. We introduce safeguards to protect data inputs and outputs as well as data at rest.

Examples include:
* Input validation
* Restricting write access to certain tables 
* Hashing of password data

### Outputs from the Design stage
*   UML Sequence diagrams
*   Process diagrams
*   Data models
*   Class diagrams
*   Control flow diagrams
*   UI designs

## Assignment
TODO - Create the following design artefacts for one of the synoptic projects.

## Additional resources
[TODO - Slides](https://docs.google.com/presentation/d/e/2PACX-1vTxqagPim3SJ1f4Js8PVwPc8zzgkm-wPSZB6I0LUw9jEIihFYUUjkc7-SB0jcahUZevJZH0avpYUWuQ/embed?start=false&amp;loop=false&amp;delayms=3000)



[attendance log](https://platform.multiverse.io/apprentice/attendance-log/200)
[main](/swe)|[prev](/swe/mod3/wk1/day2.html)|[next](/swe/mod3/wk1/day4.html)