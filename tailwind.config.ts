import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'nero': '#232323',
        'sabbia': '#D4C4A8',
        'sabbia-dark': '#B8A080',
        'offwhite': '#FAFAF8',
        'sand-bg': '#F0EBE3',
        'grigio': '#666',
        'grigio-light': '#888',
        'border': '#E8E4DE',
      },
      fontFamily: {
        'serif': ['Cinzel', 'serif'],
        'sans': ['DM Sans', 'sans-serif'],
        'ui': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
