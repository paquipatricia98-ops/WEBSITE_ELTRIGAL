/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          brown: '#4A3C31',
          gold: '#D4AF37',
          'gold-secondary': '#C5A059',
          cream: '#FDFBF7',
          'brown-dark': '#342921',
          'brown-light': '#604E40',
          'gold-light': '#E2C265',
          'cream-dark': '#F5F0E6',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'warm': '0 4px 20px -2px rgba(74, 60, 49, 0.08)',
        'warm-hover': '0 10px 30px -4px rgba(74, 60, 49, 0.15)',
        'gold-glow': '0 0 15px rgba(212, 175, 55, 0.3)',
      },
      screens: {
        '3xl': '1920px',
        '4xl': '2560px',
      },
    },
  },
  plugins: [],
};
