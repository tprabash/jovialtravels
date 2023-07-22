/**
 * Main file of webpack config for RTL.
 */

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RtlCssPlugin = require('rtlcss-webpack-plugin');
const WebpackMessages = require("webpack-messages");
const del = require("del");

// theme name
const themeName = "nobleui";
// global variables
const rootPath = path.resolve(__dirname);
const distPath = rootPath + "/src/assets";

const entries = {
  "scss/style": "./src/assets/scss/style.scss"
};

const mainConfig = function() {
  return {
    mode: "development",
    stats: "errors-only",
    performance: {
      hints: false
    },
    entry: entries,
    output: {
      // main output path in assets folder
      path: distPath,
      // output path based on the entries' filename
      filename: "[name].js"
    },
    resolve: { extensions: [".scss"] },
    plugins: [
      // webpack log message
      new WebpackMessages({
        name: themeName,
        logger: str => console.log(`>> ${str}`)
      }),
      // create css file
      new MiniCssExtractPlugin({
        filename: "[name].css"
      }),
      new RtlCssPlugin({
        filename: "[name].rtl.css"
      }),
      {
        apply: compiler => {
          // hook name
          compiler.hooks.afterEmit.tap("AfterEmitPlugin", () => {
            (async () => {
              await del.sync(distPath + "/scss/style.js", { force: true });
              await del.sync(distPath + "/scss/style.css", { force: true });
            })();
          });
        }
      }
    ],
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        }
      ]
    }
  };
};

module.exports = function() {
  return [mainConfig()];
};
