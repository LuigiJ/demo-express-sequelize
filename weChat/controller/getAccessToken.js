var request = require('request');
var config = require('../config/conf');
var url = config.accessTokenUrl;

module.exports = function (success, err) {
  request(url, function(err, res, body){
    if (!err && res.statusCode == 200) {
      console.log('get access taken is ok');
      // body is string
      success(body);
    } else {
      console.log('get access taken is err');
      err(body)
    }
  })
}