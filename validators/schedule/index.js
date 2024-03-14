// Importing necessary modules and services
const { body, param } = require('express-validator');
const schedule_service = require('../../services/schedule')
// Validation middleware for adding a schedule
const addScheduleValidation = () => {
  return [
    body('plans')
      .notEmpty().withMessage('Plans must not be empty')
      .isLength({ min: 8, max: 255 }).withMessage('Plans must be between 8 and 255 characters long'),
    body('DateTime')
      .notEmpty().withMessage('Date time must not be empty')
      .matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d\s([01][0-9]|2[0-3]):([0-5][0-9])$/, 'g')
        .withMessage('Invalid date and time format. Please use "DD/MM/YYYY HH:mm" format.'),
    body('meeting')
      .notEmpty().withMessage('Meeting must not be empty'),
    body('contactPhone')
      .notEmpty().withMessage('Contact phone must not be empty')
      .matches(/^\+998\d{9}$/).withMessage('Invalid phone number format, it must be +998xxxxxxxxx'),
    body('placeofMeeting')
      .notEmpty().withMessage('Place of meeting must not be empty'),      
  ];
};
// Validation middleware for deleting a schedule
const deleteScheduleValidation = () => {
  return [
    param('id').custom(async (id) => {
      const exists = await schedule_service.getById(id);
      if (!exists) {
        throw new Error('Schedule not found');
      }
    })
  ];
};
// Validation middleware for updating a schedule
const updateScheduleValidation = () => {
  return [
    param('id').custom(async (id) => {
      const exists = await schedule_service.getById(id);
      if (!exists) {
        throw new Error('Schedule not found');
      }
    }),
    body('plans')
      .notEmpty().withMessage('Plans must not be empty')
      .isLength({ min: 8, max: 255 }).withMessage('Plans must be between 8 and 255 characters long'),
    body('DateTime')
      .notEmpty().withMessage('Date time must not be empty')
      .matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d\s([01][0-9]|2[0-3]):([0-5][0-9])$/, 'g')
        .withMessage('Invalid date and time format. Please use "DD/MM/YYYY HH:mm" format.'),
    body('meeting')
      .notEmpty().withMessage('Meeting must not be empty'),
    body('contactPhone')
      .notEmpty().withMessage('Contact phone must not be empty')
      .matches(/^\+998\d{9}$/).withMessage('Invalid phone number format, it must be +998xxxxxxxxx'),
    body('placeofMeeting')
      .notEmpty().withMessage('Place of meeting must not be empty'),      
  ];
};

// Exporting validation middleware functions
module.exports = {
    addScheduleValidation,
    updateScheduleValidation,
    deleteScheduleValidation
};
