import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin(), // Inject CSS into JavaScript
  ],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "MyComponentLibrary",
      formats: ["es", "umd"],
      fileName: (format) => `willow.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    cssCodeSplit: true,
  },
});
