/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./docs/**/*.{html,md,mdx,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        highlight: 'var(--vocs-color_infoBackground)'
      }
    },
  },
  plugins: [],
}