const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');
const path = require('path');
const webpack = require("webpack");


module.exports = (env, args) => {
  const isProduction = (args.mode === 'production');

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction ? '[name].[contenthash].js' : '[name].[hash].js',
    },
    resolve: {
      alias: {
        pkg: path.resolve(__dirname, './pkg/'),
        components: path.resolve(__dirname, './src/components/'),
        router: path.resolve(__dirname, './src/routes/'),
        rust: path.resolve(__dirname, './src/rust/'),
        style: path.resolve(__dirname, './src/styles/'),
        svgs: path.resolve(__dirname, './src/svgs/'),
        utils: path.resolve(__dirname, './src/utils/'),
        views: path.resolve(__dirname, './src/views/')
      }
    },
    module: {
      rules: [
        {
          test: /\.m?js/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader?cacheDirectory=true",
            options: {
              plugins: ["@babel/plugin-proposal-class-properties"]
            }
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
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      }),
      new WasmPackPlugin({
        crateDirectory: path.resolve(__dirname, "."),
      }),
      new webpack.ProvidePlugin({
        TextDecoder: ['text-encoding', 'TextDecoder'],
        TextEncoder: ['text-encoding', 'TextEncoder'],
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      })
    ]
  }
}