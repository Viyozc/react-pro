const webpack = require('webpack')
const path = require('path')
const assign = require('lodash/assign')
const config = require('./webpack.base.config')
const port = require('./config/').port + 1000
const HappyPack = require('happypack')
const os = require('os')
const ip = require('ip').address()
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })
// test
module.exports = assign({}, config, {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    `webpack-dev-server/client?http://${ip}:${port}`,
    'webpack/hot/only-dev-server',
    './fed/main'
  ],
  module: {
    rules: config.module.rules.concat([
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['happypack/loader?id=happybabel']
      }
    ])
  },
  output: {
    path: path.join(__dirname, 'public/build/'),
    filename: 'bundle.js',
    publicPath: `http://${ip}:${port}/build/`,
    chunkFilename: '[hash]/[id].js'
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      /**
       * 在这里引入 manifest 文件
       */
      manifest: require(path.join(__dirname, '../diancdn/static', 'vendor-mainfest.json'))
    }),
    // 定义变量
    new webpack.DefinePlugin({
      'process.env': {
        // This has effect on the react lib size
        'NODE_ENV': JSON.stringify('development')
      },
      DEBUG: true
    }),
    new HappyPack({
      id: 'happybabel',
      loaders: [{
        loader: 'babel-loader',
        options: {
          presets: ['react', 'env'],
          plugins: [
            ['transform-object-rest-spread'],
            ['transform-runtime', {
              polyfill: false,
              regenerator: true
            }]
          ]
        }
      }],
      threadPool: happyThreadPool,
      verbose: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    host: ip,
    port: port
  }
})
