var Sequelize = require('sequelize');

function accesssTokenModel(sequelize) {
  var accessToken = sequelize.define('access_token', {
    'access_token': {
      type: Sequelize.STRING(512)
    },
    'expires_in': {
      type: Sequelize.INTEGER
    }
  }, {
    freezeTableName: true
  });
  return accessToken;
}

module.exports = accesssTokenModel;