<template>
  <nav class="nav">
    <ul
      class="flex flex-row gap-6 items-center max-[700px]:block max-[700px]:ml-10 max-[700px]:mt-16 max-[700px]:space-y-6 max-[700px]:text-center"
    >
      <li>
        <NuxtLink
          to="/"
          class="text-lg font-medium max-[700px]:text-3xl hover:text-primary text-center"
        >
          Home
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/about"
          class="text-lg font-medium max-[700px]:text-3xl hover:text-primary"
        >
          About
        </NuxtLink>
      </li>

      <li>
        <Button
          @click="navigateToRandomCard"
          class="text-md font-medium max-[700px]:text-3xl border-border rounded-full"
        >
          Randomize
        </Button>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
// import { cards } from "@/data/cards";
const colorMode = useColorMode();
const router = useRouter();

async function navigateToRandomCard() {
  const cards = await queryContent("elements-concepts")
    .only(["title", "summary", "essence", "id", "_dir"])
    .find();

  const randomIndex = Math.floor(Math.random() * cards.length);
  const randomCard = cards[randomIndex];
  router.push("/" + randomCard._dir + "/" + randomCard.id);
}
</script>

<style scoped>
.nav {
  @apply max-[700px]:absolute max-[700px]:top-[110%] max-[700px]:rounded-3xl max-[700px]:left-0 max-[700px]:right-0 max-[700px]:w-[100%] max-[700px]:h-0 max-[700px]:bg-red-500 transition-all duration-300 ease-in-out max-[700px]:overflow-hidden;
}
@media (max-width: 700px) {
  .nav {
    @apply bg-background;
  }
  #check:checked ~ .nav {
    height: 30.7rem;
  }
}
.router-link-exact-active {
  @apply text-primary;
}
</style>
