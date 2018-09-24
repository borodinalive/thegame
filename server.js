const path = require('path');
const fs = require('fs');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require("webpack-hot-middleware");

const morgan = require('morgan');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

const resolve = (file) => path.resolve(__dirname, file);
const serve = (path) => express.static(resolve(path));

const options = {
  contentBase: './dist',
  hot: true,
  publicPath: '/',
  host: 'localhost'
};

app.use(webpackDevMiddleware(compiler, options));
app.use(webpackHotMiddleware(compiler, options));
app.use(morgan(':remote-addr [:date[clf]] :method :url :status :res[content-length] - :response-time ms'));
app.use('/public', express.static('./public'));

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});
