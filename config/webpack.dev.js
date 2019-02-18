const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');
const paths = require('./paths');

const resolvePath = entryPath => path.resolve(__dirname, entryPath);
const webpackHotMiddlewareConfig = 
  'webpack-hot-middleware/client?path=/__webpack_hmr&&noInfo=true&&reload=true';

module.exports = merge(common, {
  entry: {
    index: [
      resolvePath('../src/pages/index/index.js'),
      webpackHotMiddlewareConfig
    ]
  },
  devtool: 'inline-source-map',
  mode: process.env.NODE_ENV,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new HtmlWebpackPlugin({
      template: resolvePath('../src/pages/index/index.html'),
      inject: true,
      chunks: ['index'],
      title: '首页',
      filename: 'index/index.html',
    })
  ]
});

