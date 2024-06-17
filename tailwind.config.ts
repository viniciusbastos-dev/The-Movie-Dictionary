import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: "var(--font-manrope)",
      },
      colors: {
        "dark-opaque": "rgba(20, 20, 20, 0)",
        dark: "#141414",
        black06: "#0F0F0F",
        black10: "#1A1A1A",
        black12: "#1F1F1F",

        grey60: "#999999",
        grey75: "#BFBFBF",
      },
    },
  },
  plugins: [],
};
export default config;
