import {
  getCollection,
  type CollectionEntry,
  type CollectionKey,
} from "astro:content";

export async function getSinglePage<
  C extends CollectionKey,
  E extends CollectionEntry<C>
>(collection: C): Promise<E[]> {
  const allPage = await getCollection<C, E>(collection);

  const removeIndex = allPage.filter((data: any) => data.id.match(/^(?!-)/));
  const removeDrafts = removeIndex.filter((data: any) => !data.data.draft);

  // order by "weight", default to 0, highest first
  const ordered = removeDrafts.sort((a: any, b: any) =>
    a.data.weight > b.data.weight ? -1 : 1
  );

  return ordered;
}
