// 导入 express
const { response } = require('express');
const express = require('express');
// 创建 web 服务器
const app = express();

app.get('/server', (req, res) => {
    // 设置响应头，允许跨域
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send('hello get /server');
})

app.get('/json-server', (req, res) => {
    // 设置响应头，允许跨域
    res.setHeader("Access-Control-Allow-Origin", "*");

    // 响应一个数据
    const data = {
        name: 'atguin'
    }
    // 对对象进行字符串转换
    let str = JSON.stringify(data);

    res.send(str);
})

app.get('/delay', (req, res) => {
    // 设置响应头，允许跨域
    res.setHeader("Access-Control-Allow-Origin", "*");
    // 定时器，3s后响应
    setTimeout(() => {
        res.send('延时响应');
    }, 3000)
})

// jquery 服务
app.all('/jquery-server', (req, res) => {
    // 设置响应头，允许跨域
    res.setHeader("Access-Control-Allow-Origin", "*");
    // 设置响应头，允许自定义响应头
    res.setHeader('Access-Control-Allow-Headers', '*');
    // res.send('hello get jquery');
    const data = { name: 'xs' };
    res.send(JSON.stringify(data));
})

app.get('/jsonp-server', (req, res) => {
    const data = {
        name: 'jsonp 实现原理'
    }
    let str = JSON.stringify(data);
    // 向用户发送请求，并结束该次请求
    // 需要放回 js 语法代码
    res.end(`handle(${str})`);
    res.send(`console.log(${str})`);
})

app.get('/jquery-jsonp-server', (req, res) => {
    const data = {
        name: 'jquery-jsonp请求',
        city: ['china', '北京', '上海']
    }
    // 将数据转换为字符串
    let str = JSON.stringify(data);
    // 接收 callback 参数
    let cb = req.query.callback;
    // 返回结果
    res.end(`${cb}(${str})`);
})


app.post('/server', (req, res) => {
    // 设置响应头，允许跨域
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send('hello post /server');
})

// 启动服务器
app.listen(8080, () => {
    console.log('express server running at http://127.0.0.1:8080');
})