import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, type Plugin} from 'vite';

const htmlPages: Record<string, string> = {
  '/impressum': '/impressum.html',
  '/datenschutz': '/datenschutz.html',
};

function cleanHtmlUrls(): Plugin {
  return {
    name: 'clean-html-urls',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const url = req.url?.split('?')[0] ?? '';
        const rewrite = htmlPages[url];
        if (rewrite) {
          req.url = rewrite + (req.url?.includes('?') ? req.url.slice(req.url.indexOf('?')) : '');
        }
        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), cleanHtmlUrls()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          impressum: path.resolve(__dirname, 'impressum.html'),
          datenschutz: path.resolve(__dirname, 'datenschutz.html'),
          notFound: path.resolve(__dirname, '404.html'),
        },
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
