# Mod 1 > Week 2 > Day 3

## Overview of the day
Today we are going to implement the Auth0 flow. We are then going to outsource our User accounts and authentication to Auth0. This is the day when we also start to plan for the final Module project.

## Learning Objectives
  * Use token based authorization to protect resources

## Before we start

* Create a Auth0 account

## Materials needed

# Lesson 1 - Auth0

In this lesson you will sign up to Auth0, a commercial implementation of OAuth, used by many well known companies including M&S to secure their Web APIs.

  1. Go to https://auth0.com/signup 
  2. Use your personal email account, select your region as Europe and opt out of notifications. Ensure you create a PERSONAL account type.
  3. Navigate to your Dashboard and select to `Create API` for your UsersAPI using the same details as below ![Auth0 Users API](https://user-images.githubusercontent.com/1316724/102825938-b2b26f00-43d7-11eb-8eb5-444ba240a13b.PNG "Users API") 
  4. Navigate to the `Test` tab of your new API. You will see that a new application has been created called UsersAPI(Test Application) which is authorized to access the API.

      You will see a section called `Asking Auth0 for tokens from my application`. Let's look in more detail at the parameters passed as part of the cURL request:

      | Element | Explanation |
      | ------- | ----------- |
      | audience | represents the resource which we are trying to access |
      | grant_type | we are using `client_credentials` OAuth flow as we are making a machine -> machine connection hence schemes like username + password or social logins don't make sense. You can read more about this flow [here](https://auth0.com/docs/flows/client-credentials-flow). If you are creating an SPA you should use the [Authorization Code Flow with Proof Key for Code Exchange (PKCE)](https://auth0.com/docs/flows/authorization-code-flow-with-proof-key-for-code-exchange-pkce) instead (we will cover this later).
      | client_id | this is the id of the UsersAPI(Test Application) which is authorised to access the UsersAPI. |
      | client_secret | this is the client secret of the UsersAPI(Test Application) which is authorised to access the UsersAPI. |

  5. Use the information from the cURL request to help you construct a Postman request to obtain a new OAuth token.

  6. You should see a 200 success status and the body of the response should contain an `access_token`. Paste it into the Debugger at https://jwt.io and explore the contents. 

      Common claims held within JWTs are:

        * Issuer (iss)
        * Subject (sub)
        * Audience (aud)
        * Expiration time (exp)
        * Not before (nbf)
        * Issued at (iat)
        * JWT ID (jti)

# Lesson 3 - Securing your API with OAuth
Open the Users API you created yesterday in Visual Code. This is currently secured using Basic Auth and we are going to modify it to be secured instead by OAuth.

**Coach note** - solutions for JavaScript and Java at https://github.com/WhiteHatLearningProducts/swe-solutions/tree/main/mod1/users-api/oauthSecured/

## Javascript developers
1. Install the following node package dependencies:
`npm install cors dotenv express-jwt jwks-rsa`

2. Remove the dependency to `express-basic-auth` 

3. Add the following to the start of your `app.js` file as follows
```javascript
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const cors = require('cors'); 

require('dotenv').config('.env'); // Note: env vars should not be used in production
```

4. Add the following line AFTER the call to initialise Express
```javascript
app.use(cors());
```
5. Create a `.env` file and add the following entries (substituting in your personal Auth0 domain):

    `AUTH0_AUDIENCE=https://users`

    `AUTH0_DOMAIN=[your domain].eu.auth0.com`

6. Add a function to check for a valid OAuth (JWT) token:
```javascript
// create middleware for checking the JWT
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}.well-known/jwks.json`
  }),
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH0_DOMAIN}`,
  algorithms: ['RS256']
});

```
7. Secure your API:
```javascript
app.get("/users/:id", checkJwt, (req, res) => {
```

## Java developers
1. Add the OAuth dependencies to your `pom.xml` file:

```xml
    <properties>
        ...
        <spring-security.version>5.4.2</spring-security.version>
        ...
    </properties>

        </dependency>
        <dependency>
            <groupId>org.springframework.security</groupId>
            <artifactId>spring-security-oauth2-resource-server</artifactId>
            <version>${spring-security.version}</version>
        </dependency>
        <dependency>
            <groupId>org.springframework.security</groupId>
            <artifactId>spring-security-oauth2-jose</artifactId>
            <version>${spring-security.version}</version>
        </dependency>
        <dependency>
            <groupId>org.springframework.security</groupId>
            <artifactId>spring-security-config</artifactId>
            <version>${spring-security.version}</version>
        </dependency>
```

2. Create a new class which checks that the JWT has the correct audience value

```java
import org.springframework.security.oauth2.core.OAuth2Error;
import org.springframework.security.oauth2.core.OAuth2TokenValidator;
import org.springframework.security.oauth2.core.OAuth2TokenValidatorResult;
import org.springframework.security.oauth2.jwt.Jwt;

/**
 * Validates that the JWT is intended for our API.
 */
public class AudienceValidator implements OAuth2TokenValidator<Jwt> {

    private final String audience;

    AudienceValidator(String audience) {
        this.audience = audience;
    }

    public OAuth2TokenValidatorResult validate(Jwt jwt) {
        OAuth2Error error = new OAuth2Error("invalid_token", "The required audience is missing", null);

        if (jwt.getAudience().contains(audience)) {
            return OAuth2TokenValidatorResult.success();
        }
        return OAuth2TokenValidatorResult.failure(error);
    }
}
```
3. Modifiy your SecurityConfiguration to use OAuth
```java
@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Value("${auth0.audience}")
    private String audience;

    @Value("${spring.security.oauth2.resourceserver.jwt.issuer-uri}")
    private String issuer;

    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {
        httpSecurity.authorizeRequests()
                .anyRequest()
                .authenticated()
                // ** IMPORTANT! do not use the line below in production apps!! **
                .and().csrf().disable()
                .and().cors()
                .and().oauth2ResourceServer().jwt();
    }

    /**
     * Required to enable CORS - NOT suitable for production code!
     *
     * @return CorsConfigurationSource cors configuration
     */
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        final CorsConfiguration configuration = new CorsConfiguration();

        // ** IMPORTANT! do not use the line below in production apps!! **
        // ** Specify specific origins instead
        configuration.setAllowedOriginPatterns(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
        configuration.setAllowCredentials(true);
        configuration.setAllowedHeaders(Arrays.asList("Authorization", "Cache-Control", "Content-Type"));

        final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);

        return source;
    }

    @Bean
    JwtDecoder jwtDecoder() {
        NimbusJwtDecoder jwtDecoder = (NimbusJwtDecoder)
                JwtDecoders.fromOidcIssuerLocation(issuer);

        OAuth2TokenValidator<Jwt> audienceValidator = new AudienceValidator(audience);
        OAuth2TokenValidator<Jwt> withIssuer = JwtValidators.createDefaultWithIssuer(issuer);
        OAuth2TokenValidator<Jwt> withAudience = new DelegatingOAuth2TokenValidator<>(withIssuer, audienceValidator);

        jwtDecoder.setJwtValidator(withAudience);

        return jwtDecoder;
    }
}
```
4. Add a new file `application.yml` under `src/main/resources` to specify your Auth0 domain and audience
```xml
auth0:your Auth
  audience: https://users
spring:
  security:
    oauth2:
      resourceserver:
        jwt:
          issuer-uri: https://[your Auth0 domain].eu.auth0.com/
```

## Secured

Now test your middleware. You should not be able to access `/users/:id`. You will get a status code of 401 and a message about 'UnauthorizedError: No authorization token was found'.

Now we need to get our token. At the moment we are authenticating our users in the `/login` route and adding their id to `req.session.userId`. Instead of adding an authenticated user to a session we are going to call out to Auth0.com and request a token. We'll then send this token back to the user.

You can use [node-fetch](https://npmjs.com/node-fetch) to make the request, the body of the POST request you can find on the Auth0 'Test' tab. It should look something like this:

_YOUR_CLIENT_ID below needs to be replaced with the value in the example body from the Auth0 'Test' tab, same with YOUR_CLIENT_SECRET_

```javascript
// user is Authenticated - Get a token
const auth0Config = {
    client_id: YOUR_CLIENT_ID,
    client_secret: YOUR_CLIENT_SECRET,
    audience: 'http://localhost:3000/',
    grant_type: 'client_credentials'
}
const {access_token} = await fetch('https://dev-7954hoz9.eu.auth0.com/oauth/token', {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(auth0Config)
}).then(res => res.json())

res.send(access_token)
```

## Calling your API
1. Once you user has called `/login` and obtain an Auth0 token

2. Call `/users/:id` with an `Authorization` header that uses a `Bearer Token` set to this token. Hopefully you should see a 200 OK response! See below for an example (this is generated by Postman).

```json
{
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ijk3ZFlFdUxYTmNQRkxYRXdZc0JwLSJ9.eyJpc3MiOiJodHRwczovL2Rldi03OTU0aG96OS5ldS5hdXRoMC5jb20vIiwic3ViIjoiaHg4YVBnMEw2UmFESGZ6cjRzTUJINkliWWo1Nkg3WGtAY2xpZW50cyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS8iLCJpYXQiOjE2MTE3NDE5NTgsImV4cCI6MTYxMTgyODM1OCwiYXpwIjoiaHg4YVBnMEw2UmFESGZ6cjRzTUJINkliWWo1Nkg3WGsiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.FIDcKqc0AK0cj8K4PVvhmkRe7JSJhFVQMPsg9G5N7au8mN0J7ZcnMmL6UFADB1g3mXMWg_FttPOxF3KwvA8ylO3TAkHWKl-V5yY1akvaUNHfgV7lAhMpVMov_B9VRVecZR5AEImXDbcTDWcTIaa92AXos4RxXHjUhhbgJdCt50dL4F3QwA9WLiEfu72XOUId9_o1zRyvY7fSdsV9v1g2hdDWC1EmMVxSBsULxw98Rna0zNUlH66P0CJTqsnN3Z0qU-7ouRPNJZThQwBVHWtMqBTedibxq1ZxJGfYONlD-L-_gprxZmFv0wCQAJGgM8jkJym3OjYPdA7tavJbs2jQWA"
}
```

❓ How is this different from the Basic Auth that we have been using?

## Assignment

Implement token based authorization using Auth0 as a token provider.
1. Authenticate on https://Auth0.com
1. Create a new API
1. Update your express server with the jwtCheck middleware function
1. Goto the 'Test' tab on your Auth0 API Page and use the settings in the example request
1. Once your user is authenticated in the /login route - Get a token from Auth0 and send it back to your user
1. Verify everything is secure and working ok you should not be able to access the /users/:id route without a token

----

# Lesson 2 - Offload user Authorization and Authentication to Auth0

## Learning Objectives

* Set up Auth0s universal login
* Recall and follow the 3 stages of design planning (input, processes, outputs)
* Communicate the design of a programme using diagrams

## Lesson

OAuth deals specifically with authorisation of resources, **OpenID Connect** is a protocol which is built on top of OAuth 2.0 and focusses on user authentication. It is widely used to enable user logins on consumer websites and mobile apps.

![sequence diagram showing the OpenID Connect authorization flow](https://user-images.githubusercontent.com/1316724/102927348-b8b75700-448e-11eb-9d0d-3d7fa4e6e1ea.png)

OpenID Connect uses an additional JSON Web Token (JWT), called an ID token, to hold basic profile information about the authenticated (logged in) user e.g. their name or email address. Here is an example:

`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkZyZWQgRmxpbnRzdG9uZSIsImVtYWlsIjoiZnJlZC5mbGludHN0b25lQHdoaXRlaGF0Lm9yZy51ayIsImlhdCI6MTUxNjIzOTAyMn0.DlHfHG2qZXpWszZv-X8LwoQkZUlqVgaXoRmnHXE2y_I`

Use https://jwt.io to find out the name and email hidden in the JWT ID token.

So, instead of passing a user name and password to our Login page and looking this up in our user database, we will delegate authentication to Auth0. This avoid us having to store usernames and passwords (a good thing!) but means that users need to be registered in the Auth0 dashboard. 

## Implementing authentication using Auth0

![Regular Web App Option on Auth0](https://user-images.githubusercontent.com/4499581/105991041-39273400-609b-11eb-9078-6975f7a5e2bc.png)

1. Using the Auth0 Dashboard, create a new application and choose 'Regular Web Applications'
1. Create a totally new express server locally on your machine
1. Follow the wizard and select
    - Node.js(Express)
    - INTEGRATE NOW
    - SAVE SETTINGS AND CONTINUE
    - Add the code to your express project
1. Spin up your server and visit `http://localhost:3000/login`

### OpenID connect

This [library](https://npmjs.com/express-openid-connect) creates 3 routes for you on your express server. Be careful not to over write these. They are:

|route|purpose|
|:----|:------|
|`/login`|visit this route to authenticate and create new users (see below)|
|`/logout`|invalidate the logged in users token which will effectively end their 'session'|
|`/callback`|This is the redirect back to your app after successful authentication|
|`/`|This is the "home" route. Logged in users arrive here after being redirected from `/callback`|

![the login page from Auth0](https://user-images.githubusercontent.com/4499581/105988966-59092880-6098-11eb-87d4-d1c59af032d0.png)

You also have a couple of middleware functions from the library to help protect all and individual routes. The library adds a [RequestContext](https://auth0.github.io/express-openid-connect/interfaces/requestcontext.html) object onto the `req` object in express. You can access the logged in user like this `req.oidc.user`. You can view their token like this `req.oidc.accessToken`. Below are two of the main functions in the library to get you going.

|middleware|purpose|
|:---------|:------|
|auth      |this adds `req.oidc` to all your requests|
|requiresAuth|use this to protect routes that require a user to be logged in|

```javascript
app.get('/profile', requiresAuth(), (req, res) => {
  res.send(req.oidc.user)
})

/**
{
    "nickname": "bernard.mordan",
    "name": "bernard.mordan@multiverse.io",
    "picture": "https://s.gravatar.com/avatar/52c5aa1584c1dc479342c603b30ff9e2?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fbe.png",
    "updated_at": "2021-01-27T11:43:17.588Z",
    "email": "bernard.mordan@multiverse.io",
    "email_verified": false,
    "sub": "auth0|601151d59c2f080069ec8597"
}
*/
```

That last property the `sub` is a unique id number for that user. That might be useful...

## Summary

Below is the code to bootstrap a server that will use Auth0 to create, authenticate and manage authorization of users.

```javascript
const express = require('express')
const app = express()
const { sequelize } = require('./models')
const { auth } = require('express-openid-connect')

const openIDconfig = {
    authRequired: false,
    auth0Logout: true,
    secret: 'a long, randomly-generated string stored in env that you make up',
    baseURL: 'http://localhost:3000',
    clientID: YOUR_CLIENT_ID,
    issuerBaseURL: 'https://YOUR_AUTH0_DOMAIN.eu.auth0.com'
  }

app.use(express.json())
app.use(auth(openIDconfig))

// app.get('/login') this is created by express-openid-connect and displays a login widget
// app.get('/callback') this is created by express-openid-connect and fetches an authenticated user their token
// app.get('/logout') this is created by express-openid-connect and will end a users token based session

app.get('/', (req, res) => {
    res.send(req.oidc.user || "No user logged in")
})

app.listen(3000, () => {
    sequelize.sync().then(() => console.log("All ready for banking"))
})
```

* You will need to set up sequelize and your data models
* You will need to have a public folder to server assets out of i.e. `style.css`
* You need to decide on how you will integrate your frontend views (handlebars, pug, vue.js, react)

You can look back a previous projects to remind yourself of how to do this.

## Assignment

Below is a spec for a banking app.

1. Users can log into your app
1. Users can see a balance on their account (due to little time target mobile first)
1. Your app will need to be deployed (heroku)
1. A user should be able to invite a friend via a link in an email (you can integrate with gmail for this)
1. A user should see all their friends listed when they are logged in
1. A user should be able to transfer balance to their friends

In groups come up with a design pitch for this app.

* What will your data model look like?
* How will you trigger an email?
* How will the link in the email work?
* How can you transfer funds from one user to another?
* How can a user add funds?
* What UI do you need to build?

You will have 2 days to complete this challenge. You can work in groups of 3. You will need to deploy to heroku so your email link will work.

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/185)
[main](/swe)|[prev](/swe/mod1/wk2/day2.html)|[next](/swe/mod1/wk2/day4.html)