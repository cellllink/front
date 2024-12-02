import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import UnoCSS from "unocss/vite";

function getProcessArgv(): Record<string, any> {
  const options = {};
  process.argv
    .slice(2)
    .map((i) => i.split("="))
    .forEach(([option, value]) => (options[option.replace("--", "")] = value));
  return options;
}

const args = getProcessArgv();
const { port, project } = args;

console.log("即将打包：" + project);

// 复制 index.html
// TODO

export default defineConfig({
  server: {
    port,
  },
  build: {
    rollupOptions: {
      input: "index.html",
    },
  },
  resolve: {
    alias: {
      "@share": path.resolve(__dirname, "./src/share"),
    },
  },
  plugins: [UnoCSS(), react()],
});
