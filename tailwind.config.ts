import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
  sans:    ['Pogonia', 'sans-serif'],   
  display: ['Chuner', 'sans-serif'],    
},
      colors: {
        primary: {
          DEFAULT: '#e53935',
          hover:   '#c62828',
        },
        fg: {
          DEFAULT: '#111111',
          muted:   '#6b7280',
        },
        surface:    '#f5f5f5',
        'ui-border':'#e5e7eb',
        footer:     '#111111',
      },
      transitionDuration: {
        '350': '350ms',
        '400': '400ms',
      },
    },
  },
  plugins: [],
};

export default config;