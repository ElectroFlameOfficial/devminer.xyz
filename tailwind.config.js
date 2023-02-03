/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "hsl(240, 42%, 2%)",
        fg: "hsl(0, 0%, 98%)",
        border: "hsl(204, 59%, 21%)",
        scrollbar: "hsla(240, 42%, 20%, 80%)",
        card: "rgba(255, 255, 255, 0.025)",
        chip: "#222226",
      },
      fontFamily: {
        sans: "'Exo 2'",
        subtitle: "Kanit",
      },
      fontWeight: {
        base: "400",
      },
    },
  },
  plugins: [],
};
