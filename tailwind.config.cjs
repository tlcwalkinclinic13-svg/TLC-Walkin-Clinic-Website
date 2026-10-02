/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './App.tsx', './components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        primary: { DEFAULT: '#D32F2F', dark: '#B71C1C', light: '#FFEBEE' },
        dark: { DEFAULT: '#111111', lighter: '#1F1F1F' },
      },
      borderRadius: { '3xl': '24px' },
    },
  },
};
