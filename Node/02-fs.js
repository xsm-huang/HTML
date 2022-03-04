const fs = require('fs')

fs.writeFile('files/02.txt', 'fs-02', function (err) {
    // 如果文件写入成功 err 的值为 null
    // 如果文件写入失败 err 的值为一个错误对象
    if (err) {
        return console.log('文件写入失败！' + err.message);
    }

    console.log('文件写入成功！');
})
