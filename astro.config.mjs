import { defineConfig } from 'astro/config'
import remarkEmoji from 'remark-emoji'

export default defineConfig({
  site: 'https://lucasak.dev',
  markdown: {
    remarkPlugins: [remarkEmoji],
  },
})
