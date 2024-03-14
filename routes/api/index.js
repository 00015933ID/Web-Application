const express = require('express')
const schedule_router = require('./schedule')

const router = express.Router()

// registering child routers
router.use('/schedule', schedule_router)


module.exports = router