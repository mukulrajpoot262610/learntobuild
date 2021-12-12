module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['Ubuntu Mono'],
        'mono-2': ['VT323']
      },
      colors: {
        primary: '#111317',
        secondary: "#1B1F26",
        font: {
          800: "#E1E6F0",
          100: "#8B919C",
        }
      }
    },
  },
  plugins: [],
}