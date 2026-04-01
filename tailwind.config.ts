import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        surface: '#F8FAFC',
        ink: '#0F172A',
        brand: '#2563EB',
        accent: '#14B8A6'
      },
      boxShadow: {
        card: '0 10px 30px rgba(15, 23, 42, 0.08)'
      }
    }
  },
  plugins: []
};

export default config;
