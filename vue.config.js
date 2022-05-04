module.exports = {
    lintOnSave: false,
    transpileDependencies: true,
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'view': '@/view',
                'components': '@/components',
                'network': '@/network',
            } //配置别名
        }
    },
    css: {
        // css预处理器
        loaderOptions: {
            sass: {
                // 此处修改为要被预处理的scss文件地址
                data: '@import "@/assets/css/color.scss";'
            }
        }
    },
    publicPath: process.env.NODE_ENV === 'production' ? "/vue-store-todolist/" : "./"

}