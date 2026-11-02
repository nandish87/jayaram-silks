import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "var(--brand-primary, #7B1113)",
          primaryDark: "var(--brand-primary-dark, #520A0C)",
          secondary: "var(--brand-secondary, #0F5132)",
          secondaryLight: "var(--brand-secondary-light, #198754)",
          accentGold: "var(--brand-accent-gold, #C59B27)",
          accentGoldLight: "var(--brand-accent-gold-light, #E8C15A)",
          bgCream: "var(--brand-bg-cream, #FCFBF7)",
          bgCard: "var(--brand-bg-card, #FFFFFF)",
          textDark: "var(--brand-text-dark, #1C1917)",
          textMuted: "var(--brand-text-muted, #665C54)",
          borderGold: "var(--brand-border-gold, #E6D7B8)",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Poppins", "Inter", "sans-serif"],
      },
      boxShadow: {
        luxury: "0 10px 30px -10px rgba(123, 17, 19, 0.12), 0 4px 6px -2px rgba(197, 155, 39, 0.08)",
        gold: "0 4px 20px -2px rgba(197, 155, 39, 0.25)",
      },
      keyframes: {
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        shimmer: "shimmer 2.5s infinite",
      },
    },
  },
  plugins: [],
};

export default config;

