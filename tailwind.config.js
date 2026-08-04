/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary brand palette — soft, muted terracotta-brown.
        // Mirrors OUH's understated blue: present everywhere, never shouting.
        'hospital-brown': {
          50: '#FBF5EE',
          100: '#F3E6D8',
          200: '#E8D2B8',
          300: '#DBB897',
          400: '#C6A17B',
          500: '#B08968', // primary — buttons, links, active states, icon fills
          600: '#93714F', // hover/active
          700: '#785A3E',
          800: '#5F4630',
          900: '#4A3626'
        },
        // Reserved for urgent/emergency CTAs only (e.g. "Emergency Department").
        // Kept separate from the brand palette so it stays rare and meaningful.
        emergency: {
          50: '#FBEAE7',
          100: '#F5D0C9',
          500: '#C0392B',
          600: '#A93226',
          700: '#8C291F'
        }
      },
      borderRadius: {
        none: '0',
        sm: '4px',
        DEFAULT: '8px',
        md: '10px',
        lg: '14px',
        xl: '20px',
        full: '9999px'
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif']
      }
    }
  },
  plugins: []
}
