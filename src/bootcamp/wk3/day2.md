# Bootcamp > Week 3 > Day 2

## Overview of the day
Today we are going to retrieve all the restaurants from the restaurant database and use them to populate a web page. We will use CSS @media along with CSS Grid to create a web page which is 'responsive' i.e. which adapts to the screen size of the user's device.

## Additional resources
If you are struggling with any of the concepts from today, the following video resources will help:
   * [HTML basics for beginners (15 mins)](https://www.freecodecamp.org/news/html-basics-for-beginners/)
   * [CSS Box Model (4 mins)](https://www.youtube.com/watch?v=WH-86nJPVNk)
   * [Making Modern Layouts with CSS Grid | CSS Grid Basics (16 mins)](https://www.youtube.com/watch?v=br-0i3U1VCA)
   * [Learn CSS Media Query In 7 Minutes](https://www.youtube.com/watch?v=yU7jJ3NbPdA) 
   * [Passing Variables To Node Webpages With Handlebars (3 minutes)](https://www.youtube.com/watch?v=TV7T_vKMid4)
   * [using the `each` Handlebars helper keyword (13 mins)](https://www.youtube.com/watch?v=JbrqxPcuYVc)  



----

## Lesson 1 - Iteration

## Learning Objectives

* Demonstrate how to include an array of data with a template
* Use iteration to repeatedly create dynamic html content

## Before we start

* You must have completed the assignments from yesterday. This will ensure you have an app server ready to serve dynamic content.
* You must have completed Week 2 Lesson 5 which uses Sequelize to insert and retrieve Restaurant data
* You need to be familiar with the [CSS Box Model](https://www.w3schools.com/css/css_boxmodel.asp) 

## Materials needed

* N/A

## Lesson

Our app has an array of restaurants that we want to display on our page. Handlebars enables us to iterate over an array of data and repeatedly add the same parsed html block to our final page. This is how dynamic lists of content are rendered. The example below can be seen all over the Internet and is a good example of a _card_ component.

![example of the card component](https://user-images.githubusercontent.com/4499581/95015340-344df880-0644-11eb-8ce4-30609f0de5fe.jpg)

Can you recognise the template vs the dynamic content in the example above?

### Passing the Restaurant data to the view template

Our first step is to prepare the data for the view template and the second step is to pass it to the view template. The example below uses sequelize to fetch all the restaurants and passes this to the `home.handlebars` layout template.

1. The first argument to `response.render` is the matching string name of the layout file we want to render. In this example, the name 'restaurants' refers to a file named `home.handlebars`.
1. The second argument to `response.render` is the Restaurant data returned from the sequelize query.

```javascript
app.get('/', async (req, res) => {
    const restaurants = await Restaurant.findAll({
        include: [
            {
                model: Menu, as: 'menus',
                include: [{model:MenuItem, as: 'items'}]
            }
        ],
        nest: true
    })
    res.render('home', {restaurants})
})
```
To use `include` as in the code above, make sure your **Restaurant** class has the following aliases added. This config sets the name of the property our associated model will be stored on i.e. `restaurants.menus`.

```javascript
Restaurant.hasMany(Menu, {as: 'menus', foreignKey: 'restaurant_id'})
Menu.belongsTo(Restaurant, {foreignKey: 'restaurant_id'})
```

Also ensure your Menu class has the correct aliases as follows:

```javascript
Menu.hasMany(MenuItem, {as: 'items', foreignKey: 'menu_id'});
MenuItem.belongsTo(Menu, {foreignKey: 'menu_id'});
```
You will be able to see the impact of the above in the SQL statements output when running the `server.js` file. 

In our view template there will be an object called 'restaurants' that will be the array of data that came from `await Restaurant.findAll()`. We can write our html elements as if this was an html file and when we want to parse some dynamic content we can use handlebars to create placeholders. This is very much like 'mail merge' in word or other pieces of software you might have come across.

To repeat a block of code for every item in an array we can use the built in template helper `{{#each}}` that comes with handlebars. For this lesson, let's just retrieve the restaurant data and display the name and number of menus in each restaurant. In tomorrow's lesson we will look at using nested loops in Handlebars to display the menu and menu items on another page.

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
From the code above where does the repeating block of html begin and end? Load the page in your browser, when you inspect the html in the `Layouts` section of Developer Tools, what do you expect to see?

## Assignment
  * If you did not complete Week 2 Day 5's assignment to implement Sequelize, please download [this solution code](https://github.com/MultiverseLearningProducts/swe-solutions/blob/main/bootcamp/wk3/day2/populateDB.js). Run `node populateDB.js` to load the restaurant json file and insert matching rows into the Restaurant, Menu and MenuItems tables.
  * Create a new view layout called `home.handlebars` and include Handlebars code to loop through the array of restaurants and display the restaurant name and number of menus. Don't worry about the Menu or MenuItems at this stage, we will add this in tomorrow.
  * Modify your `server.js` file to perform `Restaurant.findAll` and pass the resulting data into `home`
  * Add the correct associations to the Menu and Restaurant classes as described earlier in this page)

---
**Note:**
If you get stuck, here is the [solution to Lesson 1](https://github.com/MultiverseLearningProducts/swe-solutions/tree/main/bootcamp/wk3/day2)

----

## Lesson 2 - Responsive CSS grids

## Learning Objectives

* Use the CSS @media Rule
* Implement a responsive CSS grid

## Before we start

* You must have completed Lesson 1

## Materials needed

* `style.css` file served from your public folder

## Lesson

We have restaurants on the page! What we don't have is something attractive or pleasing. We need to give our html page some loving CSS rules to lay it out nicely. Designing for the web is quite tricky because the screen sizes for a web page on different devices are so dramatically different.

![different screen sizes for web pages](https://d1xzrcop0305fv.cloudfront.net/wp-content/uploads/2016/06/zymr-adaptive-responsive-design_3.jpg)

Where do we put things if we want our page to look good on both a mobile phone and a large 26" monitor? The anwser to this question was beautifully addressed by Ethan Marcotte back in 2010 an a blog he wrote called [responsive web design](https://alistapart.com/article/responsive-web-design/).

### Responsive @media

CSS comes with a `@media` API which was orignialy added to the spec so you could style a printer friendly version of your page. The basic API of `@media` enables you to apply css to your page at particular screen sizes. You can find a video which explains `@media` in more depth under the `Additional Resources` section of at the start of this web page.

Media queries can be used to check things like:
  * width and height of the device
  * orientation (landscape or portrait mode)

The CSS is immediately applied so your page does not require a refresh for the new CSS rules to be visible once your screen size changes.

Using the `@media` API solves the problem of having to serve different html templates and css to different devices.

### Understanding the viewport
The **viewport** is the visible area of a web page.

The viewport varies with the device e.g. the viewport on a mobile phone is smaller than on a computer screen.

To make our page responsive (i.e. to look good on all devices) we need to gives the browser instructions on how to control the page's dimensions and scaling. 

Add the following line to the `<head>` element of your html `main.handlebars` file.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
The `width=device-width` part sets the width of the page to follow the screen-width of the device (which will vary depending on the device).

The `initial-scale=1.0` part sets the initial zoom level when the page is first loaded by the browser.

The impact of setting the viewport can be visualised [here](https://www.w3schools.com/css/css_rwd_viewport.asp).

### Mobile first
The way to implement a responsive layout is start with the smallest screen size; the mobile. These layouts are often the most simple. As the screen size get larger you can start to make more use of the real estate that becomes available.

Lets start. Empty your `style.css` and add the following css:

```css
* {
    padding: 0;
    margin: 0;
}

/* put css styling for  
   mobile devices here */

@media screen and (min-width: 40em) {
  /* put css styling for mid-sized screens here */
}

@media screen and (min-width: 60em) {
  /* put css styling for massive screens here */
}
```
`screen` refers to any device with a screen.

Note that we are using `em` units here rather than `pixels`. This allows elements to scale if the root element changes (e.g. if a user changes their default font size, all elements on the page will scale appropriately).

This css gives us two break points, one at 40em and the other at 60em. We remove any browser default padding or margin. Can you get your background color to change at the different break points? 

### CSS Grid

[CSS Grid Layout](https://www.w3schools.com/css/css_grid.asp) presents a layout system with rows and columns.

You can find a video which explains `CSS Grid` in more depth under the `Additional Resources` section of at the start of this web page.

Let's consider the different types of devices that we will display our restaurant web app on. Open up Chrome Developer tools and select the 'Device Toobar`.

[![chrome dev tools](https://developers.google.com/web/tools/chrome-devtools/device-mode/imgs/landscape.png)](https://developers.google.com/web/tools/chrome-devtools/device-mode)

Select a mobile phone. Set the orientation to portrait. For small screens our content can just be in a single column to allow the user to scroll through the restaurants. We want a single resturant _card_ to occupy the width of the screen. So let's replace our existing `styles.css` file to have the following:

```css
* {                 /* applies to all elements */
    padding: 0;
    margin: 0;
}

/* css defaults for mobile devices */
h1 {
    padding: 1rem;
    border-bottom: solid 1px black;
}
article {
    border: solid 1px black;   /* adds a border around the box */
    width: calc(100% - 2rem);
    height: 35em;
    margin: 1rem 1rem;
}
```
Now we have a card shape box in which we can display information about each restaurant (including its 'thumbnail' image). Each box will be spaced out evenly and we can scroll through them. We are using `calc()` to calculate the width of the viewport minus the margins either side.

Once our viewport size has broken through to be greater than `40em` we want to **override** the previous styles to jump from a single column layout to a 2 column layout. Add the code below to your `styles.css` file:

```css

@media screen and (min-width: 40em) {
    /* css overrides for mid-sized screens goes here */
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

For larger devices, we want to jump to 3 columns. To do this, we just need to override one property by adding the following code to our `styles.css` file:

```css
@media screen and (min-width: 60em) {
    /* css overrides for large screens goes here */
    section {
        grid-template-columns: auto auto auto;
    }
}
```

We have now covered responsive layouts using CSS `@media` (media queries) and taken a quick look at the power of 'grid' in CSS.

## Assignment
  * If you are new to HTML and CSS, please watch the video links under 'Additional resources' at the beginning of this web page
  * Get your background color to change dependent on the type of device you are using. Hint: this [CSS @media Rule](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp) tutorial will help
  * Implement a responsive layout for your restaurant app using  @media and CSS 'grid' using the CSS styling described in the previous section

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/164)
[main](/swe)|[prev](/swe/bootcamp/wk3/day1.html)|[next](/swe/bootcamp/wk3/day3.html)
