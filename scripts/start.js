'use strict';

process.env.NODE_ENV = 'development';

const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const devConfig = require('../config/webpack.dev.js');
const compiler = webpack(devConfig);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  path: '/__webpack_hmr',
  reload: true,
  noInfo: true,
  publicPath: devConfig.output.publicPath
}));

app.use(webpackHotMiddleware(compiler, {
  path: '/__webpack_hmr'
}));

// Server the files on port 8000
app.listen(8000, function() {
  console.log('App listening on port 8000.');
});
