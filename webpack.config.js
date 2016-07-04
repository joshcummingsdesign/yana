var webpack = require('webpack');
var path    = require('path');

module.exports = {
  context: __dirname + '/src',
  entry: {
    app: './app.js'
  },
  output: {
    path: __dirname + '/public/scripts',
    filename: 'app.bundle.js'
  }
};
