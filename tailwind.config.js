const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	colors: {
  		blue: '#011627',
  		lightBlue: '#2E86AB',
  		yellow: '#fff5a0',
  		whiteBlue: '#E3F2FD',
  		transparent: 'rgba( 0, 0, 0, 0 )'
  	},
  	extend: {
  		cursor: {
  			reticle: 'url(/target-design-svgrepo-com.svg), crosshair'
  		},
  		height: {
  			'custom-height': 'calc(100vh - 100px)'
  		},
  		animation: {
  			'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear'
  		},
  		keyframes: {
  			'border-beam': {
  				'100%': {
  					'offset-distance': '100%'
  				}
  			}
  		}
  	}
  },
  darkMode: ["class"],
  plugins: [nextui()],
}

