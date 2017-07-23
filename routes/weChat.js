var express = require('express');
var router = express.Router();
var accessWeChat = require('../weChat/controller/accessWeChat');
var menuUtils = require('../weChat/controller/menuUtils');

router.get('/accessWeChat', accessWeChat);
router.get('/menu/create', menuUtils.createMenu);

module.exports = router;