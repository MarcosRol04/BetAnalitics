/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "#05070C",
          raised: "#080B12",
        },
        surface: {
          DEFAULT: "#0F131C",
          hover: "#141926",
        },
        line: {
          DEFAULT: "#1E2430",
          subtle: "#161B26",
        },
        ink: {
          DEFAULT: "#F2F4F8",
          muted: "#8991A3",
          faint: "#565E6E",
          onaccent: "#04121F",
        },
        accent: {
          DEFAULT: "#4F9DFF",
          soft: "#2E6FCC",
        },
        positive: "#2FD98A",
        negative: "#FF6B6B",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        subtle: "0 1px 0 0 rgba(255,255,255,0.03) inset, 0 8px 24px -12px rgba(0,0,0,0.6)",
        glow: "0 0 0 1px rgba(79,157,255,0.18), 0 20px 60px -24px rgba(79,157,255,0.28)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
