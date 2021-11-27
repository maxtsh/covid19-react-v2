// COMMON WEBPACK CONFIGURATION
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./app/index.tsx",
  output: {
    publicPath: "/",
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
    path: path.join(__dirname, "public"),
    assetModuleFilename: "images/[hash][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        loader: require.resolve("babel-loader"),
      },
      {
        test: /\.jsx?$/, // Transform all .js and .jsx files required somewhere with Babel
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        // Preprocess 3rd party .css files located in node_modules
        test: /\.css$/,
        include: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: "file-loader",
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              // Inline files smaller than 10 kB
              limit: 10 * 1024,
              noquotes: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/",
              limit: 100 * 1024,
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000,
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: "./index.html",
    }),
  ],
  resolve: {
    alias: {
      containers: path.resolve(__dirname, "../app/containers"),
      components: path.resolve(__dirname, "../app/components"),
      utils: path.resolve(__dirname, "../utils"),
      styles: path.resolve(__dirname, "../app/styles"),
    },
    modules: ["node_modules", "app"],
    extensions: [".js", ".jsx", ".tsx", ".ts", ".react.js"],
  },
  devServer: {
    hot: true,
    historyApiFallback: true, // this fix refresh can't get issue
  },
  target: "web", // Make web variables accessible to webpack, e.g. window
};
