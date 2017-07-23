// 123456 localhost
module.exports = {
  database: 'mytest',
  username: 'root',
  password: 'Qj753951',
  options: {
    dialect: 'mysql',
    host: 'rm-uf65mr8m0x68nl7yko.mysql.rds.aliyuncs.com',
    port: 3306,
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }   
  }
}