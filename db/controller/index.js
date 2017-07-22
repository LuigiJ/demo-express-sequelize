var Sequelize = require('sequelize');
var conf = require('../config/conf');
var sequelize = new Sequelize(
  conf.database,
  conf.username,
  conf.password,
  conf.options
);

var Test = require('../models/test')(sequelize);

function findAllTest (req, res, next) {
  // attributes: ['id', 'name']
  Test.findAll({
    attributes: [['id', 'uid'], ['name', 'uname']]
  }).then(function (result) {
    res.json({
      code: 200,
      rows: result
    })
  }).catch(function (err) {
    console.log(err);
    res.json({
      code: 500
    })
  })
}

module.exports = {
  findAllTest: findAllTest
}
