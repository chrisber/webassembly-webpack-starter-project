const path = require('path');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const constants = {
  host: 'localhost',
  port: 3000,
  backend_host: 'localhost',
  backend_port: '8181'
}

module.exports = webpackMerge(commonConfig, {
  performance: {
    hints: false
  },
  devtool: 'cheap-module-source-map',
  output: {
    pathinfo: true,
    path: path.resolve(__dirname, "dist"),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js',
    library: 'hello-webassembly',
    libraryTarget: 'umd',
  },
  externals: [
    {
      "window": "window"
    }
  ],
  plugins: [
    new DefinePlugin({
      'ENV': 'development',
    })
  ],
  devServer: {
    stats: { colors: true },
    port: constants.port,
    host: constants.host,
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
  }
});

