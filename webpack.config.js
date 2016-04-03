const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

///////////////////////////////////////////////


const PATHS = {
  app: path.join(__dirname, 'app/scripts/main'),
  build: path.join(__dirname, './build')
};

const sassLoaders = [
  'css-loader',
  'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './app')
];

var node_dir = __dirname + '/node_modules';
var bower_dir = __dirname + '/bower_components';

var config = {
  resolve: {
    alias: {
      // jquery: bower_dir + '/jquery/jquery.min.js',
      // underscore: bower_dir + '/underscore/underscore.js',
      looper: bower_dir + '/looper/src/looper.min.js',
      githubjs: node_dir + '/githubjs/dist/github.min.js'
      // waypoint: bower_dir + '/waypoints/lib/jquery.waypoints.min.js'
    },
    extensions: ['', '.js', '.css', '.scss', '.sass']
  },

  entry: {
    app: PATHS.app,
    vendors: ['jquery', 'underscore', 'looper', 'githubjs']
  },

  output: {
    path: PATHS.build,
    filename: "[name].bundle.js",
    publicPath: '/build/'
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader", 'postcss-loader')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', ['css','sass', 'postcss-loader'])
      },
      {
        test:   /\.(png|gif|jpe?g|svg|ico)$/i,
        loader: 'url?limit=10000',
      }
    ]
  },

  postcss: [
    autoprefixer(
      {
        browsers: ['last 2 versions']
      }
    )
  ],

  externals: {
    modernizr: 'modernizr',
    jquery: "jQuery"
  }
};

module.exports = config;
