const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: {
      path:path.resolve(__dirname, "dist"),
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },
    mode: 'development',
    devtool: false,
    module: {
        rules: [
          {
            test: /\.?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            },
            
          },
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ]
      },
    plugins: [
        new webpack.ProvidePlugin({
          process: 'process/browser',
        }),
        new HtmlWebpackPlugin({
          template: path.join(__dirname, "src", "index.html"),
        }),
    ],
    resolveLoader: {
      modules: ['node_modules'],
      extensions: ['.js', '.json'],
      mainFields: ['loader', 'main'],
    },
    resolve:{
      fallback: {
        "polyfill": false
      }
    }
};