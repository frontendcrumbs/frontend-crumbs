<template>
  <div class="home">
    <HeroSectionHero />

    <SearchSectionSearch
      :selected-category="selectedCategory"
      :search-query="searchQuery"
      @update-search="updateSearch"
      @update-category="updateCategory"
    />
    <CardsSectionCards :cards="paginatedCards" />

    <Pagination
      :total="filteredCards.length"
      :itemsPerPage="itemsPerPage"
      v-model:page="currentPage"
      :showEdges="true"
      :siblingCount="1"
      class="flex justify-center mt-4"
    >
      <PaginationList v-slot="{ items }" class="flex items-center gap-1">
        <PaginationPrev />

        <template v-for="(item, index) in items" :key="index">
          <PaginationListItem
            v-if="item.type === 'page'"
            :value="item.value"
            as-child
          >
            <Button
              class="w-10 h-10 p-0"
              :variant="item.value === currentPage ? 'default' : 'outline'"
            >
              {{ item.value }}
            </Button>
          </PaginationListItem>
          <PaginationEllipsis v-else />
        </template>

        <PaginationNext />
      </PaginationList>
    </Pagination>

    <TextSeo class="mt-20 max-w-full" />

    <!-- <demosAppCodeDemo
      :list="[
        ['vue', 'https://codesandbox.io/s/vue-demo'],
        ['react', 'https://codesandbox.io/s/react-demo'],
        ['angular', 'https://codesandbox.io/s/vue-demo'],
        ['svelte', 'https://codesandbox.io/s/react-demo'],
      ]"
    >
      <demosDemoTabs />
    </demosAppCodeDemo> -->
  </div>
</template>

<script lang="ts" setup>
import { cards } from "@/data/cards";

const selectedCategory = ref<string>("all");
const searchQuery = ref<string>("");

// Reactive state
const currentPage = ref(1);
const itemsPerPage = 6;

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

const paginatedCards = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return filteredCards.value.slice(startIndex, endIndex);
});

function updateCategory(Category: string) {
  selectedCategory.value = Category;
  currentPage.value = 1; // Reset page
}
function updateSearch(query: string) {
  searchQuery.value = query;
  currentPage.value = 1; // Reset page
}
</script>

<style scoped>
.home {
  @apply px-4 lg:px-0 max-w-5xl mx-auto;
}
</style>
