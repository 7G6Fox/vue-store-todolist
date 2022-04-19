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
    }
}