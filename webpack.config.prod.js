const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');
const htmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    new CleanWebpackPlugin(['dist']),  // 清理发布目录
    new UglifyJSPlugin({  // 压缩 JS 文件
      cache: true,
      parallel: true,
      sourceMap: true  // set to true if you want JS source maps
    }),
    new OptimizeCSSAssetsPlugin({}),  // 压缩 CSS 文件
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
