var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'app/assets/javascripts');
var APP_DIR = path.resolve(__dirname, 'frontend');
var NODE_MODULES_DIR = path.resolve(__dirname, 'node_modules');

var config = {
  entry: path.resolve(APP_DIR, 'app'),
  output: {
    path: BUILD_DIR,
    filename: 'app_bundle.js'
  },
  resolve: {
    root: [APP_DIR, NODE_MODULES_DIR],
    extensions: ['', '.js', '.jsx'],
  },
  module : {
    loaders : [
      {
        test : /(\.jsx|\.js)$/,
        loaders : ['babel'],
        exclude: NODE_MODULES_DIR
      }
    ]
  }
};

module.exports = config;
