const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({}){}, {
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32
    },
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#000000',
      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7C7C8A',
        200: '#121214',
        100: '#C4C4CC'
      },
      cyan: {
        500: '#81D8F7',
        300: '#9EE2FA',
      },
      red: {
        50: '#EF4444',
      }
    }
  }
});