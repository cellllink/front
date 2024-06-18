import { defineConfig } from "vite";
import path from "path";
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
const { port, project } = getProcessArgv();

console.log("即将打包：" + project);

export default defineConfig({
  server: {
    port,
    open: `${project}.html`,
  },
  build: {
    rollupOptions: {
      input: `src/${project}/index.html`,
    },
  },
  resolve: {
    alias: {
      "@share": path.resolve(__dirname, "./src/share"),
    },
  },
  plugins: [UnoCSS(), react()],
});
