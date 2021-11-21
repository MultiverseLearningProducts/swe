# Mod 3 > Week 1 > Day 5

## Overview of the day

Today we look at the Testing stage of the SDLC.

----

## Lesson 1 - The Testing stage

## Learning Objectives

* Explain why testing is necessary, including the principles of early testing; risk reduction; conformance to functional and non-functional requirements; finding defects; differentiating testing from debugging.
* Explain how to determine the correct types of test coverage based on a requirement.
* Summarise the different levels of testing, their purposes and the generic test process that supports them:
    * unit testing;
    * integration testing;
    * system testing;
    * acceptance testing.
* Describe different types and techniques for software testing and why they would be used, including:
    * functional and non-functional testing;
    * regression testing;
    * White Box and Black Box testing;
    * experience-based testing.
* Distinguish functional and non-functional categories of tests for a given case.
* Recognise that different organisations apply different approaches to testing depending on development methodologies used and organisational preferences.
* Distinguish advantages and disadvantages of using independent software testing teams as opposed to using testers who have been involved in other aspects of development.
* Explain the use of equivalence classes and use cases in testing code
* Show how to efficiently and effectively debug code, including:
    * Types of error;
    * Exception handling;
    * Reproduction;
    * Elimination;
    * Logging;
    * Test coverage.

## Lesson

## Inputs to the Testing stage

The input to the Testing stage is untested software.

## Why Test?

The purpose of testing software is to ensure the quality of the system is as high as possible by removing:

1. _Errors_ - mistakes made by humans
1. _Defects_ - bugs in software code
1. _Failures_ - stopping the system from doing something it should

!(https://www.youtube.com/embed/tlThdr3O5Qo)

Tests are based on 2 key principles:
* _Verification_ - is the system being build in the correct way?
* _Validation_  - is the right system being build?

The earlier in the SDLC we test, the sooner we find issues and avoid shipping flawed software. 

![the cost of a bug at different stages of the SDLC (more expensive as you go through the stages)](https://user-images.githubusercontent.com/1316724/142419932-fa647920-0470-438d-976c-d4578074e96b.PNG)

## The "V" model

The "V" model (also known as the Verification and Validation model) associates a testing phase to each SDLC stage.

![V Model](https://user-images.githubusercontent.com/1316724/142781595-511a1e63-ce95-46fe-89b2-1c18dcf71efa.PNG)

_Static testing_ focusses on the early stages of the SDLC, before code is written. It aims to remove errors which could lead to defects in software code. Examples of static testing include:
* checking requirements against the business case
* checking the design against requirements

Static testing is done via reviews and walkthroughs.

_Dynamic testing_ focusses on testing the code as it is executing. It aims to detect defects. Examples include:
* unit testing
* system testing
* user acceptance testing

We can further breakdown dynamic testing into:

_Black-box_ testing - here we treat the system as a black box and only concern ourselves with the inputs and output e.g. system testing, integration testing, user acceptance testing

_White-box_ testing - here we are aware of the inner workings of our code e.g. unit tests

|Black Box|White Box|
|:--------|:--------|
![black box](https://user-images.githubusercontent.com/4499581/79354719-afa3dc80-7f34-11ea-9379-802c2f0bf121.jpg)|![white box](https://user-images.githubusercontent.com/4499581/79354705-aa469200-7f34-11ea-81e2-6dca80025096.jpg)
|Black box testing asks WHAT inputs produce WHAT outputs|White box testing asks HOW the internal logic of the system works|

_Experience-based testing_ - key stakeholders identify areas of the system that, in their experience, are likely to be yield defects e.g. areas of high complexity, areas which previously caused issues.

## The 7 Principles of Software Testing
The International Software Testing Qualifications Board describes the following 7 principles of testing.

![testing systems](https://user-images.githubusercontent.com/4499581/79204022-ce6e7a00-7e33-11ea-81cb-d6b3498ca10f.png)

This video explains each one in detail.

!(https://www.youtube.com/embed/rFaWOw8bIMM)

## More on dynamic testing

Dynamic testing is concerned with 4 test types:

1.  Unit
2.  Integration
3.  System
4.  Acceptance

### Unit Testing

Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.

> Unit tests are run by developers

### Integration Testing

Integration tests determine if independently developed units of software work correctly when they are connected to each other. For example calling this endpoint `/users/x023/photos` should return a JSON string with an array of urls. This is testing that the server correctly interacts with the database and returns the correct values.

> Integration tests are run by developers or testers

### System Testing

Examples of system testing are end-to-end tests such as [Cypress tests](https://www.cypress.io/)) with assertions of state or outputs. Other examples of system tests include non-functional tests such as load/performance tests, security penetration tests.

> System tests are run by testers

### Acceptance Testing

The purpose of acceptance tests are to evaluate the system’s compliance with the business requirements and assess whether it is acceptable for delivery. You built a perfect bridge, but did you meet the business requirements?! The Use Cases and User Stories developed during the Requirements Analysis stage help define user acceptance tests.

> Acceptance tests are run by the end-users, supported by business analysts


## Non-functional testing
During each stage of dynamic testing we must ensure that the system meets the non-functional requirements defined in the Requirements Analysis stage of the SDLC. Non-functional testing includes:
* performance testing
* load testing
* security testing
* accessibility testing
* backup & recovery testing

This video explains how a load testing tool works.

!(https://www.youtube.com/embed/38VsAXAZZMg)

## Writing a good test case

### Equivalence classes
One of the seven principles of testing is **exhaustive testing is impossible**. So how should we go about testing our applications? The answer is to use _equivalence classes_. Equivalence partioning divides the input data to a software unit into partitions of equivalent data from which test cases can be derived.

Imagine we have an input field that is designed to take the number of tickets you can book for a concert. One individual can buy up to 10 tickets. We want to test this. For example

*   Selecting -2 tickets is not a valid amount
*   Selecting 11 tickets is not a valid amount
*   Selecting 6 tickets is OK

What emerges are four classes or partions of tests that are created by the different ranges of valid and invalid possible inputs.

1.  negative numbers <span style="color:red;">FAIL</span>
2.  zero <span style="color:red;">FAIL</span>
3.  valid amount 1 - 10 <span style="color:green;">PASS</span>
4.  out of range values <span style="color:red;">FAIL</span>

We only need one test in each class because, testing that 6 is OK would be equivalent to testing 7 is OK. They are both valid amounts, the result of the test would be the same or equivalent. There is no point in testing in this class more than once because the results are equal or equivalent. Same for the out of range values, we tested with 11, but would expect the same results for 50, 100, 1000 etc

### Boundary Value Analysis

Boundary testing is the process of testing the extreme ends or boundaries of input values.

For example, imagine we are writing an application which alerts individuals between 28 and 40 to come for their COVID vaccination. Both 28 and 40 will be considered as boundary values. 

The assumption of boundary value analysis is that boundary values are most likely to cause an error.

## Regression testing
Regression testing ensures that unchanged areas of the system have not been affected by new changes. Running the regression test suite is just as important as creating and running new tests! 

## Writing a test plan
A test plan typically includes:
* Test schedule
* Test data
* Test scenarios
* Entry criteria
* Exit criteria
* Traceability to requirements

## Outputs

The output of the Testing phase is fully tested software.

## Assignment
1. Look for job vacancies for software testers - what kind of skills do they require? 

2. What are the advantages and disadvantages of outsourcing testing to an external organisation?

3. Update your portfolio to evidence different kinds of tests e.g. unit, system, performance

## Additional resources
[Example job spec for a tester at Tesla](https://www.tesla.com/en_GB/careers/search/job/software-qualityassuranceengineer-75010)

[Fireside Chat: DevOps at Amazon with Ken Exner, GM of AWS Developer Tools - AWS Online Tech Talks](https://www.youtube.com/watch?v=FlZm3nFMIAM&t=2153s)

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/202)
[main](/swe)|[prev](/swe/mod3/wk1/day4.html)|[next](/swe/mod3/wk2/day1.html)