# Mod 1 > Week 2 > Day 1

## Overview of the day

The purpose of the implementation stage is to make a new system operational. This is achieved through the transfer of the tested software modules to the operational or **live** environment, along with setting up of the data required for the new system.

----

## Lesson 1 - Implementation

## Learning Objectives

* Describe the activities undertaken during release and deployment of an IT service, including implementation planning; training users and operations; user documentation; build software release; deploy software.
* Explain the relative advantages and disadvantages of ‘phased deployment’ versus ‘big bang’ deployment of software.
* Relate phased deployment and big bang deployment to waterfall and agile methods of development.

## Lesson

The input to this phase is tested software.

# 👩‍💻🧑‍💻

In pairs discuss **Releases of software requires planning**. What things need to be considered before releasing software?

### Roles

![roles in implementation stage](https://user-images.githubusercontent.com/4499581/79749421-18a99c80-8307-11ea-81b7-2af4a9333ecc.png)

<table>

<thead>

<tr>

<th style="text-align:left">Role</th>

<th style="text-align:left">Responsibility</th>

</tr>

</thead>

<tbody>

<tr>

<td style="text-align:left">Service Manager</td>

<td style="text-align:left">Understands impact on service levels, timings, comms</td>

</tr>

<tr>

<td style="text-align:left">Users</td>

<td style="text-align:left">Help to identify training needs. Can advise about best way to transition</td>

</tr>

<tr>

<td style="text-align:left">Sponsor</td>

<td style="text-align:left">Green lights the implementation having weighed up the impacts on business</td>

</tr>

<tr>

<td style="text-align:left">Business Analysts</td>

<td style="text-align:left">Can carry out training. Can advice on business processes to manage impact. Can ensure documentation is available.</td>

</tr>

<tr>

<td style="text-align:left">Technical Specialists</td>

<td style="text-align:left">What order to technically do things in.Best methods to actually deal with data migrations.Early life support (developers, tech support)</td>

</tr>

</tbody>

</table>

# 👩‍💻🧑‍💻

Can you identify members of your team who fulfil these or similar roles?

## Deployment

There are 4 different ways to deploy software.

### The Big Bang

![the big bang method](https://user-images.githubusercontent.com/4499581/79762545-ce321b00-831a-11ea-8bcf-afc8b7de864a.png)

<table>

<thead>

<tr>

<th style="text-align:left">Pros</th>

<th style="text-align:left">Cons</th>

</tr>

</thead>

<tbody>

<tr>

<td style="text-align:left">

*   Clean break
*   Everyone start with new system together
*   Usually less expensive

</td>

<td style="text-align:left">

*   High risk if failure
*   No going back point fix forward only
*   Unanticipated effects

</td>

</tr>

</tbody>

</table>

### Parallel Running

![parallel running two systems](https://user-images.githubusercontent.com/4499581/79762570-d2f6cf00-831a-11ea-8711-10dfdd721133.png)

<table>

<thead>

<tr>

<th style="text-align:left">Pros</th>

<th style="text-align:left">Cons</th>

</tr>

</thead>

<tbody>

<tr>

<td style="text-align:left">

*   Less risk, old system still operates
*   Transition users gradually or in phases
*   can validate operations through comparisons

</td>

<td style="text-align:left">

*   Expensive (have to maintain two systems)
*   More complex sharing state across two systems
*   Users may not use new system

</td>

</tr>

</tbody>

</table>

### Pilots

![run pilots](https://user-images.githubusercontent.com/4499581/79762573-d427fc00-831a-11ea-823f-0801de8879aa.png)

<table>

<thead>

<tr>

<th style="text-align:left">Pros</th>

<th style="text-align:left">Cons</th>

</tr>

</thead>

<tbody>

<tr>

<td style="text-align:left">

*   Trials/pilots to identify potential issues
*   Can eliminate problems before full scale deployment
*   Can use feedback from pilot to improve the product
*   Catching errors early is cheaper and more efficient

</td>

<td style="text-align:left">

*   Can’t find problems at scale
*   Pilot software likely to be different to final release

</td>

</tr>

</tbody>

</table>

### Feature releases

![feature releases](https://user-images.githubusercontent.com/4499581/79762578-d5592900-831a-11ea-9217-76259c1d1411.png)

<table>

<thead>

<tr>

<th style="text-align:left">Pros</th>

<th style="text-align:left">Cons</th>

</tr>

</thead>

<tbody>

<tr>

<td style="text-align:left">

*   High priority requirements delivered sooner
*   Introduce complexity gradually
*   Users can learn at a steady pace
*   Can fall back to previous version (without new feature) if there are problems

</td>

<td style="text-align:left">

*   Users may lose interest in limited early version
*   Users may not like new features being regularly introduced
*   Users may not use new features sticking to original limited work flows

</td>

</tr>

</tbody>

</table>

❓ What kind of software methodology is big bang most suited too?

❓ When apple releases a new version of Mac OS which release methodology do they use?

## UK Voting Rollout Assignment

Votes at the next election will be collected digitally via an app. Your team is going to write the software and be responsible for deploying it. Can you provide your coach with your software release strategy?

Create your strategy in a document and upload to applied here ▶️ [UK Voting Rollout Assignment](https://applied.whitehat.org.uk/mod/assign/view.php?id=7997&action=editsubmission)

----

## Lesson 2 - Traceability

## Learning Objectives

* Explain how configuration management techniques are used to control and manage the different software development artefacts through the stages of the SDLC and into live operation.
* Explain the role of software developers in ‘early life support’ for operational software.
* Explain the concepts of ‘release packages’; alpha and beta releases; major and
minor releases; software upgrades.
* Produce an appropriate version numbering system for software releases in a given case.
* Explain the concept of software licensing, and describe the types of licence that can be deployed, including proprietary licence; end-user licence; enterprise licence; site licence; workstation licence; perpetual licence; open-source licence.

## Lesson

<iframe width="100%" height="444" src="https://www.youtube.com/embed/cm-cSW66Isc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>

A traceability matrix keeps track of the relationship between a requirement and its artefacts (test, code, deployment, version). This way features can be tracked across teams, throughout the SDLC.

![trace](https://user-images.githubusercontent.com/4499581/79765580-b52b6900-831e-11ea-94fd-bea5ea75db17.png)

# 👩‍💻🧑‍💻

In pairs discuss **how could traceability be a powerful tool**?

## Semantic Versioning (Semver)

Semver is a naming convention for versioning software. Its make of three components:

## 10.13.6

**10** is the Major version  
**13** is the Minor version  
**6** is the patch number

To progress the Major version you would expect breaking changes. Minor version increments indicate NEW features, new functionality, but no breaking changes. The patch number indicates fixes and improvements, nothing new in features or functionality.

# 🧐

What is the semantic version of your operating system? If you have a Windows computer Microsoft has stopped using sermver in favour of build numbers, try your version of Android or iOS.

### different phases of release

![alpha beta 1.0](https://i0.wp.com/psyongames.com/wp-content/uploads/2016/11/AlphaBeta_ReleaseCore.png?w=1184&ssl=1)

From the drawing above you can see the purpose of the different phases of release. An Alpha release to a small number of users, often testers, the essential first pass at the core of the application. Beta release opens to a wider user base, the application is not quite ready for complete release. Release in semver would be 1.0.0.

## Assignment

Can you research the licences listed below and create a piece of writing that details the features of each licence. Try to use examples of actual application you use or are familiar with for each kind of licence.

* proprietary licence
* end-user licence
* enterprise licence
* site licence
* workstation licence
* perpetual licence
* open-source licence

Submit your work here: [Submit Licences Assignment](https://applied.whitehat.org.uk/mod/assign/view.php?id=7998&action=editsubmission)

# Output

The output of the implementation phase is operational software.

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/203)
[main](/swe)|[prev](/swe/mod3/wk1/day5.html)|[next](/swe/mod3/wk2/day2.html)