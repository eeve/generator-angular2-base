var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common');
var helpers = require('./helpers');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
  // http://webpack.github.io/docs/configuration.html#devtool
  devtool: 'cheap-module-source-map',
  output: {
    path: helpers.root('dist'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('[name].css')
  ],
  devServer: {
    hot: true,
    inline: true,
    stats: 'minimal',
    contentBase: 'app',
    host: '127.0.0.1',
    port: 8000
  }
});
