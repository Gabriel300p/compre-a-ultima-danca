import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#FF00EE",
        secondary: "#d102c3",
        tertiary: "#8704E4",
      },
      backgroundImage: {
        "button-gradient":
          "linear-gradient(165deg, #F0E 10.75%, #D401EA 63.74%, #8704E4 117.79%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
