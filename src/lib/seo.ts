// TODO: look into https://github.com/jonasmerlin/astro-seo#readme
type PageMeta = {
	title: string
	description?: string
	canonicalUrl?: string
}

type PageOgMeta = {
	title: string
	description?: string
	type: 'website'
	url?: string
	image?: string
	imageAlt?: string
	imageWidth?: string
	imageHeight?: string
}

type PageTwitterMeta = {
	title: string
	description?: string
	card: 'summary_large_image'
	site?: string
	creator?: string
	image?: string
	imageAlt?: string
}

type BlogPostOgMeta = {
	title: string
	description?: string
	type: 'article'
	url?: string
	author?: string

	publishDate: string
	image?: string
	imageAlt?: string
	imageWidth?: string
	imageHeight?: string
}

type BlogPostTwitterMeta = {
	title: string
	description?: string
	card: 'summary_large_image'
	site?: string
	creator?: string
	image?: string
	imageAlt?: string
}

type GetPageMetaProps = {
	title: string
	description: string
	baseUrl?: string
	ogImageAbsoluteUrl?: string
	ogImageAltText?: string
	ogImageWidth?: number
	ogImageHeight?: number
	siteOwnerTwitterHandle?: string
	contentAuthorTwitterHandle?: string
}

export function getPageMeta({
	title,
	description,
	baseUrl,
	ogImageAbsoluteUrl,
	ogImageAltText,
	ogImageWidth,
	ogImageHeight,
	siteOwnerTwitterHandle,
	contentAuthorTwitterHandle
}: GetPageMetaProps) {
	const meta: PageMeta = { title, description }

	const og: PageOgMeta = {
		title,
		description,
		type: 'website',
		url: baseUrl,
		image: ogImageAbsoluteUrl,
		imageAlt: ogImageAltText,
		...(ogImageWidth && {
			ogImageWidth
		}),
		...(ogImageHeight && {
			ogImageHeight
		})
	}

	const twitter: PageTwitterMeta = {
		title,
		description,
		card: 'summary_large_image',
		site: siteOwnerTwitterHandle,
		creator: contentAuthorTwitterHandle || siteOwnerTwitterHandle,
		image: ogImageAbsoluteUrl,
		imageAlt: ogImageAltText
	}

	return {
		meta,
		og,
		twitter
	}
}

type GetBlogPostMetaProps = {
	title: string
	description: string
	canonicalUrl?: string
	baseUrl?: string
	authorName?: string
	publishDate: string
	ogImageAbsoluteUrl?: string
	ogImageAltText?: string
	ogImageWidth?: number
	ogImageHeight?: number
	siteOwnerTwitterHandle?: string
	contentAuthorTwitterHandle?: string
}

export function getBlogPostMeta({
	title,
	description,
	canonicalUrl,
	baseUrl,
	authorName,
	publishDate,
	ogImageAbsoluteUrl,
	ogImageAltText,
	ogImageWidth,
	ogImageHeight,
	siteOwnerTwitterHandle,
	contentAuthorTwitterHandle
}: GetBlogPostMetaProps) {
	const meta: PageMeta = {
		title,
		description,
		canonicalUrl
	}

	const og: BlogPostOgMeta = {
		title,
		description,
		type: 'article',
		url: baseUrl,
		author: authorName,
		publishDate: publishDate,
		image: ogImageAbsoluteUrl,
		imageAlt: ogImageAltText,
		...(ogImageWidth && {
			imageWidth: ogImageWidth.toString()
		}),
		...(ogImageHeight && {
			imageHeight: ogImageHeight.toString()
		})
	}

	const twitter: BlogPostTwitterMeta = {
		title,
		description,
		card: 'summary_large_image',
		site: siteOwnerTwitterHandle,
		creator: contentAuthorTwitterHandle || siteOwnerTwitterHandle,
		image: ogImageAbsoluteUrl,
		imageAlt: ogImageAltText
	}

	return {
		meta,
		og,
		twitter
	}
}
