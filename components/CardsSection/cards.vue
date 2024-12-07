<template>
  <div class="cards">
    <div class="grid md:grid-cols-3 gap-3 sm:grid-cols-2">
      <CardsSectionSingleCard
        v-for="card in cards"
        :key="card.id"
        :title="card.title"
        :description="card.description"
        :link="card.link"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  cards: Array<{
    id: number;
    title: string;
    slug: string;
    description: string;
    link: string;
    category: string;
  }>;
}

const props = defineProps<Props>();
</script>

<style scoped></style>
