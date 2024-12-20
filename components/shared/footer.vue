<template>
  <div class="border-t border-border">
    <footer class="footer">
      <div class="footer__left">
        <div class="flex flex-col gap-2">
          <NuxtLink to="/" class="flex items-center">
            <!-- <IconPlayerRecord class="h-7 w-7 shadow-sm font-bold" /> -->
            <img src="/favicon.svg" class="size-8 mr-1" />
            <h1 class="text-xl font-semibold mt-1">Frontend</h1>
            <h1 class="text-xl font-semibold mt-1">Crumbs</h1>
          </NuxtLink>
          <p class="text-muted-foreground">
            A go-to resource hub for front-end developers packed with UI/UX
            concepts and design insights
          </p>
        </div>
        <div class="footer__socials">
          <component
            v-for="{ Icon, href, label } in siteConfig.socials"
            :is="Icon"
            class="h-7 w-7 shadow-sm font-bold hover:text-primary cursor-pointer"
          />
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { IconPlayerRecord } from "@tabler/icons-vue";
import { siteConfig } from "~/config/site";
</script>

<style scoped>
.footer {
  @apply max-w-5xl mx-auto pt-10 pb-10 px-6;
}
.footer__left {
  @apply max-w-[340px] flex flex-col gap-6;
}
.footer__socials {
  @apply flex items-center gap-4;
}
</style>
