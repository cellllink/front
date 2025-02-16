import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import UnoCSS from "unocss/vite";
import { createHtmlPlugin } from "vite-plugin-html";

const resolve = (dir) => path.join(__dirname, dir);

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

console.log(`即将打包：${project}，端口：${port}`);

export default defineConfig({
  server: {
    port,
    hmr: {
      // overlay: false,
    },
  },
  build: { rollupOptions: { input: "index.html", output: { dir: `dist/${project}` } } },
  resolve: { alias: { "@share": resolve("./src/share") } },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // or "modern"
      },
    },
  },
  plugins: [
    UnoCSS(),
    react(),
    createHtmlPlugin({
      minify: true,
      entry: `src/${project}/index.tsx`,
      template: "index.html",
      inject: { data: { title: project, injectScript: `<script type="module" src="/src/${project}/index.tsx"></script>` } },
    }),
  ],
});
