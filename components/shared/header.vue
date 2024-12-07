<template>
  <header class="header">
    <NuxtLink to="/" class="flex items-center gap-2">
      <IconPlayerRecord class="h-7 w-7 shadow-sm font-bold" />
      <h1 class="text-md font-bold mt-1">FrontendCrumbs</h1>
    </NuxtLink>
    <input type="checkbox" id="check" class="hidden" />
    <label
      for="check"
      class="header__icons max-[700px]:absolute max-[700px]:right-5 max-[700px]:inline-flex min-[700px]:hidden"
    >
      <IconMenu2 class="h-7 w-7 text-primary cursor-pointer" id="menu-icon" />
      <IconX
        class="h-7 w-7 text-primary cursor-pointer max-[700px]:hidden"
        id="close-icon"
      />
    </label>

    <SharedHeaderNav />
  </header>
</template>

<script lang="ts" setup>
import { IconMenu2, IconPlayerRecord, IconX } from "@tabler/icons-vue";
</script>

<style>
.header {
  @apply bg-transparent  flex justify-between  fixed top-0 left-0 right-0 lg:mx-auto max-w-screen-lg z-10 py-2 px-4 mx-4 shadow-md rounded-full mt-4;
}
.header::before {
  @apply bg-transparent border-border border-2;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50px;

  /* background-color: rgba(122, 122, 122, 0.061); */
  backdrop-filter: blur(4px);
  z-index: -1;
}
@media (max-width: 700px) {
  #check:checked ~ .header__icons #menu-icon {
    display: none; /* Hide menu icon when checkbox is checked */
  }
  #check:checked ~ .header__icons #close-icon {
    display: block; /* Show close icon when checkbox is checked */
  }
}
</style>

<!-- @apply fixed top-0 left-0 right-0 mx-auto max-w-screen-lg z-10 pt-4; -->
