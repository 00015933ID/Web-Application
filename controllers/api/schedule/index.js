// import specific service class
const schedule_service = require('../../../services/schedule/')

// mention the service's needed actions (methods)
const schedule_controller = {
    getAll(req, res) {
        res.json(schedule_service.getAll())
    }
}

module.exports = schedule_controller
