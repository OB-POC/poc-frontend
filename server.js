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

const {
    port: serverPort
} = require("./config.json");

var server = http.createServer(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use('/', express.static(path.join(__dirname, './', 'public')));

//   app.use(webpackHotMiddleware(webpackCompiler));
//   app.use(webpackDevMiddleware(webpackCompiler, {
//       noInfo: true,
//       publicPath: webpackConfig.output.publicPath,
//       stats: {colors: true}
//   }));


server.listen(serverPort, () => {
    console.log(`Listening on ${serverPort}`);
})