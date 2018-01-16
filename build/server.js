var opn = require('opn');
const express = require('express');
const webpack = require('webpack');


const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  quiet: true,
  stats: { colors: true }
});
app.use(devMiddleware)


// force page reload when html-webpack-plugin template changes
var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: console.log,

});
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' });
    cb();
  })
});
app.use(hotMiddleware);

var port = 3000;
var uri = 'http://localhost:' + port;
var _resolve;
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  opn(uri)
  _resolve()
})



// Serve the files on port 3000.
app.listen(port, function () {
  console.log('Example app listening on port!\n' + port);
});

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}