import type { Config } from "tailwindcss";

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
      },
      fontFamily: {
        sans: ["Poppins"],
      },
    },
    colors: {
      white: {
        "50": "#D6E4F0",
        "100": "#FFF",
      },
      blue: {
        "50": "#B2D0EC",
        "100": "#519DE4",
        "200": "#81A7F3",
      },
      black: "#000",
    },
  },
  plugins: [],
};
export default config;
