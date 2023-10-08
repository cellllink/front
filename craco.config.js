const webpack = require("webpack");
const { getProcessArgv, resolve } = require("./craco.util");

// 加载env配置到进程中
require("dotenv").config({
  path: resolve(".env"),
});

const { port = 3000, project = "oauth" } = getProcessArgv();
const PROJECT = process.env.REACT_APP_SERVER_PROJECT || project;
const PORT = process.env.REACT_APP_SERVER_PORT || port;

module.exports = {
  webpack: {
    alias: {
      "@share": resolve("src/share"),
    },

    configure: (webpackConfig, { env, paths }) => {
      paths.appIndexJs = resolve(`src/${PROJECT}/index.tsx`);
      webpackConfig.entry = resolve(`src/${PROJECT}/index.tsx`);

      return {
        ...webpackConfig,
        plugins: [new webpack.ProgressPlugin(), ...webpackConfig.plugins],
      };
    },
  },
  devServer: {
    port: PORT,
  },
};
