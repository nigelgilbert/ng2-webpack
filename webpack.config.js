var webpack = require("webpack");
var path = require("path");

module.exports = {
  context: path.join(__dirname, "client"),
  entry:  {
    bootstrap: "./bootstrap.js"
  },
  output: {
    path: path.join(__dirname, "public"),
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
    ],
  },
  node: {
    fs: "empty"
  },
};