<template>
  <Table>
    <TableCaption>{{ caption }}</TableCaption>
    <TableHeader class="border-none">
      <TableRow class="hover:bg-card bg-card border">
        <!-- Render table headers -->
        <TableHead
          v-for="(header, index) in headers"
          :key="index"
          class="text-center py-2 text-lg font-bold"
        >
          {{ header }}
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <!-- Render table rows dynamically -->
      <TableRow
        v-for="(row, rowIndex) in data"
        :key="rowIndex"
        class="hover:bg-transparent border"
      >
        <TableCell
          v-for="(cell, colIndex) in row"
          :key="colIndex"
          class="text-center"
        >
          <!-- Always render as a link button -->
          <span v-if="cell.name.includes('-')">-</span>
          <a
            :href="cell.link"
            target="_blank"
            rel="noopener noreferrer"
            class="link-btn"
            v-else
          >
            <img
              :src="`/icons/${cell.key}.svg`"
              :alt="`${cell.name} icon`"
              class="w-5 h-5"
            />
            <span class="text-foreground">{{ cell.name }}</span>
          </a>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>

<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

defineProps({
  caption: {
    type: String,
    required: true,
  },
  headers: {
    type: Array as () => string[], // List of column headers
    required: true,
  },
  data: {
    type: Array as () => Array<{ name: string; key: string; link: string }[]>, // Array of rows with link-btn objects
    required: true,
  },
});
</script>

<style scoped>
.link-btn {
  @apply rounded-full bg-card  hover:bg-foreground/15;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 8px;
  text-decoration: none; /* Ensures no underline */
  width: 5.5rem;
  margin: auto;
  height: 30px;
}
.link-btn img {
  width: 14px;
  height: 14px;
}
</style>
