var xml2json = require('node-xml2json');

function handler (obj) {
  if (obj.MsgType === 'text') {
    return '感谢使用';
  } else {
    return '';
  }
}

function receive (req, res, next) {
  req.rawBody = '';
  var json = {};
  var obj = {};
  req.setEncoding('utf8');

  req.on('data', function (chunk) {
    req.rawBody += chunk;
  });
  req.on('end', function () {
    console.log(req.rawBody);
    json = xml2json.parser(req.rawBody);
    obj = JSON.stringify(json);
    for (var k in obj) {
      console.log('k --> ' + k, ' , v --> ' + obj[k]);
    }
    res.send(handler(obj));
  });
}

module.exports = receive;