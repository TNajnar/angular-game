/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      onyx: '#393E41',
      timberWolf: '#D3D0CB',
      platinum: '#E7E5DF',
      keppel: '#44BBA4',
      saffron: '#E7BB41',
    },
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
