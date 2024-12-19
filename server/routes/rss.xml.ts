import { serverQueryContent } from "#content/server";
import { ParsedContent } from "@nuxt/content";
import RSS from "rss";
import { siteConfig as site } from "~/config/site";

export default defineEventHandler(async (e) => {
  const { $app_url } = useRuntimeConfig().public;
  const siteURL = $app_url;
  const contentList = (await serverQueryContent(e).find()) as ParsedContent[];

  const content = contentList.filter((c) =>
    c._path?.startsWith("/elements-concepts")
  );

  const feed = new RSS({
    title: site.meta.title,
    description: site.meta.description,
    feed_url: `${siteURL}/rss.xml`,
    site_url: `${siteURL}/`,
    copyright: `Copyright ${new Date().getFullYear().toString()}, ${site.name}`,
    language: "en-US",
    pubDate: new Date().toUTCString(),
    ttl: 60,
  });

  if (content) {
    content.map(({ metaTitle, metaDesc, essence, _dir, id, createdAt }) => {
      feed.item({
        title: metaTitle,
        description: metaDesc,
        url: _dir + "/" + id,
        categories: [essence],
        author: "",
        date: new Date(createdAt).toUTCString(),
      });
    });
  }

  const feedString = feed.xml({ indent: true });
  e.node.res.setHeader("Content-Type", "text/xml");
  e.node.res.end(feedString);
});
