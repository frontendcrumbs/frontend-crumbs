import { serverQueryContent } from "#content/server";
import { asSitemapUrl, defineSitemapEventHandler } from "#imports";
import { ParsedContent } from "@nuxt/content";

export default defineSitemapEventHandler(async (e) => {
  const contentList = (await serverQueryContent(e).find()) as ParsedContent[];
  const urls = [
    {
      loc: "/",
      lastmod: new Date(),
    },
    {
      loc: "/about",
      lastmod: new Date(),
    },
  ];
  contentList
    .filter((c) => c._path?.startsWith("/elements-concepts"))
    .map((c) => {
      urls.push({
        loc: c._dir + "/" + c.id,
        lastmod: new Date(c.updatedAt),
      });
    });

  return asSitemapUrl(urls);
});
