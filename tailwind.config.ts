import type { Config } from "tailwindcss";
import fluid, { extract } from "fluid-tailwind";

const config: Config = {
    darkMode: ["class"],
    content: {
    files: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract,
  },
  theme: {
  	extend: {
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'fit-content'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'fit-content'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		screens: {
  			xxl: '1440px',
  			xs: '360px'
  		},
  		fontSize: {
  			'c16-20': 'clamp(16px, 1.6vw,20px )',
  			'c12-16': 'clamp(12px, 1.25vw,16px )',
  			clg: 'clamp(24px, 3vw, 38px)',
  			cmd: 'clamp(18px, 2vw, 24px)',
  			'csm-md': 'clamp(14px, 2vw, 24px)',
  			csm: 'clamp(14px, 1.5vw, 18px)'
  		},
  		fontFamily: {
  			manrope: 'var(--font-manrope)'
  		},
  		colors: {
  			'red45-opaque': 'rgba(229, 0, 0, 0.15)',
  			black: {
  				'6': '#0F0F0F',
  				'8': '#141414',
  				'10': '#1A1A1A',
  				'12': '#1F1F1F',
  				'15': '#262626',
  				'20': '#333333',
  				'25': '#404040',
  				'30': '#4C4C4C'
  			},
  			gray: {
  				'60': '#999999',
  				'65': '#a6a6a6',
  				'70': '#b3b3b3',
  				'75': '#BFBFBF',
  				'90': '#e4e4e7',
  				'95': '#f1f1f3',
  				'97': '#f7f7f8',
  				'99': '#fcfcfd'
  			},
  			red: {
  				'45': '#E50000',
  				'50': '#FF0000',
  				'55': '#FF1919',
  				'60': '#FF3333',
  				'80': '#FF9999',
  				'90': '#FFCCCC',
  				'95': '#FFE5E5',
  				'99': '#FFFAFA'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [fluid, require("tailwindcss-animate")],
};
export default config;
