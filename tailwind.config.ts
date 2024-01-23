import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      rotate: {
        "-30": "-30deg",
      },
      width: {
        "14/7": "200%",
      },
      zIndex: {
        "-10": "-10",
      },
      fontFamily: {
        roboto: ["Roboto Mono", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
