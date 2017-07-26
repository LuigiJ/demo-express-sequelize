var sequelize = require('../instance');
var AccessToken = require('../models/accessToken')(sequelize);
var queryFromWX = require('../../weChat/utils/getAccessTokenFromWX');

// Initialize the access_token table.
// If it does not exist, create a new one. 
// If it already exists, delete the old and build a new one.
function init () {
  AccessToken.sync({force: true}).then(function () {
    // Create table success
    // Get access_token from WX
    queryFromWX(function(res){
      console.log('Initialize get access_token from WX success, value:', res);
      setAccessToken({
        'access_token': res['access_token'],
        'expires_in': res['expires_in']
      });
      setInterval(function(){
        queryFromWX(function(value){
          console.log('Interval get access_token from WX success, value:', value);
          setAccessToken({
            'access_token': value['access_token'],
            'expires_in': value['expires_in']
          });
        });
      }, 5400000);
    }, function(err){
      // Get error
      console.log('Get the access_token from WX error: ', err);
    });
  })
  .catch(function (err) {
    // Create table error
    console.log('Create the access_token table error: ', err);
  });
}

function setAccessToken (data, cb) {
  AccessToken.create(data).then(function () {
    console.log('Insert access_token successfully');
    typeof cb === 'function' && cb(data['access_token']);
  }).catch(function (err) {
    console.log('Failed to insert access_token, error: ', err);
  });
}

function isExpires (res) {
  console.log('check expires, now is ', new Date().getTime());
  return (new Date().getTime() - new Date(res.createdAt).getTime()) > (res['expires_in'] * 1000);
}

function getAccessToken (cb) {
  AccessToken.findOne({
    order: [['id', 'DESC']]
  }).then(function (result) {
    // Get access_token successfully from database
    // result is a piece of data
    // If the result is null or expired, get it from WX
    if (result === null || isExpires(result)) {
      console.log('access_token is expired')
      queryFromWX(function (res) {
        setAccessToken({
          'access_token': res['access_token'],
          'expires_in': res['expires_in']
        }, cb);
      });
    } else {
      typeof cb === 'function' && cb(result['access_token']);
    }
  }).catch(function (err) {
    console.log('Failed to find access_token from database, error: ', err);
  });
}

module.exports = {
  init: init,
  getAccessToken: getAccessToken
}
