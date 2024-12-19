<template>
  <div class="cards">
    <div class="grid md:grid-cols-3 gap-3 sm:grid-cols-2">
      <CardsSectionSingleCard
        v-for="{ id, title, essence, summary, _dir } in cards"
        :key="id"
        :title="title ?? 'Card title'"
        :description="summary ?? 'Card description'"
        :link="`/${_dir}/${id}`"
        :category="essence"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content";

interface Props {
  cards?:
    | Pick<ParsedContent, "title" | "summary" | "essence" | "id" | "_dir">[]
    | undefined;
}

const props = defineProps<Props>();
</script>

<style scoped></style>
