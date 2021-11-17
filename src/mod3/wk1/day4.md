# Mod 3 > Week 1 > Day 4

## Overview of the day

Today we look at the Development stage of the SDLC

----
## Lesson 1 - The Development Phase

## Learning Objectives

*   Summarise the main features and benefits of version control for the development of code, including change history; concurrent working; tracking and preventing conflicts; traceability; security.
*   Demonstrate how version control, in conjunction with configuration and release management, can be used for software that is being developed for use on multiple platforms.
*   Explain the importance of using coding guidelines and standards.
*   Explain the purpose of a range of programming tools, including compilers; interpreters; debuggers; GUI designers.
*   Explain the purpose and benefit of peer reviews and retrospectives in the development process.

## Lesson

### Input to the Development stage
The inputs for the Development stage are designs. 

### Purpose of the Development stage
The purpose of the Development stage is to build and/or assemble (high-quality) software components to meet a system design.

### Version control
Version control (also known as _configuration management_) provides the following features:

*   Change history
*   Concurrent working
*   Tracking and preventing conflicts
*   Traceability
*   Security

There are many different types of version control, the mostly commonly used is `git`.

❓ Which `git` command lets you view the change history of a project tracked by git?

❓ If I want to work concurrently on a code base without disturbing the work of other team members what should I do?

❓ If I make changes to the same line of code as another developer how does version control software indicate this to me?

❓ If I want to find out who wrote a particular line of code what traceability tool from `git` can I use?

❓ What features could you use in GitHub to ensure no one outside your company can see the code

### Coding standards and code reviews
Coding standards help us to develop better quality code by specifying best practices.

Code reviews look at the static code and detect bugs, vulnerabilities and "code smells". 

Nowadays, default language specific coding standards are incorporated into Interactive Development Environments (IDEs). Visual notifications of non-conformance help us fix code as we go, rather than relying on manual checks at the end of the development process. 

TODO - add diagram

One very popular automated code review tool is [SonarQube](https://www.sonarqube.org/). SonarQube includes thousands of automated static code analysis rules such as:
* TODO

SonarQube is often incorporated into a Continous Deployment pipeline - TODO

Of course, manual code reviews still have their place

TODO - PRs

### Release Management

Throughout the software development process, your code will go through cycles of development, testing, and fixing. Depending on your team, technology, platform, and other variables, you’ll likely have several environments that you use to manage your application, for example:

*   Development
*   Staging
*   QA test
*   Production

In order to effectively test and release software, it’s imperative you have a simple and reliable release process for pushing your code onto your different environments.

Your options for release management are literally endless. You could write your own scripts entirely from scratch or lean on tools like [Jenkins](https://www.jenkins.io/), [CircleCI](https://circleci.com/), [GoCD](https://www.gocd.org/) or [TeamCity](https://www.jetbrains.com/teamcity/).

If it’s difficult to release code, you won’t be able to deploy updates frequently and, when you do, you risk disrupting your customers. With a good release process, you should be incredibly confident releasing updates with no interruption to your customers. 

Beyond the necessary side of getting your code where it needs to be, one of the biggest benefits of good release management is the ability to rollback in the event of an emergency. No matter how finely tuned your development and release process is, you’ll occasionally have hiccups in production.

When this happens, you’ll want to be able to easily rollback to your previously released codebase without breaking anything. This way, you’re not forced to rush an ill-considered fix out the door. Instead, you just rollback so that you can resolve the issue without affecting customers and then release again when it’s ready.

You might also have different environments that you deploy to:


### Continuous deployment

Continuous deployment is a software release process whereby releases to a production environment happen automatically if new code successfully passes all of the automated tests. In order to do this, your team must have a TODOhas to have an incredibly level of confidence that new code is tested and working. 

### Outputs of the Development stage
The output of the Development stage is code which is ready for test. Note that in reality unit testing may have - TODO

## Assigment 1

📄 Update your portfolio with a section which details:
   * the version control system you use
   * how concurrent changes are handled
   * the coding standards you use 
   * any tools (e.g. SonarQube) you use and why this benefits
   * how peer reviews are carried out   

Make specific reference to projects you have worked on and show screenshots to bring the words to life.

## Assigment 2
Install SonarQube and use it to analyse personal code that you have written (e.g. the code from the Bootcamp). 

## Assigment 3
In pairs, explain the purpose of a range of programming tools, including compilers; interpreters; debuggers; GUI designers.


[attendance log](https://platform.multiverse.io/apprentice/attendance-log/201)
[main](/swe)|[prev](/swe/mod3/wk1/day3.html)|[next](/swe/mod3/wk1/day5.html)