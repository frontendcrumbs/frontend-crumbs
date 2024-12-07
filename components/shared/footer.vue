<template>
  <div class="border-t border-border">
    <footer class="footer">
      <div class="footer__left">
        <NuxtLink to="/" class="flex flex-col gap-2">
          <div class="flex items-center gap-2">
            <IconPlayerRecord class="h-7 w-7 shadow-sm font-bold" />
            <h1 class="text-md font-bold mt-1">FrontendCrumbs</h1>
          </div>
          <p class="text-muted-foreground">
            A go-to resource hub for front-end developers packed with UI/UX
            concepts and design insights
          </p>
        </NuxtLink>
        <div class="footer__socials">
          <IconBrandGithub
            class="h-7 w-7 shadow-sm font-bold hover:text-primary cursor-pointer"
          />
          <IconBrandTwitter
            class="h-7 w-7 shadow-sm font-bold hover:text-primary cursor-pointer"
          />
          <IconBrandLinkedin
            class="h-7 w-7 shadow-sm font-bold hover:text-primary cursor-pointer"
          />
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconPlayerRecord,
} from "@tabler/icons-vue";
</script>

<style scoped>
.footer {
  @apply max-w-5xl mx-auto pt-10 pb-10;
}
.footer__left {
  @apply max-w-[340px] flex flex-col gap-6;
}
.footer__socials {
  @apply flex items-center gap-4;
}
</style>
