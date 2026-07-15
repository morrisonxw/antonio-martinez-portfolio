// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL ?? 'https://antonio-martinez-portfolio.vercel.app',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx(), sitemap(), react()]
});