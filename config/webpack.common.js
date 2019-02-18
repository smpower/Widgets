const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMod = process.env.NODE_ENV === 'development';
const paths = require('./paths');

module.exports = {
  output: {
    filename: '[name]/[name].[hash].js',
    path: paths.appDist,
    publicPath: '/'
  },
  module: {
    rules: [
      {  // 转译 ES6+ 到 ES5
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            cacheDirectory: true  // 缓存 loader 的执行结果
          }
        }
      },
      {  // 样式
        test: /\.css$/,
        use: [
          devMod ? 'css-hot-loader' : 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {  // 图片
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          'file-loader'  // 加载任何文件，如图片、字体等
        ]
      },
      {  // 字体
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {  // 数据: csv|tsv
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {  // 数据: xml
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: devMod ? '[name]/[name].css' : '[name]/[name].[hash].css',
      chunkFilename: devMod ? '[id].css' : '[id].[hash].css'
    })
  ]
};
