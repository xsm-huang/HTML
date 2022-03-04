// 导入模块
const fs = require('fs')
const path = require('path')
const http = require('http')

// 创建服务器
const server = http.createServer()
server.on('request', (req, res) => {
    // 获取客户端请求的 url 地址
    const url = req.url

    // 把请求的 url 地址映射为具体的文件存放路径
    // const fpath = path.join(__dirname, url)
    // 优化
    let fpath = ''
    if (url === '/') {
        fpath = path.join(__dirname, '/clock/index.html')
    } else {
        fpath = path.join(__dirname, '/clock', url)
    }

    // 读取文件内容
    fs.readFile(fpath, 'utf8', (err, dataStr) => {
        if (err) return res.end('<h1>404 Not found</h1>')
        res.end(dataStr)
    })
})
server.listen(8080, () => {

})