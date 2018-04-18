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
      {
        test: /\.css$/,
        use: [
          {
             loader: 'style-loader',
          },
          {
             loader: 'css-loader',
             options: {
                sourceMap: true,
                modules: true,
                localIdentName: '[local]___[hash:base64:5]'
               }
          }
          ],
       }
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
