var appID = 'wx8565351394875aa4';
var appSecret = 'df380f2a4aafce678c29fa71e44ca682';
module.exports = {
  appID: appID,
  appSecret: appSecret,
  token: 'qiaojun',
  accessTokenUrl: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + appID + '&secret=' + appSecret,
  createMenuUrl: 'https://api.weixin.qq.com/cgi-bin/menu/create?access_token='
}