var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index_bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use : {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template:'./src/index.html'}),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      DEBUG: false
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3000
  }
};
