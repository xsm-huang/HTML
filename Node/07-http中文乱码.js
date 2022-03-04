// 导入 http 模块
const http = require('http')
// 创建 web 服务器实例
const server = http.createServer()
// 绑定 request 事件
server.on('request', (req, res) => {
    const str = `您请求的 url 地址是 ${req.url}, 请求方法是 ${req.method}`
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end(str)
})
// 启动服务器
server.listen(8080, () => {
    console.log('http server running at http://127.0.0.1:8080')
})