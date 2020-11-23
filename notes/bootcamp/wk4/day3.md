# Bootcamp > Week 4 > Day 3 (Coach Notes)

## Overview of the day

Today Start the group projects. Before we begin it will be very helpful to consider the stages of the software development life cycle.

Use the session to introduce the 7 stages of the SDLC. You can draw on the materials in Mod 3. Explain the requirements:

* It is easy to create a user
* Users must have a name and an avatar (so we can recognise them)
* It is easy to create a project board
* All the project boards need to be displayed somewhere in the app
* A project board should have three areas; todo, doing, done
* On a project board it is possible to create a task
* A task should have textual description and be unassigned or assigned to a user
* Tasks that are assigned to a user need to display the user's avatar on the task
* Tasks start in the 'todo' state
* It is possible to drag and drop tasks from one area to another. i.e. from 'todo' to 'doing'
* Project data is important and so all project boards, users and tasks need to be persisted

Apprentices are NOT expected to implement user accounts. That is covered in Mod 1, explain its complex and involves sessions, password hashing, JWT's etc. All they need to do is be able to assign a task to a user. There needs to be some way to create a user, and pick them from a list when they want to assign a task.

Create groups of 3 in your cohort. I have done this in the past by using the zoom breakout rooms to randomly create groups, then I have a look at the distribute the ability and make swaps to distribute the stronger ones more evenly if I need to. You could also create them yourself, or run a game that will randomly assign them.

__Invite the line managers to the Showcase the following Friday if you have not done so already!__

## Design Session

In breakout rooms apprentices should try to list the inputs of the system, and the outputs. They should be creating:

1. a UML diagram of their data model
1. wireframes for each view (at least a projects page and an individual project page)
1. a Github repo with each group member added as a contributor to the repo

Inspect these 3 things, they may need to revise their data model. Check the wireframes to see they have thought the app through. Verbally go though some user journeys with the group with the wireframes. Make sure everyone is on the Github repo that they have all cloned the single repository and can pull and push without issue.

----

## SCRUMBAN session

Your role here is to facilitate each group's sprint planning. They have their design artifacts from the morning. Now they need to analysis those designs and start to break the work down into smaller atoms of work that each member can undertake. Often in the early stages of their project they might want to have a group pairing session where they all set the stack together. Once that is built then it's easier to branch off and start making pull requests.

Get them to review each others work. In the past I selected one group and got them to add me as a collaborator. I then stepped through;

1. cloning the repo
1. making a branch which was named after the ticket (github issue)
1. marking my ticket (issue) as "in progress" on github project page
1. making changes/adding files etc
1. committing and making a pull request
1. other team member does a code review (get them to share their screen - talk them through it)
1. other team member merges pull request
1. move ticket to "done" on github project page
1. locally switch back to master and pull latest changes
1. select next ticket
1. make new branch etc... 

repeat until all the tickets are "done"

Add your tips for sprint planning.