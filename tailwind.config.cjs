/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ros: {
          blue: '#005097',
          'blue-dark': '#003C72',
          'blue-tint': '#E8EFF6',
          orange: '#ED6C0C',
          'orange-dark': '#C6570A',
          'orange-tint': '#FCEADA',
          ink: '#13223B',
          slate: '#556075',
          bg: '#EEF1F6',
        },
      },
    },
  },
  plugins: [],
};
