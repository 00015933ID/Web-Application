const fs = require('fs')
// access global mock db file
const schedules = require(global.plan_db)

// write service method implementations
const schedule_service = {
    getAll() {
        return schedules
    }
}

module.exports = schedule_service
