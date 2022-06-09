module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#7d3cff",
          "secondary": "#FFDE00",
          "accent": "#fceed1",
          "neutral": "#F3F4F6",
          "base-100": "#FFFFFF",
          "info": "#98A8DD",
          "success": "#1BBB70",
         "warning": "#DF7E07",
          "error": "#FA5C5C",
        },
      },
    ],
  },
}
