import type { Config } from "tailwindcss";

/**
 * Tailwind CSS v4 primary theme lives in app/globals.css (@theme).
 * This file documents the design tokens for tooling / IDE support.
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f4f1ea",
        foreground: "#1b1916",
        paper: "#f4f1ea",
        card: "#fbf9f4",
        ink: "#1b1916",
        accent: "#0f5c56",
        muted: "#5c564c",
        line: "#e3dcd0",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        display: ["var(--font-literata)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
