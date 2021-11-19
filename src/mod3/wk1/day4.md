# Mod 3 > Week 1 > Day 4

## Overview of the day

Today we look at the Development stage of the SDLC.

----
## Lesson 1 - The Development stage

## Learning Objectives

*   Summarise the main features and benefits of version control for the development of code, including change history; concurrent working; tracking and preventing conflicts; traceability; security.
*   Demonstrate how version control, in conjunction with configuration and release management, can be used for software that is being developed for use on multiple platforms.
*   Explain the importance of using coding guidelines and standards.
*   Explain the purpose of a range of programming tools, including compilers; interpreters; debuggers; GUI designers.
*   Explain the purpose and benefit of peer reviews and retrospectives in the development process.

## Lesson

### Input to the Development stage
The inputs for the Development stage are software specifications (designs). 

### Purpose of the Development stage
The purpose of the Development stage is to build and/or assemble (high-quality) software components to meet a software specification (design).

### Version control
Version control (also known as _configuration management_) provides the following features:

*   Change history
*   Concurrent working
*   Tracking and preventing conflicts
*   Traceability
*   Security

There are many different types of version control, the mostly commonly used is `git`.

> _TASK_ - Test out your git knowledge with [this quiz](https://www.w3schools.com/quiztest/quiztest.asp?qtest=GIT)

### Coding standards and code reviews
Coding standards help us to develop better quality code by specifying best practices.

Nowadays, default language specific coding standards are incorporated into Interactive Development Environments (IDEs). Visual notifications of non-conformance help us fix code as we go, rather than relying on manual checks at the end of the development process. 

![IntelliJ compiler warning](https://user-images.githubusercontent.com/1316724/142285886-811efd5b-00a5-4fae-9f45-4711bf9c7843.png)

Code reviews look at the static code and detect bugs, vulnerabilities and "code smells". 

One very popular automated code review tool is [SonarQube](https://www.sonarqube.org/). SonarQube includes thousands of automated static code analysis rules.

![Example Sonar Qube rule](https://user-images.githubusercontent.com/1316724/142284540-6294c674-5cef-4cc2-a485-775265ac7eb6.PNG)

Manual code reviews are still really important, we often use `git Pull Requests` to do these.

![Example Pull Request](https://user-images.githubusercontent.com/1316724/142287329-6d434f59-739e-49ee-8824-8a8de1a5ef68.png)

### Release Management

Throughout the software development process, your code will go through cycles of development, testing, and fixing. Depending on your team, technology, platform, and other variables, you’ll likely have several environments that you use to manage your application, for example:

*   Development
*   Staging
*   QA test
*   Production

In order to effectively test and release software, it’s crucial you have a simple and reliable release process for pushing your code onto your different environments.

Your options for release management are endless. You could write your own scripts entirely from scratch or use tools like:
* [Jenkins](https://www.jenkins.io/)
* [CircleCI](https://circleci.com/)
* [GoCD](https://www.gocd.org/)
* [TeamCity](https://www.jetbrains.com/teamcity/)
* [GitHub Actions](https://github.com/features/actions)

If it’s difficult to release code, you won’t be able to deploy updates frequently and, when you do, you risk disrupting your customers. With a good release process, you should be incredibly confident releasing updates with no interruption to your customers. 

Another important benefit of good release management is the ability to rollback in the event of an emergency. 

### Continuous integration & Continuous Deployment (CI/CD)

_Continuous Integration (CI)_ describes the process of running automated builds and tests every time a commit is made to a shared repository.

_Continuous Deployment (CD)_ is a software release process whereby code is automatically packaged and released to a production environment if the code  passes all of the automated tests.

!(https://www.youtube.com/embed/M4CXOocovZ4)

### Outputs of the Development stage
The output of the Development stage is code which is ready for testing.

## Assignment
Update your portfolio with the following:

1.  A section named "Version Control" which describes:
   * the version control system you use
   * how concurrent changes are handled
   * a screen shot of a Pull Request that you created (hide names) with peer comments/approval

2. A section named "Continuous Integration" which describes:
   * how / when automated code checks are carried out
   * how / when automated tests are run (and what test coverage is expected)

3. A section named "Continuous Deployment" which describes:
   * how / when code is pushed to different environments

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/201)
[main](/swe)|[prev](/swe/mod3/wk1/day3.html)|[next](/swe/mod3/wk1/day5.html)