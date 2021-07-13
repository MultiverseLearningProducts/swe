# Mod 1 > Week 1 > Day 4

## Overview of the day

Today we're going to be looking at encryption.

## Lesson 1 - Symmetric Key Encryption

## Learning Objectives

-   encrypt a text message using a key
-   decrypt a text message using a key

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
new TextEncoder().encode("We like to read unicode characters") [87, 101, 32,
108, 105, 107, 101, 32, 116, 111, 32, 114, 101, 97, 100, 32, 117, 110, 105, 99,
111, 100, 101, 32, 99, 104, 97, 114, 97, 99, 116, 101, 114, 115]
```

❓ Why do you think an encryption function might want you to pass it a string as an ArrayBuffer?

### Picking an algorithm

From your hashing function I hope you have learnt that it can be quite compute intensive using algorithms to hash or encrypt data. This is one of the tradeoffs that you have to consider - security vs performance. You can have a really hard to break encryption algorithm, but it will likely take time to encrypt your data, your machine's fans might start up as the processor is having to work really hard. You can cut some corners and simplify your algorithm to get better performance, but it might then be easier to break your encryption.

For our assignment today we are going to use the ['AES-GCM'](https://en.wikipedia.org/wiki/Galois/Counter_Mode) algorithm (Advanced Encryption Standard Galois Counter Mode).

```javascript
const algorithm = {
    name: "AES-GCM",
    length: 128,
};
```

### Initialisation Vector

Just like the enigma code machine required daily settings that were shared by both encryption and decryption agents, our code machine requires settings that must be unique and shared between both parties.

```javascript
const settings = {
    name: "AES-GCM",
    iv: new Uint8Array([
        229, 56, 109, 253, 36, 111, 243, 241, 13, 56, 220, 129, 127, 237, 6, 73,
    ]),
};
```

`iv:` is short for 'initialisation vector' this is used in the algorithm that will be encrypting and decrypting your messages. You need to find a way to privately share this setting with each other. You could direct message each other on slack and share this value with each other. To generate it you can use `crypto.getRandomValues(new Uint8Array(16))`. Then share the values in the array with each other.

### Key Generation

This is the key part. There are 2 steps we need to generate a key, and export a shareable version of it for our partner. Remember this is were symmetric encryption gets it's name, the same key on both sides of the exchange.

```javascript
const key = await crypto.subtle.generateKey(algorithm, true, [
    "encrypt",
    "decrypt",
]);
const shareableKey = await crypto.subtle.exportKey("jwk", key);
```

The arguments to generateKey are the algorithm object we defined above, a boolean that decides if we can export the key or not, and an array of things we can do with the key; The shareableKey means we have a shareable version of the key that our partner can use to decrypt our messages. We can share the key with the message because without the settings you can't use it.

### Encryption

You have everything you need to encrypt your messages (`encrypt` is async and promise based).

```javascript
const msg = "We like to read unicode characters";
const toEncode = new TextEncoder().encode(msg);
/*
  settings, key etc
*/
const ciphertext = await crypto.subtle.encrypt(settings, key, toEncode);
```

"ciphertext" is the term given to our encrypted data. Its an ArrayBuffer, similar to the one we feed into the `encrypt` function.

### Pre-flight

Now we have encrypted our message it is in an ArrayBuffer. We need to do a little more work to make this easier to transport. It's going to be tricky to copy and paste an ArrayBuffer and preserve its properties.

```javascript
const encryptedBufferToString = Array.from(new Uint8Array(ciphertext))
    .map((byte) => String.fromCharCode(byte))
    .join("");
const toTransfer = btoa(
    encryptedBufferToString + "|" + JSON.stringify(shareableKey)
);
```

The code above creates a new array from the ciphertext then maps over each value and turns it back into a unicode character i.e. `112` -> `p` - the array is then joined into a string.

The final stage is to base64 encode the joined together encryptedBufferToString (our encrypted message) and the shareable key. I have joined them using a "|" so the other side can 'split' on that character and extract the message and key.

_use `btoa()` to encode a string to base64, use `atob()` to decode a base64 encoded string to a regular string_

`console.log(toTransfer)` will give you your encrypted message ready to be passed via slack.

### Decryption

What follows can be in a totally separate file. The only thing that needs to be shared in the `iv` (initialisation vector) settings. Unpack the pre-flight steps and get your ciphertext ArrayBuffer back in play.

```javascript
const [encryptedBufferToString, shareableKey] = atob(
    "RuY2z0rri/YnJPGlvOzze9Nj+hLGQTsvTPXcljNWj/VSSvm9PjTbo3x7ImFsZyI6IkExMjhHQ00iLCJleHQiOnRydWUsImsiOiIxSmRHS081U2pod3FTSUx4bzZSeldBIiwia2V5X29wcyI6WyJlbmNyeXB0IiwiZGVjcnlwdCJdLCJrdHkiOiJvY3QifQ=="
).split("|");
const ciphertext = new Uint8Array(
    encryptedBufferToString.match(/[\s\S]/g).map((ch) => ch.charCodeAt(0))
);
```

To decrypt messages you need to get the shareableKey back to a 'crypto' key.

```javascript
const key = await crypto.subtle.importKey(
    "jwk",
    JSON.parse(shareableKey),
    algorithm,
    false,
    ["decrypt"]
);
```

Combine the settings, key and ciphertext to the `decrypt` function.

```javascript
const decrypted = await crypto.subtle.decrypt(settings, key, ciphertext);
```

Last step is to decode the ArrayBuffer into a human readable string:

```javascript
const decodedMessage = new TextDecoder().decode(decrypted);
```

You are now able to communicate through an encrypted channel with your partner!

### Summary

Symmetrical encryption gets it's name from the key that is the same on both sides of the exchange. The key is used to encrypt and decrypt messages. We have also learnt that the algorithms used to encrypt and decrypt messages are maths based and require strings to be formatted in a way the algorithms can work with. Not only have we transformed string to ArrayBuffers, but we have also had to encode this structures into strings which are easier to pass around.

## Assignment

-   In pairs privately share your iv settings
-   Both write the code to encrypt and decrypt each others messages
-   Use slack to pass your messages to each other
-   Try to decode other peoples messages using your code (does it work?)

## Lesson 1 - Asymmetric Encryption

## Learning Objectives

-   contrast the tradeoffs between Symmetric and Asymmetric encryption
-   Generate a public and private key pair
-   Use a public key to encrypt a message
-   Use a private key to decrypt a message

## Before we start

You should know about hashing and symmetric encryption.

## Materials needed

## Lesson

![a illustration of asymmetric encryption](https://sectigostore.com/blog/wp-content/uploads/2020/04/types-of-encryption-asymmetric-encryption.png)

Asymmetric encryption makes use of 2 different keys. A public key and a private key. The public key is used to encrypt a message. The difference is that public key has its own exclusive private key. They are a key pair. The public key can be out in the wild and people can encrypt messages till their hearts are content. It is only the owner of the private key who can unlock and decrypt the messages encrypted with the paired public key.

This solves the problem of key distribution which you had to deal with yesterday when you were encrypting messages with the same key. There are other differences between symmetric and asymmetric encryption.

| Symmetric Encryption                                            | Asymmetric Encryption                                                                                  |
| :-------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- |
| Uses a single key to encrypt and decrypt the data               | Uses two separate keys for encryption and decryption. They are known as "public key" and "private key" |
| Is more straightforward and conventional                        | Was invented to mitigate the risks of symmetric encryption and is more complicated                     |
| Is faster when compared to asymmetric encryption                | Is slower and required more computational power                                                        |
| Requires smaller key lengths (usually about 128-256 bit length) | Keys are longer in length                                                                              |
| Provides confidentiality of the data                            | Provides confidentiality, authenticity and non-repudiation (something you cant deny)                   |
| Good for encrypting large amounts of data                       | Good for encrypting smaller amounts of data                                                            |
| Typical algorithms RC4, AES, DES, 3DES, QUAD                    | Typical algorithms RSA, Diffie-Hellman, ECC, El Gamal, DSA                                             |

### Secret ballot

We are going to encrypt a file and send it using asymmetric encryption. I want us to vote on the following question:

> Who in your cohort do you vote to be cohort president?

This is a secret ballot so your submission needs to be encrypted. You need to write the name of the apprentice you'd like to be president in a file and encrypt it with my public key. I, as the returning officer, will not be voting but I will collect and decrypt your encrypted submissions using my private key.

### OpenSSL

[OpenSSL](https://www.openssl.org/) is a general-purpose cryptography library. It comes bundled with Git so both OSX and Windows users can access this command line tool. Git makes use of SSH keys to help you securely connect to your Github repos without having to authenticate with a username and password every time you interact with them. You might recall adding your public key to your Github account? We will use a similar key pair only in the Privacy-Enhanced Mail format or PEM.

![how to open Git Bash on Windows](https://content.codecademy.com/courses/freelance-1/unit-3/git%20bash%20setup/annotated_gitbash_start.png)

### Generate the key pair

I will generate a key pair on my machine.

```sh
openssl genrsa -out id_rsa.pem 2048
```

That creates the private key on my computer in a file called `id_rsa.pem`. Now I'm going to extract the public key from that file which I'll share with you.

```sh
openssl rsa -in id_rsa.pem -outform PEM -pubout -out id_rsa.pub.pem
```

Now I have 2 files `id_rsa.pem` and `id_rsa.pub.pem` I'll sent this to you all in slack. It's totally fine to share this key. However I have to be guarded about the private key on my computer, but is fine as I don't need to move it or share it.

### Encrypt

Can you store the public key in a folder and create another file next to it with your nomination for president. Now lets create a third file (the encrypted vote file).

```sh
openssl rsautl -encrypt -pubin -inkey id_rsa.pub.pem -in my_vote.txt -out vote.txt
```

You can check the contents of your `vote.txt` file. You should be unable to distinguish the name you put in `my_vote.txt` file. You can send this file to me via slack.

### Decrypt

When I receive your file I am going to decrypt it with my private key and record the name in a spreadsheet.

```sh
openssl rsautl -decrypt -inkey id_rsa.pem -in vote.txt
```

That will output the name to my terminal. If I wanted to save the decrypted message to disc I would add the file name I wanted to save it as after the `-out` flag.

```sh
openssl rsautl -decrypt -inkey id_rsa.pem -in vote.txt -out decrypted_vote.txt
```

### Results

To decrypt, we will use a bash command to batch decrypt all of your votes in one go:

`` for i in ./vote*.txt;do echo "`openssl rsautl -decrypt -inkey id_rsa.pem -in "$i"`" >> output.txt;done ``

The votes are in and the new cohort president is...

### Summary

In this session we have generated an asymmetric key pair consisting of a public and private key. You have used a public key to encrypt a file and have sent that to me securely and privately. You have seen me use my private key to decrypt your file and retrieve the name you sent me. My private key has not moved from my disc and we've been able to send encrypted messages without having to share sensitive keys.

## Assignment

### Part 1

We have looked at hashing, symmetric and asymmetric encryption, these are building blocks. Digitally signing a file uses the cryptographic building blocks we have looked at to verify that a file has not been tampered with in transit. Can you research how to digitally 'sign' a file using openssl. Send your file and it's signature to your partner in crypto and get them to verify your file. How can you break the verification?

### Part 2

Near the end of the day, we'll all regroup to complete a cryptography quiz on [https://www.kahoot.it]().

---

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/181)
[main](/swe)|[prev](/swe/mod1/wk1/day3.html)|[next](/swe/mod1/wk1/day5.html)
