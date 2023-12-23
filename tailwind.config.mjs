/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'raleway': ["Raleway","sans-serif"]
			},
			colors: {
				"mentor_red": "#DC1C2B"
			}
		},
	},
	plugins: [],
}
