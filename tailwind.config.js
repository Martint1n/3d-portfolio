const {nextui, colors} = require("@nextui-org/react");

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
  		blue: '#a7d8ff',
  		lightBlue: '#2E86AB',
  		whiteBlue: '#E3F2FD',
  		transparent: 'rgba( 0, 0, 0, 0 )',
		white: "#f4f4f4",
		black: "#1e1e2f",
		blueCSS: "#a7d8ff",
		orangeHTML: "#ffb3a7",
		yellowJs: "#ffd699",
		greenMongo: "#9eed9d",
		purpleRedux: "#c88eff",
		neonBlue: "#00bcd4",
		neonOrange: "#ff7f00",
		pastelRed: "#ff7a94",
		neonRed: "#ff4f6c",
		neonYellow: "#faf200",
		neonPurple: "#9b4dff",
		red:'#f00'
	},
  	extend: {
		backgroundImage:{
			'combat-gradient': 'linear-gradient(135deg, #0000B0 , #001A66)'
		},
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
  plugins: [nextui({
	themes: {
		dark: {
			colors: {
				background: '#1e1e2f',
			}
		},
	}
  })],
}

