# Mod 4 > Week 1 > Day 2

## Overview of the day

Todays focus is on the backend part of your application. You will be expected to produce UML diagrams for a data model that you have designed. You should also be able to implement your design, and seed it with data.

----

## Learning Objectives

* Create UML diagrams for a data model
* link to a range of database types and embed data queries within code
* make a connection to a database;
* execute CRUD statements on the database;
* use one-off queries and stored procedures;
* transform returned data into format the application requires.

## Lesson

Data is fundamental to every application. The whole purpose of  the interface layer is to enable users to interact with the data.

Get this right everything should slot into place nicely. Get this wrong you can end up with an app that fights itself and is a pain to work with.

From module 3 you will be thinking to yourself about the design phase. Can you remember the following:

* How will we collect inputs?
* How will we store/process inputs?
* How will we output the stored/processed inputs?

In a database that uses schemas the data points you want to store are defined in a schema. If you try to store data that does not match the schema - you'll be in trouble. Below is an example of a schema definition.

```javascript
CommunityEvent.init({
  title: DataTypes.STRING,
  desc: DataTypes.STRING,
  datetime: DataTypes.DATE,
  spaces: DataTypes.INTEGER
}, { sequelize, modelName: 'event' })
```

Our schema defines what a community event's properties are. How many different 'types' (i.e. STRING, DATE) are we able to store?

```javascript
{
  title: "10 pin bowling",
  desc: "Come and join us for 3 frames Friday at the Elephant",
  datetime: "2020-10-31T20:30:00.000Z",
  spaces: 16,
  rsvp: 9
}
```

❓ Can we store the event above?

## Relationships in a relational database

Data design is thinking about what you are going to store. Storing simple data points is straight forward. What is more interesting is storing the way simple data points are related to each other.

The types of relationships between entities in our data model can be **HasMany** or **BelongsTo**. For example an event **Has Many** bookings. A booking **Belongs To** an event. 

The way to relate data together in schema based datasets is to use the primary id of one record in another record. The name for the field you use to store another record's primary id is the **foreign key**. Referencing the primary key and foreign key in a query joins the two records together.

For example:

![relation join example](https://user-images.githubusercontent.com/4499581/88304701-826b8500-cd00-11ea-80fc-632ab10ab384.jpg)

Here the `id` of an event row is stored in a bookings row under the `event_id` field. With this kind of data design we can query for an event and count all it's related bookings:

```sql
SELECT events.title, COUNT(bookings.id) as bookings 
FROM events 
JOIN bookings ON event.id = bookings.event_id 
WHERE events.date > GETDATE();
```

## Relationships in a document store

Schemaless datastores like MongoDB give you an alternative way to store the relationships between your data points. In a document store in place of tables there are schemaless "collections". Each item in a collection is considered a "document" and they can have nested data points.

For example we could have an events collection, and store our events as documents. Each event could have a `bookings` field that stored an array of `booking` objects.

This looks much easier to deal with, and it is until we want to count all the bookings across all the events. Then we have to query all the events, and sum all the bookings properties across those events.

## Document store vs Relational database

Both ways of storing the relationships are effective. Depending on they way you'll need to retrieve your data you might choose one over the other. You can represent BOTH kinds of data using UML entity diagrams. So our document store version of events and bookings might look like this:

![document store uml](https://user-images.githubusercontent.com/4499581/88308488-fb6cdb80-cd04-11ea-9fa7-317e395ae88e.jpg)

## Creating a data model

Most frameworks will have a way for you to auto generate entities and the relationships between them. Some libraries require you to declare your models and the relationships between them.

This is a really good candidate for some tests. You want to use tests to ensure you have set up the data model correctly that that all the relationships are correct.

## Today's Assignment

Can you create a data design for your chosen synoptic project? Read the brief carefully and think about what needs to be captured from the use, what needs to be stored and how you will persist the relationships between different data points.

* Create a UML diagram of your data design
* Implement your data design

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/209)
[main](/swe)|[prev](/swe/mod4/wk1/day1.html)|[next](/swe/mod4/wk1/day3.html)