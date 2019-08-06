const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin =require("mini-css-extract-plugin")


module.exports = {
  entry: ["./src/index.js"],

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.js"
  },

  devServer: {
    contentBase: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // regular expression
        exclude: /node_modules/, // if we neglect this, then the loader include all extensions in node_modules
        loaders: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: [
          {
              loader: MiniCssExtractPlugin.loader
            
          },
          "css-loader"
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [new HtmlWebpackPlugin({
    template:'./public/index.html'
  }),
new MiniCssExtractPlugin()]
};
