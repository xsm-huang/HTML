// 路由模块
// 导入 express
const express = require('express')

// 创建路由对象
const router = express.Router()

// 挂载具体路由
router.get('/user/list', (req, res) => {
    res.send("router get")
})
router.post('/user/list', (req, res) => {
    res.send("router post")
})

// 导出路由对象
module.exports = router