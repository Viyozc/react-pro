const path = require('path')

module.exports = {
  entry: {
    main: './fed/main'
  },
  module: {
    rules: [
      {
        test: /.*\/containers\/.*\.js$/,
        include: path.resolve(__dirname, 'fed'),
        exclude: /containers\/app.js$/,
        use: ['bundle-loader?lazy']
      },
      {
        test: /\.css$/,
        use: [{loader: 'style-loader/useable'}, {loader: 'css-loader'}]
      },
      {
        test: /\.less$/,
        use: [{loader: 'style-loader/useable'}, {loader: 'css-loader'}, {loader: 'less-loader'}]
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      containers: path.join(__dirname, 'fed/containers'),
      components: path.join(__dirname, 'fed/components'),
      actions: path.join(__dirname, 'fed/actions'),
      reducers: path.join(__dirname, 'fed/reducers'),
      constants: path.join(__dirname, 'fed/constants'),
      utils: path.join(__dirname, 'fed/utils')
    }
  }
}
