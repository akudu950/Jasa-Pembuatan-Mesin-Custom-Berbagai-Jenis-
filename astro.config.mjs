import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://akudu950.github.io',
  base: '/Jasa-Pembuatan-Mesin-Custom-Berbagai-Jenis-',

  trailingSlash: 'always',

  integrations: [
    sitemap(),
  ],
});
