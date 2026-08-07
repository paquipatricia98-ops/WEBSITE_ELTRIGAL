import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

export default defineConfig({
  adapter: node({
    mode: 'standalone'
  }),
  site: 'https://eltrigalbakery.com',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es',
          en: 'en',
        },
      },
    }),
  ],
  vite: {
    server: {
      proxy: {
        '/api/v1': {
          target: 'https://el-trigal-backend-nun9.onrender.com',
          changeOrigin: true,
          secure: true,
        },
      },
    },
    optimizeDeps: {
      exclude: ['@astrojs/telemetry'],
    },
  },
});
