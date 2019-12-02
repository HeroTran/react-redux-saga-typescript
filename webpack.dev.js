const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require('dotenv-webpack');
const env = process.env.NODE_ENV;

module.exports = {
  entry: {
    bundle: './src/index.tsx'
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'src/public'),
    publicPath: '/',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(pdf|jpg|jpeg|png|ico)$/,
        loader: 'file-loader',
        query: {
          name: '[path][name].[ext]?[hash]'
        }
      },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=image/svg+xml' },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/octet-stream" },
      { test: /\.otf(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-sfnt" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
      { test: /\.gif$/, loader: "file-loader?mimetype=image/gif" },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.scss', '.json', '.css'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style/[name].css"
    })
    ,
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
      },
    }),
    new HtmlWebpackPlugin({
      template: './src/app/index.html',
      favicon: './src/public/images/favicon.jpg',
      filename: "index.html"
    }),
    new Dotenv({
      path: `./.env.${env}`
    })
  ],
};