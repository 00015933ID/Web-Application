// Importing necessary modules
// Importing Express.js module for creating web server
const express = require('express')
// Importing body-parser for parsing request bodies
const body_parser = require('body-parser')
// Importing path module for dealing with file paths
const path = require('path')
// Setting up global variable for mock database file path
global.plan_db = path.join(__dirname, './data/plan_db.json');
// Importing route handler modules
const plan_route = require('./routes/plan')
const api_route = require('./routes/api');
// Creating Express application instance
const app = express();
// Setting the view engine for rendering templates
app.set('view engine', 'pug');
// Serving static files such as CSS and JS
app.use('/css', express.static('public/css'))
app.use('/js', express.static('public/js'))
// Middleware for parsing request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routing for API and plan-related routes
app.use('/api', api_route); // API routes
app.use('/', plan_route); // plan routes
// Fallback route for handling unknown requests
app.use((req, res) => {
    res.redirect('/');
});
// Starting the server
const port = 3000;// Defining the port number
app.listen(port, () => console.log(`Server running on port ${port}`));// Starting the server and logging a message when it starts
