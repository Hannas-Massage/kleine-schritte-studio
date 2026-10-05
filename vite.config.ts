import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, type Plugin} from 'vite';
import {buildHasOfferCatalog} from './src/data/content';

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

function syncOfferCatalogFromContent(): Plugin {
  return {
    name: 'sync-offer-catalog-from-content',
    transformIndexHtml(html, ctx) {
      const file = (ctx.filename || ctx.path || '').replace(/\\/g, '/');
      const isHome =
        file.endsWith('/index.html') ||
        ctx.path === '/' ||
        ctx.path === '/index.html';
      if (!isHome) {
        return html;
      }

      return html.replace(
        /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
        (_match, jsonText: string) => {
          const data = JSON.parse(jsonText);
          data.hasOfferCatalog = buildHasOfferCatalog();
          return `<script type="application/ld+json">\n${JSON.stringify(data, null, 2)}\n    </script>`;
        },
      );
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), cleanHtmlUrls(), syncOfferCatalogFromContent()],
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
