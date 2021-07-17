const express = require('express');

const app = require('../app');

const router = express.Router();

const validateIp = require('../utilities/Validation/validateIp');

const storeController = require('../controllers/storeController');

const fetchController = require('../controllers/fetchController');

router.route('/analytics').post(storeController.postAnalytics).get(validateIp.validateIp, fetchController.getAnalytics);

module.exports = router;