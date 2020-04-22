const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
          options: { minimize: true },
        },
      },
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, "src")],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: [miniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
    new miniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
};
