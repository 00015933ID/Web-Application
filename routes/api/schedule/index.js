const express = require('express');
const { validationResult } = require('express-validator');
const { addScheduleValidation, updateScheduleValidation, deleteScheduleValidation } = require('../../../validators/schedule');

const router = express.Router();
const schedule_controller = require('../../../controllers/api/schedule');

// Define API routes
router.get('/', (req, res)=>{
    schedule_controller.getAll(req, res);
});

router.post('/', addScheduleValidation(), (req, res)=>{
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    schedule_controller.create(req, res)
})

router.put('/:id', updateScheduleValidation(), (req, res)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  schedule_controller.update(req, res)
})

router.delete('/:id', deleteScheduleValidation(), (req, res, next)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  schedule_controller.delete(req, res)
})

module.exports = router;
