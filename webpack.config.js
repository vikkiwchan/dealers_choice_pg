const path = require('path');
module.exports = {
  module: {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'main.js',
    },
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
};
