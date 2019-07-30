const path = require("path");
const webpack = require("webpack");

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
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
