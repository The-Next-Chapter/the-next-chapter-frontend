export default {
  theme: {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
    extend: {
      colors: {
        background: "#F3EEE8",
        text: "#5A524A",
        sage: "#8FA98A",
        gold: "#C9B38C",
        wood: "#E6D6C3"
      }
    },
     plugins: [
    require("@tailwindcss/typography")
  ],
  }
}