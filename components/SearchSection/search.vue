<template>
  <div class="search">
    <div class="relative w-full max-w-sm items-center">
      <Input
        id="search"
        type="text"
        placeholder="Search..."
        v-model="localSearchQuery"
        @input="emitSearch"
        class="pl-10 border-border focus-visible:ring-2 focus-visible:ring-offset-0"
      />
      <span
        class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
      >
        <Search class="size-6 text-muted-foreground" />
      </span>
    </div>

    <!-- Select dropdown -->
    <Select v-model="localCategory" @update:model-value="emitCategory">
      <SelectTrigger class="w-[180px] border-border">
        <SelectValue placeholder="All" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup class="cursor-pointer">
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="elements">Elements</SelectItem>
          <SelectItem value="concepts">Concepts</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</template>

<script setup lang="ts">
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-vue-next";

const props = defineProps<{
  selectedCategory: string;
  searchQuery: string;
}>();

const emit = defineEmits(["update-category", "update-search"]);

// Initialize local state from props
const localCategory = ref(props.selectedCategory);
const localSearchQuery = ref(props.searchQuery);

// Watch for changes in localCategory and emit updates
watch(localCategory, (newValue) => {
  emit("update-category", newValue);
});
watch(localSearchQuery, (newValue) => {
  emit("update-search", newValue);
});

// Function to handle category change (optional)
function emitCategory(value: string) {
  localCategory.value = value;
}

function emitSearch() {
  emit("update-search", localSearchQuery.value);
}
</script>

<style scoped>
.search {
  @apply flex flex-row items-center gap-4 justify-center mt-16 mb-10;
}
</style>

<!-- ring-offset-background focus:ring-0 focus:ring-ring focus:ring-offset-0 -->
