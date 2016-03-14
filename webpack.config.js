const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');
const pkg = require('./package.json');
const Clean = require('clean-webpack-plugin');
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
      jquery: bower_dir + '/jquery/jquery.min.js',
      underscore: bower_dir + '/underscore/underscore.js',
      looper: bower_dir + '/looper/src/looper.min.js',
      githubjs: bower_dir + '/githubjs/dist/github.min.js'
    },
    extensions: ['', '.js', '.scss', '.sass']
  },

  entry: {
    app: PATHS.app,
    vendors: ['jquery', 'underscore', 'looper', 'githubjs']
  },

  output: {
    path: PATHS.build,
    filename: "[name].bundle.js",
    publicPath: '/build'
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
        test: /\.scss$/,
        // loaders: ["style", "css", "sass"]
        loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
      },
      {
        test:   /\.(png|gif|jpe?g|svg)$/i,
        loader: 'url?limit=10000',
      },

    ]
  }
};

module.exports = config;






//
//
//
//
//
//
//
// const TARGET = process.env.npm_lifecycle_event;
// const PATHS = {
//   app: path.join(__dirname, 'app/scripts/main.js'),
//   build: path.join(__dirname, 'build')
// };
//
// // An easy way to control .babelrc is to set BABEL_ENV environment variable as npm lifecycle event.
// // This gives a predictable mapping between package.json and .babelrc
// process.env.BABEL_ENV = TARGET;
//
// const common = {
//   // Entry accepts a path or an object of entries.
//   entry: PATHS.app,
//
//   // Add resolve.extensions. '' is needed to allow imports
//   resolve: {
//     extensions: ['', '.js', '.jsx']
//   },
//   output: {
//     path: PATHS.build,
//     filename: '[name].js'
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.jsx?$/,
//
//         // Enable caching for improved performance during development
//         loaders: ['babel?cacheDirectory'],
//         include: PATHS.app
//       }
//     ]
//   },
//   plugins: [
//     new HtmlwebpackPlugin({
//       title: 'MyPortfolio'
//     })
//   ],
// };
//
// if (TARGET === 'start' || !TARGET) {
//   module.exports = merge(common, {
//     devServer: {
//       devtool: 'eval-source-map',
//       historyApiFallback: true,
//       hot: true,
//       inline: true,
//       progress: true,
//
//       // Display only errors to reduce the amount of output
//       stats: 'errors-only',
//
//       // Parse host and port from env so this is easy to customize.
//       host: process.env.HOST,
//       port: process.env.PORT
//     },
//     module: {
//       loaders: [
//         {
//           // Test expects a RexExp
//           test: /\.scss$/,
//           loaders: ['style', 'css', 'autoprefixer', 'scss'],
//           // Include accepts either a path or an array of path
//           include: PATHS.app
//         }
//       ]
//     },
//     plugins: [
//       new webpack.HotModuleReplacementPlugin()
//     ]
//   });
// }
//
// if (TARGET === 'build' || TARGET === 'stats') {
//   module.exports = merge(common, {
//     entry: {
//       app: PATHS.app,
//       vendor: Object.keys(pkg.dependencies)
//     },
//     output: {
//       path: PATHS.build,
//       filename: '[name].[chunkhash].js',
//       chunkFilename: '[chunkhash].js'
//     },
//     module: {
//       loaders: [
//         {
//           // Test expects a RexExp
//           test: /\.scss$/,
//           loader: ExtractTextPlugin.extract('style', 'css', 'autoprefixer', 'sass'),
//           // Include accepts either a path or an array of path
//           include: PATHS.app
//         }
//       ]
//     },
//     plugins: [
//       new Clean(['build']),
//
//       // Output the extracted css to a file
//       new ExtractTextPlugin('styles.[chunkhash].css'),
//       new webpack.optimize.CommonsChunkPlugin({
//         names: ['vendor', 'manifest']
//       }),
//       new webpack.DefinePlugin({
//         'process.env.NODE_ENV': JSON.stringify('production')
//       }),
//       new webpack.optimize.UglifyJsPlugin({
//         compress: {
//           warnings: false
//         }
//       })
//     ]
//   });
// }
