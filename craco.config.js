const webpack = require("webpack");
const { getProcessArgv, resolve } = require("./craco.util");

const { port = 3000, project = "oauth" } = getProcessArgv();

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
