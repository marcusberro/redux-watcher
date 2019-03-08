const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = require('./src/config/production/environment');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(),
    /* Add properties as default */
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
      DEBUG: false,
      CONFIG: config
    })
  ]
});
