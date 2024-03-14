const express = require('express');
const router = express.Router();
const homeController = require('../../../controllers/plan/home');

router.get('/', homeController.index);
router.get('/add', homeController.add);
router.get('/update/:id', homeController.update);

module.exports = router;

