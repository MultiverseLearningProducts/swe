# Mod 1 > Week 2 > Day 2

## Overview of the day

Today we are going to learn about OAuth

## Learning Objectives

-   Understand OAuth and how it is used to secure website and APIs
-   Understand the difference between OAuth and OpenID connect

# Lesson - OAuth

## Materials needed

[OAuth Slides](https://docs.google.com/presentation/d/1koHMeKC-Se2NHRc96Bc4VBUmGj6cT7P11GsR4IazeWU/edit?usp=sharing)

## What is OAuth?

OAuth (2.0) is an open standard for authorization. It controls authorization to a protected resource such as an API.

If you’ve ever signed up to a new application and agreed to let it access your Facebook data or phone contacts, then you’ve used OAuth. OAuth provides secure delegated access which means an application can access resources from a server on behalf of the user, without them having to share their credentials. It does this by allowing an Identity Provider (we will be using Auth0) to issue access tokens. The token informs the API that the bearer of the token is authorized to access the API.

![clubber getting their hand stamped](https://static01.nyt.com/images/2017/06/18/nyregion/12nytoday3/12nytoday3-superJumbo.jpg?quality=90&auto=webp)
<small><i>Photo: Caitlin Ochs for The New York Times</i></small>

In a nightclub, when you enter and pay your entry fee, you will often be stamped or presented with a bracelet to ware on your wrist. This shows the security staff on the door that you have paid, and you can enter and leave the club for that evening. The bracelet or stamp is like a token the club (Identity Provider) has issue. With a legitimate stamp or bracelet the door staff (API middleware) check it and then if its ok let you in (to the controller).

## What makes OAuth secure?

-   We don't need to share our password with the 3rd party service
-   Token management means we can track each device that uses the API (and revoke access if we want)
-   OAuth provides 'scopes' which allow for fine-grained authorization
-   Tokens expire, making it very hard for them to be reused

Let's look at this diagram which illustrates the OAuth flow we are going to be using to secure our API resource:

![oauth flow showing how an identify provider issues a token which is used to secure a resource](https://user-images.githubusercontent.com/1316724/102925060-9cb1b680-448a-11eb-8177-7eda1802026f.png)

It's important to understand the difference between OAuth and OpenID-Connect. OpenID-Connect is a small extension to OAuth. OAuth is for _authorization_ whereas OpenID-Connect is for _authentication_. OAuth allows you to give a 3rd party app partial access to your resources (e.g. your Google calendar). OpenID-Connect let's you sign-up and login to an app using your credentials from another app (e.g. "Sign up using Facebook").

-   When you give an app access to post to your Facebook wall, that's OAuth
-   When you login to an app using your Google account, that's OpenID-Connect

### Assignment

-   Use [PlantUML](http://www.plantuml.com/plantuml/uml) to create your own sequence diagram which illustrates the OAuth flow.

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/184)

[main](/swe)|[prev](/swe/mod1/wk2/day1.html)|[next](/swe/mod1/wk2/finalProject.html)
