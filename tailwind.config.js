/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['**/*.liquid'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
      },
    },
  },
  plugins: [],
};
