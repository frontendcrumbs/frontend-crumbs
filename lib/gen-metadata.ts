import type { Metadata } from "~/@app";
import { siteConfig as site } from "~/config/site";

export const genMetadata = ({
  title,
  description,
  og,
  x,
}: Partial<Metadata>) => {
  return useHead({
    title: title || site.meta.title,
    titleTemplate: (titleChunk) => `${titleChunk} | ${site.name}`,
    meta: [
      // og
      { name: "description", content: description || site.meta.description },
      {
        hid: "og:title",
        property: "og:title",
        content: og?.title || site.og.title,
      },
      { hid: "og:url", property: "og:url", content: og?.url || site.og.url },
      {
        hid: "og:description",
        property: "og:description",
        content: og?.description || site.og.description,
      },
      {
        hid: "og:image",
        property: "og:image",
        content: og?.image || site.og.image,
      },
      {
        hid: "og:type",
        property: "og:type",
        content: og?.type || site.og.type,
      },
      {
        hid: "og:image:alt",
        property: "og:image:alt",
        content: og?.title || site.og.title,
      },

      // x
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: x?.card || "summary_large_image",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: x?.title || site.x.title,
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: x?.description || site.x.description,
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: x?.image || site.x.image,
      },
    ],
  });
};
