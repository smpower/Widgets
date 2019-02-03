const path = require('path');
const webpack = require('webpack');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  output: {
    filename: '[name]/[name].bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {  // loaders
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
  },
  plugins: [  // plugins
    new cleanWebpackPlugin(['dist'])
  ],
};
