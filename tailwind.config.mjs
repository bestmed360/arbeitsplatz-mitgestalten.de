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
      typography: (theme) => {
        const fontSize = (size) => {
          const result = theme(`fontSize.${size}`);
          return Array.isArray(result) ? result[0] : result;
        };

        const breakout = {
          marginLeft: 0,
          marginRight: 0,
          gridColumn: "2 / span 10",
        };

        return {
          DEFAULT: {
            // DEFAULT only holds shared stuff and not the things that change
            // between light/dark
            css: [
              {
                "> *": {
                  gridColumn: "1 / -1",

                  [`@media (min-width: ${theme("screens.lg")})`]: {
                    gridColumn: "3 / span 8",
                  },
                },
                p: {
                  marginTop: 0,
                  marginBottom: theme("spacing.8"),
                  fontSize: fontSize("lg"),
                },
                "> div": {
                  marginTop: 0,
                  marginBottom: theme("spacing.8"),
                  fontSize: fontSize("lg"),
                },
                a: {
                  textDecoration: "none",
                },
                "a:hover,a:focus": {
                  textDecoration: "underline",
                  outline: "none",
                },
                strong: {
                  fontWeight: theme("fontWeight.medium"),
                  fontSize: fontSize("lg"),
                },
                hr: {
                  marginTop: theme("spacing.8"),
                  marginBottom: theme("spacing.16"),
                },
                pre: {
                  color: "var(--base05)",
                  backgroundColor: "var(--base00)",
                  marginTop: 0,
                  marginBottom: theme("spacing.8"),
                  marginLeft: `-${theme("spacing.10vw")}`,
                  marginRight: `-${theme("spacing.10vw")}`,
                  padding: theme("spacing.8"),
                  borderRadius: 0,

                  [`@media (min-width: ${theme("screens.lg")})`]: {
                    borderRadius: theme("borderRadius.lg"),
                    ...breakout,
                  },
                },
                ".embed": {
                  position: "relative",
                  marginLeft: "-10vw",
                  marginRight: "-10vw",
                  [`@media (min-width: ${theme("screens.lg")})`]: {
                    ...breakout,
                  },
                },
                ".embed > div": {
                  height: "0px",
                },
                ".embed > div > iframe": {
                  height: "100% !important",
                  width: "100% !important",
                  top: "0",
                  left: "0",
                  position: "absolute",
                  border: "none",
                  borderRadius: "0 !important",
                  [`@media (min-width: ${theme("screens.lg")})`]: {
                    borderRadius: "0.5rem !important",
                  },
                },
                ul: {
                  marginTop: 0,
                  marginBottom: theme("spacing.8"),
                },
                ol: {
                  marginTop: 0,
                  marginBottom: theme("spacing.8"),
                },
                "h1, h2, h3, h4, h5, h6": {
                  marginTop: 0,
                  marginBottom: 0,
                  fontWeight: theme("fontWeight.normal"),

                  [`@media (min-width: ${theme("screens.lg")})`]: {
                    fontWeight: theme("fontWeight.medium"),
                  },
                },
                // tailwind doesn't stick to this property order, so we can't make 'h3' overrule 'h2, h3, h4'
                "h1, h2": {
                  fontSize: fontSize("2xl"),
                  marginTop: theme("spacing.16"),
                  marginBottom: theme("spacing.10"),
                  [`@media (min-width: ${theme("screens.lg")})`]: {
                    fontSize: fontSize("3xl"),
                  },
                },
                h3: {
                  fontSize: fontSize("xl"),
                  marginTop: theme("spacing.16"),
                  marginBottom: theme("spacing.10"),
                  [`@media (min-width: ${theme("screens.lg")})`]: {
                    fontSize: fontSize("2xl"),
                  },
                },
                "h4, h5, h6": {
                  fontSize: fontSize("lg"),
                  [`@media (min-width: ${theme("screens.lg")})`]: {
                    fontSize: fontSize("xl"),
                  },
                },
                img: {
                  // images are wrapped in <p>, which already has margin
                  marginTop: 0,
                  marginBottom: 0,
                  borderRadius: theme("borderRadius.lg"),
                },
                blockquote: {
                  fontWeight: theme("fontWeight.normal"),
                  border: "none",
                  borderRadius: theme("borderRadius.lg"),
                  padding: theme("spacing.8"),
                  marginTop: 0,
                  marginBottom: theme("spacing.10"),
                },
                "blockquote > :last-child": {
                  marginBottom: 0,
                },
              },
            ],
          },
          primary: {
            css: {
              "--tw-prose-body": theme("colors.orange[200]"),
              "--tw-prose-headings": theme("colors.orange[900]"),
              "--tw-prose-lead": theme("colors.orange[700]"),
              "--tw-prose-links": theme("colors.orange[900]"),
              "--tw-prose-bold": theme("colors.orange[900]"),
              "--tw-prose-counters": theme("colors.orange[600]"),
              "--tw-prose-bullets": theme("colors.orange[400]"),
              "--tw-prose-hr": theme("colors.orange[300]"),
              "--tw-prose-quotes": theme("colors.orange[900]"),
              "--tw-prose-quote-borders": theme("colors.orange[300]"),
              "--tw-prose-captions": theme("colors.orange[700]"),
              "--tw-prose-code": theme("colors.orange[900]"),
              "--tw-prose-pre-code": theme("colors.orange[100]"),
              "--tw-prose-pre-bg": theme("colors.orange[900]"),
              "--tw-prose-th-borders": theme("colors.orange[300]"),
              "--tw-prose-td-borders": theme("colors.orange[200]"),
              "--tw-prose-invert-body": theme("colors.orange[200]"),
              "--tw-prose-invert-headings": theme("colors.white"),
              "--tw-prose-invert-lead": theme("colors.orange[300]"),
              "--tw-prose-invert-links": theme("colors.white"),
              "--tw-prose-invert-bold": theme("colors.white"),
              "--tw-prose-invert-counters": theme("colors.orange[400]"),
              "--tw-prose-invert-bullets": theme("colors.orange[600]"),
              "--tw-prose-invert-hr": theme("colors.orange[700]"),
              "--tw-prose-invert-quotes": theme("colors.orange[100]"),
              "--tw-prose-invert-quote-borders": theme("colors.orange[700]"),
              "--tw-prose-invert-captions": theme("colors.orange[400]"),
              "--tw-prose-invert-code": theme("colors.white"),
              "--tw-prose-invert-pre-code": theme("colors.orange[300]"),
              "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
              "--tw-prose-invert-th-borders": theme("colors.orange[600]"),
              "--tw-prose-invert-td-borders": theme("colors.orange[700]"),
            },
          },
        };
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
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
        ".underlined.is--active:after": {
          backgroundColor: "currentColor",
          transform: "scaleX(1)",
        },
      });
    }),
  ],
};
