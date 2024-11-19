const express = require('express');
const router = express.Router();
const controller = require('../controllers/apiController');

router.get('/is-alive', controller.isAlive);

module.exports = router;
