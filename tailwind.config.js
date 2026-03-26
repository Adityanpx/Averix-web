/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        indigo: {
          DEFAULT: "#4F46E5",
          light: "#EEF2FF",
          dark: "#3730A3",
        },
        teal: {
          DEFAULT: "#0ABFA3",
          light: "#F0FDFB",
          dark: "#0891B2",
        },
        coral: "#FF6B6B",
        dark: "#1A2340",
        body: "#4A5568",
        muted: "#9AA3B2",
        border: "#E2E8F0",
        hero: "#EEF2FA",
        soft: "#F5F7FB",
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      maxWidth: {
        container: "1180px",
      },
      boxShadow: {
        card: "0 4px 24px rgba(79,70,229,0.08)",
        "card-hover": "0 12px 40px rgba(79,70,229,0.16)",
      },
    },
  },
  plugins: [],
};