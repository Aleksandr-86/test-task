/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        rainbow: {
          '0%': { color: 'hsl(0, 100%, 60%)' },
          '8%': { color: 'hsl(30, 100%, 50%)' },
          '16%': { color: 'hsl(60, 100%, 50%)' },
          '24%': { color: 'hsl(90, 100%, 50%)' },
          '33%': { color: 'hsl(120, 100%, 50%)' },
          '41%': { color: 'hsl(150, 100%, 50%)' },
          '49%': { color: 'hsl(180, 100%, 50%)' },
          '58%': { color: 'hsl(210, 100%, 50%)' },
          '66%': { color: 'hsl(240, 100%, 70%)' },
          '74%': { color: 'hsl(270, 100%, 50%)' },
          '83%': { color: 'hsl(300, 100%, 50%)' },
          '91%': { color: 'hsl(330, 100%, 70%)' },
          '100%': { color: 'hsl(0, 100%, 60%)' },
        },
      },
    },
  },
};
