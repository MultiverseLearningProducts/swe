# Mod 1 > Week 2 > Day 3

## Overview of the day
Today we are going to learn about how to use OAuth to secure our API. 

## Learning Objectives
* Understand JWT tokens
* Understand the OAuth flow
* Understanding the advantages of OAuth over Basic Auth
* Implement OAuth using Auth0 https://auth0.com/docs/quickstart/backend/nodejs/01-authorization#configure-auth0-apis and https://auth0.com/docs/flows/authorization-code-flow

## Before we start

## Materials needed

# Lesson 1
Sign up to Auth0, a service which implements OAuth and is used by many well known companies including M&S to secure their Web APIs.
  * Go to https://auth0.com/signup 
  * Use your personal email account, select your region as Europe and opt out of notifications. Ensure you create a PERSONAL account type.

Auth0 is commercial solution for adding authentication and authorization services to your applications. There are many [use cases](https://auth0.com/docs/get-started#use-cases-for-auth0) for using Auth0 but we are going to focus on using it to secure our API with OAuth.

Navigate to your Dashboard and select to `Create API` using the naming as below ![Auth0 Create API](createAPI.png "Create API")

Now navigate to the `Test` tab of your new API. You will see that no applications are authorised to access the API hence we can't test it. Click on the `Create & Authorise Test Application` link. This should create a new `ContactsAPI(Test Application)` under the `Applications` menu.

You will see a section called `Asking Auth0 for tokens from my application`. Use the information from the cURL request to help you construct a Postman request to obtain a new OAuth token.

Let's break the request in more detail:
| Element | Explanation |
| ------- | ----------- |
| audience | represents the resource which we are trying to access |
| grant_type | we are using `client_credentials` OAuth flow as we are making a machine -> machine connection hence schemes like username + password or social logins don't make sense. You can read more about this flow [here](https://auth0.com/docs/flows/client-credentials-flow). If you are creating an SPA you should use the [Authorization Code Flow with Proof Key for Code Exchange (PKCE)](https://auth0.com/docs/flows/authorization-code-flow-with-proof-key-for-code-exchange-pkce) instead (we will cover this later).
| client_id | this is the id of the ContactsAPI(Test Application) we created earlier - rememeber we authorised it to be able to access the ContactsAPI. |
| client_secret | this is the client secret of the ContactsAPI(Test Application) we created earlier - rememeber we authorised it to be able to access the ContactsAPI. |


OAuth - is used for authorising access to resources. OpenID Connect sits on top of OAuth which adds login and profile information (authentication). OpenID Connect allows one login to be used across multiple applications (single sign on). OpenID uses an additional token - the id token.

Audience represents the resource identifier.

Access Tokens are used in token-based authentication to allow an application to access an API. The application receives an Access Token after a user successfully authenticates and authorizes access, then passes the Access Token as a credential when it calls the target API. The passed token informs the API that the bearer of the token has been authorized to access the API.

Useful doc - https://auth0.com/docs/architecture-scenarios/spa-api

|Javascript|Java|
```javascript
const a = 1;
```

```java
int a = 1;
```
[next](/swe/mod1/wk2/day4.html)
[main](/swe)