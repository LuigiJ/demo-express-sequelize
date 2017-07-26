var requestUtils = require('../../utils/requestUtils');
var config = require('../config/conf');
var baseUrl = config.menuUrl;
var menuObj = require('../config/menu');
var getAccessToken = require('../utils/getAccessToken');

var menu = {
  createMenu: function (req, res, next) {
    getAccessToken(function (accessToken) {
      requestUtils.post(baseUrl + 'create?access_token=' + accessToken, menuObj, function (err, response, body) {
        if (!err && response.statusCode == 200) {
          // body is object
          res.send(body);
        } else {
          res.send(body);
        }     
      })
    });
  }
}

module.exports = menu;