const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const conf = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
    publicPath: '/dist/',
  },
  devServer: {
    overlay: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: '/node_modules/',
        use: {
          loader: 'eslint-loader',
        },
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ],
};

module.exports = conf;
