const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const devConfig = require('./webpack.config.dev.js');
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
  path: '/__webpack_hmr',
}));

// Serve the files on port 3000.
app.listen(8000, function () {
  console.log('App listening on port 8000!\n');
});
