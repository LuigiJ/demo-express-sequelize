var Sequelize = require('sequelize');
var conf = require('./config/conf');
var sequelize = new Sequelize(
  conf.database,
  conf.username,
  conf.password,
  conf.options
);
module.exports = sequelize;