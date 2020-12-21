# Mod 1 > Week 2 > Day 2

## Overview of the day
Today we are going to learn about how to use OAuth to secure our API. 

## Learning Objectives
* Understand the limitations of Basic Auth
* Understand OAuth and how it is used to secure website and APIs
* Understand the structure and purpose of JWT
* Implement OAuth using Auth0 

## Before we start
  * Ensure you have the Postman application installed

## Materials needed
  * Postman application 
  * VS Code (for Javascript development) or IntelliJ (for Java development)

# Lesson 1 - OAuth
## What's wrong with Basic Auth?
  * The password is sent over the wire in base64 encoding which can be easily decoded
  * The password is sent repeatedly i.e. on each request meaning there is a large attack window
  * The password is cached by the webbrowser, therefore it could be silently reused by any other request to the server e.g. CSRF
  * The password may be stored permanently in the browser hence could be stolen by another user on a shared machine

TODO - could try to locate where the password is stored?

## What is OAuth?
OAuth (2.0) is an open standard for authorization. It controls authorization to a protected resource such as an API.

If you’ve ever signed up to a new application and agreed to let it access your Facebook or phone contacts, then you’ve used OAuth. OAuth provides secure delegated access which means an application can access resources from a server on behalf of the user, without them having to share their credentials. It does this by allowing an Identity Provider (we will be using Auth0) to issue access tokens. The token informs the API that the bearer of the token is authorized to access the API.

## What makes OAuth secure?
  * Token management means we can track each device that uses the API (and revoke access if we want)
  * OAuth provides 'scopes' which allow for fine-grained authorization 
  * Tokens expire, making it very hard for them to be reused

Let's look at this diagram which illustrates the OAuth flow we are going to be using to secure our API resource:

![oauth flow showing how an identify provider issues a token which is used to secure a resource](https://user-images.githubusercontent.com/1316724/102816161-74ac4f80-43c5-11eb-93af-fcc1b3fa119d.png)

**Activity** - Use [PlantUML](http://www.plantuml.com/plantuml/uml) to create your own sequence diagram which illustrates the OAuth flow.

# Lesson 2 - JWT 
OAuth returns access tokens in Json Web Tokens (JWTs) format. A JWT is easy to identify, it is three strings separated by a `.`

Here is an example:

`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXNzYWdlIjoiSGVsbG8gZnJvbSBXaGl0ZUhhdCEifQ.XSYkatPu3LirweyU13rLWblqQRNvbqoJJ0qwX_mdYgM`

Use https://jwt.io to see the secret message hidden inside this token! 

**Activity**: Create your own messages and send them to the Slack channel!

A JWT is made up of 3 parts:
* **Header** - specifies the type of token and the algorithm used to sign the token
* **Payload** - the information that we want to transmit and other information about our token
* **Signature** - verifies who sent the token

# Lesson 3 - Auth0
In this lesson you will sign up to Auth0, a commercial implementation of OAuth, used by many well known companies including M&S to secure their Web APIs.

  1. Go to https://auth0.com/signup 
  2. Use your personal email account, select your region as Europe and opt out of notifications. Ensure you create a PERSONAL account type.
  3. Navigate to your Dashboard and select to `Create API` for your UsersAPI using the same details as below ![Auth0 Users API](https://user-images.githubusercontent.com/1316724/102825938-b2b26f00-43d7-11eb-8eb5-444ba240a13b.PNG "Users API") 
  4. Navigate to the `Test` tab of your new API. You will see that a new application has been created called UsersAPI(Test Application) which is authorised to access the API.

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
app.get("/users", checkJwt, (req, res) => {
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
                .and().cors()
                .and().oauth2ResourceServer().jwt();
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

## Calling your API
1. Obtain your Auth0 token.

2. Call the API with a `Bearer Token` set to this token. Hopefully you should see a 200 OK response!

# Lesson 4 - Modify your Login page to use the Auth0 Login page
Instead of passing a user name and password to our Login page and looking this up in our user database, we will delegate the Login function to Auth0. This avoid us having to store usernames and passwords (a good thing!) but means that users need to be registered in the Auth0 dashboard. 

## Add a new user to Auth0
Using the Auth0 Dashboard, create a new user "demo" with a password of "demo1"

![creating a new user](https://user-images.githubusercontent.com/1316724/102827170-fdcd8180-43d9-11eb-97b1-a1285778a535.PNG)

Modify your Login page to use the Auth0 Universal Login Page. 
![sequence diagram showing the OAuth authorization flow](images/authorizeUserSeq.png)
 
TODO - https://auth0.com/docs/quickstart/spa/vanillajs - could provide a template solution for them as quite complex to setup especially with calling the API - I have a sample in the SPA directory but it needs tidying up/commenting. 

TODO - Id Connect
TODO - identify id token - print "Hello Demo"

[next](/swe/mod1/wk2/day3.html)
[main](/swe)