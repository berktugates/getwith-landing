// tailwind.config.ts
import type { Config } from "tailwindcss";
import animate from "tw-animate-css"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [animate],
};

export default config;
