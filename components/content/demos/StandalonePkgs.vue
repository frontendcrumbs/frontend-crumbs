<template>
  <div class="pkgs mt-6">
    <Accordion
      type="single"
      collapsible
      class="prose-headings:mt-0 prose-headings:text-base"
    >
      <AccordionItem
        v-for="(packages, category) in list"
        :key="category"
        :value="`${category}`"
        class="hover:no-underline mt-0 pt-0 border-b-0 mb-2 bg-card border rounded-xl"
      >
        <AccordionTrigger
          class="trigger capitalize px-4 py-0 flex items-center justify-between mt-3 hover:no-underline font-bold"
          >{{ category }}</AccordionTrigger
        >
        <AccordionContent class="border-b-none border-b-0">
          <ul class="flex flex-col gap-2 p-0 pl-4 mt-2">
            <li
              v-for="pkg in packages"
              :key="pkg"
              class="hover:underline text-base ml-6 p-0 py-0 mt-0 mb-0"
            >
              <a
                :href="`https://www.google.com/search?q=${pkg}`"
                target="_blank"
                class="!text-foreground"
              >
                {{ pkg }}
              </a>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>

<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface PackageList {
  [key: string]: string[];
}

defineProps<{
  list: PackageList;
}>();
</script>

<style scoped></style>
