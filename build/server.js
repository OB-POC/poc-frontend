const express = require('express');
const path = require('path');
const http = require('http');
const app = express();
const bodyParser = require('body-parser');
const webpack = require('webpack');
// const webpackDevMiddleware = require('webpack-dev-middleware');
// const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config.js');

const webpackCompiler = webpack(webpackConfig);

var server = http.createServer(app);

app.use(express.static(path.join(__dirname, './', 'client')));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
//   app.use(webpackHotMiddleware(webpackCompiler));
//   app.use(webpackDevMiddleware(webpackCompiler, {
//       noInfo: true,
//       publicPath: webpackConfig.output.publicPath,
//       stats: {colors: true}
//   }));


  server.listen(3000,() =>{
      console.log("Listening on 3000");
  })
