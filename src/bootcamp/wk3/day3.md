# Bootcamp > Week 3 > Day 3

## Overview of the day
Today we will display the image of each restaurant and add an additional page to our restaurant website to display information about the restaurant's menus.

We will also install [Postman](https://www.postman.com/downloads/) - a tool for that makes it easy to create, share and test APIs. 

----

## Lesson 1 - Adding an image

## Lesson

We want to display an image in our card. The issue we face is that our different images are different sizes, yet we want them all to fit in our card nicely regardless. The trick that lots of developers use to accomplish this is use the `background-image` property. Setting an image as a background image in CSS gives us flexible sizing and cropping capabilities. This is very useful when our content is dynamic and we have images of varying sizes to deal with. Background images aren't printed by default either.

### Background-image

Update your card to display the background image of your restaurant. Adapt the example below.

```html
<h1>Restaurants</h1>
<section>
    {{#each restaurants}}
        <article>
            <header style="background-image: url({{this.image}})"></header>
            <main>{{this.name}}</main>
            <footer>{{this.menus.length}} menus</footer>
        </article>
    {{/each}}
</section>
```
To display the image correctly, you need to modify the `styles.css` file and target the `<header>` element inside the `<article>` to set some background properties including the image height.
```css
article header {
    height: 24rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}
```
You can read more about what these properties do [in this tutorial](https://www.w3schools.com/cssref/pr_background-repeat.asp).


## Assignment

* Style your restaurant card so it displays the restaurant image, the title of the restaurant and the number of menus.

----

## Lesson 2 - Route parameters

## Learning Objectives

* In this lesson we will present the menu data from the list of restaurants in a separate page. We will create a new route to support access to this page. 

## Lesson

We want to read what is on the menu for these lovely looking restaurants. For that level of detail we need to alter the view so we are just looking at one restaurant at a time. In this session we are going to create a page for each individual restaurant.

### Dynamic links

To be able to click on a restaurant card and then view that restaurant's page we need to create a dynamic link. We are going to do this by wrapping our restaurant _card_ in an 'anchor' tag. We then make the href point to a particular address on our server. Update your cards like this:

```html
<h1>Restaurants</h1>
<section>
    {{#each restaurants}}
        <a href="/restaurants/{{this.id}}">
            <article>
                <header style="background-image: url({{this.image}});">
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
        include: [{model: MenuItem, as: 'items'}],
        nest: true
    })
    res.render('restaurant', {restaurant, menus})
})
```
### 2 levels of iteration

This view of a restaurant requires us to iterate over the array of menus, and within each menu we iterate over that menus array of items. WOW!

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
  * Create a [hero image](https://www.w3schools.com/howto/howto_css_hero_image.asp) for the page
  ![example of a hero image](https://user-images.githubusercontent.com/4499581/95021581-adac1200-0669-11eb-84da-cfdf9befc65c.jpg)


---

## Lesson 3 - Postman
Tomorrow & Day 5 you will be creating and updating restaurants. Therefore you will need a tool for sending your routes (APIs) form or JSON content. One of the most popular tools for this is [Postman](https://www.postman.com/downloads/).

## Assignment
  * Install [Postman](https://www.postman.com/downloads/) 
  * Follow [the Postman tutorial (only the first 1:53)](https://www.freecodecamp.org/news/how-to-test-and-play-with-web-apis-the-easy-way-with-postman/) to learn how to use the tool. Instead of the Pokemon URL your Request URL will be `http://localhost:3000`. 
  * Call your restaurant website using Postman and look at the response you get back (these will be raw HTML)
  * Create a Postman `Collection` and add 2 requests - one to access your home page and one to access your restaurant page. Hint: if you get stuck on how to create a Collection, watch from time point 1:54 - 3:06 of the video above.
  * We can also use Postman as a testing tool. Navigate to the `Test` tab and use the snippets on the right hand side to compose JavaScript to test the following conditions:
     * Status code is 200
     * Response body contains "Bayroot"


## TODO - move this content someone else

[Flexbox](https://www.w3schools.com/css/css3_flexbox.asp) is really powerful when styling smaller components. Once a parent element is `display:flex` its behaviour changes. Now items line up in a row. You can change this flex-direction to column. The beauty of flex is being able to have elements fill (or flex) arbitrary space. We can also position elements along the flex axis.

!(https://docs.google.com/presentation/d/e/2PACX-1vQS_RdDgrFiEHaD2Nxm0aNLw6ICCpntv638tO0ITZjZdHXRVSMMJ7bXEZE4x0tmpHdNwOQpEBOwCvOg/embed)

The Box Model

!(https://docs.google.com/presentation/d/e/2PACX-1vR9fXGQK-iEBE2zaLeilLJlAM0_90xheU8S1VTGyvT08hmVuKDK-sPlL34MeXf3bv-Pl8zBw9caaHti/embed)



[attendance log](https://platform.multiverse.io/apprentice/attendance-log/165)
[main](/swe)|[prev](/swe/bootcamp/wk3/day2.html)|[next](/swe/bootcamp/wk3/day4.html)