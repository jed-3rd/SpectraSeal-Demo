import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://jed-3rd.github.io',
  base: '/SpectraSeal-Demo',
});
