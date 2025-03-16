export default {
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Old syntax (now replaced by "content")
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // New syntax
  darkMode: "class", // Can be "media" or "class"
  theme: {
    extend: {},
  },
  variants: {
    extend: {}, // You can define custom variants here if needed
  },
  plugins: [],
};