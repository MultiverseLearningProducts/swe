# Mod 1 > Week 1 > Day 4

## Overview of the day

Today introduces the subject of cryptography or the art of writing or solving codes. Why study this? It is this area of mathematics that really gave birth to some of the first computers. For example here in the UK at Bletchley Park Tommy Flowers created the [Colossus](https://www.tnmoc.org/colossus) computer to break codes. Cryptography features heavily in production systems and solves the problem of passing private data through a public network. You will be familiar with your SSH keys that help you connect to Github, or sites that respond over `https://`. These secure network connections are made possible by implementing cryptographic concepts 3 of which we will study to help us secure our API servers.

## Lesson 1 - Hashing Functions

## Learning Objectives

* Implement a hashing function
* Recall the features of hashing functions

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

The first thing to do is prepare our string by chunking it into equal sections. We might need to pad the final block if our string will not perfectly chunk (which is nearly always). Usually a hashing function will turn the string charterers into their numerical representations and make sure they are padded to an equal length.

![evenly chunked blocks](https://user-images.githubusercontent.com/4499581/101887615-08477a00-3b95-11eb-8a60-9f01f7be853f.png)

|Javascript|Java|
```javascript
const msg = "Lets meet at midnight under the c1ock";
const tokens = msg.split("")
let blocks = [];
let slice = 0;
const blockSize = 8;

while (slice < tokens.length) {
    blocks.push(tokens.slice(slice, slice += blockSize));
}

while (blocks[blocks.length - 1].length < 8) {
    blocks[blocks.length - 1].push("a")
}

blocks = blocks.map(block => block.map(char => char.charCodeAt()))

console.log(blocks)
/*
    Output
    [76, 101, 116, 115, 32, 109, 101, 101]
    [116, 32, 117, 110, 100, 101, 114, 32]
    [116, 104, 101, 32, 99, 108, 111, 99]
    [107, 32, 97, 116, 32, 109, 105, 100]
    [110, 105, 103, 104, 116, 46, 32, 82]
    [101, 109, 101, 109, 98, 101, 114, 32]
    [73, 32, 108, 111, 118, 101, 32, 121]
    [111, 117, 46, 97, 97, 97, 97, 97]
*/
```
```java
import java.util.ArrayList;
import java.util.Arrays;

public class Code {
  private static int[] blockAsCharCodes (String[] block) {
    int[] charCodes = new int[block.length];
    for(int i=0;i < block.length;i++) {
      charCodes[i] = block[i].codePointAt(0);
    }
    return charCodes;
  }

  public static void main(String[] args) {
    String msg = "Lets meet at midnight under the c1ock";
    String[] tokens = msg.split("");
    int slice = 0;
    int blockSize = 8;
    ArrayList<String[]> blocks = new ArrayList<>();
    ArrayList<int[]> blocksOfInts = new ArrayList<>();
    
    while(slice < tokens.length) {
      blocks.add(Arrays.copyOfRange(tokens, slice, slice+=blockSize));
    }
    
    for(int i=0;i < blockSize;i++) {
      String b = blocks.get(blocks.size() - 1)[i];
      blocks.get(blocks.size() - 1)[i] = b == null ? "a" : b;
    }
 
    for(int i=0;i < blocks.size();i++){
      blocksOfInts.add(blockAsCharCodes(blocks.get(i)));
    }
 
    for(int[] result : blocksOfInts) {
      System.out.println(Arrays.toString(result));
    }
    /*
      Output
      [76, 101, 116, 115, 32, 109, 101, 101]
      [116, 32, 117, 110, 100, 101, 114, 32]
      [116, 104, 101, 32, 99, 108, 111, 99]
      [107, 32, 97, 116, 32, 109, 105, 100]
      [110, 105, 103, 104, 116, 46, 32, 82]
      [101, 109, 101, 109, 98, 101, 114, 32]
      [73, 32, 108, 111, 118, 101, 32, 121]
      [111, 117, 46, 97, 97, 97, 97, 97]
    */
  }
}
```

#### Hashing

Now lets consume that array of even chunks and boil it down to a hash. You can visualise an array of 5 initial values that are the internal starting state of the hashing function.

![a 1 by 5 grid of values](https://user-images.githubusercontent.com/4499581/101887628-0e3d5b00-3b95-11eb-86b6-d320b9657658.png)

Next we take each of our equal chunks from our input string and use those values to update the internal state of the hashing function. In the SHA-1 (simple hashing algorithm) algorithm all kinds of math tricks go on. You can shift bytes, use XOR gates and swap the positions of values in the internal state. Below is a diagram of the SHA-1 algorithm.

![the SHA-1 algorithm in a diagram](https://user-images.githubusercontent.com/4499581/101887639-11384b80-3b95-11eb-9f0b-049c022e7719.png)

We do not expect you to implement this algorithm, it is shown for inspiration. We keep cycling through these updates until we run out of chunks from our input string. The internal state we are left with at the end of all that is our output hash. This is how we always end up with the hash being the same length, and the same value.

```
echo "Lets meet at midnight under the c1ock." | shasum
a49dfd68bf232c685f22dbdcb8a894803cebd320
echo "Lets meet at midnight under the clock." | shasum
fa137e72391cfa6cb95781662fe0294bd7d000a8
```

In the example above you can see I am changing the 'l' in 'clock' and passing it to a hashing function the output is quite different for each slightly different string. You might find it is this behavior that poses the most challenging. Do your best and have some fun.

## Assignment

Can you create a hashing algorithm?
1. Your hashing function should take a string of any length and return a string of a fixed length
1. The initial string and output hash should not be similar in any way
1. Changing the input string even by 1 letter should create a different output hash
1. Repeating your hashing function with the same input string should return the same output hash every time.

You are not expected to implement a complete hashing algorithm in this assignment! We want you to try implementing a hashing function so you can appreciate what goes on inside them, what the rules are and why there are different varieties of hashing algorithms.

Be prepared to talk the group through your hashing function.

----

## Lesson - Symmetric Key Encryption

## Learning Objectives

* encrypt a text message using a key
* decrypt a text message using a key

## Before we start

You should have some idea about hashing algorithms

## Materials needed

You will need a text editor and browser

## Lesson

![a diagram of symmetric encryption](https://sectigostore.com/blog/wp-content/uploads/2020/04/types-of-encryption-symmetric-encryption.png)

Symmetric encryption uses a key to encrypt and then decrypt a message. Once a message is encrypted it can't be understood by anyone and is safe to pass around in public, or in this context send over a network. A second party with the key is the only other party who can decrypt and read your message.

[![The enigma code machine used symmetric encryption](https://www.101computing.net/enigma/images/enigma-how-to.png)](https://www.101computing.net/enigma-encoder/)

The enigma code machine used symmetric encryption. The operator would set up their machine at the start of each day with that day's settings. The settings came from a code book. An Enigma code book would have one page per month. The page would include all the settings for each day of the month with the first day of the month at the bottom of the page so that once used, a setting could be torn off the page.

❓ How is symmetric encryption different from hashing?

❓ These books would have been very carefully protected, why do you think that is?

❓ What is one of the vulnerabilities of symmetric encryption

### Implementing a browser based coding machine

Your assignment is to work in pairs to send encrypted messages between you both using slack. Below is an example of a message that has been encrypted and is ready to send in our slack channel.

```
RuY2z0rri/YnJPGlvOzze9Nj+hLGQTsvTPXcljNWj/VSSvm9PjTbo3x7ImFsZyI6IkExMjhHQ00iLCJleHQiOnRydWUsImsiOiIxSmRHS081U2pod3FTSUx4bzZSeldBIiwia2V5X29wcyI6WyJlbmNyeXB0IiwiZGVjcnlwdCJdLCJrdHkiOiJvY3QifQ==
```

Only your pair will be able to encrypt an decrypt each others messages. There are a few things we need to cover before we can do this using the Web Crypto API.

### Strings to ArrayBuffers

The encryption functions we can use in the browser require your messages to be encoded as an ArrayBuffer. We like reading text as unicode characters but computers like to deal with text in different structures. Below is an example of a string converted to an ArrayBuffer. You can try this yourself using the browser based `TextEncoder`;

```html
new TextEncoder().encode("We like to read unicode characters")

[87, 101, 32, 108, 105, 107, 101, 32, 116, 111, 32, 114, 101, 97, 100, 32, 117, 110, 105, 99, 111, 100, 101, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 115]
```

❓ Why do you think an encryption function might want you to pass it a string as an ArrayBuffer?

### Picking an algorithm

From your hashing function I hope you have learnt that it can be quite compute intensive using algorithms to hash or encrypt data. This is one of the tradeoffs that you have to consider - security vs performance. You can have a really hard to break encryption algorithm, but it will likely take time to encrypt your data, your machine's fans might start up as the processor is having to work really hard. You can cut some corners and simplify your algorithm to get better performance, but it might then be easier to break your encryption.

For our assignment today we are going to use the ['AES-GCM'](https://en.wikipedia.org/wiki/Galois/Counter_Mode) algorithm (Advanced Encryption Standard Galois Counter Mode).

```javascript
const algorithm = {
    name: 'AES-GCM',
    length: 128
}
```

### Initialisation Vector

Just like the enigma code machine required daily settings that were shared by both encryption and decryption agents, our code machine requires settings that must be unique and shared between both parties.

```javascript
const settings = {
    name: 'AES-GCM',
    iv: new Uint8Array([229, 56, 109, 253, 36, 111, 243, 241, 13, 56, 220, 129, 127, 237, 6, 73])
}
```
`iv:` is short for 'initialisation vector' this is used in the algorithm that will be encrypting and decrypting your messages. You need to find a way to privately share this setting with each other. You could direct message each other on slack and share this value with each other. To generate it you can use `crypto.getRandomValues(new Uint8Array(16))`. Then share the values in the array with each other.

### Key Generation

This is the key part. There are 2 steps we need to generate a key, and export a shareable version of it for our partner. Remember this is were symmetric encryption gets it's name, the same key on both sides of the exchange.

```javascript
const key = await crypto.subtle.generateKey(algorithm, true, ["encrypt", "decrypt"])
const shareableKey = await crypto.subtle.exportKey('jwk', key)
```
The arguments to generateKey are the algorithm object we defined above, a boolean that decides if we can export the key or not, and an array of things we can do with the key; The shareableKey means we have a shareable version of the key that our partner can use to decrypt our messages. We can share the key with the message because without the settings you can't use it.

### Encryption

You have everything you need to encrypt your messages (`encrypt` is async and promise based).

```javascript
const msg = "We like to read unicode characters"
const toEncode = new TextEncoder().encode(msg)
/*
  settings, key etc
*/
const ciphertext = await crypto.subtle.encrypt(settings, key, toEncode)
```
"ciphertext" is the term given to our encrypted data. Its an ArrayBuffer, similar to the one we feed into the `encrypt` function.

### Pre-flight

Now we have encrypted our message it is in an ArrayBuffer. We need to do a little more work to make this easier to transport. It's going to be tricky to copy and paste an ArrayBuffer and preserve its properties.

```javascript
const encryptedBufferToString = Array
    .from(new Uint8Array(ciphertext))
    .map(byte => String.fromCharCode(byte)).join('')
const toTransfer = btoa(encryptedBufferToString + "|" + JSON.stringify(shareableKey))
```
The code above creates a new array from the ciphertext then maps over each value and turns it back into a unicode character i.e. `112` -> `p` - the array is then joined into a string.

The final stage is to base64 encode the joined together encryptedBufferToString (our encrypted message) and the shareable key. I have joined them using a "|" so the other side can 'split' on that character and extract the message and key.

_use `btoa()` to encode a string to base64, use `atob()` to decode a base64 encoded string to a regular string_

`console.log(toTransfer)` will give you your encrypted message ready to be passed via slack.

### Decryption

What follows can be in a totally separate file. The only thing that needs to be shared in the `iv`  (initialisation vector) settings. Unpack the pre-flight steps and get your ciphertext ArrayBuffer back in play.

```javascript
const [encryptedBufferToString, shareableKey] = atob("RuY2z0rri/YnJPGlvOzze9Nj+hLGQTsvTPXcljNWj/VSSvm9PjTbo3x7ImFsZyI6IkExMjhHQ00iLCJleHQiOnRydWUsImsiOiIxSmRHS081U2pod3FTSUx4bzZSeldBIiwia2V5X29wcyI6WyJlbmNyeXB0IiwiZGVjcnlwdCJdLCJrdHkiOiJvY3QifQ==").split("|")
const ciphertext = new Uint8Array(encryptedBufferToString.match(/[\s\S]/g).map(ch => ch.charCodeAt(0)))
```
To decrypt messages you need to get the shareableKey back to a 'crypto' key.

```javascript
const key = await crypto.subtle.importKey('jwk', JSON.parse(shareableKey), algorithm, false, ["decrypt"])
```
Combine the settings, key and ciphertext to the `decrypt` function.
```javascript
const decrypted = await crypto.subtle.decrypt(settings, key, ciphertext)
```
Last step is to decode the ArrayBuffer into a human readable string:
```javascript
const decodedMessage = new TextDecoder().decode(decrypted)
```
You are now able to communicate through an encrypted channel with your partner!

### Summary

Symmetrical encryption gets it's name from the key that is the same on both sides of the exchange. The key is used to encrypt and decrypt messages. We have also learnt that the algorithms used to encrypt and decrypt messages are maths based and require strings to be formatted in a way the algorithms can work with. Not only have we transformed string to ArrayBuffers, but we have also had to encode this structures into strings which are easier to pass around.

## Assignment

* In pairs privately share your iv settings
* Both write the code to encrypt and decrypt each others messages
* Use slack to pass your messages to each other
* Try to decode other peoples messages using your code (does it work?)

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/181)
[main](/swe)|[prev](/swe/mod1/wk1/day3.html)|[next](/swe/mod1/wk1/day5.html)