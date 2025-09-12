import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  base: command === "build" ? "/f8-zoom-day37/" : "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // alias @ trỏ vào thư mục src
    },
  },
}));
