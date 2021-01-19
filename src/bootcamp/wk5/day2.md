# Deploy your app

## Create a Heroku account

[https://heroku.com/](https://id.heroku.com/login)

You will need to add your ssh key to your heroku account settings:
Heroku is a lot like using git. Heroku expects your project to be in version control. You'll end up being able to deploy new versions of your app as easily as you can push code to git. `git push heroku master` will package your code (into a "slug"), create the environment (with any addons you might have installed), then run your app in a micro lite virtual machine (or dyno).

## Install the Heroku CLI tool

[https://devcenter.heroku.com/](https://devcenter.heroku.com/articles/heroku-cli)

## Create your Heroku app

```sh
heroku apps:create your_app_name --region eu
```
This will update your git remotes. Have a look using `git remote -v`. You have a new destination you can push code to; As well as `origin` you now have `heroku`. Next add your database, it will be a postgres database that Heroku will provision and attach to your app. The address of the database is then injected into your environmental variables as DATABASE_URL.
```sh
heroku addons:create heroku-postgresql:hobby-dev
```
Add the "engines" configuration to your `package.json` so when Heroku installs your app in it's container it knows which version of node and npm to use.
```json
"engines": {
    "node": "14",
    "npm": "6"
}
```
Heroku is an ephemeral environment. Heroku will decide what PORT to run your app on. You must expect an environmental variable called PORT and you need to start your server on that port. Have a look at the example below of how to read the environmental variable called PORT.
```javascript
app.listen(process.env.PORT, () => {
    sequelize.sync(() => {
        console.log('Kanban app running on port', process.env.PORT)
    })
})
```
Then update your package.json to run the app in different settings with different env variables:
```json
"scripts": {
    "start": "node server.js",
    "watch": "NODE_ENV=dev PORT=3000 nodemon server.js",
    "test": "PORT=3001 jest --watchAll",
    "test:cypress": "PORT=3001 cypress open"
}
```
Install the postgres driver
```sh
npm install pg
```
Update the sequelize config for different environments
```javascript
const connectionSettings = {
    test: {dialect: 'sqlite', storage: 'sqlite::memory:'},
    dev: {dialect: 'sqlite', storage: path.join(__dirname, 'data.db')},
    production: {dialect: 'postgres', protocal: 'postgres'}
}
const sequelize = process.env.NODE_ENV === 'production'
    ? new Sequelize(process.env.DATABASE_URL, connectionSettings[process.env.NODE_ENV])
    : new Sequelize(connectionSettings[process.env.NODE_ENV])
```
Commit your updates. Now you are ready to deploy your app.
```sh
git push heroku master
```

[attendance log](https://applied.multiverse.io/mod/questionnaire/complete.php?id=6702)
[main](/swe)|[prev](/swe/bootcamp/wk5/day1.html)|[next](/swe/bootcamp/wk5/day2.html)
