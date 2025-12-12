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
        'de': {
          'black': '#0a0a0a',
          'dark': '#111111',
          'gray': '#1a1a1a',
          'muted': '#666666',
          'light': '#999999',
          'gold': '#d4af37',
          'gold-light': '#f4d03f',
          'green': '#2ecc71',
          'green-dark': '#27ae60',
        }
      },
      fontFamily: {
        'display': ['Syne', 'sans-serif'],
        'body': ['DM Sans', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
