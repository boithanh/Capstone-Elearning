/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      screens: {
        'xs': '320px',
      },
      textAlign: {
        'webkit-center': '-webkit-center',
        'webkit-left': '-webkit-left',
        'webkit-right': '-webkit-right',
      },
    },
  },
  plugins: [],
}