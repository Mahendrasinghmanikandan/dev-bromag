/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_color: "#DF9300",
        light_gray: "#494949",
        light_white: "#E1E1E1",
        label_color:"#6D6D6D",
        yellow_color:"#DF9300",
        dark_color:"#282828"
      },
    },
  },
  plugins: [],
};
