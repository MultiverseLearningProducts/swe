# Bootcamp > Week 1 > Day 5

## Overview of the day

Today is just about practicing what you have learnt so far. We will also briefly discuss [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html). 

*(Note to coaches - it is prefereable to provide a class diagram, sequence diagram and use case diagram for this Scooter Hire System so that students can focus just on implementing classes and writing tests, rather than having to do a system analysis. Alternatively, you can present the introduction to UML from Week 2 Day 1 and then allow the students to create their own class diagram, sequence diagram and use case diagram for this Scooter Hire System prior to writing their classes and tests).*

## Lesson 1 - London Scooter Hire

## Learning Objectives

* Demonstrate what you have learnt this week by writing classes for a new domain
* Set up Jest tests to unit test these classes
* Write tests to test asynchronous timer functions

## Before we start

* Refer to your airports project in your github as a reference
* Refer to the content of Day 4 and ensure you understand how async code works

## Materials needed

* N/A

## Lesson
In this assignment you will make use of the `setTimeout` call. If you wish to wait for charging to complete in your method, one way to write your code is as follows:
```js
    async charge() {
        console.log('Starting charge'); 

        await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds

        console.log('Charge complete');   // after 2 seconds this line will print
    }
```

This code uses the `async` `await` method of handling callbacks, introduced in ES6. `await` only works with Promises and makes JavaScript wait until a promise settles. In the code above, we wrap the 2 second timer in a Promise, i.e. we say 'when the timer completes either successfully or with an error, promise me you will return'. The `await` keyword pauses execution of the function (in this case *charge()*) until the promise is settled. So, in the code above, the 'Charge complete' text is only logged after 2 seconds.

Note that `await` only pauses execution of the function it is in. This means that any calling functions also need to `await` hence the Jest test for the code above will look like this:
```js
    test('charge', async () => {
        const scooter = new Scooter();
        await scooter.charge(); // we need to wait for the charge!
        console.log("Test complete");
    })
```

## Assignment

You have been asked to create a scooter hire system. Electric scooters need to be charged at scooter charging stations. Users can only hire and unplug a scooter if the battery is fully charged. Users always use up the battery charge, so when a scooter is returned to a charging station, you can expect the battery to be empty. It takes about 2000 milliseconds to charge a scooter (you have to wait, it's async).

You code should be structured into the following directories:
   * /src
   * /tests

You will need to commit the following to your GitHub repository:
   * Classes with interactions (methods calls) that you feel capture this functionality
   * All classes must be JSDoc'd
   * Tests which cover all of the above
   * A screenshot of your coverage report (aim for 100% coverage)
   * JSDoc documentation generation

## Lesson 2 - TypeScript 
TypeScript can be thought of as JavaScript with additional features like strong static typing, compilation, and object oriented programming. Here is a TypeScript version of our Bag we used in the Airports assignment:
```js
class Bag {
 
    private weight:number; // kg

    constructor(weight:number) {
        if (!weight) {
            throw new Error('bag must have a weight');
        }
        this.weight = weight;
    }

    public getWeight():number { 
        return this.weight*1000; // return it in grams
    }
}

export = Bag;
```

Notice how we specify the keyword `private` against the weight variable. This means the weight cannot be directly accessed, instead, the accessor method `getWeight()` must used. This works to our advantage as we can hide the fact we are storing the weight as kilograms internally, and exopose it in grams.

So, this will NOT work:
```js
const bag = new Bag(20);
console.log(bag.weight);
```

But this will:
```js
const bag = new Bag(20);
console.log(bag.getWeight());
```


To use TypeScript globally, run `npm install -g typescript`.

You also need to create a `tsconfig.json` file and name your Typescript files with the `.ts` extension. Here is an example, simple `tsconfig.json` file:

```json
{
    "compilerOptions": {
      "outDir": "./built",
      "module": "CommonJS",
      "lib": ["es6", "dom"],
      "allowJs": true,
      "target": "es6"
    },
    "include": ["./src/**/*"],
    "exclude": [
        "node_modules"
      ]
  }
```

You can then run `tsc` to have the Typescript compiler generate the `.js` files in a `/built` directory.

Note that the TypeScript files must use `export = NameOfClass;` rather than `module.exports`.

Jest test can be run as normal on the generated JavaScript files.


[attendance log](https://platform.multiverse.io/apprentice/attendance-log/157)

[main](/swe)|[prev](/swe/bootcamp/wk1/day4.html)|[next](/swe/bootcamp/wk2/day1.html)

