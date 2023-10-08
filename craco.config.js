const webpack = require("webpack");
const { getProcessArgv, resolve } = require("./craco.util");

// 加载env配置到进程中
require("dotenv").config({
  path: resolve("./.env"),
});

const { port = 3000, project = "oauth", REACT_APP_PROJECT } = getProcessArgv();
console.log(process.env.REACT_APP_PROJECT);

module.exports = {
  webpack: {
    alias: {
      "@share": resolve("src/share"),
    },

    configure: (webpackConfig, { env, paths }) => {
      paths.appIndexJs = resolve(`src/${project}/index.tsx`);
      webpackConfig.entry = resolve(`src/${project}/index.tsx`);

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
