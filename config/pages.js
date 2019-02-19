'use strict';

const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const entry = function () {
  return {
    index: resolveApp('src/pages/index/index.js')
  };
};

module.exports = entry;

