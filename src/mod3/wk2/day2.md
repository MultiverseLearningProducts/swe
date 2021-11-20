# Mod 3 > Week 2 > Day 2

## Overview of the day

Today we look at the Maintenance stage of the SDLC.

----

## Learning Objectives

* Describe the activities that take place in the maintenance stage, including:
    - Minor enhancement;
    - Major enhancement;
    - Error correction;
    - Temporary workaround / bug fix;
    - Performance improvement;
    - Routine updates and upgrades;
* Explain the reasons and drivers for changes to software including changed user requirement; problem or incident identified; regulatory or other mandatory change;infrastructure / platform change.
* Describe the purpose of a service level agreement for operational software.
* Describe in outline a typical process for reporting, logging, and dealing with incidents and problems in operational software, and explain the terms 'first-line support' and 'second-line support' in this context.
* Describe at a high-level problem-solving techniques, including brainstorming; fault tree analysis; Kepner-Tregoe root cause analysis; Ishakawa diagrams (fishbone diagrams); decomposition.
* Explain the importance of managing and controlling changes to operational software.
* Describe in outline a typical process for the control of changes to live software.

## Lesson

## Purpose of the Maintenance stage

The maintenance stage is where deployed software is supported and enhanced. We discover whether the business case that initiated the software development life cycle is realised and discover how decisions made during the design and development stages impact the longevity of the system.

Software needs to be maintained for the following reasons:

*   New user requirements
*   Market forces
*   Problems, bugs, incidents
*   Regulatory changes
*   Platform changes

## Inputs to the Maintenance stage

The input to the maintenance stage is production software. This stage mainly deals with:

*   Major enhancements
*   Minor enhancements
*   Error corrections
*   Bug fixes
*   Performance improvements
*   Routine updates and upgrades

## Service Level Agreements
A Service Level Agreement (SLA) is a legal agreement between two parties (a supplier and a customer) that defines the services the supplier will deliver and the expected level of service. If the expected level of servie is not met, a financial penalty will be applied. 

Here is an [example SLA for Google Workspace for ISPs](https://workspace.google.com/terms/partner_sla.html).


## 1st, 2nd, 3rd line support

One aspect of this phase of the SDLC is support. This can take the form of either 1st, 2nd or 3rd line support. Often this kind of support is managed by a system. Let us have a look at how it works.

|**Support level**|**Purpose**|
|---------------------------|-------------------------|
|1st line support|Usually a first point of contact when a bug or error is detected. This might be over the phone for example. Often this involves raising a ticket on a system so that your reported incident can be tracked. There may be quick solutions offered for example, "have you tried turning it off and on again?"|
|2nd line support|This is usually more involved and often a support professional with domain knowledge will try to solve the problem. This typically involves on-site visits or remote sessions. 2nd line support technicians might escalate a something they are unable to fix to 3rd line support|
|3rd line support|This level involves the experts. These are the people who actually wrote the software or the network engineers who actually installed a network|

Listen to this video to hear more about the life of a Service Desk Support Analyst.

Companies typically use Help Desk software such as [ZenDesk](https://www.zendesk.co.uk/) or [LiveAgent](https://www.liveagent.com/) to handle support queries. 

!(https://www.youtube.com/embed/dEOCo7mYYuA)

## When things go wrong

It happens. Sometimes software breaks in production. The important thing is how we identify the root cause and provide a fix.

In this video we hear how NASA engineers used problem solving to return the Apollo 13 astraunants safely back to Earth after an explosion in an oxygen tank caused a loss of oxygen, water, electrical power and the loss of use of the propulsion system.

!(https://www.youtube.com/embed/d014W6sjEgE)

In the following sections we are going to learn about 4 different kinds of structured problem solving techniques.

*   Brainstorming
*   Fault tree analysis
*   Ishakawa (fishbone) diagrams
*   Kepner-Tregoe “Root cause analysis”

### Brainstorming

![brainstorming](https://user-images.githubusercontent.com/4499581/80510926-4e87fa00-8973-11ea-8aca-7d5911bd402e.png)

This is the more informal kind of problem solving and often a starting point. Members of the team pile in ideas as to what have caused a failure. There is no particular structure or order. 

### Fault tree analysis

![fault tree analysis](https://user-images.githubusercontent.com/4499581/80510929-50ea5400-8973-11ea-9be6-3525b691e373.png)

Fault tree analysis is a top-down approach to identify all potential causes leading to a defect. Each cause is further broken down into least possible events or faults using Boolean logic (AND or OR gates). The analysis begins with a major defect. All the potential events – (individual or in combination) that may cause the defect are identified. Potential events are further traced down in a similar way to the lowest possible level.

### Ishakawa (fishbone) diagrams

Ishakawa diagrams show the potential causes of a specific event. Causes are grouped into major categories, typically, People, Process, Equipment, Materials, Environment and Management.

![Ishakawa (fishbone) diagrams](https://user-images.githubusercontent.com/4499581/80510935-534cae00-8973-11ea-9843-db6da42e890b.png)

!(https://www.youtube.com/embed/mLvizyDFLQ4)

### Kepner-Tregoe "Root cause analysis"
The Kepner-Tregoe method is systematic method to analyse a problem and find the root cause of the issue, instead of making assumptions and jumping to conclusions. The Apollo 13 Mission Control and NASA engineers used the Kepner-Tregoe methodology to return the astraunants safely back to Earth.

Kepner-Tregoe training is rigorous, it requires that trainees work through complex simulations that are extremely intellectually challenging. 

There are four basic steps when using the Kepner-Tregoe decision matrix:

|Type|Analysis|
|:---|:-------|
|Situational Analysis|This is used to clarify the problem (what happened)|
|Problem Analysis|This is used to find the cause of the problem|
|Decision Analysis|This determines the options for potential problem resolution and the risks associated with each|
|Potential Problem Analysis|This anticipates future problems and looks at preventative actions|

## Output of the Maintenance stage

The output of the Maintenance stage is operational software that satisfies the business needs identified in the first stage of the SDLC.

## Assignment
TODO

## Additional resources
[Research paper on the Apollo 13 decision making process](https://cris.brighton.ac.uk/ws/portalfiles/portal/13872526/Francis_Tsekouras_2020_Apollo_13_Paper_Submitted.pdf)

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/204)
[main](/swe)|[prev](/swe/mod3/wk2/day1.html)|[next](/swe/mod3/wk2/day3.html)