module.exports = {
    publicPath:'./',
    productionSourceMap:false,
    devServer:{
        port: '6001',
        disableHostCheck: true,
        // 设置代理
        // proxy: {
        //     '/api1': {
        //         target: 'https://test.com', // 域名
        //         ws: false,
        //         changOrigin: true,
        //         pathRewrite: {
        //             '/api1': '/api1'
        //         }
        //     }
        // }
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "~@/assets/style/common.scss";`,
            },
        },
    },
}