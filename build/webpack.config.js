const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const plugins = require('./plugins')
const { resolve } = require('./utils')
const jsRules = require('./rules/jsRules')
const styleRules = require('./rules/styleRules')

module.exports = {
  entry: {
    app: resolve('src/index.tsx')
  },
  output: {
    filename: '[name].js',
    path: resolve('dist')
  },
  module: {
    rules: [...jsRules,...styleRules]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {},
    plugins: [
      // 将组件加载路径设置 映射到 webpack 中
      new TsconfigPathsPlugin({
        configFile: resolve('tsconfig.json')
      })
    ]
  },
  plugins: [...plugins]
}