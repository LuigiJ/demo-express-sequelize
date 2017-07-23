var request = require('request');
var getAccessToken = require('./getAccessToken');
var config = require('../config/conf');

var menuUtils = {
  createMenu: function (req, res, next) {
    getAccessToken(function(msg){
      res.send(msg);
    },function(err){
      res.send(err);
    });
  }
}

module.exports = menuUtils;