'use strict';

const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  mode: NODE_ENV,
  entry: {
    app: [__dirname + '/src/entry.js', 'webpack-hot-middleware/client?reload=true'],
  },
  output: {
    filename: 'thegame.js',
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
        ],
      },
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   use: [
      //     {loader: "file-loader"},
      //   ]
      // }
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'The Game',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
