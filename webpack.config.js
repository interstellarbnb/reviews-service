const path = require('path');
const bundlePath = path.join(__dirname, './client/public');

module.exports = {
  entry: [path.join(__dirname, './client/src/index.jsx')],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]-[local]-[hash:base64:6]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.join(__dirname, '/client/public'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  watch: true,
};
