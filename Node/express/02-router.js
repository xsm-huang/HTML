const express = require('express')
const app = express()

// 导入路由模块
const router = require('./02-routerModule')
// 注册路由模块
app.use('/api', router)

app.listen(8080, () => {
    console.log('127.0.0.1');
})