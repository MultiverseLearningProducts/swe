# Mod 1 > Week 1 > Day 4

## Overview of the day




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