# Mod 3 > Week 2 > Day 3

## Overview of the day

Today we look at the primary differences between the Waterfall and Agile software development methodologies.

----

## Lesson 

## Learning Objectives

*   Recognise that there are a number of different methodologies used for software development that can broadly be categorised as sequential or iterative / incremental, and that some of these are Waterfall or Agile methods.
*   Describe the main attributes and features of Waterfall software development methods.
*   Describe the main attributes and features of Agile software development.
*   Identify the main points of the Agile Manifesto:
    *   Individuals and interactions over processes and tools
    *   Working software over comprehensive documentation
    *   Customer collaboration over contract negotiation
    *   Responding to change over following a plan
*   Describe the primary similarities and differences between Waterfall and Agile software development methods.
*   List and describe in outline different agile software development methodologies, including Scrum; Kanban; Extreme Programming (XP); Test Driven Development (TDD).
*   List and describe in outline different software development methods and approaches including [Unified Process (UP)](https://sceweb.uhcl.edu/helm/RationalUnifiedProcess/); V-model; Spiral; Lean; DevOps.
*   Recognise that business, market and information needs may lead to the  development of very different software, whilst using similar software development methodologies.
*   Explain the different business and market contexts that lead to different approaches to software development, including:
     Characteristics of market sectors and segments; Business drivers and desired outcomes; Market risk; Operational risk; Legal and regulatory requirements
*   Distinguish advantages and disadvantages of using either waterfall or agile software development methods based on the factors listed above in a given scenario.


## Lean software development
Lean has its roots in manufacturing and is a set of techniques for cutting waste and doing things 'just in time'. 

Let's consider things which waste time:
* documentation that is never read
* a feature that is very rarely used
* waiting for approvals
* fixing defects

Lean software development aims to remove unnecessary work whilst delivering fast and to a high quality.

_README_ - https://agility.im/wp-content/uploads/2020/03/AIM_FactSheet_7-wastes-software-development_V1.1_02.pdf

## Sequential software development methodologies

### Waterfall methodology
The Waterfall methodology uses a sequential approach to software development. Each stage of the SDLC is completed and signed off before the next stage commences. 

!(https://www.youtube.com/embed/5A5XCuWMG4o)


### V-model
The V-model extends the Waterfall model by focussing on the relationships between each phase of the development life cycle and its associated phase of testing. Test artefacts are produced during requirements analysis (for user acceptance and system testing) and design (for integration and unit testing).

![V Model](https://user-images.githubusercontent.com/1316724/142781595-511a1e63-ce95-46fe-89b2-1c18dcf71efa.PNG)


## Iterative software development methodologies
The timeline below shows how early iterative software development methodologies evolved into Agile.

![timeline of agile methodologies](https://user-images.githubusercontent.com/4499581/80801306-d18f9700-8ba3-11ea-8058-c502e4dc2d6b.png)

### Spiral
The Spiral model is an risk-driven, iterative development process.

The Spiral model has four phases:
* _Determine objectives_
* _Identify and resolve risks_
* _Develop and test_
* _Plan the next iteration_

A project repeatedly passes through these phases in iterations named 'Spirals'.

!(https://www.youtube.com/embed/mp22SDTnsQQ)


### Unified Process (UP) / Rational Unified Process (RUP)
The Unified Process (sometimes known as the _Rational_ Unified Process) is an iterative development methodology where development is organised in short, timeboxed iterations enabling adaptation to accommodate change. It is UML model (Use Case) driven.

Each iteration consists of the following 4 phases:

* _Inception_ - development of the Business Case, Project Plan and high level Use Cases
* _Elaboration_ - functional and non-functional requirements analysis, detailed risk analysis, development of the software architecture
* _Construction_  - the system is built and tested
* _Transition_ - the system is deployed

!(https://www.youtube.com/embed/YgkhFH8g0J4)


## Agile methodologies

### The Agile manifesto

The four core values of Agile software development as stated by the Agile Manifesto are:
* we value individuals and interactions over processes and tools
* we value working software over comprehensive documentation
* we value customer collaboration over contract negotiation
* we value responding to change over following a plan

The [12 principles of Agile](https://www.agilealliance.org/agile101/12-principles-behind-the-agile-manifesto/) include _"Our highest priority is to satisfy the customer through early and continuous delivery of valuable software"_. 

!(https://www.youtube.com/embed/gf7pBZxOCtY)

### Scrum 
Scrum is an Agile methodology. Scrum teams are made up of 3 key roles:

* _Product owner_ - represents the customer/project sponsor
* _Development team_ - a self-organising team of individuals who deliver software
* _Scrum master_ - the person responsible for removing blockers tio allow the team to deliver the goals of the sprint

Scrum teams deliver software in a series of _Sprints_, typically between 1 and 4 weeks long. The product owner prioritises the backlog of tickets and works with the development to determine the goals of each sprint.

The Scrum team meets once a day for a 15 minute standup (Daily Scrum). Here they ask the questions:
* What did you do yesterday?
* What will you do today?
* Are there any blockers in your way?

At the end of a sprint, the Scrum team invites the key stakeholders to a sprint review where the software is demo'd and feedback given. After this, the team run a retrospective to look at how they can improve in future sprints.

!(https://www.youtube.com/watch?v=gy1c4_YixCo)

### Kanban
'Kanban' is made up of two Japanese words, 'kan' which means _sign_ and 'ban' which means _board_.

Teams use a Kanban board to visualize the status of their tasks. Popular Kanban boards include, Trello and Jira. 

![Example Kanban board](https://user-images.githubusercontent.com/1316724/142780474-1d9e429f-3800-4d3b-aa96-290e1853ef85.PNG)

### Extreme Programming (XP)
XP is a lightweight methodology focussed on the coding activity in the SDLC. It describes a better way to programme that takes the pressure off developers and results in higher quality software. 

There are 4 key values in XP:
* _Communication_
* _Simplicity_
* _Feedback_
* _Courage_ 

Example XP practices include:

* Producing all software in pairs (pair-programming)
* Writing tests before code
* Integrating and testing the system several times a day

![Pair programming](https://user-images.githubusercontent.com/1316724/142780572-2220c2f6-52b9-429d-a706-23f01d8e1b10.jpg)

Photo by [Parabol](https://unsplash.com/@parabol?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/pair-programming?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText).
  

### Test Driven Development (TDD)
Test driven development describes a methodology where tests are written before the code is written. This helps focus on the purpose of a feature as well as resulting in higher test coverage.

## DevOps
The term DevOps combines the terms 'Developers' and 'Operations'. 
DevOps focusses on the collaboration between developers and the operations team across the whole service lifecycle with the aim of rapid delivery of high-quality, robust software. 

DevOps relies heavily on automation (CI/CD).

!(https://www.youtube.com/embed/IY9WvL95azs)

## What methodology to choose?!

* _Strict regulatory requirements_ - Waterfall
* _Low customer involvement_ - Waterfall
* _High customer involvement_ - Agile
* _Fixed requirements/fixed contract_ - Waterfall
* _Changing requirements_ - Agile

## Assignment
You will be tasked to complete a [Code Wars Kata](https://www.codewars.com/kata/51b6249c4612257ac0000005) using the XP technique of pair programming. Once the Kata is complete, discuss how you felt about working with someone else, was the Kata faster to solve? Did it take some pressure off? Did you enjoy it?

Research the advantages and disadvantages of Waterfall and Agile methodologies and what kinds of projects each one is suitable for. 

Research the similarities and differences between Agile and Waterfall methodologies and update your portfolio to include this information. 

Update your portfolio to explain what software methodologies you use at work.

## Additional resources
* [Slides for today's lesson](https://docs.google.com/presentation/d/e/2PACX-1vTwX_FF-Y7d8lMz-hTKs6VFE2ozsHfMGyPVxYNy3NbjavUt-yKqeBTLk6EfF2aWx0o_SjMlyEBOSWwA/embed?start=false&amp;loop=false&amp;delayms=3000)
* [Agile v. Waterfall article](https://thedigitalprojectmanager.com/agile-vs-waterfall/)
* [Useful agile factsheets](https://agility.im/agile-factsheets/)
* [Video - what is Kanban](https://www.youtube.com/embed/iVaFVa7HYj4) 
* [Video - what is XP](https://www.youtube.com/embed/mbmg6iyEbj8)

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/205)
[main](/swe)|[prev](/swe/mod3/wk2/day2.html)|[next](/swe/mod3/wk2/day4.html)