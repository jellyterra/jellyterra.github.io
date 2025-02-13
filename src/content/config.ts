import {defineCollection, z} from 'astro:content';

const blog = defineCollection({
    type: 'content',
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string(),
        description: z.string(),
        lang: z.string(),
        tags: z.array(z.string()),
        // Transform string to Date object
        pubDate: z.coerce.date(),
        updateDate: z.coerce.date().optional(),
        comment: z.boolean().optional(),
        heroImage: z.string().optional(),
        sideImage: z.string().optional(),
        backgroundImage: z.string().optional(),
    }),
});

const journal = defineCollection({
    type: 'content',
    schema: z.object({
        lang: z.string(),
        title: z.string(),
        pubDate: z.coerce.date(),
        backgroundImage: z.string().optional(),
    }),
});


export const collections = {blog, journal};
