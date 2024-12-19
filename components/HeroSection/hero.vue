<template>
  <div class="hero">
    <div class="hero__content">
      <p class="hero__heading">
        Crafting Perfect UI/UX, <span class="text-primary">One Crumb</span> at a
        Time
      </p>
      <p class="hero__text">
        A go-to resource hub for front-end developers packed with UI/UX concepts
        and design insights
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.hero__content {
  @apply max-w-[790px] mx-auto flex flex-col items-center gap-4 text-center;
}
.hero__heading {
  @apply font-bold text-center md:leading-[60px] sm:leading-[50px] leading-[40px];
  font-size: clamp(2rem, 6vw, 3.438rem);
}
.hero__text {
  @apply font-medium text-muted-foreground max-w-[600px];
  font-size: clamp(0.875rem, 3vw, 1.125rem);
}
</style>
