const path = require('path');
// 导入 express
const express = require('express');
// 创建 web 服务器
const app = express();


app.get('/index', (req, res) => {
    // 响应一个页面
    res.sendFile(path.join(__dirname, './index.html'));
});
app.get('/data', (req, res) => {
    // 响应数据
    res.send('同源策略数据响应');
});
// 启动服务器
app.listen(8080, () => {
    console.log('express server running at http://127.0.0.1')
});


