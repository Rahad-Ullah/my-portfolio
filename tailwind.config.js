/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FB9039",

          secondary: "#88F7FF",

          accent: "#ffffff",

          neutral: "#1b263d",

          "base-100": "#162032",

          info: "#ffffff",

          success: "#ffffff",

          warning: "#ffffff",

          error: "#ffffff",
        },
      },
    ],
  },
  plugins: [daisyui],
};

