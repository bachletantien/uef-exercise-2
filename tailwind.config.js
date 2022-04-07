const { fontFamily } = require('tailwindcss/defaultTheme');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./**/*.html'],
  theme: {
    colors: {
      inherit: 'inherit',
      transparent: 'transparent',
      pallet: '#f3eeea',
      blue: '#dadded',
      indigo: '#6610f2',
      purple: ' #6f42c1',
      pink: {
        DEFAULT: '#ff00f0',
        light: '#ddc7b0',
      },
      red: 'red',
      orange: '#f9a35a',
      yellow: '#f39800',
      green: '#415954',
      teal: '#20c997',
      cyan: '#17a2b8',
      white: '#fff',
      gray: {
        DEFAULT: '#c6c6c6',
        dark: '#707070',
      },
      primary: '#1d1d1b',
      secondary: '#f3eeea',
      success: '#415954',
    },
    fontSize: {
      xxs: '12px',
      xs: '13px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
      xxl: '22px',
      heading3: '30px',
    },
    fontFamily: {
      europa: ['Europa', ...defaultTheme.fontFamily['serif']],
      moret: ['Moret', ...defaultTheme.fontFamily['serif']],
    },
    extend: {},
  },
  plugins: [],
};

//sort class
//yarn add -D prettier prettier-plugin-tailwindcss
