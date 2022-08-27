const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths')

module.exports = {
  mode: 'development',
  entry: {index: './src/index.js'},
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: paths.src + '/template.html',
    }),
  ],
  devServer: {
    static: './dist',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
    minimize: true,
  }
};
