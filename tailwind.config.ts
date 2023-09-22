import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        alter: "#f59b90",
      },
      colors: {
        alter: "#f59b90",
        light: "rgba(255, 255, 255,.3)",
      },
      fontSize: {
        15: "15px",
        11: "11px",
      },
      letterSpacing: {
        3.9: "3.9px",
        3.2: "3.2px",
      },
      padding: {
        15: "15px",
      },
      minWidth: {
        260: "260px",
      },
    },
  },
  plugins: [],
};
export default config;
