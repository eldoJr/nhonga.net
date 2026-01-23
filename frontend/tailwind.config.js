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
          1000: '#06210D',
          1500: '#001203',
        },
        primary: '#6AE589',
        secondary: '#429757'
      },
      fontFamily: {
        'gt-walsheim': ['GT Walsheim', 'system-ui', '-apple-system', 'sans-serif'],
        'montserrat': ['Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
        'sans': ['GT Walsheim', 'system-ui', '-apple-system', 'sans-serif'],
        'heading': ['GT Walsheim', 'system-ui', '-apple-system', 'sans-serif'],
        'body': ['Montserrat', 'system-ui', '-apple-system', 'sans-serif']
      }
    },
  },
  plugins: [],
}

