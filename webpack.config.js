'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  mode: NODE_ENV,
  entry: __dirname + '/src/entry.js',
  output: {
    filename: 'thegame.js',
    path: __dirname + '/public/js',
  },

  watch: NODE_ENV == 'development',

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
    ],
  },
};
