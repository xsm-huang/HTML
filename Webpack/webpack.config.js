const HtmlWebpackPlugin = require('html-webpack-plugin');
const svgToMiniDataURI = require('mini-svg-data-uri');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js', // 打包入口文件
    devtool: 'inline-source-map', // 在开发模式下追踪代码
    devServer: { static: './dist' }, // 告知 webpack-dev-server ，将 dist 目录下的文件作为 web 服务的根目录
    mode: 'production', // 生产者模式

    /**
     * 代码分离
     *      1. 入口起点: 使用 entry 配置手动地分离代码
     *          - 如果入口 chunk 之间包含一些重复的模块，会造成各个 bundle 重复引用这些模块
     *      2. 防止重复: 使用 Entry dependencies 或者 SplitChunksPlugin 去重和分离 chunk
     *      3. 动态导入: 通过模块的内联函数调用来分离代码
     */
    entry: {
        index: './src/index.js',
        another: './src/another-module.js',
        // index: {
        //     import: './src/index.js',
        //     dependOn: 'shared',
        // },
        // another: {
        //     import: './src/another-module.js',
        //     dependOn: 'shared',
        // },
        // shared: 'lodash', // 在多个 chunk 之间共享 lodash 模块
    },
    output: {
        clean: true, // 打包前清理 dist 文件夹
        path: path.resolve(__dirname, './dist'), // 输出文件夹必须定义为绝对路径
        filename: '[name].bundle.js',
        assetModuleFilename: 'images/[contenthash][ext][query]', // 修改 asset/resource 模块的资源输出位置
    },
    plugins: [
        // 实例化 html-webpack-plugin 插件
        new HtmlWebpackPlugin({
            template: './index.html', // 生成打包文件的的模板
            filename: 'app.html', // 打包生成的文件名称
            inject: 'body', // 所有资源注入模板的位置 (可以设置的值:true | 'head' | 'body' | false, 默认值为 true)
        }),
        // 实例化 mini-css-extract-plugin 插件
        new MiniCssExtractPlugin({
            filename: 'styles/[contenthash].css', // 打包生成文件的路径名称
        }),
    ],
    /* 配置资源文件 */
    module: {
        rules: [
            /**
             * babel-loader
             * 安装插件
             *      - babel-loader : 在webpack里应用 babel 解析ES6的桥梁
             *      - @babel/core : babel核心模块
             *      - @babel/preset-env : babel预设, 一组 babel 插件的集合
             *      - @babel/runtime : 包含了regeneratorRuntime，运行时需要
             *      - @babel/plugin-transform-runtime : 会在需要regeneratorRuntime的地方自动require导包，编译时需要
             */
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [['@babel/plugin-transform-runtime']],
                    },
                },
            },
            /******************四种资源模块******************/
            /**
             * asset/resource
             * 发送一个单独的文件并导出 URL
             */
            {
                test: /\.png/,
                type: 'asset/resource', // 默认以 [contenthash][ext][query] 文件名发送到输出目录
                // 优先级高于 assetModuleFilename
                generator: {
                    filename: 'images/[contenthash][ext][query]',
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i, // 加载 fonts 字体
                type: 'asset/resource',
                generator: {
                    filename: 'font/[contenthash][ext][query]',
                },
            },
            /**
             * asset/inline
             * 导出一个资源的 data URI
             * 默认是呈现为使用 Base64 算法编码的文件内容
             */
            {
                test: /\.svg/,
                type: 'asset/inline',
                generator: {
                    // 使用自定义函数编码文件内容
                    dataUrl: (content) => {
                        content = content.toString();
                        return svgToMiniDataURI(content);
                    },
                },
            },
            /**
             * asset/source
             * 导出资源的源代码
             */
            {
                test: /\.txt/,
                type: 'asset/source',
            },
            /**
             * asset 通用资源类型
             * 在导出一个 data URI 和发送一个单独的文件之间自动选择
             * 将按照默认条件, 自动地在 resource 和 inline 之间进行选择:
             *      1. 小于 8kb 的文件, 视为 inline 模块类型
             *      2. 大于 8kb 的文件, 视为 resource 模块类型
             */
            {
                test: /\.jpg/,
                type: 'asset',
                parser: {
                    dataUrlCondition: { maxSize: 4 * 1024 }, // 修改自动选择资源类型的文件大小为 4kb
                },
            },
            /******************loader******************/
            /**
             * 除了四种资源模块, 还可以通过 loader 引入其他类型的文件
             * webpack 只能理解 JavaScript 和 JSON 文件
             * loader 有两个属性:
             *      1. test: 识别出哪些文件会被转换
             *      2. use: 定义出在进行转换时, 应该使用哪个 loader
             * 模块 loader 可以链式调用
             */
            /**
             * 加载 CSS 文件
             * 插件: style-loader css-loader
             * mini-css-extract-plugin 插件:
             *      - 将CSS文件抽离成一个单独的文件, 为每个包含 CSS 的 JS 文件创建一个 CSS 文件
             *      - 支持 CSS 和 SourceMaps 的按需加载
             */
            {
                test: /\.css$/i,
                // use: ['style-loader', 'css-loader'],
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            /**
             * 加载 Less 文件
             * 插件: style-loader css-loader less-loader
             */
            {
                test: /\.less$/i,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            /**
             * 加载数据
             */
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
            },
            {
                test: /\.xml$/i,
                use: ['xml-loader'],
            },
        ],
    },
    /* 优化配置 */
    optimization: {
        /* 压缩优化文件 */
        minimizer: [new CssMinimizerPlugin()],
        /* SplitChunksPlugin 插件可以将公共的依赖模块提取到已有的入口 chunk 中，或者提取到一个新生成的 chunk */
        splitChunks: {
            chunks: 'all',
        },
    },
};
