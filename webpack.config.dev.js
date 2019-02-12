const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  entry: {
    index: [
      path.resolve(__dirname, './src/pages/index/index.js'),
      'webpack-hot-middleware/client?path=/__webpack_hmr&&noInfo=true&&reload=true'
    ]
  },
  devtool: 'inline-source-map',
  mode: 'development',
  plugins: [
    // OccurrenceOrderPlugin is needed for webpack 1.x only
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // Use NoErrorsPlugin for webpack 1.x
    new webpack.NoEmitOnErrorsPlugin(),

    new htmlWebpackPlugin({
      template: './src/pages/index/index.html',
      inject: true,
      chunks: ['index'],
      title: '首页',
      filename: 'index/index.html'
    })
  ]
});
