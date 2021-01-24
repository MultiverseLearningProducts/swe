# Bootcamp > Week 3 > Day 2

## Overview of the day

----

## Lesson 1 - Iteration

## Learning Objectives

* Demonstrate how to combine an array of data with a template
* Use iteration to repeatedly create dynamic html content

## Before we start

* Have the app server you created yesterday ready
* Make sure you have a data model ready to use

## Materials needed

* N/A

## Lesson

Our app has an array of restaurants that we want to display on our page. Handlebars enables us to iterate over an array of data and repeatedly add the same parsed html block to our final page. This is how dynamic lists of content are rendered. The example below can be seen all over the intenet and is a good example of a _card_ component.

![example of the card component](https://user-images.githubusercontent.com/4499581/95015340-344df880-0644-11eb-8ce4-30609f0de5fe.jpg)

Can you recognise the template vs the dynamic content in the example above?

### Pass the data into the template

The first step is preparing our data for the template, and the second is passing it to the template.

1. The example below uses sequelize to fetch all the restaurants
1. The first argument to `response.render` is the matching string name of the template file we want to render, i.e. 'home'
1. The second argument to `response.render` is our data in an object.

```javascript
app.get('/', async (req, res) => {
    const restaurants = await Restaurant.findAll({
        include: [{model: Menu, as: 'menus'}],
        nest: true
    })
    res.render('home', {restaurants})
})
```
_to use `include` as in the code above, make sure your sequelise model has this alias added. This config sets the name of the property our associated model will be stored on; i.e. `restaurants.menus`._

```javascript
Restaurant.hasMany(Menu, {as: 'menus'})
Menu.belongsTo(Restaurant)
Menu.hasMany(Item, {as: 'items'})
Item.belongsTo(Menu)
```

In our template there will be an objected called 'restaurants' that will be our array of data that came from `await Restaurant.findAll()`. We can write our html elements as if this was an html file, only when we want to pharse some dynamic content we can use handlebars to create placeholders. This is very much like 'mail merge' in word or other pieces of software you might have come across.

To repeat a block of code for every item in an array we can use the built in template helper `{{#each}}` that comes with handlebars.

```html
<h1>Restaurants</h1>
<section>
    {{#each restaurants}}
        <article>
            <header></header>
            <main>{{this.name}}</main>
            <footer>{{this.menus.length}} menus</footer>
        </article>
    {{/each}}
</section>
```
From the code above where does the repeating block of html begin and end? Try this in your browser, when you inspect the html what do you expect to see?

## Assignment

* Can you render all your restaurants?
* In addition to each restaurant, can you also display the title of each menu?

----

## Lesson 2 - Responsive CSS grids

## Learning Objectives

* Use @media
* Implement a responsive CSS grid

## Before we start

* You will need html content on your page to apply your grid styling to
* You should know how to simulate different devices in chrome dev tools

## Materials needed

* style.css file served from your public folder

## Lesson

We have restaurants on the page! What we don't have is something attractive or pleasing. We need to give our html page some loving css rules to lay it out nicely. Designing for the web is quite unsual because the screen sizes for a web page are so dramatically different.

![different screen sizes for web pages](https://d1xzrcop0305fv.cloudfront.net/wp-content/uploads/2016/06/zymr-adaptive-responsive-design_3.jpg)

Where do we put things if we want our page to look good on both a mobile phone and a large 26" monitor? The anwser to this question was beautifully addressed by Ethan Marcotte back in 2010 an a blog he wrote called [responsive web design](https://alistapart.com/article/responsive-web-design/).

### Responsive @media

CSS comes with a `@media` API which was orignialy added to the spec so you could style a printer friendly version of your page. The basic API of `@media` enables you to apply css to your page at particular screen sizes. The css is immediately applied so your page does not require a refresh for the new css rules to be visible once your screen size changes.

This solved the problem of having to server different html templates and css to different devices.

### Mobile first

To make your page responsive we need to override the scaleing behaviour of many mobile browsers. Add the following line to the `<head>` element of your html `main.handlebars` file.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

The way to implement a responsive layout is start with the smallest screen size; the mobile. These layouts are often the most simple. As the screen size get larger you can start to make more use of the real estate that becomes available.

Lets start. Empty your `style.css` and add the following css:

```css
* {
    padding: 0;
    margin: 0;
}
/* css for mobile goes here */
@media screen and (min-width: 40em) {
  /* css for mid screens goes here */
}
@media screen and (min-width: 60em) {
  /* css for massive screens goes here */
}
```
This css gives us two break points. at 30em and then at 60em. We remove any browser default padding or margin. Can you get your background color to change at the different break points?

### Grid

Use the different device profiles that come with the chrome dev tools.

[![chrome dev tools](https://developers.google.com/web/tools/chrome-devtools/device-mode/imgs/landscape.png)](https://developers.google.com/web/tools/chrome-devtools/device-mode)

Pick a mobile phone. Set the orientation to portrait. For small screens our content can just be in a single column, then our user scrolls through the restaurants. This is where we can start. We want a single resturant _card_ to occupy the width of the screen. So lets just start with this:

```css
h1 {
    padding: 1rem;
    border-bottom: solid 1px black;
}
article {
    border: solid 1px black;
    width: calc(100% - 2rem);
    height: 35em;
    margin: 1rem 1rem;
}
```
Now we have a card shape box in which we can display information about each restaurant (including it's 'thumbnail' image). They are spaced out evenly and we can scroll through them. I am also using `calc()` to calculate the width of the viewport minus the margins either side.

What happens a the first breakpoint?

Once our viewport size has broken through to be greater than `40em` the next block of css will override previous styles. We want to jump from a single column layout to a 2 column layout.

```css
@media screen and (min-width: 40em) {
  /* css for mid screens goes here */
    section {
        margin: 1rem;
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: none;
        gap: 1rem;
    }
    article {
        margin: 0;
        width: 100%;
    }
}
```
We now apply a grid layout to the `<section>` element. That grid is applied to the section's children elements (all the `<article>` elements). We don't know how many restaurants we'll have so we are not defining the rows in this case. We also adjust the width of the `<article>` elements and remove the margins, we pass this responsibility now to the parent 'grid' element. CSS 'grid' has a very handy `gap` property that will deal with spacing between grid elements. Finally we can use the margin of the `<section>` to add some spacing all round the items in the grid.

The next break point we want to jump to 3 columns. Now we just need to override one property.

```css
@media screen and (min-width: 60em) {
  /* css for massive screens goes here */
    section {
        grid-template-columns: auto auto auto;
    }
}
```

So we have covered responsive layouts using @media (media queries), and taken a quick look at the power of 'grid' in CSS.

## Assignment

* Can you implement a responsive layout for your restaurant's app?
* Use @media and CSS 'grid'

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/164)
[main](/swe)|[prev](/swe/bootcamp/wk3/day1.html)|[next](/swe/bootcamp/wk3/day3.html)
