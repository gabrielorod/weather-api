const express = require('express');
const router = express.Router();
const controller = require('../controllers/weatherController');

router.get('/:city', controller.findWeatherByCityController);

module.exports = router;
