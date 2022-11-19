export default defineNuxtConfig({
	ssr: true,
	modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
	css: ['~/assets/css/main.css'],
	build: {
		postcss: {
			postcssOptions: {
				plugins: {
					tailwindcss: {},
					autoprefixer: {},
				},
			},
		},
	}
})