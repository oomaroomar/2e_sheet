/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
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
  plugins: [],
}
