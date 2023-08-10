/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Roboto", "sans-serif"],
			},
			colors: {
				mint: "#00BE92",
				mintdarker: "#00a17b",
			},
		},
	},
	plugins: [],
};
