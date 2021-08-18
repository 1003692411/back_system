const pro = []
if (process.env.NODE_ENV === 'production') {
  pro.push('transform-remove-console')
}

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    //发布时的插件
    ...pro,
    '@babel/plugin-syntax-dynamic-import'
  ]

}
