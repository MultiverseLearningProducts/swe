# Mod 1 > Week 2 > Day 2

## Overview of the day

Sessions and the OAuth flow

# Session 1 - Sessions

## Learning Objectives

## Pre-work or Assumed knowledge

## Materials

## Notes

### State & Sessions

* Make a class that returns a numeric value after each request i.e. 1,2,3,4,5,6
* Expose this in a GET endpoint and return those values
* Have the state in the route
* Have the state on the server
* Add sessions
* Have the state in a session

```javascript
class Counter {
    constructor() {
        this.value = 1
    }

    inc() {
        this.value += 1
        return this.value.toString()
    }
}
```

```javascript
app.get('/counter', (req, res) => {
    const counter = new Counter()
    res.send(counter.inc())
})
```

Remember the above will only ever return 1.
Next pull the counter into a server level instance:

```javascript
// top of file before routes
const counter = new Counter()

app.get('/counter', (req, res) => {
    res.send(counter.inc())
})
```

To add sessions `npm i express-session` then use the following config:

```javascript
const sessionSettings = {
    secret: "best cohort ever",
    resave: false,
    saveUninitialized: true
}
```

Update your Counter class to keep track of every instance (use a static property).

```javascript
class Counter {
    static lookup = {}
    
    constructor(id) {
        this.value = 1
        Counter.lookup[id] = this
    }

    inc() {
        this.value += 1
        return this.value.toString()
    }
}
```

Add a middleware function that will run on every request this makes sure new requests have an instance of the counter they can access with their session id:

```javascript
app.use((req, res, next) => {
    Counter.lookup[req.session.id] = Counter.lookup[req.session.id] || new Counter(req.session.id)
    next()
})
```

finally in the route return the next value

```javascript
app.get('/counter', (req, res) => {
    res.send(Counter.lookup[req.session.id].inc())
})
```

## Assignment

In the morning session get your apprentices to implement sessions so they can log in and log out.

## Additional Reading

<hr/>

# Session 2 - OAuth

## Learning Objectives

* Create a UML sequence diagram
* Encode and Decode JWT tokens
* Recall the structure of a JWT

## Pre-work or Assumed knowledge

## Materials

## Notes

This session is laying the foundations for understanding and keeping track of OAuth flow. It is also an important time to practice UML diagrams (a competency of the Level 4 standard).

## Assignment

## Additional Reading