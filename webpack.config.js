const path = require('path');

module.exports = {
  entry: './client/index.jsx',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "client")
        ],
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        loader: "babel-loader",
        options: {
          presets: ["env", "react"]
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true, 
    port: 3003
  }
}