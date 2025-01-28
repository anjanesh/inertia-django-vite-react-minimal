import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: resolve("./app/static/src"),
  base: "/static/",
  plugins: [react()],
  build: {
    outDir: resolve("./app/static/dist"),
    assetsDir: "",
    manifest: "manifest.json",
    emptyOutDir: true,
    rollupOptions: {
      // Overwrite default .html entry to main.tsx in the static directory
      input: resolve("./app/static/src/main.tsx"),
    },
  },
});
