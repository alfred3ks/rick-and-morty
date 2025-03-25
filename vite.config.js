import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        {
          src: 'dist/index.html',
          dest: '.', // copia en la raíz
          rename: '404.html',
        },
      ],
      watch: {}, // evita errores al usar "vite" en modo dev
    }),
  ],
  base: '/rick-and-morty/',
});
