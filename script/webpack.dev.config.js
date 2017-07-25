let webpack = require('webpack')
let assign = require('lodash/assgin')
let base = require('./webpack.base.config.js')
let path = require('path')
let ip = require('ip').address()
let port = '8900'
let pkg = require('../package.json')

module.exports = assign({}, base, {
  devtool: 'eval',
  debug: true,
  entry: [
    'webpack/hot/only-dev-server',
    '../src/main'
  ],
  output: {
    path: path.join(__dirname, '../assets/'),
    filename: 'bundle.js',
    publicPath: `http://${ip}:${port}/assets/`,
    chunkFilename: '[hash].[id].js'
  },
  devServer: {
    contentBase: path.join(__dirname, '../')
  },
  plugin: base.plugins.concat([
    new webpack.HotMoluleReplacementPlugin()
  ])

})
