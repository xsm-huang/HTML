// 导入模块
const fs = require('fs');
const path = require('path');

// 定义正则表达式，分别匹配 <style></style> 和 <script></script> 标签
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

// 读取需要被处理的 index.html 文件
fs.readFile(path.join(__dirname, './index.html'), 'utf8', function (err, dataStr) {
    // 如果读取文件失败
    if (err) {
        return console.log('error!' + err.message);
    }


    resolveCss(dataStr);
    resolveJS(dataStr);
    resolveHTML(dataStr);
})

// 处理 css 样式
function resolveCss(htmlStr) {
    // 用正则表达式提取需要的字符串
    const r = regStyle.exec(htmlStr);
    // 将提取出来的样式字符串进行字符串替换
    const newCss = r[0].replace('<style>', '').replace('</style>', '');
    // 将提取的 CSS 文件写入样式文件中
    fs.writeFile(path.join(__dirname, './clock/index.css'), newCss, function (err) {
        if (err) {
            return console.log('CSS file write error!' + err.message);
        }
        console.log("CSS file written successfully！");
    })
}

function resolveJS(htmlStr) {
    // 用正则表达式提取需要的字符串
    const r = regScript.exec(htmlStr);
    // 将提取出来的样式字符串进行字符串替换
    const newJS = r[0].replace('<script>', '').replace('</script>', '');
    // 将提取的 JS 文件写入样式文件中
    fs.writeFile(path.join(__dirname, './clock/index.js'), newJS, function (err) {
        if (err) {
            return console.log('JS file write error!' + err.message);
        }
        console.log("JS file written successfully！");
    })
}

function resolveHTML(htmlStr) {
    // 将内嵌的 <style> 和 <script> 标签替换为外联的 <link> 和 <script> 标签
    const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css" /> \n <script src="./index.js"></script>').replace(regScript, '');
    // 将提取的 HTML 文件写入样式文件中
    fs.writeFile(path.join(__dirname, './clock/index.html'), newHTML, function (err) {
        if (err) {
            return console.log('HTML file write error!' + err.message);
        }
        console.log("HTML file written successfully！");
    })
}