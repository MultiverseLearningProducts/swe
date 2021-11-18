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
* Explain the reasons and drivers for changes to software including changed user
requirement; problem or incident identified; regulatory or other mandatory change;
infrastructure / platform change.
* Describe the purpose of a service level agreement for operational software.
* Describe in outline a typical process for reporting, logging, and dealing with
incidents and problems in operational software, and explain the terms ‘first-line
support’ and ‘second-line support’ in this context.
* Describe at a high-level problem-solving techniques, including brainstorming; fault
tree analysis; Kepner-Tregoe root cause analysis; Ishakawa diagrams (fishbone
diagrams); decomposition.
* Explain the importance of managing and controlling changes to operational
software.
* Describe in outline a typical process for the control of changes to live software.

## Lesson

## Purpose of the Maintenance stage

The maintenance stage is your deployed software being cared for and improved. This phase ensures that software and services are accessible to users. This is the phase where the initial business needs that caused the software development life cycle to start turning are realised (or not).


What now? We have live software in production that is addressing a business need. If only that were it. But things change:

*   New user requirements
*   Market forces
*   Problems, bugs, incidents
*   Regulatory changes
*   Platform changes

## Inputs to the Maintenance stage

The input to the maintenance stage is production software. This phase mainly deals with:

*   Major enhancements
*   Minor enhancements
*   Error corrections
*   Bug fixes
*   Performance improvements
*   Routine updates and upgrades

## 1st, 2nd, 3rd line support

One aspect of this phase of the SDLC is support. This can take the form of either 1st, 2nd or 3rd line support. Often this kind of support is managed by a system. Let us have a look at how it works.

|**Support level**|**Purpose**|
|---------------------------|-------------------------|
|1st line support|Usually a first point of contact when a bug or error is detected. This might be over the phone for example. Often this involves raising a ticket on a system so that your reported incident can be tracked. There may be quick solutions offered for example, "have you tried turning it off and on again?"|
|2nd line support|This is usually more involved and often a support professional with domain knowledge will try to solve the problem. This typically involves on-site visits or remote sessions. 2nd line support technicians might escalate a something they are unable to fix to 3rd line support|
|3rd line support|This level involves the experts. These are the people who actually wrote the software or the network engineers who actually installed a network|

## When things go wrong

It happens. Sometimes software breaks in production.

!(https://www.youtube.com/embed/nmjDwNe0BcE)

RBS was able to find what caused the problem. In the following section we are going to learn about 4 different kinds of structured problem solving techniques.

*   Brainstorming
*   Fault tree analysis
*   Ishakawa (fishbone) diagrams
*   Kepner-Tregoe “Root cause analysis”

### Brainstorming

![brainstorming](https://user-images.githubusercontent.com/4499581/80510926-4e87fa00-8973-11ea-8aca-7d5911bd402e.png)

This is the more informal kind of problem solving and often a starting point. Members of the team pile in ideas as to what have caused a failure. There is no particular structure or order. A collection of possibilities is an easy first step a can then help a team decide what to focus on next.

### Fault tree analysis

![fault tree analysis](https://user-images.githubusercontent.com/4499581/80510929-50ea5400-8973-11ea-9be6-3525b691e373.png)

Fault tree analysis is a top-down approach to identify all potential causes leading to a defect. Each cause is further broken down into least possible events or faults. The analysis begins with a major defect. All the potential events – individual or in combination – that may cause the defect are identified. Potential events are further traced down in a similar way to the lowest possible level.

### Ishakawa (fishbone) diagrams

![Ishakawa (fishbone) diagrams](https://user-images.githubusercontent.com/4499581/80510935-534cae00-8973-11ea-9843-db6da42e890b.png)

!(https://www.youtube.com/embed/mLvizyDFLQ4)

How to make your own:

1.  Agree on a problem statement (effect). Write it at the center right of the flipchart or whiteboard. Draw a box around it and draw a horizontal arrow running to it.
2.  Brainstorm the major categories of causes of the problem. If this is difficult use generic headings:

     *   Methods
     *   Machines (equipment)
     *   People (manpower)
     *   Materials
     *   Measurement
     *   Environment

1.  Write the categories of causes as branches from the main arrow.
2.  Brainstorm all the possible causes of the problem. Ask “Why does this happen?” As each idea is given, the facilitator writes it as a branch from the appropriate category. Causes can be written in several places if they relate to several categories.
3.  Again ask “Why does this happen?” about each cause. Write sub-causes branching off the causes. Continue to ask “Why?” and generate deeper levels of causes. Layers of branches indicate causal relationships.
4.  When the group runs out of ideas, focus attention to places on the chart where ideas are few.

### Kepner-Tregoe "Root cause analysis"

|Type|Analysis|
|:---|:-------|
Situational Analysis|Clarify the situation, outline concerns and choose a direction.
Problem Analysis|Define the problem and determine its root cause.
Decision Analysis|Identify alternatives and perform a risk analysis for each one.
Potential Problem Analysis|The best of the alternatives is further scrutinised against negative consequences and actions are proposed to minimise the risk.


## Output

The output of the maintenance phase is operational software that satisfies the business needs identified in the first stage of the SDLC.


[attendance log](https://platform.multiverse.io/apprentice/attendance-log/204)
[main](/swe)|[prev](/swe/mod3/wk2/day1.html)|[next](/swe/mod3/wk2/day3.html)