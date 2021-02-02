# Bootcamp > Week 4 > Day 3

## Overview of the day

Today you start our group projects. Before we begin, let's discuss the 7 stages of the software development life cycle.

1. Business needs
1. Requirements engineering
1. Design
1. Development
1. Testing
1. Deployment
1. Maintenance

The business needs we have identified are to have a tool to keep track of tasks in a team, and see what the status of different tasks are at any one time. The requirements are as follows:

### Functional requirements
* A project board should have three areas - todo, in progress, done
* On a project board it must be possible to create a task
* A task should have textual description and be unassigned or assigned to a single user
* Tasks start in the 'todo' state
* It must be possible to drag and drop tasks from one area to another. i.e. from 'todo' to 'in progress'
* It must be easy to create a user
* Users must have a name and an avatar (so we can recognise them)
* Tasks that are assigned to a user need to display the user's avatar on the task
* It must be easy to create a new project board
* All the project boards need to be displayed somewhere in the app
* Project data is important and so all project boards, users and tasks need to be persisted

### Non-functional requirements
* The application must be conform to the WCAG accessibility standards (evidence must be provided)
* The application must have client & server-side validation in place
* The application must have evidence of unit testing
* The application code must be documented in a manner that it would be easy for a new developer to understand

----

## Lesson 1 - The Design Phase

## Learning Objectives

* Recall the 3 phases of the Design phase

## Before we start

* Read through the requirements
* Know who your group members will be

## Materials needed

* N/A

## Lesson

The design phase is very important. Developers spend lots of time in the design phase. We don't just start writing code and hoping we'll figure it out as we go along. That may work as an individual, but will quickly derail a group of developers working together. Working as a group of developers makes is possible to create a more sophisticated piece of software more quickly that working alone. However to experience this benefit you have to organise your work as a group. Having a clear design makes that much easier.

Design is not just visual design. It includes designing the data model, designing the interfaces of classes or modules. There are 3 questions you should all agree on as a group and document somewhere (on your Github repo).

### Input

What are the inputs to your software solution? How will you collect these? Do you need validation? Figuring this out might require you to also think about the Data Model. Talking through this will also require you to consider the outputs of the software.

### Storage and Processing

The inputs you need to collect. How will you store that data? Will the inputs need processing before or after they are stored. What will those processes be?

### Output

What are the outputs of your software? This might be views of data that you need to display. Thinking about the outputs can also help define what your inputs need to be and how you need to process or store the data your output will need.

![remote planning video chat](https://blog.vantagecircle.com/content/images/size/w860/2020/05/Recognition-in-the-Remote-World-01.png)

Work as a group. Make yourself a [JamBoard](https://jamboard.google.com/) if you think it will help your design discussions.

Once you have decided on a data model, some team members should create a UML diagram of the data model and upload it to the wiki section of the shared repo for the project.

Other team members can create the wireframes for each view. FULL DETAIL, every view, every form, every form field, every button. For mobile and desktop.

#### Wireframes

![wireframes](https://balsamiq.com/assets/learn/articles/mobile-web.png)

Wireframes are low res often grayscale documents that layout the components of a page. You can create wireframes in a Google slide, PowerPoint or use an open source programme like [draw.io](https://app.diagrams.net/).

## Assignment

In your teams discuss the requirements, come up with a set of designs. Create the following artifacts BEFORE you write any code!

* A UML diagram of your data model
* detailed wireframes of all your views
* Create a repo on someone's github and invite the other team members to be collaborators
* Add your design artifacts to the repo's wiki pages

This will take some time. Be patient. This is part of planning. With your wireframes and data model all planned and documented you will find it much easier to break the work into smaller tasks and divide the tasks up amongst yourselves.

----

## Lesson 2 - SCRUMBAN

## Learning Objectives

* Explain the different ways of working that are; SCRUM, KANBAN & SCRUMBAN

## Before we start

* Have your UML diagrams and wireframes uploaded on your team's repo

## Materials needed

* [Github projects](https://www.youtube.com/watch?v=ff5cBkPg-bQ)

## Lesson

Now you have detailed plans you are ready to all start coding together BUT in a coordinated way. To start this process off you need some sprint planning.

### Sprint planning SCRUM

SCRUM is an agile pattern that software developer teams use to organise and coordinate their work. SCRUM starts with sprint planning. A sprint is a fixed period of time for development work. For us our sprint will last 3 days. In sprint planning we break up the work into tasks. Often the tasks are scored by complexity or challenge factor. Low scoring tasks are of low complexity and easy to complete, high scoring tasks are harder, or might require reading of documentation etc. 

Each task should be assigned to a developer. It is their responsibility to deliver that task. The amount and rate at which tasks are complete is the 'burn rate'. For SCRUM masters the burn rate gives them a good measure for the capacity of their team.

### Visibility of KANBAN

KANBAN is not bound by sprints. Instead tasks are added to a backlog. Tasks are then picked from the backlog and placed in different columns depending upon that tasks current status. The benefit of this system is the visibility it gives the team as to where every task is at anyone time. This originated in Japanese car manufacturing, and has been used by developers for many years now.

### 2020 SCRUMBAN

Yes, combine the 2 methods and you get SCRUMBAN. Sprints with a KANBAN board.

### Github projects

You can use Github's projects page to create and manage your team's Kanban board. On your github repo goto 'projects', and create a new project (call it '2020-10-12 Sprint 1'), choose 'Automated kanban with reviews' as a template.

![github create a new project](https://user-images.githubusercontent.com/4499581/95681986-cde44f80-0bda-11eb-8aa9-4e229c580c0d.png)

To use this tool you need to create issues, and assign them to members of your team. Take one of the tickets and move it into the 'In progress' column.

Locally on your development machine create a new branch for that ticket. I would use the issue number and a short descriptive name for the branch.

```sh
git checkout -b 3-data-model
```
This will create a branch called `3-data-model`. Do your work on this branch. When you are finished, make a pull request. Push your work to your branch like this;

```sh
git push origin 3-data-model
```
Then you can make a pull request on Github. Assign a reviewer, someone else from your team needs to look through your code. Your card needs to then be updated. As being in review. You can pick up another card now.

You'll be reviewing code too. When you are happy you can merge the pull request. No-one should be merging their own code into master.

## Assignment

* Create issues for the tasks the team needs to complete based on your planning
* Initialise the project board and use it to track your issues
* Create branches for your work
* Use pull requests to initiate peer reviews
* Merge each others work into master
* Remember to `git pull origin master` when work is merged

[attendance log](https://applied.multiverse.io/mod/questionnaire/complete.php?id=6702)
[main](/swe)|[prev](/swe/bootcamp/wk4/day2.html)|[next](/swe/bootcamp/wk4/day4.html)