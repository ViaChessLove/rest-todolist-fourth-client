const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    filename: '[name].[contenthash].js',
    path: '/build',
    publicPath: '/',
  },
  devtool: 'source-map',
  devServer: {
    port: 3002,
    allowedHosts: 'all',
    hot: true,
    liveReload: true,
  },
  resolve: {
    alias: {
      '@hocs': path.resolve(__dirname, 'src/hocs'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@components': path.resolve(__dirname, 'src/components'),
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        use: {
          loader: '@sucrase/webpack-loader',
          options: {
            transforms: ['jsx'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
