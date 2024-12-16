<template>
  <component
    :is="as || 'article'"
    class="article prose prose-md prose-p:text-foreground prose-a:no-underline prose-strong:text-foreground prose-li:text-foreground prose-code:text-foreground prose-headings:text-foreground prose-a:text-primary prose-tr:text-foreground dark:prose-invert prose-pre:bg-card"
    v-if="variant === 'page'"
  >
    <ContentDoc />
  </component>
  <component
    :is="as || 'article'"
    class="article prose prose-md prose-p:text-foreground prose-a:no-underline prose-strong:text-foreground prose-li:text-foreground prose-code:text-foreground prose-headings:text-foreground prose-a:text-primary prose-tr:text-foreground dark:prose-invert prose-pre:bg-card"
    v-else-if="variant === 'component'"
  >
    <slot />
  </component>
  <p v-else>please specify a variant</p>
</template>

<script setup lang="ts">
defineProps<{
  as: keyof HTMLElementTagNameMap;
  variant: "page" | "component";
}>();
</script>

<style scoped>
.article {
  :deep(div) {
    dl {
      @apply text-foreground;
    }
  }
  :deep(div) {
    dt {
      @apply text-foreground;
    }
  }
}
</style>

/* .article { :deep(div) { h1 { @apply text-3xl font-bold; } } } */
