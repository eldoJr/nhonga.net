/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nhonga: {
          50: '#F0FCF3',
          100: '#E1FAE7',
          150: '#D2F7DC',
          200: '#C3F5D0',
          300: '#A6EFB8',
          400: '#88EAA1',
          500: '#6AE589',
          600: '#56BE70',
          700: '#429757',
          800: '#2E6F3F',
          850: '#245C32',
          900: '#1A4826',
          950: '#103519',
        },
        primary: '#6AE589',
        secondary: '#429757'
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
        'sans': ['Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
        'heading': ['Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
        'body': ['Montserrat', 'system-ui', '-apple-system', 'sans-serif']
      },
      keyframes: {
        'scroll-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'scroll-right': {
          from: { transform: 'translateX(calc(-100% - var(--gap)))' },
          to: { transform: 'translateX(0)' },
        },
        'orb-trace': {
          '0%':   { top: '0%',   left: '0%' },
          '25%':  { top: '0%',   left: '100%' },
          '50%':  { top: '100%', left: '100%' },
          '75%':  { top: '100%', left: '0%' },
          '100%': { top: '0%',   left: '0%' },
        },
      },
      animation: {
        'scroll-left': 'scroll-left var(--duration, 25s) linear infinite',
        'scroll-right': 'scroll-right var(--duration, 25s) linear infinite',
        'orb-trace': 'orb-trace 10s linear infinite',
      },
    },
  },
  plugins: [],
}

