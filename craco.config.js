const CracoLessPlugin = require("craco-less");
const webpack = require("webpack");
const { allSitePath, removeFromArrayByCondition, htmlPlugin, resolveApp, resolveModule } = require("./webpack.tools");

// 是否是线上环境
const isProd = process.env.NODE_ENV === "production";

// 线上环境又分沙盒和正式线上
const buildEnv = process.env.IS_BUILD_ONLINE === "true" ? "online" : "sandbox";

const publicPathMap = {
  sandbox: "aaa",
  online: "bbb",
};

// env 配置
// env设置必须放到 webpack 配置合并之前

// jsx
process.env.DISABLE_NEW_JSX_TRANSFORM = "true";
if (isProd) {
  // 关掉webpack内联运行时的脚本
  process.env.INLINE_RUNTIME_CHUNK = "false";

  // 关掉souremap
  process.env.GENERATE_SOURCEMAP = "false";
}

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      const isDev = env === "development";
      // 修改基础paths
      paths.appHtml = resolveApp("public/index.html");
      paths.appIndexJs = resolveModule(resolveApp, "src/index", paths);

      // 修改入口
      webpackConfig.entry = allSitePath(isDev, paths);

      console.log(webpackConfig.entry, paths);

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
  babel: {
    plugins: [
      "babel-plugin-transform-typescript-metadata",
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      ["@babel/plugin-proposal-class-properties", { loose: true }],
      "react-hot-loader/babel",
    ],
    presets: ["@babel/preset-typescript"],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};

// console.log(module.exports);
