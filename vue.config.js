module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false, // eslint-loader 是否在保存的时候检查
  chainWebpack: config => {
    //发布
    config.when(process.env.NODE_ENV === 'production', config => {
      config.set('externals', {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        axios: 'axios',
      })
    })
    //开发
  }
}