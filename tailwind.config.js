/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Poppins', 'sans-serif']
		},
		extend: {
			backgroundImage: {
				'discover-nft': 'url("@/static/discover.png")'
			},
			colors: {
				'purple-main': '#6F4FF2',
				'red-main': '#DC3546',
				darkPurple: {
					800: '#1D1932',
					900: '#131129'
				}
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
}
