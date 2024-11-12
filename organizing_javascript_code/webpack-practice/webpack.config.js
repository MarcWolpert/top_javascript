// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  //need this to watch for changes in the html file and output a source map
  //so that instead of the main.js file receiving all the errors, it will
  //point to the original file
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  //these are loaders not plugins
  //so they go in their own section
  module: {
    rules: [
      {
        //regex to look for css files
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      //used for image parsing for html
      {
        test: /\.html$/i,
        loader:"html-loader",
      },
      //doing this because we are using html-loader
      //since images aren't javascript
      {
        //regex to look for certain file types
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        //type of asset to parse
        type: "asset/resource",
      },
    ],
  },
};
