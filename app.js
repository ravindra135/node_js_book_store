const express = require('express')
const app = express()
const port = 3000

const routes = require('./routes');

const db = require('./db')

// app.use(express.json());

/**
 * we import the routes module and use it as middleware for the app. 
 * The app.use('/', routes); line tells 
 * Express to use the routes for any path that starts with /. 
 * This means that the routes defined in routes.js will be accessible from the root of your application
 */
app.use('/', routes)

app.listen(port, () => {
    console.log(`Node App Started on ${'http://localhost:'+port}`)
});
