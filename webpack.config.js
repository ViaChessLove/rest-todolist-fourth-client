const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    filename: '[name].[contenthash].js',
    path: '/build',
    publicPath: '/'
  },
  devtool: 'source-map',
  devServer: {
    port: 3002,
    allowedHosts: 'all',
    hot: true,
  },
  resolve: {
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
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ],
};
