import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors')

const config: Config = {

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      
    },
    colors: {
      // Using modern `rgb`
      color01: 'rgb(var(--color01) / <alpha-value>)',
      color02: 'rgb(var(--color02) / <alpha-value>)',
      color03: 'rgb(var(--color03) / <alpha-value>)',
      color04: 'rgb(var(--color04) / <alpha-value>)',
      colorText: 'rgb(var(--colorText) / <alpha-value>)',
      ...colors
    }
  },

  safelist: [
    /* Projects names */
    "hover:before:content-['cinelog']",
    "hover:before:content-['divulgacampo']",
    "hover:before:content-['seo-comparison']",
    "hover:before:content-['ads-content']",
  ],

  plugins: [
    require('tailwindcss-animated')
  ]
};

export default config;
