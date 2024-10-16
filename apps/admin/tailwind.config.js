/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.vue"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "1rem",
    },
  },

  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "base-100": "#1B252A",
          "base-200": "#161A1D",
          "base-content": "#EDEFEE",
          "accent-content": "#EDEFEE",
          secondary: "#ff851b",
          accent: "#FF2938",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
