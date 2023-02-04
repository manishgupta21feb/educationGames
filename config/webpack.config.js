const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const env = require("./env");
const AudioListPlugin = require("./precache-audios");
const ImageListPlugin = require("./precache-images");
const VideoListPlugin = require("./precache-videos");

const ACTIVITY_NAME = env.name;
const ACTIVITY_LANG = env.lang;
const ACTIVITY_CONFIG = require(`../src/${ACTIVITY_NAME}/config.json`);
ACTIVITY_CONFIG.name = ACTIVITY_NAME;
ACTIVITY_CONFIG.lang = ACTIVITY_LANG;

module.exports = () => {
  return {
    entry: [`./src/${ACTIVITY_CONFIG.name}/index.js`],
    output: {
      path: path.resolve("dist", ACTIVITY_CONFIG.name),
      filename: "[name].[contenthash].js",
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [path.join(process.cwd(), "dist/**/*")],
      }),
      new webpack.DefinePlugin({
        ACTIVITY_CONFIG: JSON.stringify(ACTIVITY_CONFIG),
      }),
      new HtmlWebpackPlugin({
        title: "Player HTML",
        template: `./src/${ACTIVITY_CONFIG.name}/index.html`,
        filename: "index.html",
        templateParameters: {
          ACTIVITY_CONFIG,
          PRECACHE_IMAGES: true,
          PRECACHE_AUDIOS: true,
          PRECACHE_VIDEOS: true,
        },
      }),
      new MiniCssExtractPlugin({
        filename: `[name].css`,
        chunkFilename: "[id].css",
      }),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery'",
        "window.$": "jquery",
        EventManager: path.resolve("./src/app/events/manager.js"),
        TincanService: path.resolve("./src/app/tincan/service.js"),
        TincanManager: path.resolve("./src/app/tincan/manager.js"),
      }),
      new AudioListPlugin(),
      new ImageListPlugin(),
      new VideoListPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.js|.jsx?$/,
          exclude: /(node_modules)/,
          use: [
            {
              loader: "babel-loader",
            },
          ],
        },
        {
          test: /\.s?[ac]ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: "css-loader",
            },
            {
              loader: "sass-loader",
            },
          ],
        },
        {
          test: /\.(ttf|otf|eot|svg|woff|woff2)$/,
          loader: "file-loader",
          include: [
            path.resolve(__dirname, "../src/app/assets/fonts/"),
            path.resolve(
              __dirname,
              `../src/${ACTIVITY_CONFIG.name}/assets/fonts/`
            ),
          ],
          options: {
            name: "fonts/[name].[ext]",
          },
        },
        {
          test: /\.(svg|bmp|cur|gif|icns|ico|jpe?g|JPE?G|png|PNG|psd|tiff|webp|dds)$/,
          include: [
            path.resolve(__dirname, "../src/app/assets/images/"),
            path.resolve(
              __dirname,
              `../src/${ACTIVITY_CONFIG.name}/assets/images/`
            ),
          ],
          loader: "file-loader",
          options: {
            name: "assets/images/[name].[ext]",
          },
        },
        {
          test: /\.(mp3|wav)$/,
          loader: "file-loader",
          include: [
            path.resolve(__dirname, "../src/app/assets/audios/"),
            path.resolve(
              __dirname,
              `../src/${ACTIVITY_CONFIG.name}/assets/audios/`
            ),
          ],
          options: {
            name: "assets/audios/[name].[ext]",
          },
        },
        {
          test: /\.(mp4)$/,
          loader: "file-loader",
          include: [
            path.resolve(__dirname, "../src/app/assets/videos/"),
            path.resolve(
              __dirname,
              `../src/${ACTIVITY_CONFIG.name}/assets/videos/`
            ),
          ],
          options: {
            name: "assets/videos/[name].[ext]",
          },
        },
      ],
    },
  };
};
