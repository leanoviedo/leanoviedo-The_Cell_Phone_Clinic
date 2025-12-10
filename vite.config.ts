import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // Aumenta límite del warning sin desactivarlo
    chunkSizeWarningLimit: 1500,

    // Code splitting automático para reducir bundle
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Separa librerías grandes
          if (id.includes("node_modules")) {
            if (id.includes("@mui")) return "mui";
            if (id.includes("react")) return "react";
            if (id.includes("redux")) return "redux";
            return "vendor";
          }
        },
      },
    },

    // Performance extra
    minify: "esbuild",
    sourcemap: false,
  },
});
