import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#d8eeff',
          200: '#bfe2ff',
          300: '#8dd0ff',
          400: '#4db7ff',
          500: '#1d9cf6',
          600: '#0a7ed5',
          700: '#0c63a7',
          800: '#124f8b',
          900: '#153f70',
        },
      },
      boxShadow: {
        soft: '0 20px 45px rgba(13, 31, 53, 0.18)',
      },
    },
  },
  plugins: [],
};

export default config;
