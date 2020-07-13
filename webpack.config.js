const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: './src/client/index',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      { test: /.jsx?$/, exclude: /node_modules/, use: 'babel-loader' },
      {
        test: /.scss?$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          // css-loader
          {
            loader: 'css-loader',
          },
          // sass-loader
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
};
