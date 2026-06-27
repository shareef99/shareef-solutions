// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Static output for cheap hosting on Cloudflare Pages.
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
