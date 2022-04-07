// 导入 express
const express = require('express');
const history = require('connect-history-api-fallback');
// 创建 web 服务器
const app = express();

// 处理  history 模式页面刷新报错问题
app.use(history());

// app.use(express.static(__dirname + '/static1')); // hash 模式
app.use(express.static(__dirname + '/static2')); // history 模式

// 启动服务器
app.listen(8080, () => {
    console.log('express server running at http://127.0.0.1:8080');
});
