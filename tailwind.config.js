/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./src/**/*.{vue,js}', './index.html'],
  theme: {
    extend: {
      colors: {
        body: '#1B1B1E',
        success: '#C6EC92',
      },
    },
  },
  plugins: [],
}
