/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B5E20',
          light: '#2E7D32',
          dark: '#0D3B0F',
          50: '#E8F5E9',
          100: '#C8E6C9',
          200: '#A5D6A7',
          500: '#4CAF50',
          600: '#388E3C',
          700: '#2E7D32',
          800: '#1B5E20',
          900: '#0D3B0F',
        },
        secondary: {
          DEFAULT: '#F9A825',
          light: '#FFD54F',
          dark: '#E65100',
          100: '#FFF8E1',
          300: '#FFD54F',
          500: '#FFC107',
          700: '#F9A825',
          900: '#E65100',
        },
        accent: {
          DEFAULT: '#0288D1',
          light: '#29B6F6',
          dark: '#01579B',
        },
        dark: '#0D1B0E',
        'ag-foreground': '#212121',
        'ag-muted': '#6B7280',
        'ag-border': '#E5E7EB',
        'ag-light': '#F5F5F5',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
        arabic: ['Cairo', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        organic: '40px 40px 40px 120px',
      },
      animation: {
        'scroll-bounce': 'scrollBounce 2s ease-in-out infinite',
        'float-card': 'floatCard 4s ease-in-out infinite',
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-down': 'slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        scrollBounce: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(8px)', opacity: '0.5' },
        },
        floatCard: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          from: { opacity: '0', transform: 'translateY(-10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-overlay': 'linear-gradient(to bottom, rgba(13,27,14,0.65) 0%, rgba(13,27,14,0.45) 50%, rgba(13,27,14,0.80) 100%)',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0,0,0,0.08)',
        'card-hover': '0 20px 40px rgba(0,0,0,0.15)',
        'nav': '0 2px 20px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
};