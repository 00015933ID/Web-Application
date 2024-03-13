// Import the Express.js framework
const express = require('express');
// Create a new router instance
const router = express.Router();
// Import the home controller module
const homeController = require('../../../controllers/plan/home');
// Define a route for the root //localhost:3000/
// When a GET request is made to the root //localhost:3000/, the index function of the home controller will be called
router.get('/', homeController.index);
// Export the router to be used in other parts of the application
module.exports = router;
