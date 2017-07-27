var xjUtil = require('xml-js');

function autoReplayText(from, to, content) {
  const now = parseInt((new Date().getTime()) / 1000);
  const xml = `<xml><ToUserName><![CDATA[${to}]]></ToUserName><FromUserName><![CDATA[${from}]]></FromUserName><CreateTime>${now}</CreateTime><MsgType><![CDATA[text]]></MsgType><Content><![CDATA[${content}]]></Content></xml>`;
  return xml;
}

var reply = function (recObj) {
  if (recObj.MsgType === 'text') {
    console.log('接收到文本消息，内容为:', recObj.Content);
    return {
      msg: autoReplayText(recObj.ToUserName, recObj.FromUserName, '接收文本数据成功*-_-*'),
      type: 'xml'
    }
  } else if (recObj.MsgType === 'event') {
    if (recObj.Event === 'CLICK') {
      if (recObj.EventKey === 'hello') {
        return {
          msg: autoReplayText(recObj.ToUserName, recObj.FromUserName, 'hello world'),
          type: 'xml'
        }
      } else if (recObj.EventKey === 'reply') {
        return {
          msg: autoReplayText(recObj.ToUserName, recObj.FromUserName, 'reply message'),
          type: 'xml'
        }
      }
    }
  }
  return {
    msg: 'success',
    type: 'text'
  }
}

module.exports = reply;