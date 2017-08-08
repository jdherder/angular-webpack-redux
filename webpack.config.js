const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

//Root helper function
const root = function(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
};

//Extraction plugin definitions
const extractCSS = new ExtractTextPlugin('[name].[hash].css');

const options = {
  devtool: 'source-map',
  entry: {
    app: './src/app/app.js'
  },
  output: {
    path: root('dist'),
    filename: '[name].[hash].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'ng-annotate-loader' },
          {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          },
          { loader: 'eslint-loader' }
        ]
      },
      {
        test: /\.html/,
        loader: 'html-loader'
      },
      {
        test: /\.scss$/,
        use: extractCSS.extract([ 'css-loader', 'sass-loader' ])
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico|wav|mp3)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      }
    ],
  },
  plugins: [
    extractCSS,
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  stats: {
    children: false
  },
  devServer: {
    historyApiFallback: true,
    stats: {
      children: false
    }
  }
};

if (process.env['NODE_ENV'] === 'production') {
  options.devtool = '';
  options.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      mangle: true
    })
  );
}

module.exports = options;
