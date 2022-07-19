import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    host: true,
    watch: {
      //このファイルが変更された時はホットリロードされる。
      //vueファイルを変更しても効かない
      usePolling: true,
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
});
