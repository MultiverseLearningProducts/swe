# Mod 3 > Week 1 > Day 5

## Overview of the day

Writing tested code is a foundational competency. Today we are exploring 7 of the more high level principles behind good testing strategies.

----

## Lesson 1 - Testing

## Learning Objectives

* Explain why testing is necessary, including the principles of early testing; risk
reduction; conformance to functional and non-functional requirements; finding
defects; differentiating testing from debugging.
* Explain how to determine the correct types of test coverage based on a
requirement.
* Summarise the different levels of testing, their purposes and the generic test
process that supports them:
    - unit testing;
    - integration testing;
    - system testing;
    - acceptance testing.
* Describe different types and techniques for software testing and why they would be
used, including:
    - functional and non-functional testing;
    - regression testing;
    - White Box and Black Box testing;
    - experience-based testing.
* Distinguish functional and non-functional categories of tests for a given case.

## Lesson

This section will cover the following:

*   The 3 reasons why we test code
*   The 7 Principles of Software Testing
*   4 Different types of testing
*   6 Different techniques of testing

# Inputs

The input for the testing phase is untested software.

## Why Test?

The purpose of testing software is to remove

1. Errors
1. Defects
1. Failures

Errors caused by code that is incorrect. Defects caused by code that works, but does not work in the way it is intended too. Failures cause your software to stop working all together. Testing should be written to ensure your software is free from these 3 kinds of defects.

## The 7 Principles of Software Testing

![testing systems](https://user-images.githubusercontent.com/4499581/79204022-ce6e7a00-7e33-11ea-81cb-d6b3498ca10f.png)

In the diagram above you can see the **International Software Testing Qualifications Board’s** 7 principles of testing.

To test exhaustibly is not practical or possible. For example 15 fields in a form that can each take one of 5 possible values would required 30,517,578,125 unit tests to prove each combination. Please don’t do that. Testing frameworks have to be tested by other tests…

![turtles all the way down](https://i.imgur.com/ksa6Y1j.jpg)

…turtles all the way down.

# 👩‍💻🧑‍💻

In pairs discuss the following scenario. I have a file in folder A and want to move it to folder B. What are all the different things that could go wrong?

!(https://www.youtube.com/embed/rFaWOw8bIMM)

## 4 Different types of testing

1.  Unit
2.  Integration
3.  System
4.  Acceptance

### Unit Testing

Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object. Unit tests are static tests (see below).

### Integration Testing

Integration tests determine if independently developed units of software work correctly when they are connected to each other. These tests often assert behaviours, and can be static or dynamic. For example calling this endpoint;

    /users/x023/photos

should return a JSON string with an array of urls. This is testing that the server correctly interacts with the database and returns the correct values.

### System Testing

The whole system is run. This is a dynamic test. Examples of system testing are end-to-end tests; automated, codified interactions (see [cypress.io](https://www.cypress.io/)) with assertions of state or outputs. Other examples of system testing include;

*   load testing
*   penetration testing (PEN testing)

### Acceptance Testing

The purpose of this test is to evaluate the system’s compliance with the business requirements and assess whether it is acceptable for delivery. You built a perfect bridge, but have you met the business requirements?

![bridge built in wrong place](https://capiro.co.uk/wp-content/uploads/2017/02/HiRes-e1486720284485.jpg)

## 6 Different techniques of testing

1.  Static/Dynamic
2.  White Box/Black Box
3.  Functional/Non-functional

|Static|Dynamic|
|:--|:--|
|![static van](https://cdn.motor1.com/images/mgl/EqyMv/s1/volkswagen-id-buzz-concept-detroit-2017.jpg)|![dynamic moving van](https://www.inchcape.co.uk/-/media/ba79d1fea496499b8ec94a3dbe692b96.jpeg?la=en-gb&amp;hash=193E23BD23DFD2666426DB2E5C8FFE92)
|Static tests do not require your app to be running. You can test things on a static vehicle; for example do the lights work? can you move the seats?|Dynamic tests require your app to be running. To really test the breaks of a vehicle, you need to get up some speed.|

|Black Box|White Box|
|:--------|:--------|
![black box](https://user-images.githubusercontent.com/4499581/79354719-afa3dc80-7f34-11ea-9379-802c2f0bf121.jpg)|![white box](https://user-images.githubusercontent.com/4499581/79354705-aa469200-7f34-11ea-81e2-6dca80025096.jpg)
|Black box testing asks WHAT the system does. WHAT inputs produce WHAT outputs.|White box testing tests HOW things work? HOW does your logic work? Does the structure of the code deal with all the possible states?|

!(https://www.youtube.com/embed/tlThdr3O5Qo)

|Functional|Non-functional|
|:--------|:--------|
Do the breaks work? Does the route load on the map ok? Does auto pilot initiate ok?|Does it feel safe? It is boring? Is it easy to stop the auto pilot?

**Functional testing** is binary. Think PASS/FAIL. On a form functional input might be a checkbox.

**Non-functional testing** is NOT binary, it requires more explanation. Think FEELINGS? On a form non-functional input might be a free text field inviting your thoughts.

Both of these are important to test for.

## Assignment

Given I have a file in folder A and want to move it to folder B. What are all the different things that could go wrong? Can you write a list of test cases (things you would test) for this scenario? Post your test cases to your coach via Slack.

----

## Lesson 2 - Equivalence classes and Use Cases

## Learning Objectives

* Recognise that different organisations apply different approaches to testing depending on development methodologies used and organisational preferences.
* Distinguish advantages and disadvantages of using independent software testing teams as opposed to using testers who have been involved in other aspects of development.
* Explain the use of equivalence classes and use cases in testing code
* Show how to efficiently and effectively debug code, including:
    - Types of error;
    - Exception handling;
    - Reproduction;
    - Elimination;
    - Logging;
    - Test coverage.

## Before we start

## Materials needed

## Lesson

One of the seven principles of testing is **exhaustive testing is impossible**. So how should we go about testing our applications? The answer is to use equivalence classes.

Say we have an input field that is designed to take the number of tickets you can book for a concert. One individual can buy upto 10 tickets. We want to test this. For example

*   Selecting -2 tickets is not a valid amount
*   Selecting 11 tickets is not a valid amount
*   Selecting 6 tickets is OK

We can divide up the range of possible values like this.

![equivalence classes example](https://user-images.githubusercontent.com/4499581/79448889-23e48b80-7fda-11ea-8397-96a67b7165b5.png)

What emerges are four “classes” of tests that are created by the different ranges of valid and invalid possible inputs.

1.  negative numbers <span style="color:red;">FAIL</span>
2.  zero <span style="color:red;">FAIL</span>
3.  valid amount 1 - 10 <span style="color:green;">PASS</span>
4.  out of range values <span style="color:red;">FAIL</span>

We only need one test in each class because, testing that 6 is OK would be equivalent to testing 7 is OK. They are both valid amounts, the result of the test would be the same or equivalent. There is no point in testing in this class more than once because the results are equal or equivalent. Same for the out of range values, we tested with 11, but would expect the same results for 50, 100, 1000 etc

### Boundary Value Analysis

We could also do some **boundary value analysis** by testing the boundaries of our values as defined in our equivalence classes. For example let us set a lower limit of -99, and an upper limit of 99\. Then we might have a set of tests for the following values:

*   -99
*   -1
*   0
*   1
*   10
*   11
*   99

Can you see we test the values at each boundary? The min and max possible values as identified by our equivalence classes.

### Use cases (test cases)

Use cases apply the same idea as equivalence classes, but scaled up and applied to a whole system. Below you can see a diagram of a system. Carefully selected user journeys are put together so that every part of the application is tested.

![use case example](https://user-images.githubusercontent.com/4499581/79450177-7b83f680-7fdc-11ea-9f55-8fe1c7361de4.gif)

Can you see how each test lights up a different part of the application. One of those tests is a use-case, together they form a set of test cases. These test cases test the whole application (not exhaustively) section by section.

### Outputs

The output of the testing phase is fully tested software.

## Assignment

Can you explain in your own words the 7 principles of software testing. Follow this link - [7 Testing Principles Assignment](https://applied.whitehat.org.uk/mod/assign/view.php?id=7996&action=editsubmission) - to submit your written assignment.


[attendance log](https://platform.multiverse.io/apprentice/attendance-log/202)
[main](/swe)|[prev](/swe/mod3/wk1/day4.html)|[next](/swe/mod3/wk2/day1.html)