const tsImportPluginFactory = require('ts-import-plugin')

const { resolve } = require('./../utils')

module.exports = [
  {
    test: /\.ts(x?)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'awesome-typescript-loader',
        options: {
          useCache: true,
          cacheDirectory: resolve('cache-loader'),
          babelOptions: {
            // 不需要 babelrc 配置文件
            babelrc: false,
            plugins: [
              'react-hot-loader/babel'
            ]
          },
          getCustomTransformers: () => {
            before: [
              tsImportPluginFactory({
                libraryName: 'antd',
                libraryDirectory: 'lib',
                // true 使用的是组件的less文件
                // css 使用的是css文件
                style: true
              })
            ]
          }
        }
      }
    ]
  }
]