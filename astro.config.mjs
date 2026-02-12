import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "static",
  vite: { plugins: [tailwindcss()] },
  integrations: [react()],

  // USERNAME va REPO ni o'zingnikiga yoz
  site: "https://USERNAME.github.io",
  base: "/REPO",
});
