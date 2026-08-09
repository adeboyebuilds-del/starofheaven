import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#050B1A",
          900: "#0A1730",
          800: "#0F2249",
          700: "#152C5C",
        },
        royal: {
          700: "#163A82",
          600: "#1E4C9A",
          500: "#2A5FB8",
          400: "#3D74D6",
        },
        gold: {
          700: "#96731E",
          600: "#B5892A",
          500: "#C9A227",
          400: "#DFC066",
          300: "#EFDB9E",
          200: "#F5E9C6",
        },
        cream: "#FAF8F2",
        ink: {
          900: "#0F1728",
          700: "#2B3648",
          500: "#586179",
        },
      },
      fontFamily: {
  display: ['"Druk Text Wide Trial"', "Georgia", "Cambria", "ui-serif", "serif"],
  body: ['"Neue Helvetica BQ"', '"Segoe UI"', "system-ui", "-apple-system", "Roboto", "ui-sans-serif", "sans-serif"],
},
      letterSpacing: {
        widest2: "0.28em",
      },
      backgroundImage: {
        "arch-grid":
          "radial-gradient(circle at 50% 0%, rgba(201,162,39,0.10), transparent 60%)",
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};

export default config;
