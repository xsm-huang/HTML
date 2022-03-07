const express = require('express')
const app = express()

const mw = function (req, res, next) {
    console.log("这是全局中间件函数");
    // 把流转关系，转交给下一个中间件或路由
    next()
}
const mw1 = function (req, res, next) {
    console.log("这是局部中间件函数");
    // 把流转关系，转交给下一个中间件或路由
    next()
}

// 全局生效的中间件
app.use(mw)

app.get('/', mw1, (req, res) => {
    res.send("调用了局部生效的中间件 mw1")
})

app.get('/user', (req, res) => {
    res.send("没有调用局部生效的中间件 mw1")
})



app.listen(8080, () => {
    console.log('127.0.0.1');
})