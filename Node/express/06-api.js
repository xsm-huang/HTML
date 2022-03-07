// 导入 express
const express = require('express')
// 创建 web 服务器
const app = express();

// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }))
// 导入路由模块
const router = require('./06-apiRouter')
// 把路由模块注册到 app 上
app.use('/api', router)

// 启动服务器
app.listen(8080, () => {
    console.log('express server running at http: //127.0.0.1')
})