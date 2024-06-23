import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xxl: "1440px",
        xs: "360px",
      },
      fontSize: {
        clg: "clamp(24px, 3vw, 38px)",
        "csm-md": "clamp(14px, 2vw, 24px)",
        csm: "clamp(14px, 1.5vw, 18px)",
      },
      fontFamily: {
        manrope: "var(--font-manrope)",
      },
      borderWidth: {
        1: "1px",
      },
      colors: {
        "red45-opaque": "rgba(229, 0, 0, 0.15)",

        black: {
          6: "#0F0F0F",
          8: "#141414",
          10: "#1A1A1A",
          12: "#1F1F1F",
          15: "#262626",
          20: "#333333",
          25: "#404040",
          30: "#4C4C4C",
        },

        gray: {
          60: "#999999",
          65: "#a6a6a6",
          70: "#b3b3b3",
          75: "#BFBFBF",
          90: "#e4e4e7",
          95: "#f1f1f3",
          97: "#f7f7f8",
          99: "#fcfcfd",
        },

        red: {
          45: "#E50000",
          50: "#FF0000",
          55: "#FF1919",
          60: "#FF3333",
          80: "#FF9999",
          90: "#FFCCCC",
          95: "#FFE5E5",
          99: "#FFFAFA",
        },
      },
    },
  },
  plugins: [],
};
export default config;
