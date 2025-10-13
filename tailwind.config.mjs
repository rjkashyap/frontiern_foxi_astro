import { defineConfig } from "tailwindcss/helpers";
import defaultTheme from "tailwindcss/defaultTheme";

export default defineConfig({
  darkMode: "class",
  content: ["src/**/*.{astro,md,mdx,ts,tsx,js,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f9f9f9",
          100: "#f2f2f2",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a",
          DEFAULT: "#000000",
        },
        neutral: {
          50: "#f9f9f9",
          100: "#f2f2f2",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a",
        },
      },
      ringColor: ({ theme }) => ({
        DEFAULT: theme("colors.neutral.400"),
      }),
      borderColor: ({ theme }) => ({
        DEFAULT: theme("colors.neutral.300"),
      }),
    },
  },
  plugins: [],
});
