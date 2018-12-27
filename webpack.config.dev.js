const path = require('path')
const defaultConfig = require('./webpack.config')

module.exports = (env, argv) => {
  return {
    ...defaultConfig(env, argv),
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000
    }
  }
}