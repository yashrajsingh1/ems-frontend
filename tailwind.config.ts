import type { Config } from "tailwindcss";

const withMT = require("@material-tailwind/react/utils/withMT");
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Logo: ["Dancing Script", "cursive"],
      },
    },
    animation: {
    shimmer: 'shimmer 2s linear infinite',
  },
  keyframes: {
    shimmer: {
      from: {
        backgroundPosition: '0 0',
      },
      to: {
        backgroundPosition: '-200% 0',
      },
    },
  },
  },
  plugins: [],
};

export default config;
