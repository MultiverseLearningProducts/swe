# Mod 3 > Week 1 > Day 2

## Overview of the day

Today we focus on the requirements analysis stage of the SDLC.

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
* List and describe techniques and tools used in requirements analysis, including
functional decomposition; Use Case diagrams; context diagram; UML (Unified
Modelling Language) tools, activity diagrams

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRguq0BhtWDyTbKfdkobvkPVQ4tQUn5nKNqiCi0mcjjrfa49xYnhSE6g7-6x9tGwc4yhrGeQho60aNG/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" width="100%" height="444" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

### Input to the Requirements Analysis stage

The input for this stage of the SDLC are the business needs recommended in the feasibility Study. This stage of the SDLC is about working out exactly what needs to be build or purchased in order to deliver the business impacts and benefits defined in the feasibility study.

There are a number of roles involved this stage that we should be familiar with.

|**Role**|**Responsibility**|
|--------|------------------|
|Project Sponsor (customer)|Owns the project and is accountable to the organisation for delivery of business benefits (feasibility study). Controls the scope of the project|
|Managers|Own specific requirements|
|Users|People who use the current system and will use the new system. Important they they buy into the new solution|
|Domain Experts|???|
|Project Manager|Responsible for development and deliverable to the Project Sponsor|
|Business Analysts|Elicit, document and analyse requirements|
|Testers|Help validate that requirements are testable|
|Developers|Help validate that requirements are clearly defined|

Usually we think about customers as external to an organisation. For example when we buy something from JD sports, we are the customer. However in the roles above you can think of the **Project Sponsor** as a customer. They will ultimately receive the final product even though they may not use the product themselves, their team may end up using the product.

----

## Lesson 2 - Elicitation

> "Requirements are not just waiting to be picked from people like apples from a tree. They have to be mined like tin or iron" <small>_Developing Information Systems by James Cadle_</small>

It’s the **Business Analysts** that will go into an organisation and mine for requirements. How do they do this?

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

*   person1: Responding to phone calls
*   person2: Booking a swimming course
*   person3: Tea break
*   person4: Looking for lost property
*   person5: Giving change for the car park

From this input, the Business Analyst may  choose to create Personas (ficticious characters which represent the different types of actors that will use your product) and define User Stories which describe a feature from the perspective of the end user.

### Assignment
Create Personas and User Stories for a recipe box delivery service. Use the template provided by your coach and make the Personas as interesting as possible!

## Lesson 3 - Categories of requirements

!(https://www.youtube.com/embed)

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

> What makes a “Good” requirement?

There is quite an art to form a good requirement. Below are the main qualities your requirement must have:

*   Atomic
*   Uniquely identified
*   Complete
*   Consistent and unambiguous
*   Traceable
*   Prioritised
*   Testable

### Outputs from the Requirements Analysis stage
The output of this stage is a requirements document. There are various forms this document might take, here is a [requirements document for new web-based sales system for Solar Based Energy Inc](http://web.cse.ohio-state.edu/~bair.41/616/Project/Example_Document/Req_Doc_Example.html).

A requirements document typically includes:
* a **Glossary of Terms** - a definition of acronyms or domain specific words used within the document
* **UML Use Case diagrams**
* **UML Activity diagrams**
* Functional Models - **Functional Decomposition** is the process of breaking down that complexity into smaller functions. Study [this example](https://sites.google.com/site/centerofmissingpeople/_/rsrc/1480218719774/decomposition-diagram/Functional%20decomposition.png) from the Centre of Missing People.

### Assignment
Update your portfolio to specify functional and non-functional requirements for each of the projects you have delivered. List them in a table.

Update your portfolio to include Use Cases 
and User Stories for one or more projects you have delivered.

Explore the [Center of Missing People](https://sites.google.com/site/centerofmissingpeople) site and identify the qualities of a good requirement. 

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/199)
[main](/swe)|[prev](/swe/mod3/wk1/day1.html)|[next](/swe/mod3/wk1/day3.html)