import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  optimizeDeps: {
    include: ['jquery']
  },
  optimizeDeps: {
    exclude: ['jquery'],
  },
  build: {
    rollupOptions: {
      external: ['jquery'],
      output: {
        globals: {
          jquery: '$',
        },
      },
    },
  },
});