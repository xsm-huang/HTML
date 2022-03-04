// 导入 fs 模块
const fs = require("fs")

// 读取文件
fs.readFile('files/01.txt', 'utf-8', function (err, dataStr) {
    // 如果读取成功 err 为 null
    // 如果读取是被，err 的值为错误对象
    console.log(err);
    console.log('-------------');
    // 打印成功结果
    console.log(dataStr);

    if (err) {
        return console.log("读取文件失败！" + err.message);
    }

    console.log('读取文件成功！' + dataStr);
})