# Bootcamp > Week 4 > Day 5

## Overview of the day
Today we will look at front-end system testing using a tool called [Cypress](https://www.cypress.io/).

----

## Lesson 1 - Executing system tests in the browser

## Learning Objectives

* Recall the purpose of system tests
* Set up Cypress testing in your project

## Before we start

* You need your To Do app in a state where you have some UI elements on the page, alternatively you can learn about Cypress using your Restaurant app
* Your app needs to run in a test mode

## Materials needed

* [Cypress](https://www.cypress.io/)

## Lesson

Your app will need to run in 3 different environments: Your laptop, the deployment server and when we are running tests. Before adding Cypress system (or end-to-end) tests make sure your app can run in a test mode (e.g. using a test or in-memory database with fixed 'seed' data).

To install Cypress in your project folder run:

```sh
npm install cypress --save-dev
```

This may take a while as there are a large number of dependencies!

*Note:* there should be no need to install Mocha (test syntax) and Chai (assertions) are these are bundled with Cypress.

Run `./node_modules/.bin/cypress open` - this will add a number of folders and sample tests to your project directory. If you prefer you can delete these examples to save any confusion but do keep the `cypress/integration` and `cypress/fixures` folders.

### What does Cypress do?

Have you been testing your app in the browser to make sure it works? Cypress can automate this for you. Encoding critical user journeys is incredibly valuable. It is much quicker than us clicking round the site. These journeys are then encoded and repeatable, and continuous integration tools can be set up to run these tests before each deployment.

### Getting started

Writing Cypress tests is similar to the tests we have been writing with Jest. The first thing we will need to do is have our app running in test mode. Then let's write a first test. In the `/cypress/integration` folder create a test spec file for example `homepage.spec.js`. Then create a simple test like the one below.

If you are testing your 'Restaurant' app:

```javascript
describe('Restaurant tests', () => {
    it('finds the restaurant website', () => {
      cy.visit('http://localhost:3000');
    })

    it('opens the Add Restaurant page', () => {
        cy.visit('http://localhost:3000');

        // search for the DOM element by content 
        // and then call 'click'
        cy.contains('Add').click();
      })
  })
```

If you are testing your 'To do' app:

```javascript
describe('/', () => {
    it('the home page loads 2 seed tasks', () => {
        cy.visit('http://localhost:3001/')
        cy.contains('Tasks')
        cy.get('ul')
          .find('li')
          .should($li => {
              expect($li).to.have.length(2)
          })
    })
})
```

Run your tests by adding the script below to your `package.json` and triggering it with `npm run test:cypress`

```json
"test:cypress": "cypress open"
```

What is new here is the `cy` object this object is our API for driving the browser. You can see we start by visiting a web address (our app must be running). We assert that the page `contains` the text 'Tasks' (thats my `<h1>` title). Then I get an element (you can select elements using .css selectors), find the `<li>` children (my tasks), finally I make an assertion that there should be 2 tasks.

You can peek inside the example folder for the syntax to do all kinds of things you do in your browser. If you are testing your 'To do'app, one obvious test to try next would be to add a task.

```javascript
it('adds a new task to the list', () => {
    cy.visit('http://localhost:3000/')
    cy.get('input').type('New test task')
    cy.get('button').click()
    cy.get('ul')
    .find('li')
    .should($li => {
        expect($li).to.have.length(3)
    })
    .get('ul').find('li').last().contains('New test task')
})
```
Above we visit the page, get the `<input>` element, 'type' "New test task" into the input, then target and "click" the Add button, finally we make the assertion that there is a new task in the list. Awesome.

**Note**
  1. if your application uses cookies, please note that Cypress will, by default, clear cookies between each test
  2. If there are any errors on your page, Cypress will fail the test. Using Developer Tools, fix the error and rerun the test.


## Assignment
Use the instruction above to help you install Cypress and write a test or else refer to this [Introduction to Cypress](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Add-a-test-file) video.

* If you are doing this lesson prior to working on your team project then create tests to cover the following use cases in your Restaurant website:
     * (after initialising the database) test your home page has x number of restaurants
     * add a new restaurant and assert it has been added
     * delete a restaurant and assert it has been removed

* If you are working on this lesson and have developed a 'To do' application then:
     * In your team decide on 2 critical user journeys
     * Encode these 2 journeys



[attendance log](https://platform.whitehat.org.uk/apprentice/attendance-log/172)
[main](/swe)|[prev](/swe/bootcamp/wk4/day4.html)|[next](/swe/bootcamp/wk5/day1.html)