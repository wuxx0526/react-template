// 项目配置
const projectConfig = (function () {
    // switch (process.env.VUE_APP_ENV) {
    switch ('test') {
        case 'production':
            return {
                apiUrl: 'https://wenqu.prod.wangtiansoft.com/server',
                appId: 'wxc2059d7de6909b94',
                deployUrl: 'https://wenqu.prod.wangtiansoft.com/utils/#'
            }
        case 'development':
            return {
                apiUrl: 'http://ywyd.dev.wangtiansoft.com/wenqu-server',
                appId: 'wxc2059d7de6909b94',
                deployUrl: 'http://ywyd.dev.wangtiansoft.com/utils/#'
            }
        case 'test':
            return {
                apiUrl: 'http://ywyd.dev.wangtiansoft.com/wenqu-server',
                appId: 'wxc2059d7de6909b94',
                deployUrl: 'http://ywyd.dev.wangtiansoft.com/utils/#'
            }
        default: return {}
    }
}())

const isDebug = (function () {
    switch (process.env.VUE_APP_ENV) {
        case 'production':
            return false // 这一行不能改
        case 'development':
            return true // 如果你在普通浏览器环境下将这个改成true，则可以改这个不跳到微信授权页面
        case 'test':
            return false
        default: return false
    }
}())

const whiteRoutes = [
    '/user/login',
    '/commonUtils/breedingArchives'
]

module.exports = {
    projectConfig,
    isDebug,
    whiteRoutes
}
