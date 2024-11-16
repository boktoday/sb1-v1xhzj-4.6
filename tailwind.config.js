/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'ken-burns': 'ken-burns 20s infinite alternate',
        'fade-in': 'fade-in 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};