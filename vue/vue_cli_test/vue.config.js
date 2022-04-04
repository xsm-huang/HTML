const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false, // 关闭语法检查
    // 开启代理服务器（方式一）
    /* devServer: {
        proxy: 'http://localhost:5000', // 发送请求到 http://localhost:5000 服务器（解决跨域问题）
    }, */
    // 开启代理服务器（方式二）
    // devServer: {
    //     proxy: {
    //         '/api': {
    //             target: 'http://localhost:5000',
    //             pathRewrite: { '^/api': '' },
    //             ws: true,
    //             changeOrigin: true,
    //         },
    //     },
    // },
});
