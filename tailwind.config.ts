import type { Config } from "tailwindcss";

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
      colors: {
        color01: {
          DEFAULT: 'var(--color01)'
        },
        color02: {
          DEFAULT: 'var(--color02)'
        },
        color03: {
          DEFAULT: 'var(--color03)'
        },
        color04: {
          DEFAULT: 'var(--color04)'
        },
        colorText: {
          DEFAULT: 'var(--colorText)'
        },
      }
    },
  },

  safelist: [
    
    // Basic
    'bg-[#374151]','bg-[#1e293b]','bg-[#0f172a]','bg-[#020617]',
    'bg-[#f1f5f9]','bg-[#e2e8f0]','bg-[#cbd5e1]','bg-[#94a3b8]',

    'bg-[--color01]','bg-[--color02]','bg-[--color03]','bg-[--color04]',
    'bg-color01','bg-color02','bg-color03','bg-color04',

    'color01','color02','color03','color04',

    // bg, text, border, hover:bg, hover:text, hover:border
    // Stone
    'bg-stone-100', 'bg-stone-200', 'bg-stone-300', 'bg-stone-400', 'bg-stone-500', 'bg-stone-600', 'bg-stone-700', 'bg-stone-800', 'bg-stone-900', 'bg-stone-950',

    'text-stone-100', 'text-stone-200', 'text-stone-300', 'text-stone-400', 'text-stone-500', 'text-stone-600', 'text-stone-700', 'text-stone-800', 'text-stone-900', 'text-stone-950',

    'border-stone-100', 'border-stone-200', 'border-stone-300', 'border-stone-400', 'border-stone-500', 'border-stone-600', 'border-stone-700', 'border-stone-800', 'border-stone-900', 'border-stone-950',

    'hover:bg-stone-100', 'hover:bg-stone-200', 'hover:bg-stone-300', 'hover:bg-stone-400', 'hover:bg-stone-500', 'hover:bg-stone-600', 'hover:bg-stone-700', 'hover:bg-stone-800', 'hover:bg-stone-900', 'hover:bg-stone-950',

    'hover:text-stone-100', 'hover:text-stone-200', 'hover:text-stone-300', 'hover:text-stone-400', 'hover:text-stone-500', 'hover:text-stone-600', 'hover:text-stone-700', 'hover:text-stone-800', 'hover:text-stone-900', 'hover:text-stone-950',

    'hover:border-stone-100', 'hover:border-stone-200', 'hover:border-stone-300', 'hover:border-stone-400', 'hover:border-stone-500', 'hover:border-stone-600', 'hover:border-stone-700', 'hover:border-stone-800', 'hover:border-stone-900', 'hover:border-stone-950',

    // Slate
    'bg-slate-100', 'bg-slate-200', 'bg-slate-300', 'bg-slate-400', 'bg-slate-500', 'bg-slate-600', 'bg-slate-700', 'bg-slate-800', 'bg-slate-900', 'bg-slate-950',

    'text-slate-100', 'text-slate-200', 'text-slate-300', 'text-slate-400', 'text-slate-500', 'text-slate-600', 'text-slate-700', 'text-slate-800', 'text-slate-900', 'text-slate-950',

    'border-slate-100', 'border-slate-200', 'border-slate-300', 'border-slate-400', 'border-slate-500', 'border-slate-600', 'border-slate-700', 'border-slate-800', 'border-slate-900', 'border-slate-950',

    'hover:bg-slate-100', 'hover:bg-slate-200', 'hover:bg-slate-300', 'hover:bg-slate-400', 'hover:bg-slate-500', 'hover:bg-slate-600', 'hover:bg-slate-700', 'hover:bg-slate-800', 'hover:bg-slate-900', 'hover:bg-slate-950',

    'hover:text-slate-100', 'hover:text-slate-200', 'hover:text-slate-300', 'hover:text-slate-400', 'hover:text-slate-500', 'hover:text-slate-600', 'hover:text-slate-700', 'hover:text-slate-800', 'hover:text-slate-900', 'hover:text-slate-950',

    'hover:border-slate-100', 'hover:border-slate-200', 'hover:border-slate-300', 'hover:border-slate-400', 'hover:border-slate-500', 'hover:border-slate-600', 'hover:border-slate-700', 'hover:border-slate-800', 'hover:border-slate-900', 'hover:border-slate-950',
  ],
};
export default config;
