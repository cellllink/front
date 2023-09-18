const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    alias: {
      "@share": resolve("src/share"),
    },
    // configure: (webpackConfig, { env, paths }) => {
    //   paths.appIndexJs = resolve("src/oauth.tsx");
    //   paths.appHtml = resolve("/public/index.html");
    //   webpackConfig.entry = {
    //     index: resolve("src/oauth.js"),
    //   };
    //   console.log(webpackConfig);
    //   return webpackConfig;
    // },
  },
  // devServer: {
  //   port: 5000,
  // },
};
