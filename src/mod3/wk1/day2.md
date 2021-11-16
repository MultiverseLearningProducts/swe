# Mod 3 > Week 1 > Day 2

## Overview of the day

Today we focus on the Requirements Analysis stage of the SDLC.

----

## Lesson 1 - Requirements Analysis

### Learning Objectives

*   Distinguish the role of the customer and the user in defining requirements.
*   Describe how user research can facilitate understanding of the customer and enduser; who they are; the problem they are faced with; and how they are currently dealing with the problem, including questionnaires; user interviews; contextual enquiry; focus groups; personas; customer journey mapping.
*   Explain the difference between functional and non-functional requirements.
*   Distinguish non-functional requirements, including:
    *   security
    *   availability
    *   reliability
    *   performance
    *   capacity
    *   continuity
    *   supportability
    *   maintainability
    *   scalability
*   Recognise common ways in which software requirements can be expressed.
*   Describe the qualities of good requirements and the impact of poor requirements.
*   Explain how a data dictionary / glossary of terms can be used.
* List and describe techniques and tools used in requirements analysis, including functional decomposition; Use Case diagrams; context diagram; UML (Unified Modelling Language) tools, activity diagrams

### Inputs to the Requirements Analysis stage

The input for this stage of the SDLC are the business needs recommended in the Feasibility Study. 

### Purpose of the Requirements Analysis stage

This stage of the SDLC is about working out exactly what needs to be built or purchased in order to deliver the business impacts and benefits defined in the Feasibility Study.

### Who is involved

There are a number of roles involved this stage that we should be familiar with.

|**Role**|**Responsibility**|
|--------|------------------|
|Project Sponsor (customer)|Owns the project and is accountable to the organisation for delivery of business benefits (feasibility study). Controls the scope of the project|
|Managers|Own specific requirements|
|Users|People who use the current system and will use the new system. Important they they buy into the new solution|
|Domain Experts|Experience in working in the domain|
|Project Manager|Responsible for development and deliverable to the Project Sponsor|
|Business Analysts|Elicit, document and analyse requirements|
|Testers|Help validate that requirements are testable|
|Developers|Help validate that requirements are clearly defined|

Usually we think about customers as external to an organisation. For example when we buy something from JD sports, we are the customer. However in the roles above you can think of the _Project Sponsor_ as a customer. They will ultimately receive the final product even though they may not use the product themselves, their team may end up using the product.

### Capturing requirements

> "Requirements are not just waiting to be picked from people like apples from a tree. They have to be mined like tin or iron" <small>_Developing Information Systems by James Cadle_</small>

It’s the _Business Analysts_ that will go into an organisation and mine for requirements. How do they do this?

*   Interviews
*   Focus groups
*   Workshops
*   Observations
*   Shadowing
*   Scenarios
*   Prototyping

For example, a Business Analyst might look at a user inputting data in a form and ask questions such as:
* what are the current input fields in this form? 
* why these fields? 
* where is the input data used? 
They might also want to know quantitive things like: 
* how many invoices are filed in a month?
* how many automated emails sent? 
* when is the system at capacity? 

All of the methods described above involve talking to people. There are also others approaches that are more data driven.

*   Questionnaires
*   Document analysis
*   Record searching
*   Activity sampling

As an example, imagine you are a Business Analyst working on a project to automate manual processes in a leisure centre. You could use activity sampling to understand what those manual processes were. By visiting the leisure centre at different times (to generate a fair sample) and recording what the receptionist is doing you gather your requirements. For example:

*   responding to phone calls
*   booking a swimming course
*   having a tea break
*   looking for lost property
*   giving change for the car park

### Categories of requirements

!(https://www.youtube.com/embed/nvIvnfsaFYw)

Requirements analysis elicits both functional and non-functional requirements.

Functional requirements describe _how_ a system should work

|**ID**|**Priority**|**Description**|
|------|------------|---------------|
|FR1|MUST|Menu options include vegetarian, vegan and calorie controlled choices
|FR2|MUST|Allergen information is displayed against each ingredient|
|FR3|MUST|The password reset email contains a unique link which expires after one hour|
|FR4|SHOULD|Payment options include ApplePay|

Non-functional requirements describe the _constraints_ on the system such as system availability, conformance to security standards etc. Some examples are listed below but take time to study a more complete list on [Wikipedia](https://en.wikipedia.org/wiki/Non-functional_requirement)

|**ID**|**Priority**|**Description**|
|------|------------|---------------|
|NFR1|MUST|The home page loads in less than 2 seconds|
|NFR2|MUST|The system supports up to 1000 concurrent users|
|NFR3|MUST|Data is held in a Postgres database|

Requirements can also be categorised further into:

|**Category**|**Description**|
|-----------|---------------|
|Business requirements|General requirements high-level statements|
|Stakeholder requirements|Statements for the needs of individuals|
|Solution requirements|Detailed technical requirements (i.e. database must handle 2,000 concurrent connections)|
|Transition requirements|What is required to go from state A to state B (training, recruitment, processes, re-structuring)|

### What makes a good requirement
There is quite an art to form a good requirement. Below are the main qualities your requirement must have:

*   Unique and atomic (focusses on one thing)
*   Complete
*   Consistent and unambiguous
*   Traceable
*   Prioritised
*   Testable

Let's look at some examples of good and poor requirements in terms of how "complete" and "unambiguous" they are:

|**Poor**|**Good**|
|--------|--------|
|The system must be useable|The system must conform to the [Nielson Top 10 Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/)|
|The system must be well tested|All code must have 80% test coverage|

> _TASK - Imagine you are creating a food delivery service called "SOFresh". Create a set of functional and non-functional requirements to express the requirements for the site. Use the ones above as a starting point._

### Expressing requirements
_Functional decomposition_ is the analysis of complex systems/requirements by breaking them down into smaller, simpler elements. 

Requirements can be expressed in a number of different forms including: 
* [Functional Decomposition diagrams](https://sites.google.com/site/centerofmissingpeople/_/rsrc/1480218719774/decomposition-diagram/Functional%20decomposition.png)
* _UML Use Case_ diagrams which show the interactions between the Actors and the system
 ![So Fresh simple Use Case diagram](https://user-images.githubusercontent.com/1316724/141853327-9226b72b-71d2-49c3-af37-ca6879c05297.png)

* _UML Activity_ diagrams which show how activities are co-ordinated

 ![Activity diagram](https://user-images.githubusercontent.com/1316724/141858901-75fae65d-d564-41a8-980a-d2ec312f56c8.png)
* _Personas_ - ficticious characters which represent the different types of actors that will use a product
 ![Example Persona of an ex rockstar who requires high quality ingredients for his new hobby of cooking](https://user-images.githubusercontent.com/1316724/141855403-c77baa84-1777-4a53-99b9-c87a667b2cef.PNG)

* _User Stories_ which describe a feature from the perspective of the end user
 ![userStories](https://user-images.githubusercontent.com/1316724/141854008-95a7e86a-7565-41e2-89a4-33228987669e.PNG)

### Outputs from the Requirements Analysis stage
The output of this stage is a requirements document. 

A requirements document should include a _Glossary of Terms_ which explains acronyms or domain specific words used within the document. 

It should also include a _Data Dictionary_ which lists data requirements in such a way that in the Design phase it will be easy able to design a relational database or data structure. Here is an [example Data Dictionary](https://lta.cr.usgs.gov/DD/aerial_single_frame.html)

Here are some examples of real requirements documents:

* [Patient Level Contract Monitoring (PLCM): Requirements Specification](https://www.england.nhs.uk/wp-content/uploads/2018/12/13-dcb-3003-plcm-reqs-spec-for-dcb.pdf)

* [Requirements document for new web-based sales system for Solar Based Energy Inc](http://web.cse.ohio-state.edu/~bair.41/616/Project/Example_Document/Req_Doc_Example.html).

* [Requirements for the Center of Missing People website](https://sites.google.com/site/centerofmissingpeople). 


## Assignment 1
1. Using the Persona template provided by your coach, describe the bios, needs and challenges of at least 3 ficticious users of the SoFresh system

2. Using the User Story template provided by your coach, describe at least 3 stories which provide value to users of the SoFresh system

3. Create a UML Use Case Diagram to represent the interactions between the Actors in the SoFresh system

4. Create a UML Activity Diagram to model an automated chatbot responding to a customer query

Commit your code to GitHub and send a link to your coach for review. 

## Assignment 2

1. Update your portfolio to specify functional and non-functional requirements for each of the projects you have delivered. List them in a table as follows:

**Requirements**

|**Functional**|**Non-functional**|
|--------------|------------------|
|XXX           |YYY               |

2. Update your portfolio to include a Use Case diagram and User Stories for at least one project you have delivered.

## Additional resources
[TODO - Slides](https://docs.google.com/presentation/d/e/2PACX-1vRguq0BhtWDyTbKfdkobvkPVQ4tQUn5nKNqiCi0mcjjrfa49xYnhSE6g7-6x9tGwc4yhrGeQho60aNG/embed)

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/199)
[main](/swe)|[prev](/swe/mod3/wk1/day1.html)|[next](/swe/mod3/wk1/day3.html)