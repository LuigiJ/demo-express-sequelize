var sequelize = require('../instance');

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

function findOneTest (req, res, next) {
  // attributes: ['id', 'name']
  // order: ['id'] | order: [['id', 'DESC']]
  Test.findOne({
    attributes: ['id', 'name'],
    order: [['id', 'DESC']]
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
  findAllTest: findAllTest,
  findOneTest: findOneTest
}
