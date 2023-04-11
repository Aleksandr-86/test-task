/// <reference types="vitest" />
import { fileURLToPath, URL } from 'node:url';
process.env.BROWSER = 'chrome';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    open: '/',
    port: 3000,
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    coverage: {
      provider: 'c8',
      reporter: 'html',
      reportsDirectory: 'tests/coverage',
    },
  },
});
