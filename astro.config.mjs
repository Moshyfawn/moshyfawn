import { defineConfig } from 'astro/config'

import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import rehypeExternalLinks from 'rehype-external-links'

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
	markdown: {
		rehypePlugins: [
			rehypeSlug,
			[
				rehypeAutolinkHeadings,
				{
					behavior: 'wrap',
					properties: { class: 'no-underline' },
					test: ['h2', 'h3', 'h4', 'h5', 'h6']
				}
			],
			[
				rehypeExternalLinks,
				{
					rel: [],
					content: {
						type: 'text', value: ' ↗'
					}
				}
			]
		]
	},
	integrations: [
		sitemap(),
		tailwind()
	]
})
