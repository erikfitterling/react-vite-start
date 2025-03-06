const express = require('express');
const router = express.Router();
const counterController = require('../controllers/counterController');

router.post('/counters', counterController.createCounter);

module.exports = router;