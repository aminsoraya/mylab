import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");
const config: Config = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "gray-normal": "#464646",
        "gray-dark": "#3d3c3d",
        "gray-darkest": "#2E2E2E",
        yellow: "#B29952",
      },
      colors: {
        "yellow-custom": "#B29952",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
});
export default config;
