/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      black: '#000',
      onyx: '#393E41',
      'onyx-darker': '#2E3336',
      'dark': '#24292C',
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
