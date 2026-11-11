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
          darkGreen: "#14532D", // Primary Dark Green
          green: "#166534",
          lightGreen: "#22C55E", // Secondary Light Green
          accent: "#14213D", // Accent Dark Navy
          bgLight: "#F8FAFC",
        },
      },
    },
  },
  plugins: [],
};
export default config;

