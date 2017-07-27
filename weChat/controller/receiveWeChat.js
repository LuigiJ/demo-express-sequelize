var receiveUtils = require('../utils/receiveMessage');
var handler = require('../utils/replyMessage');

function receive (req, res, next) {
  req.rawBody = '';
  var arr = [];
  var obj = {};
  req.setEncoding('utf8');

  req.on('data', function (chunk) {
    req.rawBody += chunk;
  });
  
  req.on('end', function () {
    const result = handler(receiveUtils.converX2J(req.rawBody));
    if (result.type === 'xml') {
      res.set('Content-Type', 'application/xml');
      res.send(new Buffer(result.msg));
    } else {
      res.send(result.msg);
    }
  });
}

module.exports = receive;