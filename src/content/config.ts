import { z, defineCollection } from 'astro:content'

const blog = defineCollection({
	schema: {
		title: z.string(),
		description: z.string().optional(),
		date: z.string().transform(date => new Date(date)),
		ogImagePath: z.string().url().optional(),
		canonicalUrl: z.string().url().optional()
	}
})

export const collections = {
	blog
}
