// Import the Express.js framework
const express = require('express')
// Middleware for parsing request bodies to JSON
const body_parser = require('body-parser')
// Module for file input/output operations
const path = require('path')
// Define the path to the mock database file
global.planDb = path.join(__dirname, './data/planDb.json');
// Create an instance of the Express.js application
const app = express();
// Define a route handler for the root endpoint
app.get('/', function(req, res){
      // Respond with a JSON message
    return res.json({
        message: 'hello world'
    })

})
// Specify the port number for the server to listen on
const port = 3000;
// Start the server and listen for incoming connections
app.listen(port, () => console.log(`Server running on port ${port}`));

