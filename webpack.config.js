'use strict';
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  context: __dirname + '/src',
  entry: {
    app: './js/main.js',
  },
  output: {
    path: __dirname, 
    filename: './static/js/app.js',
  },
  module: {
    rules: [
     {
      test: /\.js$/,
      use: [{
        loader: 'babel-loader',
        options: { presets: ['es2015'] }
      }]
    },
      { 
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader?importLoaders=1',
        }),
      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ 
      filename: './static/css/app.css',
      allChunks: true,
    }),
  ],
};

module.exports = config;