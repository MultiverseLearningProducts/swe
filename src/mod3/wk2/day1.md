# Mod 1 > Week 2 > Day 1

## Overview of the day

Today we look at the Implementation (Deployment) stage of the SDLC.

----

## Learning Objectives

* Describe the activities undertaken during release and deployment of an IT service, including implementation planning; training users and operations; user documentation; build software release; deploy software. 
* Explain how configuration management techniques are used to control and manage the different software development artefacts through the stages of the SDLC and into live operation. 
* Explain the relative advantages and disadvantages of 'phased deployment' versus 'big bang' deployment of software. 
* Relate phased deployment and big bang deployment to waterfall and agile methods of development. 
* Explain the role of software developers in 'early life support' for operational software. 
* Explain the concepts of 'release packages'; alpha and beta releases; major and minor releases; software upgrades. 
* Produce an appropriate version numbering system for software releases in a given case. 
* Explain the concept of software licensing, and describe the types of licence that can be deployed, including proprietary licence; end-user licence; enterprise licence; site licence; workstation licence; perpetual licence; open-source licence. 

## Lesson

## Inputs to the Implementation stage
The input to this phase is tested software.

## Purpose of Implementation
The purpose of the Implementation stage is to make a new system operational. This is achieved through the transfer of the tested software modules to the **live** environment, along with setting up of the data required for the new system.

It is critical that earlier stages of the SDLC have included rigorous configuration management (version control) of software components so that it is clear exactly what bug fixes, features and improvements the final 'release package' contains.

## Planning for Implementation
Planning for implementation should happen as early as possible. Consider must be given to:
* when the implementation will take place
* how data will be migrated (often done via an _Extract-Transform-Load_ (_ETL_) process where data is _extracted_ from the old system, _transformed_ into a format suitable for the new system and _loaded_ into the new system)
* what hardware / infrastructure upgrades will be required
* what training users will need
* what documentation will be required
* who will be 'on call' to support the release
* how you will determine if the implementation was successful
* what happens if it all goes wrong


## Roles

|**Role**|**Responsibility**|
|--------|------------------|
|Project Manager|Plan the implementation activities and oversee the resolution of an 'Early Life' issues (operational issues which occur just after the release)|
|End-Users|Help to identify training needs. Advise about best way to transition to the new system.|
|Business Analysts|Carry out user training. Advice on business processes to manage impact. Ensure documentation is available.|
|Service Manager|Understands how any outage will impact on service level agreements|
|Developers, technical support staff|What order the technical release tasks should be done. Handle data migrations. 'Early life' support (dealing with operational issues which occur just after the release)|
|Project Sponsor|Gives the ok to the implementation taking place having weighed up the impacts on business|

> _TASK_ - Can you identify members of your team who fulfil these or similar roles?

## Deployment

There are 4 different ways to deploy software.

### Direct Changeover (Big Bang)

This approach is relevant to the Waterfall methodology where each stage of the SDLC is fully completed and signed off and finally the software is deployed live.

![the big bang method](https://user-images.githubusercontent.com/4499581/79762545-ce321b00-831a-11ea-8bcf-afc8b7de864a.png)

|**Pros**|**Cons**|
|--------|--------|
|Clean break|High risk if failure|
|Everyone start with new system together|No going back point fix forward only|
|Usually less expensive|Unanticipated effects|

### Parallel Running

![parallel running two systems](https://user-images.githubusercontent.com/4499581/79762570-d2f6cf00-831a-11ea-8711-10dfdd721133.png)

|**Pros**|**Cons**|
|--------|--------|
|Less risk, old system still operates|Expensive (have to maintain two systems)|
|Transition users gradually or in phases|More complex sharing state across two systems|
|Can validate operations through comparisons|Users may not use new system|

### Pilots

![run pilots](https://user-images.githubusercontent.com/4499581/79762573-d427fc00-831a-11ea-823f-0801de8879aa.png)

|**Pros**|**Cons**|
|--------|--------|
|Trials/pilots to identify potential issues|Can’t find problems at scale|
|Can eliminate problems before full scale deployment|Pilot software likely to be different to final release
|Can use feedback from pilot to improve the product||
|Catching errors early is cheaper and more efficient||

### Phased implementation (Feature releases)

This approach is relevant to the Agile methodology where each sprint delivers a release of software.

![feature releases](https://user-images.githubusercontent.com/4499581/79762578-d5592900-831a-11ea-9217-76259c1d1411.png)

|**Pros**|**Cons**|
|--------|--------|
|High priority requirements delivered sooner|Users may lose interest in limited early version|
|Introduce complexity gradually|Users may not like new features being regularly introduced|
|Users can learn at a steady pace|Users may not use new features sticking to original limited work flows|
|Can fall back to previous version (without new feature) if there are problems||

## Traceability matrix

!(https://www.youtube.com/embed/cm-cSW66Isc)

A traceability matrix keeps track of the relationship between a requirement and its artefacts (test, code, deployment, version). This way features can be tracked across teams, throughout the SDLC.

## Semantic Versioning (Semver)

Semantic Versioning (Semver) is a naming convention for versioning software. It is made of three components:

`Major.Minor.Patch`

e.g. `10.13.6`

`10` is the Major version  
`13` is the Minor version  
`6` is the patch number

The Major version is incremented if you make breaking changes. 

The Minor version is incremented with new features but no breaking changes. 

The Patch number is incremented with bug fixes and improvements.

> _TASK_ - Checkout what the semantic version of your iOS or Android operating system is. 

> _TASK_ - study the versioning strategy for software you use at work such as VSCode, IntelliJ, JUnit.

### Different phases of release

1. _Alpha_ release

     ![GitHub Co-pilot alpha release testing invitation](https://user-images.githubusercontent.com/1316724/142578393-a03e877e-f755-4caa-aee8-91b5bf7638ee.PNG)

     An Alpha release is the first release of an application. It may not yet be fully feature complete or fully tested and is released to a small group of individuals, typically internal users or users willing to provide feedback for improvements.

2. _Beta_ release 

     ![Beta test You Tube](https://user-images.githubusercontent.com/1316724/142579722-d4e2e1ef-5c94-44a4-a2c0-0d159b437e37.PNG)

     A Beta release happens after an Alpha release. It will be feature complete and well tested however will be made available to a wider user base with the proviso that there may still be bugs in the software. 

## Software licensing
A software license is a legal contract governing how software is used or distributed. There are many different types of software license including:

* proprietary licence
* end-user licence
* enterprise licence
* site licence
* workstation licence
* perpetual licence
* open-source licence

> _TASK_ - find out the difference between each type of license and try to find an example of a software product which uses each license type

## Output of the Implementation stage

The output of the Implementation stage is operational software.

## Assignment

TODO


[attendance log](https://platform.multiverse.io/apprentice/attendance-log/203)
[main](/swe)|[prev](/swe/mod3/wk1/day5.html)|[next](/swe/mod3/wk2/day2.html)