/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // MEDIA QUERIES
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',
      xxl: '1752px',

      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
      notXl: { max: '1279.98px' },
      mediaHover: { raw: '(hover: hover)' },
    },
    //BOX SHADOW
    boxShadow: {
      xxs: '3px 3px 4px 0px rgba(19,8,19,0.16)',
    },
    // THEME
    extend: {
      backgroundImage: {
        main_grad:
          'linear-gradient(180deg,  rgb(214, 219, 220) 0%, rgb(255, 255, 255) 100%)',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
      },
      // BORDER
      borderRadius: {
        normal: '6px',
      },
      // ALL COLORS
      colors: {
        body: '#040404',
        black: {
          DEFAULT: '#000000',
          dark: '#171717',
          medium: '#1C1C1C',
          light: '#303030',
        },
        white: {
          DEFAULT: '#ffffff',
          light: '#F3F3F3',
          dark: '#AEAEAE',
        },
        gray: {
          DEFAULT: '#737373',
          light: '#73737380',
          medium: '#676767',
          dark: '#474747',
        },
        primary: { 100: '#368D9D', 200: '#3D37A5' },
        notify: {
          DEFAULT: '#ffffff',
          error: '#FC1132',
          success: '#0AA02B',
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '1.5rem',
          md: '5.25rem',
          xl: '2rem',
          xxl: '2rem',
        },
      },
    },
  },
  plugins: [],
};
