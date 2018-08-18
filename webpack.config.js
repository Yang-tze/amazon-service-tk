const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const common = {
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, 'client')],
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react'],
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        ],
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 3003,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'app.css',
    }),
  ],
};

module.exports = [
  Object.assign({}, common, {
    entry: './client/client.jsx',
    output: {
      filename: 'app.js',
      path: path.resolve(__dirname, 'public'),
    },
  }),
  Object.assign({}, common, {
    entry: './client/server.jsx',
    target: 'node',
    output: {
      filename: 'app-server.js',
      path: path.resolve(__dirname, 'public'),
      libraryTarget: 'commonjs-module',
    },
  }),
];
