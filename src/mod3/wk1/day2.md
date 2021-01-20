# Mod 3 > Week 1 > Day 2

## Overview of the day

## Lesson 1 - Requirements Analysis

## Learning Objectives

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

## Before we start

## Materials needed

* [slides](https://docs.google.com/presentation/d/1hmRdZZZ6KMa5i9hFEJTnAUYi5XwEBOMHzR8Uc2JLptU/edit?usp=sharing)

## Lesson

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRguq0BhtWDyTbKfdkobvkPVQ4tQUn5nKNqiCi0mcjjrfa49xYnhSE6g7-6x9tGwc4yhrGeQho60aNG/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" width="100%" height="444" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

# The Input

The input for this stage of the SDLC are the business needs recommended in the feasibility Study. This stage of the SDLC is about working out exactly what needs to be build or purchased in order to deliver the business impacts and benefits defined in the feasibility study.

There are a number of roles in this stage that we should be familiar with.

<table>

<thead>

<tr>

<th style="text-align:left">role</th>

<th style="text-align:left">responsibility</th>

</tr>

</thead>

<tbody>

<tr>

<td style="text-align:left">Project Sponsor</td>

<td style="text-align:left">Owns the project is accountable to the organisation for delivery of business benefits (feasibility study) controls the scope of the project.</td>

</tr>

<tr>

<td style="text-align:left">Managers</td>

<td style="text-align:left">advise, have a say, own part of the solution</td>

</tr>

<tr>

<td style="text-align:left">Users</td>

<td style="text-align:left">People who use the current system, and will use the new system. Need to articulate their individual processes and buy into the new solution.</td>

</tr>

<tr>

<td style="text-align:left">Project Manager</td>

<td style="text-align:left">Responsible for development and deliverable to the Project Sponsor.</td>

</tr>

<tr>

<td style="text-align:left">Business Analysts</td>

<td style="text-align:left">Eliciting, documenting, analysing requirements</td>

</tr>

<tr>

<td style="text-align:left">Testers</td>

<td style="text-align:left">Help validate business analysts elicited requirements are testable</td>

</tr>

<tr>

<td style="text-align:left">Developers</td>

<td style="text-align:left">Can consult with business analysts, verify that requirements are clearly defined and add technical detail to proposals</td>

</tr>

</tbody>

</table>

Usually we think about customers as external to an organisation. For example when we buy something from JD sports, we are the customer. However in the roles above you can think of the **Project Sponsor** as a customer. They will ultimately receive the final product, but they may not use the product themselves, the team or their workers may end up using the product.

### Elicitation

> Requirements are not just waiting to be picked from people like apples from a tree. They have to be mined like tin or iron.

<small>“Developing Information Systems” by James Cadle</small>

It’s the **Business Analysts** that will go into an organisation and mine for requirements. How do they do this?

*   Interviews
*   Focus groups
*   Workshops
*   Observations
*   Shadowing
*   Scenarios
*   Prototyping

All of the above methods involve talking to people. There is also another approach that is more data driven.

*   Questionnaires
*   Document analysis
*   Record searching
*   Activity sampling

For example a business analysts might look at a user inputing data in a form and ask what are the current input fields in this form? Why these fields? Where is the input data used? or analysis screen grabs and dissect components. They might also want to know things like how many invoices are filed in a month? How many automated emails sent? When is the system at capacity? Volumetric information like this can help the analysis.

### Activity sampling

To perform **“Activity sampling”** you do the following: At different times (to generate a fair sample) visit a location or office floor and record what each person is doing. For example:

*   person1: Responding to emails
*   person2: In a meeting
*   person3: Tea break
*   person4: Working on a feature
*   person5: Standup

The set of activity samples when considered together can help provide an impression of what members of the organisation are doing during working hours.

## Assignment

In your own words can you explain the difference between the Project Sponsor and the Users?

[Project Sponsor and Users Assignment](https://applied.multiverse.io/mod/assign/view.php?id=7992&action=editsubmission)

<hr/>

## Lesson 2 - Function vs Non-Functional

## Learning Objectives

## Before we start

## Materials needed

## Lesson

<iframe width="100%" height="444" src="https://www.youtube.com/embed/zCX-N1H8Vps" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>

### The Output

The output of this stage is a requirements document. There are various forms this document might take. Below is a break down of the main 4.

<table>

<thead>

<tr>

<th style="text-align:left">output</th>

<th style="text-align:left">description</th>

</tr>

</thead>

<tbody>

<tr>

<td style="text-align:left">Business requirements</td>

<td style="text-align:left">General requirements high-level statements</td>

</tr>

<tr>

<td style="text-align:left">Stakeholder requirements</td>

<td style="text-align:left">Statements for the needs of individuals</td>

</tr>

<tr>

<td style="text-align:left">Solution requirements</td>

<td style="text-align:left">Detailed technical requirements (i.e. database must handle 2,000 concurrent connections)</td>

</tr>

<tr>

<td style="text-align:left">Transition requirements</td>

<td style="text-align:left">What is required to go from state A to state B (training, recruitment, processes, re-structuring)</td>

</tr>

</tbody>

</table>

### What makes a “Good” requirement

There is quite an art to form a good requirement. Below are the main qualities your requirement must have:

*   Atomic
*   Uniquely identified
*   Complete
*   Consistent and unambiguous
*   Traceable
*   Prioritised
*   Testable

In this table you can see examples of bad verses good requirements.

<table>

<thead>

<tr>

<th style="text-align:left">Quality</th>

<th style="text-align:left">Bad</th>

<th style="text-align:left">Good</th>

</tr>

</thead>

<tbody>

<tr>

<td style="text-align:left">Atomic</td>

<td style="text-align:left">Students will be able to enrol to undergraduate and post-graduate courses</td>

<td style="text-align:left">Students will be able to enrol to undergraduate courses.  

Students will be able to enrol to post-graduate courses.</td>

</tr>

<tr>

<td style="text-align:left">Unique id</td>

<td style="text-align:left">Students will be able to enrol to undergraduate courses, Students will be able to enrol to post-graduate courses</td>

<td style="text-align:left">**0x12** Course Enrolment  
**0x13** Undergraduate enrolment  
**0x14** Post-grad enrolment</td>

</tr>

<tr>

<td style="text-align:left">Complete</td>

<td style="text-align:left">A professor user will log into the system by providing his username, password, and other relevant information</td>

<td style="text-align:left">A professor user will log into the system by providing his username, password and department code</td>

</tr>

<tr>

<td style="text-align:left">Consistent</td>

<td style="text-align:left">A student will have either undergraduate courses or post-graduate courses but not both. Some courses will be open to both under-graduate and post graduate.</td>

<td style="text-align:left">A student will have either under-graduate or post graduates but not both.</td>

</tr>

<tr>

<td style="text-align:left">Traceable</td>

<td style="text-align:left">Maintain student information-mapped to BRD [req.ID](http://req.ID)?</td>

<td style="text-align:left">Maintain student information-Mapped to BRD req ID 4.1</td>

</tr>

<tr>

<td style="text-align:left">Prioritised</td>

<td style="text-align:left">Registered student-Priority 1  
Maintain User Information-Priority 1  
Enrol courses-Priority 1  
View Report Card-Priority 1</td>

<td style="text-align:left">Register Student-Priority 1  
Maintain User Information-Priority 2  
Enrol courses-Priority 1  
View Report Card-Priority 3</td>

</tr>

<tr>

<td style="text-align:left">Testable</td>

<td style="text-align:left">Each page of the system will load in an acceptable time-frame</td>

<td style="text-align:left">Register student and enrol courses pages of the system will load within 5 seconds</td>

</tr>

</tbody>

</table>

## Requirements Document

![contents of a requirements document](https://user-images.githubusercontent.com/4499581/75255155-64ddd200-57d9-11ea-953e-b9af99e10e97.jpg)

Typically you would find the sections listed above in a requirements document.

### Glossary of Terms

A glossary of terms is a dictionary of acronyms or domain specific words that need defining.

### Functional Models

Functional models are often a way to illustrate or explain how a system needs to work. Functional Decomposition is the process of breaking down that complexity into smaller functions. Below is an example from [sites.google.com/site/centerofmissingpeople](https://sites.google.com/site/centerofmissingpeople) of functional decomposition.

![an example of functional decomposition](https://sites.google.com/site/centerofmissingpeople/_/rsrc/1480218719774/decomposition-diagram/Functional%20decomposition.png)

## Assignment

In your own words can you identify a functional and non-functional component of the software you have worked on.

[Functional and Non-Functional Assignment](https://applied.multiverse.io/mod/assign/view.php?id=7993&action=editsubmission)

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/199)
[prev](/swe/mod3/wk1/day1.html) | [next](/swe/mod3/wk1/day3.html)
[main](/swe)