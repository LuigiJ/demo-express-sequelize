# demo-express-sequelize
## 这是小栗子，主要是用来学习和练习
使用express开发的nodejs项目
使用了：express、pug模板、stylus、sequelize中间件操作mysql
练习了微信公众号开发：微信签名认证，获取access_token

### express demo-express-sequelize --view=pug
- 通过express-generator生成express项目基础架构
- 使用了pug模板

### 为了方便，全局安装stylus，package.json并没有包含stylus的依赖
- npm install -g stylus
- 可以使用watch监听stylus文件。eg：stylus --watch styls/style.styl --out public/stylesheets/style.css

### 使用比较流行的orm库sequelize操作mysql数据库
- 需要安装的是mysql2而不是mysql
- mysql配置需要更改为恰当的值，具体请参考[sequelize]: https://github.com/sequelize/sequelize

### 测试了微信公众号相关的开发，需要结合微信开发者文档
- 这个小栗子使用的是微信提供的测试号
- 练习的时候需要更改为您的appID等信息

### 使用方法
npm install