import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from '../config'

export const get = async () => {
	const blogPosts = await getCollection('blog')

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: SITE_URL,
		items: blogPosts.map(post => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.date,
			link: 'blog/' + post.slug
		}))
	})
}
