/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        grayCard: "#f5f7f4",
        greenPrimary: "#b4c889",
      },
      color: {
        greenText: "#b4c889",
      },
    },
  },
  plugins: [],
};
