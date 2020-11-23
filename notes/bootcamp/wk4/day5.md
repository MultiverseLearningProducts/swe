# Bootcamp > Week 4 > Day 5 (Coach Notes)

## Overview of the day

Group projects time. Introduce end-to-end testing with Cypress.io

## Testing your app

At this point each group should have an app with some UI. Take one of the projects that is quite well formed i.e. where you can create a project. Fork or clone the repo and set up cypress.io in the project. Be aware Jest and Cypress do clash a bit and require some config to avoid both trying to run `.spec.js` files. Also you'll want to be able to run the app with an empty in memory database.

Talk about the value and purpose of end to end testing. Step through creating a test that navigates to a page and creates a project/board. Main API to demonstrate is:

* `cy.visit`
* `cy.get`
* `cy.get(el).type("show them from filling")`
* `cy.get(el).click()`
* `cy.get(el).find(el).contains("the project you just created")`

They will be blown away by this. Encourage them to have a go at writing even 1 user journey. It's way quicker then manually typing stuff in and clicking around.

The rest of the day continue in your supporting role.
