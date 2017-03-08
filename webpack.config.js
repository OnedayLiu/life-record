var path = require('path');

module.exports = {
  entry: './FrontEnd/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'app/public/build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          "presets": ["latest"],
          "plugins": ["syntax-decorators"]
        }
      }
    ]
  }
};