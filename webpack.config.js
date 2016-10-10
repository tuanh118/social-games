const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: [
    './app/index.js',
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: __dirname + '/app',
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015',
            'react',
            'stage-2',
          ]
        }
      },
    ],
  },
  plugins: [
    HtmlWebpackPluginConfig
  ],
  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx',
    ]
  }
};
