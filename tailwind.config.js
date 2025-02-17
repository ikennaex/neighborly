/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#2563EB",
        customYellow: "#FFB22C",
        customGreen: "#00B53F",
        customPurple: "#BF2EF0"
        
      }
    },
  },
  plugins: [],
}