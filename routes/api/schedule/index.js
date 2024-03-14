// Importing necessary modules
const express = require('express');
const { validationResult } = require('express-validator');
const { addScheduleValidation, updateScheduleValidation, deleteScheduleValidation } = require('../../../validators/schedule');
// Creating a new router instance
const router = express.Router();
// Importing the schedule controller
const schedule_controller = require('../../../controllers/api/schedule');

// Define API routes
// Route to get all schedules
router.get('/', (req, res)=>{
    schedule_controller.getAll(req, res);
});
// Route to add a new schedule
router.post('/', addScheduleValidation(), (req, res)=>{
    // Validate request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
// If validation passes, call the create method in the schedule controller
    schedule_controller.create(req, res)
})
// Route to update an existing schedule
router.put('/:id', updateScheduleValidation(), (req, res)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
// If validation passes, call the update method in the schedule controller
  schedule_controller.update(req, res)
})
// Route to delete an existing schedule
router.delete('/:id', deleteScheduleValidation(), (req, res, next)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
// If validation passes, call the delete method in the schedule controller
  schedule_controller.delete(req, res)
})
// Exporting the router to be used in other parts of the application
module.exports = router;
