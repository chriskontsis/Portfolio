// tailwind.config.js
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        slideIn: "slideIn 0.3s ease-out",
        scan: "scan 10s linear infinite",
      },
      keyframes: {
        slideIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        scan: {
          "0%": {
            "background-position": "0 0",
          },
          "100%": {
            "background-position": "0 -1000px",
          },
        },
      },
    },
  },
  plugins: [forms],
};
