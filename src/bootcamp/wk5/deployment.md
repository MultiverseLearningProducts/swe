# Deploy your app

## Create a Heroku account

[https://heroku.com/](https://id.heroku.com/login)

## Create your Heroku app

```sh
heroku apps:create your_app_name --region eu
```
This will update your git remotes. Have a look using `git remote -v`. You have a new destination you can push code to; As well as `origin` you now have `heroku`.
```sh
heroku addons:create heroku-postgresql:hobby-dev
```

```json
"engines": {
    "node": "14",
    "npm": "6"
}
```

Heroku is an ephemeral environment. Heroku will decide what PORT to run your app on. You must expect an environmental variable called PORT and you need to start your app on that port.

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
