// Importing the Express.js module
const express = require('express');
// Creating a new router instance
const router = express.Router();
// Importing the homeController from the plan directory's controllers
const homeController = require('../../../controllers/plan/home');
// Defining routes and associating them with controller methods
router.get('/', homeController.index);// Route for the home page, handled by the index method of homeController
router.get('/add', homeController.add);// Route for adding a new plan, handled by the add method of homeController
router.get('/update/:id', homeController.update);// Route for updating a plan, handled by the update method of homeController

// Exporting the router to be used in other parts of the application
module.exports = router;

