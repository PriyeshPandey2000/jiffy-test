/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '5/6': '83.333333%',
        '6/7': '85.714286%',
        '7/8': '87.5%',
        '8/9': '88.888889%',
      },
    },
  },
  plugins: [],
}

