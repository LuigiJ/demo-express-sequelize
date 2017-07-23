# demo-express-sequelize
## 这是小栗子
使用express开发的nodejs项目
练习express、pug模板、stylus、sequelize中间件操作mysql、微信签名认证

### express demo-express-sequelize --view=pug
1.通过express-generator生成express项目基础架构
2.使用了pug模板

### 为了方便，全局安装stylus，package.json并没有包含stylus的依赖
1.npm install -g stylus
2.可以使用watch监听stylus文件。eg：stylus --watch styls/style.styl --out public/stylesheets/style.css

### 使用比较流行的orm库sequelize操作mysql数据库
1.需要安装的是mysql2而不是mysql

### 练习了微信签名认证，使用sha1进行加密

### 使用方法
npm install