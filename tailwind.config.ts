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
        background: "#0a0a0f",
        foreground: "#e2e8f0",
        "neon-cyan": "#00f0ff",
        "neon-purple": "#7b2ff7",
        muted: "#94a3b8",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        display: ["var(--font-unbounded)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(0, 240, 255, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
