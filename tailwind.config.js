/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '576px',
        md: '768px',
        desktop: '1224px',
      },
    },
  },
  plugins: [],
}
