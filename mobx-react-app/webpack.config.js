const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
var SRC_DIR = path.resolve(__dirname, "src");
console.log("kjsdn", process.env.NODE_ENV);

module.exports = {
  context: __dirname,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle-[hash].js",
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
    inline: true,
    // contentBase: __dirname + "/dist",
    // port: 3000,
  },
  resolve: {
    // priority of lookup -> left to right
    modules: ["src", "node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_module/,
        use: "babel-loader",
      },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        use: "file-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              url: true,
            },
          },
          "resolve-url-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-resources-loader",
            options: {
              resources: ["src/assets/styles/base.scss"],
            },
          },
        ],
      },
      {
        test: /\.(jpeg|jpg|gif|png)$/i,
        loader: "file-loader",
      },
      {
        test: /\.(eot|otf|svg|ttf|woff|woff2)$/i,
        loader: "file-loader",
        // options: {
        //   name: "[name].[ext]",
        //   outputPath: "fonts/",
        //   publicPath: "fonts/",
        // },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      filename: "index.html",
    }),
  ],
};
