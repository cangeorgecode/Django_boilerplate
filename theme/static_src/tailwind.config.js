module.exports = {
  content: [
    "../templates/**/*.html",
    "../../templates/**/*.html",
    "../../**/templates/**/*.html",
  ],
  theme: {
    extend: {
      padding: {
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("kutty"),
  ],
};
