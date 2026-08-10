import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          dark: "rgb(var(--bg-dark-rgb) / <alpha-value>)",
          surface: "rgb(var(--bg-surface-rgb) / <alpha-value>)",
          card: "rgb(var(--bg-card-rgb) / <alpha-value>)",
          elevated: "rgb(var(--bg-elevated-rgb) / <alpha-value>)",
        },
        txt: {
          main: "rgb(var(--text-main-rgb) / <alpha-value>)",
          muted: "rgb(var(--text-muted-rgb) / <alpha-value>)",
          subtle: "rgb(var(--text-subtle-rgb) / <alpha-value>)",
        },
        accent: {
          primary: "rgb(var(--accent-primary-rgb) / <alpha-value>)",
          glow: "rgb(var(--accent-glow-rgb) / <alpha-value>)",
          electric: "rgb(var(--accent-electric-rgb) / <alpha-value>)",
          emerald: "#10B981", // Online Dot Green
          violet: "rgb(var(--accent-violet-rgb) / <alpha-value>)",
        },
        border: {
          dark: "var(--border-dark-color)",
          glow: "var(--border-glow-color)",
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "Courier New", "monospace"],
      },
      animation: {
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "scan-line": "scanLine 4s linear infinite",
        "spin-slow": "spin 20s linear infinite",
        "matrix-fade": "matrixFade 2s ease-in-out infinite alternate",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", filter: "drop-shadow(0 0 15px rgba(56, 189, 248, 0.4))" },
          "50%": { opacity: "0.8", filter: "drop-shadow(0 0 25px rgba(99, 102, 241, 0.6))" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
        matrixFade: {
          "0%": { opacity: "0.2" },
          "100%": { opacity: "1" },
        }
      },
      backgroundImage: {
        "radial-gradient-dark": "radial-gradient(circle at 50% 0%, rgba(56, 189, 248, 0.12) 0%, rgba(99, 102, 241, 0.05) 50%, transparent 80%)",
        "grid-pattern": "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
};
export default config;
