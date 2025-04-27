/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary color palette - Professional blue with good contrast
        primary: {
          50: '#f0f7ff',
          100: '#e0f0fe',
          200: '#b9e0fe',
          300: '#7cc8fd',
          400: '#36aaf9',
          500: '#0c90eb',
          600: '#0072c6', // Main primary color - Professional, trustworthy blue
          700: '#0058a3',
          800: '#004687',
          900: '#003666',
          950: '#00264d',
        },
        // Secondary color palette - Teal for accents and supporting elements
        secondary: {
          50: '#f0fdfb',
          100: '#ccfbf4',
          200: '#99f3e9',
          300: '#5de3d9',
          400: '#2cc7bf',
          500: '#15a69f',
          600: '#108b85', // Main secondary color - Professional teal
          700: '#0f706b',
          800: '#0e5955',
          900: '#0c4744',
          950: '#062f2d',
        },
        // Accent color palette - Warm orange for CTAs and highlights
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c', // Main accent color - Energetic but professional
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            h2: {
              color: '#111827',
              fontWeight: '700',
              marginTop: '2rem',
              marginBottom: '1.25rem',
            },
            h3: {
              color: '#111827',
              fontWeight: '600',
              marginTop: '1.75rem',
              marginBottom: '1rem',
            },
            'ul > li': {
              paddingLeft: '1.5rem',
              position: 'relative',
            },
            'ul > li::before': {
              content: '""',
              width: '0.5rem',
              height: '0.5rem',
              borderRadius: '50%',
              backgroundColor: '#0072c6',
              position: 'absolute',
              left: 0,
              top: '0.6875rem',
            },
            a: {
              color: '#0072c6',
              textDecoration: 'none',
              '&:hover': {
                color: '#0058a3',
              },
            },
            img: {
              borderRadius: '0.5rem',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};