const { resolve } = require('./../utils')

module.exports = [
  {
    test: /\.scss$/,
    include: [resolve('src')],
    use: [
      'style-loader',
      {
        // 替换 css-loader
        loader: 'typings-for-css-modules-loader',
        options: {
          // 是否使用css modules
          modules: true,
          // 类名导出
          namedExport: true,
          // 支持驼峰
          camelCase: true,
          // 是否使用scss
          sass: true
        }
      },
      {
        loader: 'sass-loader',
        options: {
          includePaths: [resolve('src/styles')]
        }
      }
    ]
  }
]