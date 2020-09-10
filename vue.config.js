module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'content': 'components/content',
        'common': 'components/common',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  devServer: {
    overlay: {  //让我们的浏览器关闭掉遮盖层的错误代码提示
      warnings: false,
      errors: false
    }
  },
  lintOnSave:false //直接关闭eslint检查
}
