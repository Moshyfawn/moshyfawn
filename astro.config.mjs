import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
	experimental: {
		contentCollections: true
	},
	site: 'https://moshyfawn.dev',
	integrations: [
		sitemap(),
		tailwind(),
		mdx({
			extendPlugins: 'astroDefaults'
		})
	]
})
