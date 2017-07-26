var requestUtils = require('../../utils/requestUtils');
var config = require('../config/conf');
var url = config.accessTokenUrl;

function queryFromWX (success, error) {
  // Query access_token from WX
  requestUtils.get(url, function (err, res, body) {
    if (!err && res.statusCode == 200) {
      // body is string
      var result = JSON.parse(body);
      typeof success === 'function' && success(result);      
    } else {
      var e = JSON.parse(body)
      console.log('Query access_token from WX error: ', err);
      typeof success === 'function' && error(e);
    }
  });
}

module.exports = queryFromWX;