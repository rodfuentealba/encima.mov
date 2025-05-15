import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://encima.mov',
  output: 'static',
  server: {
    devOptions: {
      open: false,
      disableDevTools: true
    }
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});
