/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Poppins', 'sans-serif']
		},
		extend: {
			colors: {
				darkPurple: {
					800: '#1D1932',
					900: '#131129'
				}
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
}
