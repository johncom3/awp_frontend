import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

const allowedHosts = [
  "awpfrontend-production.up.railway.app",
  "shiftplan.borer-codeworks.com"
];

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: fileURLToPath(new URL("./index.html", import.meta.url)),
        admin: fileURLToPath(new URL("./admin.html", import.meta.url))
      }
    }
  },
  server: {
    host: "0.0.0.0",
    allowedHosts
  },
  preview: {
    host: "0.0.0.0",
    allowedHosts
  }
});
