var atDbController = require('../../db/controller/accessToken');

module.exports = function (cb) {
  atDbController.getAccessToken(cb);
}