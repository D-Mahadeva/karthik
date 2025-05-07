/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4B5945',     // Dark green for header/footer
        'secondary': '#66785F',   // Medium green
        'tertiary': '#91AC8F',    // Light green for buttons/accents
        'quaternary': '#B2C9AD',  // Very light green for backgrounds
        'text-primary': '#333333',  // Dark text
        'text-secondary': '#666666', // Medium text
      },
    },
  },
  plugins: [],
}