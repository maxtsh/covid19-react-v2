//  DEVELOPMENT WEBPACK CONFIGURATION
const path = require("path");
const webpackCommon = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  ...webpackCommon,
  mode: "development",
  // Don't use hashes in dev mode for better performance
  output: {
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
    publicPath: "/",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true, // Inject all files that are generated by webpack, e.g. bundle.js
      template: "./index.html",
    }),
  ],
  devtool: "eval-source-map",
  devServer: {
    static: [path.join(__dirname, "assets/images")],
    hot: true,
    historyApiFallback: true,
    port: 3000,
  },
  performance: {
    hints: false,
  },
};
