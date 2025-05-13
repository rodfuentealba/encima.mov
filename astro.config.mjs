import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  server: {
    devOptions: {
      open: false, // Evita abrir automáticamente el navegador
      disableDevTools: true // Desactiva la barra de herramientas de desarrollo
    }
  },

  vite: {
    plugins: [tailwindcss()]
  }
});