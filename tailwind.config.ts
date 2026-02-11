import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#f5741c",
        darkBg: "#131424",
        lightBg: "#f8fafc",
      },
      backgroundImage: {
        "gradient-cover-dark":
          "linear-gradient(90.21deg, rgba(0, 0, 0, 0.1) -5.91%, rgba(0, 0, 0, 1) 111.58%)",
        "gradient-cover-light":
          "linear-gradient(90.21deg, rgba(255, 255, 255, 1) -5.91%, rgba(255, 255, 255, 1) 111.58%)",
      },
    },
  },
  plugins: [],
};
export default config;
