import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  build: {
    inlineStylesheets: "always",
    assets: "_assets",
  },
  compressHTML: true,
});
