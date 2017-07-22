module.exports = {
  database: 'mytest',
  username: 'root',
  password: '123456',
  options: {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }   
  }
}