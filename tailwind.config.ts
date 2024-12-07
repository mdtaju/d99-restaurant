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
        background: "var(--background)",
        foreground: "var(--foreground)",
        themeBlack: "#171717",
        themeLight: "#F7FAFC",
        // themePrimary: "#fcbf29",
        themePrimary: "#ffc501",
      },
    },
  },
  plugins: [],
};
export default config;
