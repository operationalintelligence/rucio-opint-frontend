const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
      path: path.join(__dirname, 'public'),
      filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test:  /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};