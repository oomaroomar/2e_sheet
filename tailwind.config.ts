import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-Abjuration",
    "bg-Alteration",
    "bg-Conjuration",
    "bg-Divination",
    "bg-Enchantment",
    "bg-Evocation",
    "bg-Illusion",
    "bg-Necromancy",
    "bg-Wizard",
    "bg-Cleric",
    "shadow-Abjuration",
    "shadow-Alteration",
    "shadow-Conjuration",
    "shadow-Divination",
    "shadow-Enchantment",
    "shadow-Evocation",
    "shadow-Illusion",
    "shadow-Necromancy",
    "hover:shadow-Abjuration",
    "hover:shadow-Alteration",
    "hover:shadow-Conjuration",
    "hover:shadow-Divination",
    "hover:shadow-Enchantment",
    "hover:shadow-Evocation",
    "hover:shadow-Illusion",
    "hover:shadow-Necromancy",
  ],
  theme: {
    extend: {
      colors: {
        Abjuration: '#D9D9D9',
        Alteration: '#3D85C6',
        Conjuration: '#c200c2',
        Divination: '#FBBC04',
        Enchantment: '#6AA84F',
        Evocation: '#CC0000',
        Illusion: '#674EA7',
        Necromancy: '#666666',
        Wizard: '#6A3190',
        Cleric: '#f0e637'
      },
      spacing: {
        '12vh': '12vh',
        '50%': '50%'
      }
    },
  },
  plugins: [],
};
export default config;
