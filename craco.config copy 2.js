const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir);
const { allSitePath, removeFromArrayByCondition, htmlPlugin, resolveApp, resolveModule } = require("./webpack.tools");

const buildEnv = process.env.IS_BUILD_ONLINE === "true" ? "online" : "sandbox";

const publicPathMap = {
  sandbox: "aaa",
  online: "bbb",
};

module.exports = {
  webpack: {
    alias: {
      "@share": resolve("src/share"),
    },
    configure: (webpackConfig, { env, paths }) => {
      const isDev = env === "development";
      // 修改基础paths
      paths.appHtml = resolveApp("src/views/index/index.html");
      paths.appIndexJs = resolveModule(resolveApp, "src/views/index/index", paths);

      // 修改入口
      webpackConfig.entry = allSitePath(isDev, paths);

      // 修改出口
      webpackConfig.output.filename = isDev ? "js/[name].bundle.js" : "js/[name].[contenthash:8].js";
      webpackConfig.output.publicPath = isDev ? "/" : publicPathMap[buildEnv] || "";

      // 删除插件 HtmlWebpackPlugin 和 ManifestPlugin
      let plugins = webpackConfig.plugins;
      removeFromArrayByCondition(plugins, (item) => {
        return item.constructor.name === "HtmlWebpackPlugin" || item.constructor.name === "ManifestPlugin";
      });
      // 增加插件
      plugins = [
        // html
        ...htmlPlugin(isDev, paths),
        // 环境变量
        new webpack.DefinePlugin({
          IS_BUILD_ONLINE: JSON.stringify(process.env.IS_BUILD_ONLINE),
        }),
        // 编译进度
        new webpack.ProgressPlugin(),
        ...plugins,
      ];
      webpackConfig.plugins = plugins;
      return webpackConfig;
    },
  },
  devServer: {
    port: 5000,
  },
};
