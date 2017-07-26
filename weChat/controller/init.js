var atDbController = require('../../db/controller/accessToken');
// var config = require('../config/conf');

var init = {
  initAccessToken: function () {
    atDbController.init();
  }
}

module.exports = init;