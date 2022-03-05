// 导入 express 
const express = require('express')

// 创建 web 服务器
const app = express();

// 启动服务器
app.listen(8080, () => {
    console.log('express server running at http://127.0.0.1')
})

// 监听 GET 请求
// app.get('/user', function (req, res) {
//     res.send('success get')
// })

// app.post('/user', function (req, res) {
//     res.send('success post')
// })

// app.get('/', function (req, res) {
//     console.log(req.query)
// })

app.get('/user/:id', function (req, res) {
    // console.log(req.patams)
    res.send(req.params)
})