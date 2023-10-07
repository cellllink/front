const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const glob = require("glob");

const appDirectory = fs.realpathSync(process.cwd());

const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

// 可以通过命令控制只打包哪些模块
function getEntryFilesFormCommandLine(paths) {
  const argvs = process.argv;
  const flagIndex = argvs.indexOf("--page");
  let entryFiles = null;
  if (flagIndex !== -1) {
    entryFiles = argvs.slice(flagIndex + 1).map((item) => {
      return `${paths.appSrc}/views/${item}`;
    });
  }
  return entryFiles;
}

// 查看文件是否存在
// 支持文件的后缀类型为 paths.moduleFileExtensions
function resolveModule(resolveFn, filePath, paths) {
  const extension = paths.moduleFileExtensions.find((extension) => fs.existsSync(resolveFn(`${filePath}.${extension}`)));
  if (extension) {
    return resolveFn(`${filePath}.${extension}`);
  }
  // 默认js
  return resolveFn(`${filePath}.js`);
}

// 根据指定条件从数组中删除某一项
// 用于删除webpack plugins中原有插件
function removeFromArrayByCondition(
  arr,
  condition,
  setValue = (arr3, ii, vv) => {
    arr3[ii] = vv;
  }
) {
  condition = !condition || typeof condition !== "function" ? () => false : condition;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (condition(arr[i], i)) {
      count++;
    } else {
      count > 0 && setValue(arr, i - count, arr[i]);
    }
  }
  for (let i = 0; i < count; i++) {
    arr.pop();
  }
  return arr;
}

// 多页面工具函数, 拿到所有的入口文件
function allSitePath(isEnvDevelopment, paths) {
  let entryFiles = getEntryFilesFormCommandLine(paths);
  // !entryFiles && (entryFiles = glob.sync(paths.appSrc + "/*"));
  !entryFiles && (entryFiles = ["/oauth"]);

  const map = {};
  entryFiles.forEach((item) => {
    const filename = item.substring(item.lastIndexOf("/") + 1);
    // const filePath = `${item}/${filename}.tsx`;
    const filePath = resolveModule(resolveApp, `src/${filename}`, paths);
    map[filename] = ["react-hot-loader/patch", isEnvDevelopment && require.resolve("react-dev-utils/webpackHotDevClient"), filePath].filter(
      Boolean
    );
  });
  return map;
}

// 重写htmlPlugin，返回所有模块的hmlt plugin
function htmlPlugin(isEnvDevelopment, paths) {
  const fileNameLists = Object.keys(allSitePath(isEnvDevelopment, paths));

  // eslint-disable-next-line prefer-const
  let arr = [];
  fileNameLists.forEach((item) => {
    const filename = item.substring(item.lastIndexOf("/") + 1);

    arr.push(
      new HtmlWebpackPlugin(
        Object.assign(
          {},
          {
            inject: true,
            filename: item + ".html",
            chunks: [item],
            template: path.resolve(paths.appSrc, `views/${filename}/${filename}.html`),
          },
          isEnvDevelopment
            ? undefined
            : {
                minify: {
                  removeComments: true,
                  collapseWhitespace: true,
                  removeRedundantAttributes: true,
                  useShortDoctype: true,
                  removeEmptyAttributes: true,
                  removeStyleLinkTypeAttributes: true,
                  keepClosingSlash: true,
                  minifyJS: true,
                  minifyCSS: true,
                  minifyURLs: true,
                },
              }
        )
      )
    );
  });
  return arr;
}

module.exports = {
  allSitePath,
  removeFromArrayByCondition,
  htmlPlugin,
  resolveApp,
  resolveModule,
};
