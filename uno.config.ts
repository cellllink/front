// uno.config.ts
import { defineConfig, presetAttributify, transformerAttributifyJsx } from "unocss";
import { MetacssRules } from "./metacss.rule";

export default defineConfig({
  rules: MetacssRules,

  presets: [presetAttributify()],

  transformers: [transformerAttributifyJsx()],
});
