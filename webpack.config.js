module.exports = {
  entry: [
    './client/src/index.js',
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: __dirname + '/client/public',
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: __dirname + '/client/public',
  },
  watch: true,
};
