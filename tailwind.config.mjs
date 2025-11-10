/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["selector"],

  safelist: [
    {
      pattern: /col-span-(\d+)/,
      variants: ["lg"],
    },
    {
      pattern: /h-(0|2|3|4|6|8|12|16|24|32)/,
      variants: ["lg"],
    },
    {
      pattern: /text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)/,
      variants: ["lg"],
    },
    {
      pattern:
        /font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)/,
    },
    {
      pattern: /text-(left|center|right)/,
    },
  ],

  theme: {
    extend: {
      colors: {
        transparent: "transparent",

        // Light theme (unchanged)
        primary: {
          50:  "#FFF7E6",
          100: "#FFECC7",
          200: "#FFE092",
          300: "#FFD055",
          400: "#FFBF1F",
          500: "#FFB300", // base (NY taxi yellow)
          600: "#64748B", // hover
          700: "#475569", // active hover
          800: "#334155",
          900: "#1E293B",
          950: "#0F172A",
          DEFAULT: "#FFB300",
        },

        neutral: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },

        // ✅ NEW DARK THEME TOKENS (your palette)
        dark: {
          bg: "#101115",        // base background
          surface: "#161A22",   // mid surface
          elevated: "#1B1C20",  // raised cards/panels
        },
      },

      cursor: {
        fancy: "url(https://www.svgrepo.com/show/269/color-picker.svg)",
      },

      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
        headings: ["Outfit Variable", ...defaultTheme.fontFamily.sans],
      },

      keyframes: {
        dropdown: {
          "0%": { transform: "translateY(-1rem)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        fadeInShadowLight: {
          "100%": {
            boxShadow:
              "0 20px 25px -5px rgba(15, 23, 42, .025), 0 8px 10px -6px rgba(15, 23, 42, .025)",
          },
        },
        fadeInShadowDark: {
          "100%": {
            boxShadow:
              "0 20px 25px -5px rgba(2, 6, 23, .25), 0 8px 10px -6px rgba(2, 6, 23, .25)",
          },
        },
        fadeUp: {
          "0%": { transform: "translateY(1rem)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },

      animation: {
        dropdown: "dropdown 300ms ease-in-out forwards",
        fadeInShadowLight: "fadeInShadowLight 500ms ease-in-out forwards",
        fadeInShadowDark: "fadeInShadowDark 500ms ease-in-out forwards",
        fadeUp: "fadeUp 500ms ease-in-out forwards",
      },
    },
  },

  variants: {
    animation: ["responsive"],
  },

  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss/plugin")(function ({ addVariant }) {
      addVariant("dark-me", ".dark_&");
    }),
  ],
};