const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common');
const paths = require('./paths');

const resolvePath = entryPath => path.resolve(__dirname, entryPath);

module.exports = merge(common, {
  entry: {
    index: [
      resolvePath('../src/pages/index/index.js')
    ]
  },
  mode: 'production',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 9000
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../'),
      verbose: true
    }),
    new UglifyJSWebpackPlugin({
      cache: true,
      parallel: true,
      sourceMap: true  // set to true if you want JS source maps
    }),

    new HtmlWebpackPlugin({
      template: resolvePath('../src/pages/index/index.html'),
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

