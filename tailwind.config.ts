import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#13110F",
          900: "#13110F",
          800: "#1C1A17",
          700: "#2A2622",
          600: "#3A342E",
          500: "#5A5147",
          400: "#857B6F",
        },
        bone: {
          DEFAULT: "#F4EFE6",
          50: "#FBF9F4",
          100: "#F4EFE6",
          200: "#EAE2D2",
          300: "#D9CDB4",
        },
        verdigris: {
          DEFAULT: "#3F6B5E",
          50: "#E8EFEC",
          400: "#5A8A7B",
          500: "#3F6B5E",
          600: "#2D5246",
          700: "#1F3B33",
        },
        copper: {
          DEFAULT: "#B8845E",
          400: "#C99974",
          500: "#B8845E",
          600: "#9A6A47",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.025em",
      },
      maxWidth: {
        "screen-3xl": "1680px",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        sweep: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        rise: "rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
        sweep: "sweep 6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
