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
        xs: "360px",
      },
      fontFamily: {
        manrope: "var(--font-manrope)",
      },
      colors: {
        "black08-opaque": "rgba(20, 20, 20, 0)",
        "black10-opaque": "rgba(26, 26, 26, 0)",

        black06: "#0F0F0F",
        black08: "#141414",
        black10: "#1A1A1A",
        black12: "#1F1F1F",
        black15: "#262626",

        grey60: "#999999",
        grey75: "#BFBFBF",
      },
    },
  },
  plugins: [],
};
export default config;
