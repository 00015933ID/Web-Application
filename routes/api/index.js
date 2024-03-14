// Importing the Express.js module
const express = require('express')
// Importing the schedule_router for handling schedule-related routes
const schedule_router = require('./schedule')
// Creating a new router instance
const router = express.Router()

// Registering child routers
// Here, I am telling the router to use the schedule_router for the '/schedule' route
router.use('/schedule', schedule_router)

// Exporting the router to be used in other parts of the application
module.exports = router