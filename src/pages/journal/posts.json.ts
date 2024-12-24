import {getCollection} from 'astro:content';
import {genPostEntries} from "../../PostEntry.ts";

export async function GET(context: any) {
    return genPostEntries(context, await getCollection('journal'), 'journal')
}
