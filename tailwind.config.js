/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}', // все JS/TS/JSX/TSX файлы в src и вложенных папках
	],
	theme: {
		extend: {
			fontFamily: {
				tt: ['TTCommons', 'sans-serif'],
				akira: ['Akira', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
