// import specific service class
const schedule_service = require('../../../services/schedule')

// mention the service's needed actions (methods)
const schedule_controller = {
    getAll(req, res) {
        res.json(schedule_service.getAll())
    },
    create(req, res) {
        res.status(201).json(
            schedule_service.create(req, res)
        )
    },
    update(req, res) {
        const schedule = schedule_service.update(req.params.id, req.body)
        
        if (schedule) {
            res.json(schedule)
        } else {
            res.status(404).send('Schedule not found')
        }
    },
    delete(req, res) {
        const schedule = schedule_service.getById(req.params.id)
        
        if (schedule) {
            schedule_service.delete(req.params.id)
            res.status(204).send('Schedule deleted successfully')
        } else {
            res.status(404).send('Schedule not found')
        }
    }
}

module.exports = schedule_controller

