
//解决跨域的代理配置

module.exports = {
  proxyList: {
    '/api/':{
        target: 'http:localhost：5000',
        pathRewrite: {
          '^/api/': '/api/'
        }
    }
  }
}