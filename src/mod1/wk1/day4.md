# Mod 1 > Week 1 > Day 4

## Overview of the day

Today we're going to be looking at encryption.

## Lesson 1 - Symmetric Key Encryption

## Learning Objectives

-   encrypt a text message using a key
-   decrypt a text message using a key

## Symmetric Key Encryption

![a diagram of symmetric encryption](https://sectigostore.com/blog/wp-content/uploads/2020/04/types-of-encryption-symmetric-encryption.png)

Symmetric encryption uses a key to encrypt and then decrypt a message. Once a message is encrypted, it can't be understood by anyone and is safe to pass around in public (or, in this context, send over a network). A second party with the key is the only other party who can decrypt and read your message.

[![The enigma code machine used symmetric encryption](https://www.101computing.net/enigma/images/enigma-how-to.png)](https://www.101computing.net/enigma-encoder/)

The enigma code machine used symmetric encryption. The operator would set up their machine at the start of each day with that day's settings. The settings came from a code book. An Enigma code book would have one page per month. The page would include all the settings for each day of the month with the first day of the month at the bottom of the page so that, once used, a setting could be torn off the page.

❓ How is symmetric encryption different from hashing?

❓ These books would have been very carefully protected, why do you think that is?

❓ What is one of the vulnerabilities of symmetric encryption

❓ It's always recommended that a symmetric key is shared in a different channel (e.g. phone, email etc.) to the channel the encrypted message is sent through. Why do you think that is?

### One-Time Pad

It can be hard to wrap your head around the idea that a key - which is just a series of bits - can be used to encrypt and decrypt messages. This is especially true since secure algorithms like AES deliberately introduce confusion so it can be hard to follow their logic.

A simple (but theoretically effective) symmetric encyrption algorithm is called the one time pad. The algorithm works as follows:

First, take the message you want to encrypt. For our purposes, let's assume the message can only contain the 26 lower-case characters a-z.

Second, generate a random string of a-z characters of the **same length** as the original message. This is our symmetric key and the person receiving the message will need it too.

To encrypt the message, we align the message and the key and convert each character to its alphabetic position (a=1, b=2, etc.). For each character index, we add the value in the message with the value in the key. This addition is performed modulo 26 so, if the sum exceeds 26, we wrap back round (e.g. 27 wraps back to 1).

![one-time pad encryption of cat with ahy gives us dis](https://user-images.githubusercontent.com/44523714/125615946-0aed878b-c0b6-4ec7-bc5b-9fe3c4dc07ae.png)

Note how T (alphabetic index 20) added with Y (alphabetic index 25) gives 19. This is because `(20 + 25) % 26` = `19`.

Given the key and the encrypted message, we can decrypt it by **subtracting** the key from the message.

![one-time pad decryption of dis with ahy gives us cat](https://user-images.githubusercontent.com/44523714/125615937-9ad3effc-5ef3-418f-b2f2-53ae0f7a1c65.png)

Again, `(19 - 25) % 26` = `20` so we get 'T' back. (Note: JavaScript's `%` operator will give -6 instead, there is a work-around below).

The one-time pad, despite its simplicity, is perfectly secure. Its problem is that it doesn't introduce much confusion between the encrypted and original message, so a key should never be used more than once (hence the 'one-time'). This is why algorithms like AES are used instead.

### OpenSSL

[OpenSSL](https://www.openssl.org/) is a general-purpose cryptography library. It comes bundled with Git so both OSX and Windows users can access this command line tool.

![how to open Git Bash on Windows](https://content.codecademy.com/courses/freelance-1/unit-3/git%20bash%20setup/annotated_gitbash_start.png)

Let's use openssl to encrypt a message using AES. First, we create a file to encrypt:

```sh
echo "pls keep it secret" > secretmsg.txt
```

The `>` writes the output to a file.

Now we can use openssl's `rand` function to generate a random key.

```sh
> openssl rand -hex 32
25523096698f8da3767c16ebcf85d3e182b288e7869a28e76661371dbd9f346f
```

(as a side note, `rand` is a useful tool if you need to quickly generate a random key e.g. a password for your app's server)

The `-hex` indicates we want the output to be hexadecimal. The `32` is the number of bytes the output should occupy (32 bytes = 256 bits).

We can then take this key and use it to encrypt our `secretmsg.txt`

```sh
> openssl enc -aes-256-ecb -in secretmsg.txt -K 25523096698f8da3767c16ebcf85d3e182b288e7869a28e76661371dbd9f346f > encryptedmsg
```

-   `enc -aes-256-ecb` specifies we are encrypting with the AES algorithm
-   `-in secretmsg.txt` is our input message
-   `-K 255230...` is our key
-   `> encryptedmsg` tells bash to save the output to a file called `encryptedmsg`

The `encryptedmsg` file looks like gibberish but, unlike with a hash, all our data is there and can be recovered given the key:

```sh
> openssl enc -aes-256-ecb -in encryptedmsg -d -K 25523096698f8da3767c16ebcf85d3e182b288e7869a28e76661371dbd9f346f

pls keep it secret
```

Notice the `-d` for "decrypt"

## Assignment

### Part 1

-   In pairs, privately share a symmetric key
-   Use openssl to encyrpt a message with this key
-   Use the group's slack channel to pass your encrypted messages to each other
-   Try to decode other peoples messages using your code (does it work?)

### Part 2

Implement a one-time pad in a programming language of your choice. You need two functions:

-   `encrypt(message, key) >> encryptedMessage`
-   `decrypt(encryptedMessage, key) >> message`

Rather than just using `x % y`, it's safest to create a function that uses this logic for modulus

```js
function mod(x, y) {
    const remainder = x % y;
    if (remainder < 1) {
        return y + remainder;
    } else {
        return remainder;
    }
}
```

This will ensure your modulus doesn't output negative numbers.

Write some unit tests for your `encrypt` and `decrypt` functions. Your functions should ideally validate the user input and throw errors accordingly.

Once you're confident your functions works, you can try share messages with members of your cohort.

## Lesson 2 - Asymmetric Encryption

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

### Generate the key pair

I will generate a key pair on my machine.

```sh
openssl genrsa -out id_rsa.pem 2048
```

That creates the private key on my computer in a file called `id_rsa.pem`. Now I'm going to extract the public key from that file which I'll share with you.

```sh
openssl rsa -in id_rsa.pem -outform PEM -pubout -out id_rsa.pub.pem
```

Now I have 2 files `id_rsa.pem` and `id_rsa.pub.pem` I'll send this to you all in slack. It's totally fine to share this key, however, I shouldn't share the private key.

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
