import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
        border: 'hsl(var(--border))',
        ring: 'hsl(var(--ring))',
        muted: 'hsl(var(--muted))',
      },
    },
  },
  plugins: [],
};

export default config;
