// 导入 Node 内置的 querystring 模块
const qs = require('qs')

// 解析表单数据的中间件
const bodyParser = (req, res, next) => {
    // 定义中间件具体业务逻辑

    // 存储客户端发送的请求体数据
    let str = '';
    // 监听 data 事件，将数据拼接
    req.on('data', (chunk) => {
        str += chunk;
    })

    // 监听 end 事件，获取数据
    req.on('end', () => {
        // 在 str 中存放的是完整的请求体
        const body = qs.parse(str)
        console.log(body);
        req.body = body;
        next()
    })
}

// 将自定义中间件模块导出
module.exports = bodyParser