import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://lucas-ak.github.io/',
  integrations: [tailwind()],
})