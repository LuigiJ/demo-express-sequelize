var express = require('express');
var router = express.Router();
var accessWeChat = require('../weChat/controller/accessWeChat');
var receiveWeChat = require('../weChat/controller/receiveWeChat');
var menu = require('../weChat/controller/menu');
// var init = require('../weChat/controller/init');

// 接入
router.get('/accessWeChat', accessWeChat);
router.post('/accessWeChat', receiveWeChat);
// 启动的时候初始化，不再通过web页面触发
// router.get('/init/accessToken', init.initAccessToken);
router.get('/menu/create', menu.createMenu);

module.exports = router;