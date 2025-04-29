// @ts-check
import {defineConfig} from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

// https://astro.build/config
export default defineConfig({
    site: 'https://jellyterra.com',
    integrations: [mdx(), sitemap(), tailwind()],

    devToolbar: {
        enabled: false
    },

    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],

        shikiConfig: {
            themes: {
                light: 'github-light',
                dark: 'github-dark',
            },
        },
    },
});
