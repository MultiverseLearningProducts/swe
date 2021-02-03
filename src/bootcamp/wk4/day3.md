# Bootcamp > Week 4 > Day 3

## Overview of the day

Today you start your group projects. Before we begin, let's discuss the 7 stages of the software development life cycle.

1. Business needs
1. Requirements engineering
1. Design
1. Development
1. Testing
1. Deployment
1. Maintenance

The business needs we have identified are:
  * members of a team have no clear visibility as to who is working on what task
  * members of a team have no clear visibility on the tasks remaining to complete a project
  
There is a need therefore to *have a tool to keep track of tasks in a project team and to see what the status of different tasks are at any one time*. 

The requirements are as follows:

### Functional requirements (what the system has to do)
|Id|Priority|Description|
|--|--------|-----------|
|F1|MUST|A project board must have at least 3 areas - todo, in progress, done|
|F2|MUST|It must be possible to view all the tasks on a project board|
|F3|MUST|It must be possible to create a task on a project board|
|F4|MUST|It must be possible to delete a task on a project board|
|F5|MUST|It must be possible to edit a task on a project board|
|F6|MUST|A task must have textual description|
|F7|MUST|A task must start in the 'todo' state|
|F8|MUST|It must be possible to move tasks from one area to another. e.g. from 'todo' to 'in progress'|
|F9|MUST|A task must be either unassigned or assigned to a single user|
|F10|MUST|A user must have a name and an avatar (so we can recognise them)|
|F11|MUST|Tasks that are assigned to a user need to display the user's avatar on the task|
|F12|MUST|It must be possible to create a new project board|
|F13|MUST|It must be possible to view all the project boards|
|F14|MUST|The state of a project board must persist even when the application is closed|
|F15|MUST|:new: **The application must work well on a mobile as well as a desktop**|

### Non-functional requirements (the constraints on the system)
|Id|Priority|Description|
|--|--------|-----------|
|NF1|MUST|The application must provide evidence of conformance to the WCAG accessibility standards|
|NF2|MUST|The application must have client & server-side validation in place|
|NF3|MUST|The application must have evidence of automated unit testing|
|NF4|MUST|The application must have evidence of automated system testing|
|NF5|MUST|The application code must be documented in a manner that it would be easy for a new developer to understand|
|NF6|MUST|The application code must be stored in a GitHub repository|
|NF7|MUST|There must be documentation which describes:|
  * how to run the application
  * features of the application
  * design decisions
  * team roles & responsibilities
  * links to UI wireframes
  * links to UML use case, class and sequence diagrams
  * links to unit test coverage report
  * links to system test coverage report
  * links to JSDoc

----

## Lesson 1 - Tools which will help you
### Slack
You may want to setup a Slack channel to communicate as a team

### Jam Board
You may want to setup a [Jam Board](https://jamboard.google.com/) to brainstorm design ideas

### GitHub Wiki
Each GitHub repository has a section for hosting documentation called a 'wiki'. A README.md file in your repository can describe at a high level what your project is about; you can use the wiki to add additional documentation.

### GitHub Projects
You can use Github's 'Projects' page to create and manage your team's work. On your Github repo go to 'Projects' and create a new project (e.g. '2021-02-03 Sprint 1') choosing 'Automated Kanban with reviews' as a template.

![github create a new project](https://user-images.githubusercontent.com/4499581/95681986-cde44f80-0bda-11eb-8aa9-4e229c580c0d.png)

You can then create 'Issues' and assign them to this project and to members of your team. Issues can be moved from one column to another. Refer to this [GitHub Project Management Tutorial](https://www.youtube.com/watch?v=ff5cBkPg-bQ) video.


### Assignment
  1. Ask one of your team members to create a new **public** GitHub repository (with a README.md) and [add the other team members as 'Collaborators'](https://docs.github.com/en/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository). 
  2. Create a new, clean directory locally and 'Clone' the new repository to this directory. Ensure you can see the 'README.md' file.
  3. Add a new page to your project's Wiki with some dummy content
  4. Create a new 'Project' as described above, choosing 'Automated Kanban with reviews' as a template
  5. Create a dummy 'Issue' and [assign it to the Project](https://docs.github.com/en/github/managing-your-work-on-github/adding-issues-and-pull-requests-to-a-project-board) and to one team member
  6. Share your repository link with your coach (via Slack)

----

## Lesson 2 - GitHub git branches & Pull Requests
Up until now you have worked on a single (default) git branch, 'main'. This was fine when you were working independently, but now we are working as a team we need to isolate our development work until we consider it 'ready for review', so as not to affect other team members using the repository. 

Each repository has one default branch and can have multiple other branches. You can `merge` a branch into another branch using a `Pull Request`.

Best practice is to create a new branch for each Issue you work on. You should include the issue number in the name of the branch as well as a short descriptive name, for example '**3**-data-model'.

New branches can be created either via the GitHub UI (recommended) or via the command line using the `git checkout -b` command. 

To work on a specific branch you need to 'checkout' that branch:

```sh
git checkout nameOfBranch
```

To confirm which branch you are working on, run:
```sh
git branch
```
This will show a * against the branch you have checked out.

You can now safely commit & push to your branch without affecting anyone else in your repository. Do ensure you push regularly just in case your local machine crashes!

If you execute `git push` without any arguments, it will push the changes to the currently checked out branch (which is typically what you want). 

When you have finished working on your branch, make a 'Pull Request' and assign it to a reviewer (someone else from your team must look through your code before it is merged). Move the associated 'Issue' card into the 'In review' column. You can now start work on another Issue.

If you are asked to be a reviewer you should review the code carefully, check that it is well documented and has unit tests. Ask if you have any questions. When you are happy you can 'merge' the Pull Request and select to 'delete' the branch - merging will apply the code changes to the 'main' branch. **No-one should ever merge their own code into main**.

### Assignment
  1. Use the GitHub UI to create a branch for each of the team members
  2. Clone the repository if you haven't already
  3. On the command line (within the directory where you cloned the repository), run `git checkout nameOfYourBranch`
  4. Run `git branch` and ensure you see a * next to your branch name
  5. Add a new file (can contain anything), commit it and push it - try to view the changes in the GitHub UI
  6. Create a Pull Request and assign it to another team member to review (make sure everyone gets a turn at being a reviewer)
  7. As a reviewer, use the GitHub UI to see what changes have been done, when you are happy, 'Merge' the Pull Request and delete the branch. If you are not happy, add comments stating why to the Pull Request and assign the Issue back to 'In Progress'.
  8. When your code is merged, switch back to the 'main' branch using `git checkout main` and run `git pull` to get the latest changes. Delete your old branch using `git branch -D nameOfYourMergedBranch`.

----

## Lesson 3 - Agile development
In this lesson we will discuss Agile development using SCRUM, KANBAN & SCRUMBAN. 

**Agile** is a set of principles you can read more about in the [principles behind the Agile Manifesto](https://agilemanifesto.org/principles.html). Some of the core principles include:
  * Satisfy the customer through early and continuous delivery of valuable software
  * Welcome changing requirements
  * Deliver working software frequently
  * Build projects around motivated individuals
  * Continuous attention to technical excellence
  * Business people and developers must work together daily throughout the project

### SCRUM

SCRUM is an agile framework that software development teams use to organise and coordinate their work. A SCRUM master faciliates all the development process and helps to remove any impediments the team may face.

SCRUM starts with sprint planning. A **sprint** is a fixed period of time for development work (typically 2 weeks). For us our sprint will last 3-4 days. In sprint planning the team breaks up the work into tasks. Often the tasks are scored by complexity or challenge factor. Low scoring tasks are of low complexity and easy to complete, high scoring tasks are harder, or might require reading of documentation etc. 

Each task should be assigned to a developer. It is their responsibility to deliver that task. The amount and rate at which tasks are complete is the 'burn rate'. For SCRUM masters the burn rate gives them a good measure for the capacity of their team.

!(https://www.youtube.com/watch?v=2A9rkiIcnVI)

SCRUM also recommends 15 minute daily standups (think of a rugby scrum!) where each member of the team answers 3 questions:
  * Q. What did I do yesterday?
  * Q. What am I doing today?
  * Q. What blockers do I have which are stopping me working effectively?

!(https://www.youtube.com/watch?v=xcC0LmkzG9g)

### KANBAN

KANBAN is another agile framework. Tasks are represented visually on a 'kanban' board, allowing team members to see the state of every piece of work at any time. 

Kanban is not bound by sprints. Instead tasks are added to a backlog. Tasks are then picked from the backlog and placed in different columns depending upon that tasks current status. The benefit of this system is the visibility it gives the team as to where every task is at anyone time. This originated in Japanese car manufacturing, and has been used by developers for many years now.

### SCRUMBAN

Combine the 2 methods above and you get SCRUMBAN. Sprints with a KANBAN board. This is the approach you are most likely to see in your workplace, people often refer to the approach as SCRUM even though it's offically a combination of 2 frameworks.

## Assignment

* Start your Sprint planning by creating Issues in your GitHub Project for all the tasks the team needs to complete based on the functional and non-functional requirements and your planning. Place them onto your 'Kanban' board (i.e. your GitHub Project board). Ask your Product Owner (your coach) if you have any questions.
* Plan a daily SCRUM standup for the next few days - work out a time which suits you are (as early as possible is best) and where you will each answer the 3 questions listed above.

----

## Lesson 4 - The Design Phase

## Before we start

* Read through the functional and non-functional requirements above, ask your Customer (coach) if anything is not clear

## Lesson

The design phase is very important. Developers spend lots of time in the design phase. We don't just start writing code and hope we'll figure it out as we go along. That approach may work as an individual, but will quickly derail a group of developers working together. Working as a group of developers makes it possible to create a more sophisticated piece of software more quickly that working alone. However, to experience this benefit you have to organise your work as a group. Having a clear design makes that much easier.

Design is not just visual design. It includes designing the user interactions, the data model and the interfaces and interactions of classes or modules. 

Think back to the Scooter Hire project, we produced UML diagrams to illustrate the user interactions, the class responsibilities and the interactions between classes in the system.

There are a number of design areas you should discuss as a group and document using UML models:

### Input

What are the inputs to your software solution? How will you collect these? What validation is required? Figuring this out might require you to also think about the Data Model. Talking through this will also require you to consider the outputs of the software.

### Storage and Processing

The inputs you need to collect. How will you store that data? Will the inputs need processing before or after they are stored. What will those processes be?

### Output

What are the outputs of your software? This might be views of data that you need to display. Thinking about the outputs can also help define what your inputs need to be and how you need to process or store the data your output will need.

### Wireframes

![wireframes](https://balsamiq.com/assets/learn/articles/mobile-web.png)

Wireframes are low resolution, often grayscale documents that layout the components of a page. You can create wireframes in a Google slide, PowerPoint or use an open source programme like [draw.io](https://app.diagrams.net/).

## Assignment
Work as a group. Make yourself a [JamBoard](https://jamboard.google.com/) if you think it will help your design discussions.

In your team, discuss the requirements and come up with a set of designs. Document the design in the following artifacts and commit them to GitHub BEFORE you write any code!

* A UML Use Case diagram illustrating the key interactions between the User and the system
* A UML Class diagram illustrating the key domain classes
* A UML Sequence diagram for each of the key Use Cases
* Detailed wireframes covering every view, every form, every form field, every button. Create them for mobile and desktop too.
* Add all the above design artifacts to you repository's wiki pages

This will take some time, be patient, this is part of planning. With your wireframes, class/data model and interactions planned and documented you will find it much easier to break the work into smaller tasks and divide the tasks up amongst yourselves.

----


* [Github projects](https://www.youtube.com/watch?v=ff5cBkPg-bQ)



[attendance log](https://applied.multiverse.io/mod/questionnaire/complete.php?id=6702)
[main](/swe)|[prev](/swe/bootcamp/wk4/day2.html)|[next](/swe/bootcamp/wk4/day4.html)