var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: '../src/main',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      { test: /\.css$/, loader: 'style/useable!css' },
      { test: /\.less$/, loader: 'style/useable!css!less' }
    ]
  },
  resolve: {
    extensions: ['', '.js'],
    alias: {
      actions: path.join(__dirname, '../src/actions'),
      reducers: path.join(__dirname, '../src/reducers'),
      components: path.join(__dirname, '../src/components'),
      containers: path.join(__dirname, '../src/containers'),
      constants: path.join(__dirname, '../src/constants'),
      utils: path.join(__dirname, '../src/utils')
    }
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({
      children: true,
      async: true,
      minChunks: 5
    })
  ]
}
