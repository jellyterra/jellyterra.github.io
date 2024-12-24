export interface PostEntry {
    prefix: string,
    slug: string,
    title: string,
    latestUpdate: Date,
}

export async function genPostEntries(context: any, posts: any, prefix: string) {
    let entries: PostEntry[] = []
    posts.forEach((post: any) => {
        entries.push({
            prefix: prefix,
            slug: post.slug,
            title: post.data.title,
            latestUpdate: post.data.updateDate || post.data.pubDate,
        })
    })
    return new Response(JSON.stringify(entries));
}
