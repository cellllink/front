const webpack = require("webpack");
const { getProcessArgv, resolve } = require("./craco.util");

// 加载env配置到进程中
require("dotenv").config({
  path: resolve(".env"),
});

const { project = "oauth", port = 3000 } = getProcessArgv();

module.exports = {
  webpack: {
    alias: {
      "@share": resolve("src/share"),
    },

    configure: (webpackConfig, { env, paths }) => {
      paths.appIndexJs = resolve(`src/${project}/index.tsx`);
      webpackConfig.entry = resolve(`src/${project}/index.tsx`);
      webpackConfig.output = {
        ...webpackConfig.output,
        // path: __dirname + "/build/" + project,
        publicPath: "/celllink/oauth",
      };

      return {
        ...webpackConfig,
        plugins: [new webpack.ProgressPlugin(), ...webpackConfig.plugins],
      };
    },
  },
  devServer: {
    port,
  },
};
