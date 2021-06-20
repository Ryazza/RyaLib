const express = require('express');
const router = express.Router();
const functionController = require('../controllers/code.controller');

router.post('/', functionController.newFunction)

module.exports = router;
