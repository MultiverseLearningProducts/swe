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
* performance requirements
* requirements for using specific technologies

They will also be affected by the quality of requirements and the availability of stakeholders for clarification of requirements.

### Input/Output design

_Input design_ focusses on the interaction between the user and the system.

_Output design_ focusses on the interaction between the system and an external actor (person or other system). It considers how data will be stored and processed.

We can identify inputs and outputs from the Use Case diagrams created as part of the Requirements Analysis stage. 

![Use Case diagram with inputs and output highlighted](https://user-images.githubusercontent.com/1316724/141860873-f8c30b0d-fe5a-4f00-8810-45a5e5059cfc.png)


### User Interface design
User Interface (UI) design focusses on making the process of inputting data to the system "user-friendly". 

Check out [these examples](https://www.elegantthemes.com/blog/resources/bad-web-design-a-look-at-the-most-hilariously-terrible-websites-from-around-the-web) of really poorful designed websites!

Jakob Nielsen is one of the world's leading expert on UI design. Read his [top 10 usability principles](https://www.nngroup.com/articles/ten-usability-heuristics/) to find out what makes a usable UI.

_Wireframes_ express the UI in a visual form and allow a basis for discussion before software is built.

![wireframe for food delivery site](https://user-images.githubusercontent.com/1316724/141701337-05f9464f-fce7-45e8-8761-4411a3704d5f.PNG)

### Process Design
_Process Design_ focusses on how a requirement/Use Case will be realised via a set of software components. We refer to _Design Patterns_ to find solutions to commonly occuring problems.  

> What Design Patterns are you aware of?

We could use a _UML Component Diagram_ to represent our order system as a set of software components. Using on our non-functional requirements, we can determine how much hardware / cloud storage we may require.

![componentDiagram](https://user-images.githubusercontent.com/1316724/141865154-26e469bc-6681-4072-90e9-efefb61a2e37.png)

#### Detailed design

Our process design at the moment is very high level, we can now drill into more detail by modelling the classes involved in the system and representing them using a _UML Class diagram_ and then using a _UML Sequence diagram_ to show the detailed interactions between components/classes.

TODO - add diagram

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
Add the following diagrams to your portfolio:
* UML Sequence diagram
* UI Wireframes
* Database design

## Additional resources
[TODO - Slides](https://docs.google.com/presentation/d/e/2PACX-1vTxqagPim3SJ1f4Js8PVwPc8zzgkm-wPSZB6I0LUw9jEIihFYUUjkc7-SB0jcahUZevJZH0avpYUWuQ/embed?start=false&amp;loop=false&amp;delayms=3000)



[attendance log](https://platform.multiverse.io/apprentice/attendance-log/200)
[main](/swe)|[prev](/swe/mod3/wk1/day2.html)|[next](/swe/mod3/wk1/day4.html)