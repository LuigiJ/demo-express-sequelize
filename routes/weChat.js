var express = require('express');
var router = express.Router();
var accessWeChat = require('../weChat/controller/accessWeChat');

router.get('/accessWeChat', accessWeChat);

module.exports = router;