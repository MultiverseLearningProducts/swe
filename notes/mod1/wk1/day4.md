# Mod1 > Week 1 > Day 4

## Overview of the day

Introduction to Crypto

# Session 1 - Hashing

## Learning Objectives

## Pre-work or Assumed knowledge

## Materials

## Notes

Some of my apprentices were a bit stuck and needed a nudge to get going. Here is a link to our small breakout session: [zoom recording](https://zoom.us/rec/share/TG9GwmcTkJIlNefbZyyiy50lzjCxy0s7RwxE-iLJ_8gDTpmDqqYwWiqOcvrnj7g.YSCTzbpMsZ1LTKQK?startTime=1611228009000)

## Assignment

## Additional Reading

<hr/>

# Session 2 - Symmetric Encryption

## Learning Objectives

## Pre-work or Assumed knowledge

## Materials

## Notes

Apprentices in pairs can generate messages in the console of their browser and paste them into slack. The encrypted message can then be pasted into their `.html` file and reloaded to decrypt the message.

```html
<h1>Near side</h1>
<script>
    (async function () {
        const msg = "We like to read unicode characters"
        const toEncode = new TextEncoder().encode(msg)

        console.log(toEncode)
        
        const algorithm = {
            name: 'AES-GCM',
            length: 128
        }

        const settings = {
            name: 'AES-GCM',
            iv: new Uint8Array([229, 56, 109, 253, 36, 111, 243, 241, 13, 56, 220, 129, 127, 237, 6, 73])
        }

        const key = await crypto.subtle.generateKey(algorithm, true, ["encrypt", "decrypt"])
        const shareableKey = await crypto.subtle.exportKey('jwk', key)
        const ciphertext = await crypto.subtle.encrypt(settings, key, toEncode)

        const transString = Array
            .from(new Uint8Array(ciphertext))
            .map(byte => String.fromCharCode(byte)).join('')
        const toTransfer = btoa(transString + "|" + JSON.stringify(shareableKey))
        
        console.log(toTransfer)
    })()
</script>
```

```html
<h1>Other Side</h1>
<script>
    (async function () {
        const [encryptedBufferToString, shareableKey] = atob("RuY2z0rri/YnJPGlvOzze9Nj+hLGQTsvTPXcljNWj/VSSvm9PjTbo3x7ImFsZyI6IkExMjhHQ00iLCJleHQiOnRydWUsImsiOiIxSmRHS081U2pod3FTSUx4bzZSeldBIiwia2V5X29wcyI6WyJlbmNyeXB0IiwiZGVjcnlwdCJdLCJrdHkiOiJvY3QifQ==").split("|")
        const ciphertext = new Uint8Array(encryptedBufferToString.match(/[\s\S]/g).map(ch => ch.charCodeAt(0)))

        const algorithm = {
            name: 'AES-GCM',
            length: 128
        }

        const settings = {
            name: 'AES-GCM',
            iv: new Uint8Array([229, 56, 109, 253, 36, 111, 243, 241, 13, 56, 220, 129, 127, 237, 6, 73])
        }

        const key = await crypto.subtle.importKey('jwk', JSON.parse(shareableKey), algorithm, false, ["decrypt"])
        const decrypted = await crypto.subtle.decrypt(settings, key, ciphertext)
        const msgDecodeText = new TextDecoder().decode(decrypted)
        console.log(msgDecodeText)
    })()  
</script>
```

## Assignment

You should end up with your slack channel looking something like this:

![encrypted messages in slack](https://user-images.githubusercontent.com/4499581/105473733-5754f480-5c95-11eb-8548-401d3ba74e47.png)

If there is time they can create some UI in the browser. For example an input field to paste a message into and display the decrypted messages.

## Additional Reading