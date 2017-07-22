var Sequelize = require('sequelize');

function testModel(sequelize) {
  var Test = sequelize.define('test', {
    name: {
      type: Sequelize.STRING
    }
  }, {
    freezeTableName: true
  });
  return Test;
}

module.exports = testModel;