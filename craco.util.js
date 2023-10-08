const path = require("path");

function getProcessArgv() {
  const options = {};

  process.argv
    .slice(2)
    .map((i) => i.split("="))
    .forEach(([option, value]) => (options[option.replace("--", "")] = value));

  return options;
}

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  getProcessArgv,
  resolve,
};
