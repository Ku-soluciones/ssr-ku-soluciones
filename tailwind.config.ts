import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de colores de KU Soluciones basada en el sitio real
        ku: {
          50: "#FDF2F2",
          100: "#FCE4E4", 
          200: "#F5B7B1", // Light Pomegranate
          300: "#F1948A", // Medium Light
          400: "#F1948A", 
          500: "#E74C3C", // Primary Red Pomegranate
          600: "#C0392B", // Dark Red
          700: "#A93226", // Darkest Red
          800: "#922B21",
          900: "#7B241C",
          950: "#641E16"
        },
        primary: {
          50: "#FDF2F2",
          100: "#FCE4E4",
          200: "#F5B7B1",
          300: "#F1948A",
          400: "#F1948A",
          500: "#E74C3C", // Primary
          600: "#C0392B",
          700: "#A93226",
          800: "#922B21",
          900: "#7B241C",
          950: "#641E16"
        }
      },
      fontFamily: {
        sans: ["Poppins", "Montserrat", "Roboto", "Open Sans", "Noto Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-in": "slideIn 0.8s ease-out",
        "bounce-gentle": "bounceGentle 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        }
      }
    },
  },
  plugins: [],
  darkMode: "class"
};

export default config;