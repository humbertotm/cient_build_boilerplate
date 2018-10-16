const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.export = {
  mode: "development",
  entry: {
    main: "src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/"
  },
  devServer: {
    publicPath: path.join(__dirname, "/"),
    contentBase: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        use: [
          { loader: "@babel/core" },
          { loader: "babel-loader" },
          { loader: "@babel/preset-env" },
          { loader: "@babel/preset-react" }
        ]
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      },
      {
        test: /\.scss?$/,
        include: [
          // path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, "styles")
        ],
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: "SomeShit",
      template: "./src/index.html"
    })
  ]
}
