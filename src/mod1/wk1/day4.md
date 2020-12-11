# Mod 1 > Week 1 > Day 4

## Overview of the day

Today introduces the subject of cryptography or the art of writing or solving codes. Why study this? It is this area of mathematics that really gave birth to some of the first computers. For example here in the UK at Bletchley Park Tommy Flowers created the [Colossus](https://www.tnmoc.org/colossus) computer to break codes. Cryptography features heavily in production systems and solves the problem of passing private data through a public network. You will be familiar with your SSH keys that help you connect to Github, or sites that respond over `https://`. These secure network connections are made possible by implementing cryptographic concepts 3 of which we will study to help us secure our API servers.

## Lesson 1 - Hashing Functions

## Learning Objectives

* Implement a hashing function
* Recall the features of encryption using hashing functions

## Before we start

## Materials needed

## Lesson

The first concept in cryptography we need to understand is hashing. A hashing algorithm takes as its input a string of any length and will return you a different string of a fixed length. That hashing algorithm will produce the same result with the same input each time. How the initial string is boiled down to a hash is often done through a mathematical formula.

Hashing is so useful. What follows are some examples of how hashing is used with computers.

### Storing passwords

Why do you think it's not cool to store people's passwords in your database in plain text? We can hash a password. That way we store a hash that no-one can recognise. It's impossible to figure out the original password string that created it, but at the same time if we are given a string and feed it back through our hashing function - we should end up with a matching hash we know that the string that created it must be the same. We have a password match!

> Hashing only works one way

### Verifying changes

Hashes have a fixed length. If you hash a single character or the complete works of Shakespeare you end up with a hash that is exactly the same length. 

If I have an important file that I want to transfer to you I might make a hash of the file. Then I send you the file and you can check with my hashing function do you get the same hash? If you do the file has not been tampered with and I can feel relaxed.

This is because changing just 1 single character of the input string to a hash will result is a totally different hash. This is how git works. Under the hood git is storing hashes of your file and folders. When a file is changed it hashes differently. Your commits are hashes of your whole project.

How might you go about hashing a directory structure like you have in a codebase?

> Hashes have a fixed length

### Indexing and searching

Hashes can be used to speed up searching. Imagine an enormous database. You want to search by full name for "Kingdom Richards". Is Kingdom even in the database? We would then have to search for all the records with full name equal to 'K'+'i'+'n'... ⏱ (come back later).

To speed this up we can index the database using a hashing function. We would create a hash table structure of key value pairs that is much smaller that the enormous database. That is called indexing. The key is a hash of "Kingdom Richards" `c50b35ae86c2ec095850243e007dbb1dec3e9278` and the value is the address of the record in the database. So now to search we can hash "Kingdom Richards" and look that key up in our hash table. If there is no key then "Kingdom Richards" is not even in our enormous database so we saved ourself some time there. If there is a "Kingdom Richards" then we retrieve the value from the hash table and go straight to that location in memory to get our record. 

There is a bit more to it that that but you can see the usefulness of hashing in computer programming with just these three examples.

### Try it

Lets try to create a simple hashing function that will hash the string "Lets meet at midnight under the clock". To do this we need to have a little idea about how hashing functions work.

#### Chunking

The first thing to do is prepare our string by chunking it into equal sections. We might need to pad the final block if our string will not perfectly chunk (which is nearly always). Usually a hashing function will turn the string charterers into their binary representations and make sure they are padded to an equal length.

![evenly chunked blocks](https://user-images.githubusercontent.com/4499581/101887615-08477a00-3b95-11eb-8a60-9f01f7be853f.png)

|Javascript|Java|
```javascript
const msg = "Lets meet at midnight under the c1ock";
const msgAsArr = msg.split("")
let blocks = [];
let slice = 0;
const blockSize = 8;

while (slice < msgAsArr.length) {
    blocks.push(msgAsArr.slice(slice, slice += blockSize));
}

while (blocks[blocks.length - 1].length < 8) {
    blocks[blocks.length - 1].push("P")
}

function charToBin (char) {
    let bin = char.charCodeAt().toString(2)
    while (bin.length < 8) bin += '0'
    return bin
}

blocks = blocks.map(block => block.map(charToBin))

console.log(blocks)
```
```java
String msg = "Lets meet at midnight under the clock";
```

```
[
  [
    '10011000',
    '11001010',
    '11101000',
    '11100110',
    '10000000',
    '11011010',
    '11001010',
    '11001010'
  ],
  [
    '11101000',
    '10000000',
    '11000010',
    '11101000',
    '10000000',
    '11011010',
    '11010010',
    '11001000'
  ]
]
```

#### Hashing

Now lets consume that array of even chunks and boil it down to a hash. You can visualise an array of 5 initial values that are the internal starting state of the hashing function.

![a 1 by 5 grid of values](https://user-images.githubusercontent.com/4499581/101887628-0e3d5b00-3b95-11eb-86b6-d320b9657658.png)

Next we take each of our equal chunks from our input string and use those values to update the internal state of the hashing function. In the SHA-1 (simple hashing algorithm) algorithm all kinds of math tricks go on. You can shift bytes, use XOR gates and swap the positions of values in the internal state. Below is a diagram of the SHA-1 algorithm.

![the SHA-1 algorithm in a diagram](https://user-images.githubusercontent.com/4499581/101887639-11384b80-3b95-11eb-9f0b-049c022e7719.png)

We do not expect you to implement this algorithm, it is shown for inspiration. We keep cycling through these updates until we run out of chunks from our input string. The internal state we are left with at the end of all that is the output hash. This is how we always end up with the hash being the same length.

```
echo "Lets meet at midnight under the c1ock." | shasum
a49dfd68bf232c685f22dbdcb8a894803cebd320
echo "Lets meet at midnight under the clock." | shasum
fa137e72391cfa6cb95781662fe0294bd7d000a8
```

In the example above you can see I am changing the 'l' in 'clock' and passing it to a hashing function the output is quite different for each slightly different string.

## Assignment

Can you create a hashing algorithm?
1. Your hashing function should take a string of any length and return a string of a fixed length
1. The initial string and output hash should not be similar in any way
1. Changing the input string even by 1 letter should create a different output hash
1. Repeating your hashing function with the same input string should return the same output hash every time.

You are not expected to implement a complete hashing algorithm in this assignment! We want you to try implementing a hashing function so you can appreciate what goes into them, what the rules are and why there are different varieties of them.

Be prepared to talk the group through your version of a hashing function.

----

## Lesson ? - ???

## Learning Objectives

## Before we start

## Materials needed

## Lesson

## Assignment

[next](/swe/mod1/wk1/day5.html)
[main](/swe)