var express = require('express');
var router = express.Router();
var testController = require('../db/controller/test');

router.get('/test/findAll', testController.findAllTest);
router.get('/test/findOne', testController.findOneTest);

module.exports = router;