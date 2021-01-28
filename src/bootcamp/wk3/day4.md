# Bootcamp > Week 3 > Day 4

## Overview of the day

We have rendered restaurant data from our data model in a browser. Today we will look at adding to our data model through the browser.

## Additional resources
If you are struggling with any of the concepts from today, the following video resources will help:
  * [Learn HTML Forms In 25 Minutes](https://www.youtube.com/watch?v=fNcJuPIZ2WE)
  * [Form Validation (1min 36)](https://www.youtube.com/watch?v=MppB5jaKyZ4)

----

## Lesson 1 - Forms

## Learning Objectives

* Understand the different attributes of HTML forms
* Use simple form validation to ensure valid input

## Before we start
* You will need to have your restaurants' page that displays all the restaurants in your data model.

## Materials needed
* [html form slides](https://docs.google.com/presentation/d/e/2PACX-1vQPDtqqUC5Yluyx6bNjYS4F7QkY8dPW3mq1PBQJ7QZ-iz5p3S7ofGAiBIXzovbZpMhkNtjvxb-mlIu9/)

## Lesson

To collect input from our user we need to use an [HTML Form](https://www.w3schools.com/html/html_forms.asp). A Form may have different types of input such as textboxes and radio buttons. 

Let's create a Form within a new page called `new.handlebars` and give it the following content:

```html
<h2>Add Restaurant</h2>

<form action="/restaurants" method="POST">
    <label>Name:</label><br>
    <input type="text" name="name"><br>

    <label>Image:</label><br>
    <input type="url" name="image"><br><br>

    <input type="submit" value="Submit">
</form>
```

This form has 2 inputs, both of type 'text. The input type of 'submit' creates a button which posts the form data to the URL specified in the form 'action'. 

Before we create a new route to handle our new page, let's think about the type of client-side validation we might want perform before sending the data to the server.The slide deck below details some of the main types of form validation. 

!(https://docs.google.com/presentation/d/e/2PACX-1vQPDtqqUC5Yluyx6bNjYS4F7QkY8dPW3mq1PBQJ7QZ-iz5p3S7ofGAiBIXzovbZpMhkNtjvxb-mlIu9/embed)

Once our Form is set up, we need to add a matching route to our server to receive and process the form data. In our example form above, we specify the the Form data will be 'posted' to the `/restaurants` route hence we need to create a new route matching this URL path.

```javascript
app.post('/restaurants', async (req, res) => {
    console.log(req.body); // this is the JSON body

    // TODO - add code to insert data into the database!

    res.redirect('/')
})
```

In addition to the route, to read the Form data as if it were JSON from the request object we need to add the following config to express.

```javascript
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
```

## Assignment

* (Optional) - watch the videos in the 'Additional resources' section at the start of this web page
* Add a new page with an HTML form to support the creation of new restaurants
* Add validation to the Form, both input fields must:
     * be mandatory 
     * have 'placeholder' data
     * highlight to the user if input data is missing or incorrect
     * the image field must be a url
     * the name must only contain the letters a-z
* Add a link from the `home` page to this new page to allow users to add a new restaurant
* Add a route to retrieve the data (see example above)
* Insert the data into the database

---
**Note:**
If you get stuck, here is the [solution to Lesson 1](https://github.com/MultiverseLearningProducts/swe-solutions/tree/main/bootcamp/wk3/day4)

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

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/166)
[main](/swe)|[prev](/swe/bootcamp/wk3/day3.html)|[next](/swe/bootcamp/wk3/day5.html)