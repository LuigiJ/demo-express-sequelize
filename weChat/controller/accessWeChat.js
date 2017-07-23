var sha1 = require('sha1');
var token = require('../config/conf').token;

function access (req, res, next) {
  var q = req.query;
  var signature = q.signature,
      timestamp = q.timestamp,
      nonce = q.nonce,
      echostr = q.echostr;
  var str = [token, timestamp, nonce].sort().join('');
  var sha = sha1(str);
  if (sha === signature) {
    res.send(echostr + '')
  } else {
    res.send('err')
  }
}

module.exports = access;