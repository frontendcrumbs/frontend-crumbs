<template>
  <nav class="nav">
    <ul
      class="flex items-center px-2 gap-8 max-[700px]:block max-[700px]:ml-10 max-[700px]:mt-16 max-[700px]:space-y-6"
    >
      <li>
        <NuxtLink to="/" class="text-lg max-[700px]:text-3xl hover:text-primary"
          >Home</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="about"
          class="text-lg max-[700px]:text-3xl hover:text-primary"
          >About</NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="" class="text-lg max-[700px]:text-3xl hover:text-primary"
          >Blog</NuxtLink
        >
      </li>

      <!-- <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="outline" class="rounded-full">
            <Icon
              icon="radix-icons:moon"
              class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            />
            <Icon
              icon="radix-icons:sun"
              class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            />
            <span class="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem @click="colorMode.preference = 'light'">
            Light
          </DropdownMenuItem>
          <DropdownMenuItem @click="colorMode.preference = 'dark'">
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem @click="colorMode.preference = 'system'">
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu> -->
    </ul>
  </nav>
</template>

<script lang="ts" setup>
const colorMode = useColorMode();
</script>

<style scoped>
.nav {
  @apply max-[700px]:absolute max-[700px]:top-[110%] max-[700px]:rounded-3xl max-[700px]:left-0 max-[700px]:right-0 max-[700px]:w-[100%] max-[700px]:h-0 max-[700px]:bg-red-500 transition-all duration-300 ease-in-out max-[700px]:overflow-hidden;
}
@media (max-width: 700px) {
  .nav {
    @apply bg-background;
    /* background-color: rgba(122, 122, 122, 0.061);
    backdrop-filter: blur(20px); */
  }
  #check:checked ~ .nav {
    height: 30.7rem;
  }
}
.router-link-exact-active {
  @apply font-semibold text-primary;
}
</style>
