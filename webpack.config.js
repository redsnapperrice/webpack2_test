module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'app.js',
    path: './bin/js'
  },
  module: {
      loaders: [
          { test: /\.scss$/,
            exclude: /node_modules/,
            loader: "style-loader!css-loader!sass-loader"
          }
      ]
  }
}