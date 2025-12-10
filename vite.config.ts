import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1500,

    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "react";
            if (id.includes("redux")) return "redux";
            return "vendor";
          }
        },
      },
    },

    minify: "esbuild",
    sourcemap: false,
  },
});
