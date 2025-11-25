// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://atahma.github.io',
  base: '/plur',
  // Only use base path in production (GitHub Pages)
});
