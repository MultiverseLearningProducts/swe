# Bootcamp > Week 3 > Day 3

## Overview of the day

----

## Lesson 1 - The Box Model

## Learning Objectives

* Style the background properties of an html element
* Use different positioning properties of CSS

## Before we start

* Make sure your responsive layout is displaying 'cards' for your restaurants.

## Materials needed

* You will need a dataset with image URLs

## Lesson

Previously we considered the layout of all the elements on our page. Now we need to consider the individual components. To really get to grips with styling html using css you need to study and understand the box model.

### The Box Model

!(https://docs.google.com/presentation/d/e/2PACX-1vR9fXGQK-iEBE2zaLeilLJlAM0_90xheU8S1VTGyvT08hmVuKDK-sPlL34MeXf3bv-Pl8zBw9caaHti/embed)

We are creating a card element. We want to display an image in our card. The issue we face is that our different images are different sizes, yet we want them all to fit in our card nicely regardless. The trick that lots of developers use to accomplish this is use the `background-image` property. Setting an image as a background image in CSS gives us flexible sizing and cropping capabilities. This is very useful when our content is dynamic and we have images of varying sizes to deal with.

### Background-image

Update your card to now display the background image of your restaurant. Adapt the example below.

```html
<h1>Restaurants</h1>
<section>
    {{#each restaurants}}
        <article>
            <header style="background-image: url({{this.image}});"></header>
            <main>{{this.name}}</main>
            <footer>{{this.menus.length}} menus</footer>
        </article>
    {{/each}}
</section>
```
In our css lets target the `<header>` element inside the `<article>` and set some background properties.
```css
article header {
    height: 24rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}
```
Flexbox is really powerful when styling smaller components. Once a parent element is `display:flex` it's behavior changes. Now items line up in a row. You can change this flex-direction to column. The beauty of flex is being able to have elements fill (or flex) arbitrary space. We can also position elements along the flex axis.

## Assignment

* Style your restaurant card so it displays the restaurant image, the title of the restaurant and the menus.

----

## Lesson 2 - Route parameters

## Learning Objectives

* Access route parameters

## Before we start

* You we be adding to your server code and creating more templates in this session.

## Materials needed

* You will need a page of restaurant cards rendered in html

## Lesson

You and I want to read what is on the menu for these lovely looking restaurants. For that level of detail we should alter the view so we are just looking at one restaurant at a time. In this session we are going to create a page for each individual restaurant.

### Dynamic links

To be able to click on a restaurant card and then view that restaurant's page we need to create a dynamic link. We are going to do this by wrapping our restaurant _card_ in an anchor tag. We then make the href point to a particular address on our server. Can you update your cards like this:

```html
<h1>Restaurants</h1>
<section>
    {{#each restaurants}}
        <a href="/restaurants/{{this.id}}">
            <article>
                <header style="background-image: url({{this.image}});"></header>
                <main>{{this.name}}</main>
                <footer>{{this.menus.length}} menus</footer>
            </article>
        </a>
    {{/each}}
</section>
```
As you hover over each card can you see the URL it links to in the bottom left-hand corner of your chrome browser. Clicking this link will cause a 404 error, as that page or resource does not exist yet.

```sh
Cannot GET /restaurants/2
```

!(https://docs.google.com/presentation/d/e/2PACX-1vQS_RdDgrFiEHaD2Nxm0aNLw6ICCpntv638tO0ITZjZdHXRVSMMJ7bXEZE4x0tmpHdNwOQpEBOwCvOg/embed)

### New Route

To deal with this new request we need to add a new route on our server. Not just any route, the last part of our route is going to be different depending on which restaurant we are clicking on. We need a route that also has a route parameter. Add the new route below to your server.

```javascript
app.get('/restaurants/:id', async (req, res) => {
    console.log("get restaurant with ID:", req.params.id)
    res.send()
})
```
Like before we add a new route, but in the string definition of the route we indicate a route parameter `/:id` called 'id'. We can now read that value in our route handler. What do you think we are going to do with this id?

### New template

Before we get our data, lets just create the new template for this view. In the `views` folder add a file called `restaurant.handlebars`. Add some html so you know you have wired the route up to the template ok. Can you pass the correct arguments to your `res.render()`?

Now we can focus on getting our data for this view.

```javascript
app.get('/restaurants/:id', async (req, res) => {
    const restaurant = await Restaurant.findByPk(req.params.id)
    const menus = await restaurant.getMenus({
        include: [{model: Item, as: 'items'}],
        nest: true
    })
    res.render('restaurant', {restaurant, menus})
})
```
### 2 levels of iteration

This view of a restaurant requires us to iterate over the array of menus, and within each menu we iterate over that menus array of items. WOW you can do this. It's a dream within a dream.

```html
<h1>{{restaurant.name}}</h1>
<section>
    {{#each menus}}
        <article>
            <h2>{{this.title}}</h2>
            <dl>
                {{#each this.items}}
                    <div>
                        <dt>{{this.name}}</dt>
                        <dd>£{{this.price}}</dd>
                    </div>
                {{/each}}
            </dl>
        </article>
    {{/each}}
</section>
```
Finally we have some menus, the fact we are using the same elements in the same order means our css is already being applied. The `<dl>` element is a 'description list' you can read more about it [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl). To get the item name and price to line up nicely like below I am using flexbox. More about flexbox later...

![flexbox example](https://user-images.githubusercontent.com/4499581/95021384-9caed100-0668-11eb-9fbc-9d93ea06a54b.jpg)

```css
dl div{
    display: flex;
    justify-content: space-between;
    padding: 1rem;
}
```

## Assignment

* Create the route and template to view a single restaurant.
* Include a "back" or "main menu" button on your page.
* Render the menus, and the menu items in a grid on the page.
* Create a hero image for the page like below.

![example of a hero image](https://user-images.githubusercontent.com/4499581/95021581-adac1200-0669-11eb-84da-cfdf9befc65c.jpg)

[attendance log](https://applied.whitehat.org.uk/mod/questionnaire/complete.php?id=6702)
[main](/swe)|[prev](/swe/bootcamp/wk3/day2.html)|[next](/swe/bootcamp/wk3/day4.html)