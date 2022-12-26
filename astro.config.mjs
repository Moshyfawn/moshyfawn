import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import vercel from '@astrojs/vercel/static'

// https://astro.build/config
export default defineConfig({
	experimental: {
		contentCollections: true
	},
	site: 'https://moshyfawn.dev',
	vite: {
		define: {
			__APP_VERSION__: JSON.stringify(process.env.npm_package_version)
		}
	},
	integrations: [
		sitemap(),
		tailwind(),
		mdx({
			extendPlugins: 'astroDefaults'
		})
	],
	output: 'server',
	adapter: vercel()
})
