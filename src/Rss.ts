import rss from '@astrojs/rss';
import {SITE_DESCRIPTION, SITE_TITLE} from './consts.ts';

export async function getRss(context: any, posts: any, prefix: string) {
    return rss({
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        site: context.site,
        items: posts.map((post) => ({
            ...post.data,
            link: `/${prefix}/${post.slug}/`,
        })),
    });
}
