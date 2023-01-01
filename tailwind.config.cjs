const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'media',
	content: ['./src/**/*.{astro,md}'],
	theme: {
		extend: {
			typography: () => ({
				DEFAULT: {
					css: {
						'--tw-prose-body': colors.zinc[900],
						'--tw-prose-headings': colors.zinc[900],
						'--tw-prose-lead': colors.zinc[900],
						'--tw-prose-links': colors.zinc[900],
						'--tw-prose-bold': colors.zinc[900],
						'--tw-prose-counters': colors.zinc[900],
						'--tw-prose-bullets': colors.zinc[900],
						'--tw-prose-hr': colors.zinc[600],
						'--tw-prose-quotes': colors.zinc[900],
						'--tw-prose-quote-borders': colors.zinc[900],
						'--tw-prose-captions': colors.zinc[900],
						'--tw-prose-code': colors.zinc[900],
						'--tw-prose-pre-code': colors.zinc[900],
						'--tw-prose-pre-bg': colors.gray[100],
						'--tw-prose-th-borders': colors.zinc[900],
						'--tw-prose-td-borders': colors.zinc[900],
						'--tw-prose-invert-body': colors.neutral[50],
						'--tw-prose-invert-headings': colors.neutral[50],
						'--tw-prose-invert-lead': colors.neutral[50],
						'--tw-prose-invert-links': colors.neutral[50],
						'--tw-prose-invert-bold': colors.neutral[50],
						'--tw-prose-invert-counters': colors.neutral[50],
						'--tw-prose-invert-bullets': colors.neutral[50],
						'--tw-prose-invert-hr': colors.neutral[300],
						'--tw-prose-invert-quotes': colors.neutral[50],
						'--tw-prose-invert-quote-borders': colors.neutral[50],
						'--tw-prose-invert-captions': colors.neutral[50],
						'--tw-prose-invert-code': colors.neutral[50],
						'--tw-prose-invert-pre-code': colors.neutral[50],
						'--tw-prose-invert-pre-bg': colors.zinc[900],
						'--tw-prose-invert-th-borders': colors.neutral[50],
						'--tw-prose-invert-td-borders': colors.neutral[50]
					}
				}
			})
		},
		textColor: {
			primary: {
				dark: colors.neutral[50],
				light: colors.zinc[900]
			},
			secondary: {
				dark: colors.neutral[300],
				light: colors.zinc[600]
			}
		},
		backgroundColor: {
			light: colors.gray[100],
			dark: colors.zinc[900]
		}
	},
	plugins: [require('@tailwindcss/typography')]
}
