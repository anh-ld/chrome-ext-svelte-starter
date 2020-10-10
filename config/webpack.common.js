const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const WriteFilePlugin = require('write-file-webpack-plugin')
const paths = require('./paths')

const extensions = ["jpg", "jpeg", "png", "gif", "eot", "otf", "svg", "ttf", "woff", "woff2"]
const template = paths.template + '/index.html'

module.exports = {
  entry: {
    popup: paths.popup,
    options: paths.options,
    background: paths.background
  },
  output: {
    path: paths.build,
    filename: "[name].bundle.js"
  },
  resolve: {
    alias: {
      Assets: paths.assets
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
        exclude: /node_modules/
      },
      {
        test: new RegExp('\.(' + extensions.join('|') + ')$'),
        loader: "file-loader?name=[name].[ext]",
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        exclude: /node_modules/
      },
      {
        test: /\.svelte$/,
				exclude: /node_modules/,
				use: {
					loader: 'svelte-loader',
					options: { emitCss: false, hotReload: false }
				}
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['build'], { root: paths.root }),
    new CopyWebpackPlugin([{
      from: 'src/manifest.json',
      transform: function (content, path) {
        return Buffer.from(JSON.stringify({
          description: process.env.npm_package_description,
          version: process.env.npm_package_version,
          ...JSON.parse(content.toString())
        }))
      }
    }]),
    new HtmlWebpackPlugin({ template, filename: "popup.html", chunks: ["popup"] }),
    new HtmlWebpackPlugin({ template, filename: "options.html", chunks: ["options"] }),
    new HtmlWebpackPlugin({ template, filename: "background.html", chunks: ["background"] }),
    new Dotenv(),
    new WriteFilePlugin()
  ]
};
