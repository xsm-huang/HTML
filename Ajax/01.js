// 引入 express
const express = require("express");

// 创建应用对象
const app = express();

// 创建路由对象
// request 是对请求报文的封装，response 是对响应报文的封装
app.get('/server', (request, response) => {
    response.send('Hello express');
});

// 监听窗口启动服务
app.listen(8000, () => {
    console.log("服务已启动， 8000 端口监听中...");
})