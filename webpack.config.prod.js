const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.config.common.js');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  entry: {
    index: [
      path.resolve(__dirname, './src/pages/index/index.js')
    ]
  },
  mode: 'production',
  // devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  plugins: [
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    new htmlWebpackPlugin({
      template: './src/pages/index/index.html',
      inject: true,
      chunks: ['index'],
      title: '首页',
      filename: 'index/index.html',
      minify: {
        removeComments: true,
	collapseWhitespace: true,
	removeRedundantAttributes: true,
	removeStyleLinkTypeAttributes: true,
	keepClosingSlash: true,
	minifyJs: true,
	minifyCSS: true,
	minifyURLs: true
      }
    })
  ]
});
