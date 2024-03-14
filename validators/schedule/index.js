const { body, param } = require('express-validator');
const schedule_service = require('../../services/schedule')

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
      .notEmpty().withMessage('Event venue must not be empty'),
    body('timeofMeeting')
      .notEmpty().withMessage('Time of meeting must not be empty')
      .matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d\s([01][0-9]|2[0-3]):([0-5][0-9])$/, 'g').withMessage('Invalid time of meeting format, it must be xx:xx'),
    body('placeofMeeting')
      .notEmpty().withMessage('Place of meeting must not be empty'),      
  ];
};

const deleteScheduleValidation = () => {
  return [
    param('id').custom(async (id) => {
      const exists = await schedule_service.getById(id);
      if (!exists) {
        throw new Error('Ticket not found');
      }
    })
  ];
};

module.exports = {
    addScheduleValidation,
    deleteScheduleValidation
};
