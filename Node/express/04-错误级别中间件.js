const express = require('express')
const app = express()

app.use(function (err, req, res, next) {
    console.log('Error:' + err.message)
    res.send("Error!!" + err.message)
})


app.get('/', (req, res) => {
    throw new Error("服务器内发生了错误")
    res.send('get /')
})



app.listen(8080, () => {
    console.log('127.0.0.1');
})