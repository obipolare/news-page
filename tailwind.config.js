module.exports = {
  mode: "jit",
  purge: ["./public/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url('../img/pattern-hero.svg')",
        banner: "url('../img/showcase2.jpg')",
        "tech-red": "url('../img/tech-red.jpg')",
        "tech-blue": "url('../img/image-five.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
