import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: '/GUTID_Web/',
  server: {
    open: true
  },
  build: {
    outDir: "dist"
  }
});
