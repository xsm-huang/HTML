// 导入 express
const express = require('express');
// 创建 web 服务器
const app = express();

// 导入自己封装的中间件模块
const bq = require('./05-自定义中间件模块')
app.use(bq)

app.post('/user', (req, res) => {
    res.send(req.body)
})

// 启动服务器
app.listen(8080, () => {
    console.log('express server running at http: //127.0.0.1')
})