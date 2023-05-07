/* eslint-disable */
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  
  devServer: {
    static: './dist',
  },
  mode: 'production',
  output: {
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },

  module: {
    rules: [{
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    }],

  },
  plugins: [
    new ESLintPlugin({
      files: './src/index.js',
      extensions: ['js'],

    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),

  ],
  optimization: {
    runtimeChunk: 'single',
  },

};
