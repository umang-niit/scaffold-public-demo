const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
const path = require('path');

module.exports = env => {
  let baseUrl = 'https://stage.communication-scaffold.oodleslab.com/public';

  return merge(common, {
    mode: 'production',
    entry: ['babel-polyfill', path.resolve(__dirname, './src/index.js')],
    module: {
      rules: [
        {
          test: /\.png|woff|woff2|eot|ttf|svg|jpg|gif|ico$/,
          loader: 'file-loader',
          options: {
            outputPath: 'scaffold-app/images',
            publicPath: baseUrl + 'scaffold-app/images',
          },
        }
      ]
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'scaffold-app/js/main.js',
      publicPath: "/",
      clean: true
    },
    stats: {
      logging: true,
      errors: true,
      errorDetails: true,
      timings: true
    }
  })
};
