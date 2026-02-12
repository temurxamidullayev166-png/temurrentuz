import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages config
export default defineConfig({
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],

  // SHU YERNI O'ZINGGA MOSLAB YOZASAN:
  // 1) USERNAME -> GitHub username
  // 2) REPO -> repo nomi
  site: "https://USERNAME.github.io",
  base: "/REPO",
});
