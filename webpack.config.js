const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const pxtorem = require('postcss-pxtorem')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('./config/config')

module.exports = (env, argv) => {
  const devMode = argv.mode !== 'production'

  return {
    entry: './src/index.js',
    output: {
      filename: devMode ? 'bundle.js' : 'bundle.[hash].js',
      path: path.resolve(__dirname, 'dist')
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: devMode ? '[name].css' : '[name].[hash].css',
        chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ],
    module: {
      rules: [{
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                pxtorem({
                  rootValue: config.pxToRemRootValue,
                  propList: ['*']
                })
              ]
            }
          }
        ],
      }]
    }
  }
}