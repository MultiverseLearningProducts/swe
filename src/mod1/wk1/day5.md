# Mod 1 > Week 1 > Day 5

## Overview of the day

Today we conclude our study of cryptography by looking at asymetrical encryption. The day will also include a quiz so you can test your knowledge in preparation for next weeks material.

----

## Lesson 1 - Asymmetric Encryption

## Learning Objectives

* contrast the tradeoffs between Symmetric and Asymmetric encryption
* Generate a public and private key pair
* Use a public key to encrypt a message
* Use a private key to decrypt a message 

## Before we start

You should know about hashing and symmetric encryption.

## Materials needed

## Lesson

![a illustration of asymmetric encryption](https://sectigostore.com/blog/wp-content/uploads/2020/04/types-of-encryption-asymmetric-encryption.png)

Asymmetric encryption makes use of 2 different keys. A public key and a private key. The public key is used to encrypt a message. The difference is that public key has its own exclusive private key. They are a key pair. The public key can be out in the wild and people can encrypt messages till their hearts are content. It is only the owner of the private key who can unlock and decrypt the messages encrypted with the paired public key.

This solves the problem of key distribution which you had to deal with yesterday when you were encrypting messages with the same key. There are other differences between symmetric and asymmetric encryption.

|Symmetric Encryption|Asymmetric Encryption|
|:---|:---|
Uses a single key to encrypt and decrypt the data|Uses two separate keys for encryption and decryption. They are known as "public key" and "private key"
Is more straightforward and conventional|Was invented to mitigate the risks of symmetric encryption and is more complicated
Is faster when compared to asymmetric encryption|Is slower and required more computational power
Requires smaller key lengths (usually about 128-256 bit length)|Keys are longer in length
Provides confidentiality of the data|Provides confidentiality, authenticity and non-repudiation (something you cant deny)
Good for encrypting large amounts of data|Good for encrypting smaller amounts of data
Typical algorithms RC4, AES, DES, 3DES, QUAD|Typical algorithms RSA, Diffie-Hellman, ECC, El Gamal, DSA

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

The votes are in and the new cohort president is...

### Summary

In this session we have generated an asymmetric key pair consisting of a public and private key. You have used a public key to encrypt a file and have sent that to me securely and privately. You have seen me use my private key to decrypt your file and retrieve the name you sent me. My private key has not moved from my disc and we've been able to send encrypted messages without having to share sensitive keys.

## Assignment

We have looked at hashing, symmetric and asymmetric encryption, these are building blocks. Digitally signing a file uses the cryptographic building blocks we have looked at to verify that a file has not been tampered with in transit. Can you research how to digitally 'sign' a file using openssl. Send your file and it's signature to your partner in crypto and get them to verify your file. How can you break the verification?

----

## Lesson 2 - Crypto Quiz

## Learning Objectives

* Recall the main features of hashing
* Identify what makes an encryption symmetrical/asymmetrical
* Identify an advantage/disadvantage of symmetrical/asymmetrical encryption
* What factors go into selecting an encrypting algorithm

## Before we start

You should have completed all our sessions and have had the chance to ask any questions.

## Materials needed

## Lesson

For the Quiz follow [https://www.kahoot.it]().

## Assignment

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/182)
[main](/swe)|[prev](/swe/mod1/wk1/day4.html)|[next](/swe/mod1/wk2/day1.html)