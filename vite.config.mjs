import { defineConfig } from 'vite';
import inject from '@rollup/plugin-inject';

export default defineConfig({
  base: '/',
  // optimizeDeps: {
  //   include: ['jquery']
  // },
  plugins: [
    inject({
      $:'jquery',
      jQuery: 'jquery'
    })
  ],
  // resolve: {
  //   alias: {
  //     jquery: 'node_modules/jquery/dist/jquery' // or wherever your jQuery is located
  //   }
  // },
  // build: {
  //   rollupOptions: {
  //     external: ['jquery'],
  //     output: {
  //       globals: {
  //         jquery: '$',
  //       },
  //     },
  //   },
  // }
});