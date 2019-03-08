const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const webpack = require('webpack');
const config = require('./src/config/development/environment');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 3000
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      DEBUG: false,
      CONFIG: config
    })
  ]
});
