
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, '../app-gateway/src/main/resources/static');
const SRC_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: [
    SRC_DIR + '/main/js/main.jsx'
  ],
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8081/"
      }
    }
  },
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

