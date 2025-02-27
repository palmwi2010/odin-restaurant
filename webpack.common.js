const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: {
                sources: {
                  list: [
                    {
                      tag: 'img',
                      attribute: 'src',
                      type: 'src',
                    }
                  ]
                }
              }
            }
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })]
};