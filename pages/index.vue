<template>
  <div class="home">
    <HeroSectionHero />

    <SearchSectionSearch
      :selected-category="selectedCategory"
      :search-query="searchQuery"
      @update-search="updateSearch"
      @update-category="updateCategory"
    />
    <CardsSectionCards :cards="filteredCards" />
    <!-- <CardsSectionCards :cards="filteredCards" /> -->
  </div>
</template>

<script lang="ts" setup>
import { cards } from "@/data/cards";

// Reactive state for the selected category
const selectedCategory = ref<string>("all");
const searchQuery = ref<string>("");

// Filtered cards based on the selected category
const filteredCards = computed(() =>
  cards.value.filter((card) => {
    const matchesCategory =
      selectedCategory.value === "all" ||
      card.category === selectedCategory.value;

    const matchesSearch =
      !searchQuery.value ||
      card.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      card.description.toLowerCase().includes(searchQuery.value.toLowerCase());
    return matchesCategory && matchesSearch;
  })
);

function updateCategory(Category: string) {
  selectedCategory.value = Category;
}
function updateSearch(query: string) {
  searchQuery.value = query;
}
</script>

<style scoped>
.home {
  @apply px-4 lg:px-0 max-w-5xl mx-auto;
}
</style>

<!-- <div class="search__buttons">
      <Button variant="outline" class="border-border">Element</Button>
      <Button variant="outline" class="border-border">Concept</Button>
    </div> -->
