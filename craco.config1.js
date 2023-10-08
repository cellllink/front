const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir);
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { resolveApp, resolveModule, removeFromArrayByCondition } = require("./webpack.tools");

module.exports = {
  webpack: {
    alias: {
      "@share": resolve("src/share"),
    },

    configure: (webpackConfig, { env, paths }) => {
      // 修改基础paths
      paths.appHtml = resolveApp("public/index.html");
      paths.appIndexJs = resolveModule(resolveApp, "src/index", paths);

      // 修改入口
      webpackConfig.entry = {
        oauth: "./src/oauth/oauth",
        space: "./src/space/space",
      };

      // 修改出口
      webpackConfig.output.filename = "js/[name].bundle.js";
      webpackConfig.output.publicPath = "/";

      // 删除插件 HtmlWebpackPlugin 和 ManifestPlugin
      let plugins = webpackConfig.plugins;
      removeFromArrayByCondition(plugins, (item) => {
        return item.constructor.name === "HtmlWebpackPlugin" || item.constructor.name === "ManifestPlugin";
      });

      // 增加插件
      plugins = [
        new HtmlWebPackPlugin({
          inject: true,
          filename: "oauth.html",
          chunks: ["oauth"],
          template: resolveApp("public/index.html"),
        }),
        new HtmlWebPackPlugin({
          inject: true,
          filename: "oauth.html",
          chunks: ["space"],
          template: resolveApp("public/index.html"),
        }),
        ...plugins,
      ];
      webpackConfig.plugins = plugins;
      console.log(webpackConfig);
      return webpackConfig;
    },
  },
  // devServer: {
  //   port: 5000,
  // },
};
