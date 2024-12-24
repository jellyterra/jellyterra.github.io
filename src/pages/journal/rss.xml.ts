import {getCollection} from 'astro:content';
import {getRss} from "../../Rss.ts";

export async function GET(context: any) {
    return getRss(context, await getCollection('journal'), 'journal')
}
