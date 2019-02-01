const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: [
      path.resolve(__dirname, './src/pages/index/index.js'),
      'webpack-hot-middleware/client?path=/__webpack_hmr&&reload=true&&noInfo=true'
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

    new CleanWebpackPlugin(['dist']),

    new HtmlWebpackPlugin({
      template: './src/pages/index/index.html',
      inject: true,
      hash: true,
      chunks: ['index'],
      filename: 'index/index.html'
    })
  ],
  output: {  // 出口
    filename: '[name].bundle.js',  // 输出文件
    path: path.resolve(__dirname, 'dist'),  // 输出位置: dist/ 文件夹内
    publicPath: '/'
  },
  module: {
    rules: [
      {  // 加载样式表
        test: /\.css$/,
	use: [
	  'style-loader',
	  'css-loader'
	]
      },
      {  // 加载图片
        test: /\.(png|svg|jpg|jpeg|gif)$/,
	use: [
	  'file-loader'  // 加载任何文件，如图片、字体等
	]
      },
      {  // 加载字体
        test: /\.(woff|woff2|eot|ttf|otf)$/,
	use: [
	  'file-loader'
	]
      },
      {  // 加载数据: csv|tsv
        test: /\.(csv|tsv)$/,
	use: [
	  'csv-loader'
	]
      },
      {  // 加载数据: xml
        test: /\.xml$/,
	use: [
	  'xml-loader'
	]
      }
    ]
  }
};
