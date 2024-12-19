<script setup lang="ts">
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  as?: keyof HTMLElementTagNameMap;
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <component
    :is="as || 'h3'"
    :class="
      cn('text-2xl font-semibold leading-none tracking-tight', props.class)
    "
  >
    <slot />
  </component>
</template>
