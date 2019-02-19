'use strict';

const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const webpackHotMiddlewareConfig = 
  'webpack-hot-middleware/client?path=/__webpack_hmr&&noInfo=true&&reload=true';

const entry = function (env) {
  return {
    index: [
      resolveApp('src/pages/index/index.js'),
      env = 'development' ? webpackHotMiddlewareConfig : ''
    ]
  };
};

module.exports = entry;

