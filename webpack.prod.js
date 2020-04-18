const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const Dotenv = require('dotenv-webpack');
const env = process.env.NODE_ENV;

module.exports = {
  entry: {
    bundle: './src/index.tsx'
  },
  output: {
    filename: 'js/[name][hash].js',
    path: path.resolve(__dirname, 'src/dist'),
    publicPath: '/',
  },
  performance: {
    hints: false
  },
  mode: 'production',
  devtool: 'inline-source-map',
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
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              minimize: true,
            }
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|png|ico)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          outputPath: 'images/'
        }
      },
      {
        test: /\.(pdf)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          outputPath: 'pdf/'
        }
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?mimetype=image/svg+xml',
        options: {
          outputPath: 'font/'
        }
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?mimetype=application/font-woff",
        options: {
          outputPath: 'font/'
        }
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?mimetype=application/font-woff",
        options: {
          outputPath: 'font/'
        }
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?mimetype=application/octet-stream",
        options: {
          outputPath: 'font/'
        }
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader",
        options: {
          outputPath: 'font/'
        }
      },
      {
        test: /\.gif$/,
        loader: "file-loader?mimetype=image/gif",
        options: {
          outputPath: 'images/'
        }
      },
      {
        test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?mimetype=application/font-sfnt",
        options: {
          outputPath: 'font/'
        }
      },
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
  devtool: 'hidden-source-map',//hide webpack on brower
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.scss', '.json'],
  },
  optimization: {
    minimize: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/, // you may add "vendor.js" here if you want to
          name: "vendor",
          chunks: "initial",
          enforce: true
        }
      }
    },
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // Must be set to true if using source-maps in production
      }),
      new OptimizeCSSAssetsPlugin({}) //minify css to production
    ]
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new MiniCssExtractPlugin({
      filename: "style/style.min.css"
    })
    ,
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new HtmlWebpackPlugin({
      hash: true,
      inject: true,
      template: './src/app/index.html',
      favicon: './src/public/images/favicon.jpg',
      filename: "index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new webpack.LoaderOptionsPlugin({
      debug: false
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new Dotenv({
      path: `./.env.${env}`
    })
  ],
};