import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "DM Sans": ["dmsans", "sans-serif"],
      },
      colors: {
        "gradient-start": "hsl(190, 100%, 50%)",
        "gradient-end": "hsl(210, 100%, 50%)",
      }
    },
  },
  plugins: [],
};
export default config;
