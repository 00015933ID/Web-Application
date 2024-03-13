// Import the Express.js framework
const express = require('express')

// Middleware for parsing request bodies to JSON
const body_parser = require('body-parser')

// Module for file input/output operations
const path = require('path')

// Import the plan routes module
const plan_route = require('./routes/plan')

// Define the path to the plan database file and store it in a global variable
global.planDb = path.join(__dirname, './data/planDb.json')
// Create an instance of the Express.js application
const app = express();

// Set the view engine for rendering views
// In this case, it's set to 'pug', meaning the application will render Pug templates
app.set('view engine', 'pug');
// Serve static files from the 'public' directory for '/css' and '/js' routes
// This allows serving CSS and JavaScript files to the client
app.use('/css', express.static('public/css'))
app.use('/js', express.static('public/js'))
// Use the plan routes defined in the 'plan_route' module
app.use('/', plan_route); 
// Specify the port number for the server to listen on
const port = 3000;
// Start the server and listen for incoming connections
app.listen(port, () => console.log(`Server running on port ${port}`));

