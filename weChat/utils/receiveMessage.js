var xjUtil = require('xml-js');

var receive = {
  converX2J: function (xml) {
    console.log('receive xml --> ', xml);
    const arr = xjUtil.xml2js(xml).elements[0].elements;
    let data = {},
        obj = {};
    for (let v of arr) {
      data = v.elements[0];
      obj[v.name] = data.cdata || data.text
    }
    console.log('receive data obj --> ', obj);
    return obj;
  }
}

module.exports = receive;