const express = require('express');

const router = express.Router();
const schedule_controller = require('../../../controllers/api/schedule');

// Define API routes
router.get('/', (req, res)=>{
    schedule_controller.getAll(req, res);
});

module.exports = router;

