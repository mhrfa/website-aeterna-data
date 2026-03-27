import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-geist)', 'Inter', 'system-ui', 'sans-serif'],
                mono: ['var(--font-geist-mono)', 'JetBrains Mono', 'monospace'],
            },
            spacing: {
                section: '10rem',
                hero: '12rem',
            },
            fontSize: {
                'display': ['5.5rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
                'display-lg': ['7.5rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
            }
        },
    },
    plugins: [],
};
export default config;
