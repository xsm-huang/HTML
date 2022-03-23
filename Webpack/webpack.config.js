/* 
webpack 的配置文件
所有构建工具基于 nodejs 平台运行, 模块化默认采用 CommonJS
*/
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

module.exports = {
    // 入口起点
    entry: './src/index.js',

    // 输出bu
    output: {
        // 输出文件名
        filename: 'build.js',
        // 输出路径
        path: resolve(__dirname, 'build'),
    },

    // loader 配置
    module: {
        rules: [
            // 详细 loader 配置
            // { test: /\.txt$/, use: 'raw-loader' }
            {
                // 匹配哪些文件 (以 .css 结尾)
                test: /\.css$/,
                // 使用哪些 loader 进行处理
                use: [
                    // use 执行顺序 从后往前 依次执行
                    // 创建 style 标签, 将 js 中的样式资源插入进行, 添加到 head 中生效
                    'style-loader',
                    // 将 css 文件变成 commonjs 模块加载 js 中, 里面的内容是样式字符串
                    'css-loader'
                ]
            },
            // 处理 less 文件
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            // 处理 图片资源
            {
                test: /\.(jpg|png|gif)$/,
                // use: ['url-loader'],
                loader: 'url-loader',
                options: {
                    // 图片大小小于 8 kb ,就会被 base64 处理
                    // 优点: 减少请求数量 (减轻服务器压力)
                    // 缺点: 图片体积更大 (文件请求速度变慢)
                    limit: 8 * 1024
                }
            }
        ]
    },

    // plugins 配置
    plugins: [

        // 详细 plugins 配置
        /*
        下载 html-webpack-plugin 插件
        功能: 迷人创建一个空的 html 文件, 自动引入打包输出的所有资源 (js / css)
         */
        // 生成有结构的 html 文件, 复制 './src/index.html' 文件并自动引入打包输出的所有资源 (js / css)
        new HtmlWebpackPlugin({ template: './src/index.html' })
        // new HtmlWebpackPlugin() // 生成的 html 文件没有结构
    ],

    // 模式
    mode: 'development', // 开发
    // mode: 'production', // 生产
}