# Bootcamp > Week 3 > Day 4

## Overview of the day

We have rendered data from our data model in a browser. Today we start to look at adding to our data model through the browser.

----

## Lesson 1 - Forms

## Learning Objectives

* Name the different attributes of a form.
* Use simple form validation

## Before we start

* You will need to have a restaurant's page that displays all the restaurant's in your data model.
* Have a simple form ready to try different input fields

## Materials needed

* [html form slides](https://docs.google.com/presentation/d/e/2PACX-1vQPDtqqUC5Yluyx6bNjYS4F7QkY8dPW3mq1PBQJ7QZ-iz5p3S7ofGAiBIXzovbZpMhkNtjvxb-mlIu9/)

## Lesson

Before we start lets add a form to our page of restaurants. I'm going to add it as the last item in the list. Hay! to get this to work and not blow out my grid I did have to update my css grid (see below).

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
    <article>
        <form>
            <div>
                <label>Restaurant name</label>
                <input name="name" />
            </div>
            <div>
                <label>Restaurant image</label>
                <input name="image" />
            </div>
            <button>Add Restaurant</button>
        </form>
    </article>
</section>
```
```css
@media screen and (min-width: 60em) {
  /* css for massive screens goes here */
    section {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}
```
With a form we can collect data from our users and send it or 'post' it to our server. 

!(https://docs.google.com/presentation/d/e/2PACX-1vQPDtqqUC5Yluyx6bNjYS4F7QkY8dPW3mq1PBQJ7QZ-iz5p3S7ofGAiBIXzovbZpMhkNtjvxb-mlIu9/embed)

What data do we need to collect?. Considering the slide deck, what validation should we add to our form?

Once our form is set up we need a special route on our server to handle the form data. Add the following html attributes to your form;

```html
<form action="/restaurants" method="POST">
```

Now on our server we need to update our config and create a new route that will process this data. For now we are just going to console.log out the data we are receiving, but you can create a Restaurant with this data.

To read the form data as if it were JSON from the request object we need to add the following config to express.

```javascript
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
```
Can you define a post route like this and log out the request body? In the example below we are redirecting to the restaurants route, that will have the effect of reloading our page when we submit the form.

```javascript
app.post('/restaurants', async (req, res) => {
    console.log(req.body) // {name: "Pandas Lunchbox Garden", image: "https://pandas.org/pack-shot.jpg"}
    res.redirect('/restaurants')
})
```

## Assignment

* Use your CSS skills to style the add a restaurant form
* Add validation to the form, both fields must have a value
* The image field must be a url
* You have the data to create a new Restaurant in your route handler, why not do that too?

----

## Lesson 2 - Create Read Update Destroy

## Learning Objectives

Using the patterns we have learnt so far enable users to perform create, read, update and destroy operations.

## Before we start

You need to be successfully posting restaurant data to your server and creating restaurants.

## Materials needed

* some image urls for restaurants

## Lesson

In our route handler we have all the information we need to create a new restaurant. If you have not done so already lets add a line to our handler to do just that.

```javascript
app.post('/restaurants', async (req, res) => {
    await Restaurant.create(req.body)
    res.redirect('/')
})
```
WOW. Yes now it's that easy. Shall we delete a restaurant? We can update our template to have a delete button on the restaurant page. We can set the href of that link to an address on our server where we can delete that restaurant. For example:

![example of a dynamic href](https://user-images.githubusercontent.com/4499581/95022824-5dd14900-0671-11eb-9cb3-2d9caa3cbb30.jpg)

On our server we can define a route perameter (like before) and use that to perform the delete operation.

```javascript
app.get('/restaurants/:id/delete', (req, res) => {
    Restaurant.findByPk(req.params.id)
        .then(restaurant => {
            restaurant.destroy()
            res.redirect('/')
        })
})
```
Powerful! Finally what if we make a typo and want to update our restaurant? Now this is more involved. We need to provide the user with the form they used to create the restaurant, populated with the current values. We then need a new update route to post the new values too.

Lets create a new route that will serve an edit template to the user. Some thing like this.

```javascript
app.get('/restaurants/:id/edit', async (req, res) => {
    const restaurant = await Restaurant.findByPk(req.params.id)
    res.render('edit', {restaurant})
})
```
```html
<form action="/restaurants/{{restaurant.id}}/edit" method="POST">
    <div>
        <label>Restaurant name</label>
        <input name="name" value="{{restaurant.name}}" />
    </div>
    <div>
        <label>Restaurant image</label>
        <input name="image" value="{{restaurant.image}}"/>
    </div>
    <button>Update Restaurant</button>
</form>
```
Our edit form looks similar to the create form, but we post to a different route. We set the values of the field using the current restaurant values.

Add an edit link to your restaurant page (next to or near the delete button). Now you can use that link to open your edit page.

Finally add the route that will handle the update, notice the 'put' https verb. If we were just posting one value to update what http verb might we use then?

```javascript
app.put('/restaurants/:id/edit', async (req, res) => {
    const restaurant = await Restaurant.findByPk(req.params.id)
    await restaurant.update(req.body)
    res.redirect(`/restaurants/${restaurant.id}`)
})
```

## Assignment

* Edit restaurants
* Add menus to a restaurant
* Add items to a menu

[attendance log](https://applied.multiverse.io/mod/questionnaire/complete.php?id=6702)
[main](/swe)|[prev](/swe/bootcamp/wk3/day3.html)|[next](/swe/bootcamp/wk3/day5.html)