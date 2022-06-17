const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  entry: ['babel-polyfill', path.resolve(__dirname, './src/index.js')],
  // devtool: 'inline-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.png|woff|woff2|eot|ttf|svg|jpg|gif$/,
        loader: 'file-loader',
        options: {
          outputPath: 'scaffold-app/images',
          publicPath: 'scaffold-app/images'
        },
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    historyApiFallback: true,
    hot: true,
    port: 3000,
    proxy: {
      '/chat-api/*': {
        target: 'https://stage.communication-scaffold.oodleslab.com/',
        secure: false,
        changeOrigin: true,
        ws: true
      },
      '/dev-chat-api/*': {
        target: 'https://dev.communication-scaffold.oodleslab.com/',
        secure: false,
        changeOrigin: true,
        ws: true
      }
    }
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'scaffold-app/js/main.js',
    publicPath: '/',
    clean: true
  }
})
