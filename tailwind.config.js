/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#2196F3',
        'brand-hover': '#1976D2',
        'brand-soft': '#EAF4FF',
        'site-bg': '#F7F9FC',
        'site-surface': '#FFFFFF',
        'text-dark': '#0F172A',
        'text-body': '#64748B',
        'site-border': '#E5EAF0',
      },
    },
  },
  plugins: [],
}
