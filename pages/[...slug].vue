<template>
  <SharedRenderContent variant="component" as="article" class="mx-auto">
    <ContentRenderer :value="data ?? {}" />
  </SharedRenderContent>
</template>

<script setup lang="ts">
import { siteConfig as site } from "~/config/site";
import { createOgImage } from "~/lib/create-og";
import { genMetadata } from "~/lib/gen-metadata";

const { path } = useRoute();
const cleanPath = path.replace(/\/+$/, "");

const { $app_url } = useRuntimeConfig().public;

const { data } = await useAsyncData(`key-${cleanPath}`, () =>
  queryContent(`elements-concepts${cleanPath}`).findOne()
);

const computedOgImg = computed(() =>
  createOgImage({
    title: data.value?.title ?? "",
    meta: [
      site.domain,
      // $formatDate(data.value?.createdAt),
      data.value?.essence,
    ].join(" · "),
  })
);

genMetadata({
  title: data.value?.metaTitle,
  description: data.value?.metaDesc,
  og: {
    title: data.value?.metaTitle,
    description: data.value?.metaDesc,
    image: computedOgImg.value,
    url: $app_url + cleanPath,
    type: "article",
  },
  x: {
    card: "summary_large_image",
    title: data.value?.metaTitle,
    description: data.value?.metaDesc,
    image: computedOgImg.value,
  },
});
</script>
