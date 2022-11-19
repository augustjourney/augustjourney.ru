module.exports = {
	mode: 'jit',
	important: true,
	content: [
		'./components/**/*.{vue,js}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './nuxt.config.{js,ts}'
	],
	theme: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}