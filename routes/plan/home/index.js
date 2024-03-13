// Import the Express.js framework
const express = require('express');
// Create a new router instance
const router = express.Router();
const homeController = require('../../../controllers/plan/home');

router.get('/', homeController.index);
router.get('/add', homeController.add);
router.get('/update', homeController.update);
// Export the router to be used in other parts of the application
module.exports = router;
