const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    port: 1234,
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|mp3|svg|jpe?g)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
};