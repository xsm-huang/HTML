// 导入 http 模块
const http = require('http');
// 创建 web 服务器实例
const server = http.createServer();
// 绑定 request 事件
server.on('request', (req, res) => {
    const str = `Your request url is ${req.url}, and request method is ${req.method}`;
    console.log(str);
    res.end(str);
})
// 启动服务器
server.listen(8080, () => {
    console.log('http server running at http://127.0.0.1:8080');
})