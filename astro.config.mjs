// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  server: {
    host: true, // Escucha en todas las interfaces de red
    port: 4321
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
