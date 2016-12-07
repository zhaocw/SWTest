var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
var autoprefixer = require('autoprefixer');
var px2rem = require('postcss-px2rem');
var pkg = require('./package.json');
var isProd = process.env.NODE_ENV === 'production';

var packPath = isProd ? path.join(__dirname, '/docs') : path.join(__dirname, '/dist');
var publicPath = isProd ? 'https://zhaocw.github.io/' + pkg.name + '/' : './';

var examplePath = path.join(__dirname, '/example');
var indexEntries = [examplePath + '/app.js'];

module.exports = {
  entry: indexEntries,
  output: {
    // -[chunkhash]
    filename: 'bundle.js',
    path: packPath,
    publicPath: publicPath
  },
  debug: true,
   resolve: {
    alias: {
      libs: path.join(__dirname, './libs'),
      components: path.join(__dirname, './components'),
    }
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
    }, {
      test: /\.scss$/,
      exclude: /(node_modules)/,
			loader: 'style!css!postcss!sass'
    }, {
      test: /\.(png|jpg|jpeg|gif)$/,
      exclude: /node_modules/,
      // -[hash:8]
      loader: 'url?limit=8192&name=images/[name].[ext]'
    }]
  },
  postcss: [autoprefixer({ browsers: [ '> 5%', 'last 2 versions' ] })],
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true,
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      }
    }),
    new CleanWebpackPlugin(packPath, {
      root: __dirname,
      verbose: true,
      dry: false
    }),
    // -[contenthash:8]
    new ExtractTextPlugin("style.css", {
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: examplePath + '/index.html',
      filename: 'index.html'
    }),
    new SWPrecacheWebpackPlugin(
      {
        cacheId: 'SWTest',
        filename: 'sw.js',
        // filename: 'service-worker/sw.js',
        // filepath:
        maximumFileSizeToCacheInBytes: 4194304,
        runtimeCaching: [{
          handler: 'cacheFirst',
          urlPattern: /[.]mp3$/,
        }],
      }
    )
  ]
};
