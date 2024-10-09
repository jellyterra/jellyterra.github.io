const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'selector',
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        colors: {
            ...colors,
            'light': '#eee',
            'dark': '#1a1a1e'
        },
        extend: {},
    },
    plugins: [],
}
