
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'assets');
const SRC_DIR = path.resolve(__dirname, 'src');

function getApiPort(argv) {
  // Should be override by package.json configuration
  const DEFAULT_API_PORT = "8081";
  const API_PORT_OPT = "--api-port";
  const apiPortIdx = argv.indexOf(API_PORT_OPT);
  if (apiPortIdx != -1) {
    return argv[apiPortIdx + 1];
  }
  return DEFAULT_API_PORT;
}

var API_PORT = getApiPort(process.argv);

var config = {
  entry: [
    SRC_DIR + '/main/js/main.jsx'
  ],
  output: {
    context: BUILD_DIR,
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:" + API_PORT
      }
    }
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
    }])
  ],
  resolve: {
    // Simplify JSX import (search imports for ./src/main)
    root: [
      path.resolve('./src/main'),
    ]
  }
};

module.exports = config;

