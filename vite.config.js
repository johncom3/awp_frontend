import { defineConfig } from "vite";

const allowedHosts = [
  "awpfrontend-production.up.railway.app",
  "shiftplan.borer-codeworks.com"
];

export default defineConfig({
  server: {
    host: "0.0.0.0",
    allowedHosts
  },
  preview: {
    host: "0.0.0.0",
    allowedHosts
  }
});
