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
        abjuration: '#D9D9D9',
        alteration: '#3D85C6',
        conjuration: '#c200c2',
        divination: '#FBBC04',
        enchantment: '#6AA84F',
        invocation: '#CC0000',
        illusion: '#674EA7',
        necromancy: '#666666',
      },
    },
  },
  plugins: [],
};
export default config;
