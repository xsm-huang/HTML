const fs = require('fs')
const path = require('path')

// 读取文件
fs.readFile(path.join(__dirname, '/files/03-1.txt'), 'utf8', function (err, dataStr) {
    // 判断读取是否成功
    if (err) {
        return console.log('error!' + err.message);
    }

    // 处理数据
    // 将旧数据按照空格分割
    const arrOld = dataStr.split(' ');
    const arrNew = [];
    // 将旧数据数组的等号替换成冒号并写入新数组
    arrOld.forEach(item => {
        arrNew.push(item.replace('=', '：'))
    })
    // 将新数组转换成字符串
    const strNew = arrNew.join('\n')

    // 写入文件
    fs.writeFile(path.join(__dirname, '/files/03-2.txt'), strNew, function (err) {
        if (err) {
            return console.log('error!' + err.message);
        }

        console.log('success！');
    })

})