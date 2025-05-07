/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        // New color palette based on the green scheme from the images
        primary: "#4B5945", // Dark green for header/footer
        secondary: "#66785F", // Medium green
        tertiary: "#91AC8F", // Light green for buttons
        quaternary: "#B2C9AD", // Very light green for backgrounds
        "card-bg": "#FFFFFF", // White for card backgrounds
        "text-primary": "#333333", // Dark text
        "text-secondary": "#666666", // Medium text
        "text-light": "#FFFFFF", // Light text
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.4rem",
        sm: "0.2rem",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 10px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}