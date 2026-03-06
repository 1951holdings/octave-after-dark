import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        octave: {
          bg: "#050507",
          panel: "#0B0B12",
          red: "#E11D48"
        }
      }
    }
  },
  plugins: []
};

export default config;
