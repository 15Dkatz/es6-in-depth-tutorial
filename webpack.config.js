const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'app'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       exclude: /node_modules/,
  //       use: ['babel-loader']
  //     }
  //   ]
  // },
  devServer: {
    port: 3000,
    contentBase: path.resolve(__dirname, 'build')
  }
}