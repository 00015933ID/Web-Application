// Import the Express.js framework
const express = require('express')
// Import the router for the home route
const homeRouter = require('./home')
// Create a new router instance
const router = express.Router()

// Registering child routers
// Here, I am telling the router to use the home router for the '/' route
router.use('/', homeRouter)

// Export the router to be used in other parts of the application
module.exports = router
