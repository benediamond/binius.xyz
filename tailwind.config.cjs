/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./docs/**/*.{html,md,mdx,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        highlight: 'var(--vocs-color_infoBackground)',
        offwhite: "#F7F6EC",
        green: '#ACE5B9',
        orange: '#F6C956',
        blue: '#7BCDE6',
        red: '#F45A2A',
        slate: "#1D272A",
        gunmetal: "#82827D"
      }
    },
  },
  plugins: [],
}
