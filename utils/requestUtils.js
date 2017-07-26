var request = require('request');

var utils = {
  get (url, cb) {
    request(url, cb);
  },
  post (url, data, cb) {
    request.post({
      url: url,
      body: JSON.stringify(data)
    }, cb);
  }
}

module.exports = utils;