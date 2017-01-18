
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var BUILD_DIR = path.resolve(__dirname, 'assets');
var SRC_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: [
    SRC_DIR + '/main/js/main.jsx'
  ],
  output: {
    context: BUILD_DIR,
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        include: SRC_DIR,
        loaders: ['react-hot', 'babel']
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style", "css!sass")
      }
    ]
  },
  plugins: [
    // Used to extract final css file (and not use html style tag)
    new ExtractTextPlugin("style.css"),
    // Copy static resources (img, html...)
    new CopyWebpackPlugin([{
      from: SRC_DIR + "/main/resources"
    }]),
  ],
  resolve: {
    // Simplify JSX import (search imports for ./src/main)
    root: [
      path.resolve('./src/main'),
    ]
  }
};

module.exports = config;

