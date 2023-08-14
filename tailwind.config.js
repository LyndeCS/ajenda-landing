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
			boxShadow: {
				full: "0 0 10px 2px rgb(0 0 0 / 0.1), 0 0 20px 5px rgb(0 0 0 / 0.1)",
			},
		},
	},
	plugins: [],
};
