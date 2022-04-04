// 导入 express
const express = require('express');
// 创建 web 服务器
const app = express();

app.use((req, res, next) => {
    console.log('有人请求服务器1');
    console.log('请求的资源是：', req.url);
    // console.log('请求来自于：', req.get('Host'));
    next();
});

app.get('/students', (request, response) => {
    const students = [
        { id: '001', name: 'xsm', age: 19 },
        { id: '002', name: 'szs', age: 12 },
        { id: '003', name: 'hbm', age: 20 },
    ];
    response.send(students);
});
// 启动服务器
app.listen(5000, () => {
    console.log('express server running at http://127.0.0.1:5000');
});
