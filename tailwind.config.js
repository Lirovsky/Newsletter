/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "verde-destaque": "#81FE88",
        "verde-pastel": "#bfffc3",
        "verde-petroleo": "#132e35",
        grafite: "#01080e",
        "cinza-escuro": "#171d1f",
        cinza: "#3e3e3f",
        "cinza-medio": "#888888",
        "cinza-claro": "#bcbcbc",
        offwhite: "#e1e1e1",
        branco: "#ffffff",
      },
      backgroundImage: {
        lupa: "var(--lupa)",
      },
      fontFamily: {
        prompt: "var(--prompt)",
      },
    },
  },
  plugins: [],
};
