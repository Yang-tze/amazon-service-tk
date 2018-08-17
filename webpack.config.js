const path = require('path');

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
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
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
    output: {
      filename: 'app-server.js',
      path: path.resolve(__dirname, 'public'),
    },
  }),
];
