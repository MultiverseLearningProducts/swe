# Mod 3 > Week 1 > Day 4

## Overview of the day

Continuing our dive into the design phase of the SDLC we are also going to start looking at development phase (our area!).

----

## Lesson 1 - Security and control design

## Learning Objectives

* Identify the system components that need to be considered when designing software, including software architecture; user interface; user ergonomics; infrastructure / platform components; tools; operational processes; measures and metrics.

## Lesson

Security and control design are the mechanisms we design to ensure the system has integrity. The safeguards we introduce for the inputs and outputs of our system. For example; validating inputs from the user. Restricting write access to certain tables. Restricting read access for certain users.

![ordering system](https://user-images.githubusercontent.com/4499581/75792946-9240f780-5d66-11ea-9183-389a2758c527.jpg)

❓ In our ordering system above which part of the design is responsible for security and control?

## Scope

Let us now consider the design phase in the context agile and waterfall software development methodologies.

<table>
<thead>
<tr>
<th style="text-align:left">Methodology</th>
<th style="text-align:left">Design notes</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><img src="https://user-images.githubusercontent.com/4499581/75794619-f2d13400-5d68-11ea-97ea-85e4a63a720f.jpg" alt="waterfall"></td>
<td style="text-align:left"><h3>Waterfall</h3><p>In the waterfall method all the design work is done before the developers start to write any code. The scope of the design stage in waterfall is large.</p></td>
</tr>
<tr>
<td style="text-align:left"><img src="https://user-images.githubusercontent.com/4499581/75794618-f2389d80-5d68-11ea-989d-ede01ad61484.jpg" alt="v-model"></td>
<td style="text-align:left"><h3>V-Model</h3><p>In this method the designs created service as both instructions and verification. The design stage is often divided into system design and component design. The design stage is large in scope.</p></td>
</tr>
<tr>
<td style="text-align:left"><img src="https://user-images.githubusercontent.com/4499581/75794616-f1a00700-5d68-11ea-97ed-d8fd88a3ed27.jpg" alt="incremental"></td>
<td style="text-align:left"><h3>Incremental</h3><p>In the incremental method the design work is done before development begins. The designs might be created for all the different increments, so a set of designs for increment1, then another set of designs for increment2 etc. Whilst the scope of an increment is limited the design phase is not.</p></td>
</tr>
<tr>
<td style="text-align:left"><img src="https://user-images.githubusercontent.com/4499581/75794612-efd64380-5d68-11ea-9478-458e5a348aea.jpg" alt="iterative"></td>
<td style="text-align:left"><h3>Iterative</h3><p>With the iterative method design work is contained within an iterative cycle so is much shorter and smaller in scope.</p></td>
</tr>
</tbody>
</table>

## Outputs

The outputs of the design stage might be:

*   Use Case diagrams
*   Process diagrams
*   Data models
*   Class diagrams
*   Control flow diagrams
*   UI/Component/Form designs

## Assignment 🤔

* Explain in your opinion why [human computer interaction](https://www.interaction-design.org/literature/topics/human-computer-interaction) is an important consideration for the design of the software you create?
* In your own words what would you say is the **purpose** of the design stage of the SDLC
* Use this like to submit your assignment [Human Computer Interaction Assignment](https://applied.whitehat.org.uk/mod/assign/view.php?id=7995&action=editsubmission)

----

## Lesson 2 - The Development Phase

## Learning Objectives

We are going to learn about the following:

*   Summarise the main features and benefits of version control for the development of code, including change history; concurrent working; tracking and preventing conflicts; traceability; security.
*   Demonstrate how version control, in conjunction with configuration and release management, can be used for software that is being developed for use on multiple platforms.
*   Explain the importance of using coding guidelines and standards.
*   Explain the purpose of a range of programming tools, including compilers; interpreters; debuggers; GUI designers.
*   Explain the purpose and benefit of peer reviews and retrospectives in the development process.

## Lesson

The input for the Development phase are designs. Version control gives us the following 5 features can you research these and answer the questions below:

*   Change history
*   Concurrent working
*   Tracking and preventing conflicts
*   Traceability
*   Security

❓ Which git command lets you view the change history of a project tracked by git?

❓ If I want to work concurrently on a code base without disturbing the work of other team members what should I do?

❓ If I make changes that overwrite or alter code from the master branch what might happen?

❓ If I want to find out who wrote a particular line of code what traceability tool from git can I use?

❓ Which of the following is a valid security concern when using version control?

# 📄

Write a piece in your portfolio that demonstrates HOW you use git in your work. Address the five points above and relate them to your role and times you have used these features.

* * *

## Release Management

Throughout the software development process, your code will go through cycles of development, testing, and fixing. Depending on your team, technology, platform, and other variables, you’ll likely have several environments that you use to manage your application. 1 In order to effectively test and release software, it’s imperative to have a simple and reliable release process for getting your code onto your various environments.

Your options for release management are literally endless. You could write your own scripts entirely from scratch or lean on tools like Jenkins, CircleCI, GoCD or TeamCity.

If it’s difficult to release code, you won’t release as frequently, and you may end up facing difficult choices where you need to release an update but fear disrupting your customers or acting to quickly. With a good release process, you should be incredibly confident releasing updates with no interruption to your customers. The best rule of thumb to know if your release process is good is whether you get anxious when releasing updates. That anxiety is often a symptom of a lack of confidence in your processes, and you should probably spend some time streamlining your releases.

Beyond the necessary side of getting your code where it needs to be, one of the biggest benefits of good release management is the ability to rollback in the event of an emergency. No matter how finely tuned your development and release process is, you’ll occasionally have hiccups in production.

![rollback broken code](https://preview.redd.it/o0g6oez12yl01.jpg?width=960&crop=smart&auto=webp&s=d031a34a6f86ebabf21a75155b3dba3b25216958)

When this happens, you’ll want to be able to easily rollback to your previously released codebase without breaking anything. This way, you’re not forced to rush an ill-considered fix out the door. Instead, you just rollback so that you can resolve the issue without affecting customers and then release again when it’s ready.

You might also have different environments that you deploy to:

*   Development
*   Staging
*   QA testers
*   Production

### Continuous deployment

Continuous deployment is one of the most advanced setups for team that have quality and process locked down. In these situations, releases are set up to happen automatically if new code successfully passes all of the automated tests. In order to do this, your team has to have an incredibly level of confidence that new code is tested and working. In this scenario, whenever someone adds new code, it will be run through all of your automated tests and, assuming they pass, put the code into production.

* * *

# 📄

Write a piece in your portfolio that explains the coding guidelines and standards that you have to follow (i.e. code must have tests, code lint rules etc). You should also explain the process of peer reviews and retrospectives that you have to follow in your team.

# 👩‍💻🧑‍💻

In pairs explain the purpose of a range of programming tools, including compilers; interpreters; debuggers; GUI designers.

## 💻 Assignment

Take one of your repositories that is currently in version control (this should be a personal project). Can you implement a release management strategy for your project? Merging or pushing to master should trigger tests and a deployment.

# Outputs

The output of the development phase is untested working software.

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/201)
[main](/swe)|[prev](/swe/mod3/wk1/day3.html)|[next](/swe/mod3/wk1/day5.html)