import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--bg-primary)',
        colored: 'var(--bg-colored)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
      },
    },
    fontFamily: {
      sans: ['Cairo', 'sans-serif'],
    },
    screens: {
      mobile: { max: '639px' },
      tablet: '640px',
      desktop: '1024px',
    },
  },
})
