const path = require('path');
const webpack = require('webpack');
module.exports = {
  watch: true,
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // node: {
  //   global: 'empty',
  //   __filename: true,
  //   __dirname: true,
  // },
  resolve: {
    fallback: {
      fs: false
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      fs: "fs"
    })
  ],
  target: 'web',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }]
  }
};