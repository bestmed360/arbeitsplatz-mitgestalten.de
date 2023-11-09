import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {},
      colors: {
        brand: {
          DEFAULT: "#1097AB",
        },
        background: {
          DEFAULT: "#FFFFFF",
        },
        // foreground are text colors
        foreground: {
          DEFAULT: "#0D0D0D",
        },
      },
      spacing: {
        "5vw": "5vw", // pull featured sections and navbar in the margin
        "8vw": "8vw", // positions hero img inside the margin
        "10vw": "10vw", // page-margin
      },
      maxWidth: {
        "8xl": "96rem", // better support for large screens
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".underlined": {
          position: "relative",
          whiteSpace: "nowrap",
        },
        ".underlined:after": {
          bottom: "-4px",
          content: '""',
          display: "block",
          height: "2px",
          left: 0,
          position: "absolute",
          transform: "scaleX(0)",
          transformOrigin: "left center",
          transition: "transform .2s ease",
          width: "100%",
        },
        ".underlined:hover:after, .underlined:focus:after": {
          backgroundColor: "currentColor",
          transform: "scaleX(1)",
        },
      });
    }),
  ],
};
