# Mod 1 > Week 1 > Day 3

## Overview of the day

The first half of the day will be a bit of an overflow to allow you to finish any remaining pieces of work for your airports API. After that, you can complete the RESTful quiz below.

## Lesson 1 - REST experts

## Learning Objectives

-   Demonstrate your knowledge of REST
-   Demonstrate your knowledge of HTTP

## Before we start

You can read through the session notes from Day 1-3.

## Materials needed

[https://applied.multiverse.io/mod/quiz/](https://applied.multiverse.io/mod/quiz/view.php?id=8737)

## Lesson

You should now be able to create a tested RESTful web server for a single resource. You can label and identify key aspects of an HTTP request and be able to form different HTTP requests in a RESTful style.

Before taking the quiz below you will have some time to read back over the session notes from the last three days.

## Assignment

Can you complete [this Quiz](https://applied.multiverse.io/mod/quiz/view.php?id=8737)?

## Lesson 2 - Hashing Functions

Today introduces the subject of cryptography. Why study this? It is this area of mathematics that really gave birth to some of the first computers. For example, here in the UK at Bletchley Park, Tommy Flowers created the [Colossus](https://www.tnmoc.org/colossus) computer to break codes. Cryptography features heavily in production systems and solves the problem of passing private data through a public network. You may be familiar with your SSH keys that help you connect to Github, or sites that respond over `https://`. These secure network connections are made possible by implementing cryptographic concepts - 3 of which we will study to help us secure our API servers.

## Learning Objectives

-   Recall the features of hashing functions
-   Understand how hashing functions can be used

## Lesson

The first concept in cryptography we need to understand is hashing. A hashing algorithm takes as its input some data of any length and will return you some different data of a fixed length. Often the output data will be displayed as a hexadecimal integer. An example hashing function is md5.

```sh
md5("multiverse")
-> 63e9e039993b3acc92b0ee3615ec110b

md5("multiverse")
-> 63e9e039993b3acc92b0ee3615ec110b

md5("the outstanding alternative to university")
-> 1e042cc7ec5625ffb2fcd5a786140173
```

The hashing algorithm will produce the same result with the same input each time. How the initial string is boiled down to a hash is often done through a mathematical formula.

Hashing is **extremely** useful. What follows are some examples of how hashing is used.

### Storing passwords

Hashing functions only work one way; they lose information in the process of converting their input to their output. This isn't magic: for example, if I give you a number and ask you to perform `% 5` on it (i.e. divide by 5 and give me the remainder) you can do it. For example, `12 % 5 = 2`. But if I tell you `x % 5 = 2`, there's no way to work out what `x` is; it could be 12 but it could also be 17, or 22 etc. The modulus operator `%` is irreversible.

This feature of hashes makes them perfect for checking passwords. When you sign-up for a (well-made) website, the server takes your password, hashes it and stores the hash. When you login, it uses the same hashing function to hash your password and checks if it matches the hash it has under your name in the database. The advantage of this is that your password isn't stored on the server - if someone hacks into the database, or a rogue employee reads it, there's no way for them to work out your password from the hash in the database. This is important as often people reuse passwords between websites, so a malicious actor could take your password from a trivial website and use it to log into your bank, email etc.

Can you think of any further security issues we might still face even if we hash our passwords? Do some research on password salts and rainbow tables if you're interested!

> Hashes are irreversible

### Verifying changes

Hashes have a fixed length. If you hash a single character or the complete works of Shakespeare you end up with a hash that is exactly the same length.

If I have an important file that I want to transfer to you, I can make a hash of the file. Then I send you the file and you can check with my hashing function that you get the same hash. If you do the file has not been tampered with.

This is because changing just 1 single character of the input string to a hash will result in a totally different hash. This is how git works. Under the hood, git is storing hashes of your file and folders. When a file is changed it hashes differently. Your commits are hashes of your whole project.

How might you go about hashing a directory structure like you have in a codebase?

> Hashes have a fixed length

### Indexing and searching

Hashes can be used to speed up searching. Imagine a website like Facebook; at the time of writing, they have about 3 billion users. When a user completes a sign up form, Facebook first checks they don't already have an account registered with that email. But imagine how long that would take if they had to iterate over 3 billion users to be sure the user wasn't already registered.

A better strategy than iterating is to use a hash table. Hash tables can still store their data in an array but, instead of simply storing values in insertion-order, each value being added to the table is hashed and its hash is used to generate an array index where the value is stored.

![hash table](https://user-images.githubusercontent.com/44523714/124125061-1a293580-da71-11eb-997d-7c72419ae699.png)

The advantage of this is that, since hashes always produce the same output given the same input, to check if, say, "Marcus" is in our hash table, we need only put this string through our hash function and check the one location he should be. Thus, no matter how large our table gets, the time it takes to lookup a key is constant, or O(1).

> Hashes always produce the same output given the same input

## Assignment

### Part 1

Find the 4-letter string of lowercase letters (i.e. a-z) which produces the md5 `dbfcafe986040cc10ada1a4314c436db`
You can use

```javascript
const crypto = require("crypto");
const word = "blah";
var hash = crypto.createHash("md5").update(word).digest("hex");
```

to generate an md5 hash in Node.js

### Part 2

Write your own `HashTable` class. The class should have a `set(key, value)` method and a `get(key)` method. Values should be stored in an array, and each value's array index should be generated by hashing its key.
As an extension, decide how you are going to handle collisions (two separate keys mapping to the same array index) without overwriting data.

### Part 3

Research the following topics:

-   What makes a hashing algorithm suitable to be used for passwords?
-   What are password salts and rainbow tables?
-   What are the most popular libraries for hashing passwords in Node.js (or the backend language/framework you use)

---

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/180)
[main](/swe)|[prev](/swe/mod1/wk1/day2.html)|[next](/swe/mod1/wk1/day4.html)
