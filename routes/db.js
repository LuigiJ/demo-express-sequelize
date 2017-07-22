var express = require('express');
var router = express.Router();
var dbController = require('../db/controller/index');

router.get('/test/findAll', dbController.findAllTest);

module.exports = router;