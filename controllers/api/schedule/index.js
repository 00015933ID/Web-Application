// Importing the schedule service
const schedule_service = require('../../../services/schedule')

// Defining the schedule_controller object
const schedule_controller = {
    // Method to get all schedules
    getAll(req, res) {
        res.json(schedule_service.getAll())// Returning all schedules as JSON
    },
    // Method to create a new schedule
    create(req, res) {
        // Calling the create method of the schedule service to add a new schedule
        res.status(201).json(
            schedule_service.create(req, res)
        )
    },
    // Method to update an existing schedule
    update(req, res) {
        // Calling the update method of the schedule service to update the schedule with the specified ID
        const schedule = schedule_service.update(req.params.id, req.body)
        // Checking if the schedule was found and updated successfully
        if (schedule) {
            res.json(schedule)
        } else {
            res.status(404).send('Schedule not found')
        }
    },
    // Method to delete an existing schedule
    delete(req, res) {
        // Retrieving the schedule with the specified ID
        const schedule = schedule_service.getById(req.params.id)
        // Checking if the schedule exists
        if (schedule) {
            // Calling the delete method of the schedule service to delete the schedule
            schedule_service.delete(req.params.id)
            res.status(204).send('Schedule deleted successfully')
        } else {
            res.status(404).send('Schedule not found')
        }
    }
}
// Exporting the schedule_controller object to be used in other parts of the application
module.exports = schedule_controller

