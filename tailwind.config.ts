import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0F0F10",
          900: "#0F0F10",
          800: "#1B1B1D",
          700: "#2A2A2D",
          600: "#45454A",
          500: "#6A6A70",
          400: "#9A9AA0",
          300: "#C9C9CD",
          200: "#E5E5E2",
          100: "#F2F2EF",
        },
        paper: {
          DEFAULT: "#FFFFFF",
          50: "#FAFAF7",
          100: "#F5F5F1",
          200: "#EDEDE8",
        },
        gold: {
          DEFAULT: "#DCA520",
          50: "#FBF4E0",
          100: "#F6E5B3",
          200: "#EFD179",
          300: "#E8BD45",
          400: "#DDAD2A",
          500: "#DCA520",
          600: "#B8841A",
          700: "#8C6313",
          800: "#5E4209",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.035em",
        tighter: "-0.02em",
      },
      maxWidth: {
        "screen-3xl": "1440px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,15,16,0.04), 0 8px 24px -8px rgba(15,15,16,0.10)",
        cardHover: "0 2px 6px rgba(15,15,16,0.06), 0 24px 50px -16px rgba(15,15,16,0.18)",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
