<template>
  <div class="app-code-demo text-3xl">
    <div class="demo-content">
      <ContentSlot :use="$slots.default" unwrap="p" />
    </div>

    <div class="demo-buttons">
      <!-- Use dynamic classes to apply the framework's branding color -->
      <NuxtLink
        v-for="(item, index) in list"
        :key="index"
        :to="item[1]"
        target="_blank"
        class="demo-button"
        :class="getBrandingClass(item[0])"
      >
        <img :src="`/icons/${item[0]}.svg`" :alt="item[0]" />
        <label class="cursor-pointer">{{ constructLabel(item[0]) }}</label>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  list: [string, string][];
}

const props = defineProps<Props>();

const labelsMap: Record<string, string> = {
  vue: "Vue",
  react: "React",
  angular: "Angular",
  svelte: "Svelte",
};

const constructLabel = (key: string): string => {
  return labelsMap[key] || key.charAt(0).toUpperCase() + key.slice(1);
};

// Dynamically assign classes based on the framework name (e.g., vue, react)
const getBrandingClass = (key: string) => {
  switch (key) {
    case "vue":
      return "vue-branding";
    case "react":
      return "react-branding";
    case "angular":
      return "angular-branding";
    case "svelte":
      return "svelte-branding";
    default:
      return "";
  }
};
</script>

<style scoped>
.demo-buttons {
  @apply flex gap-4 mt-4;
}

.demo-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 8px;
  border-radius: 4px;
  text-decoration: none; /* Ensures no underline */
  color: white;
  height: 30px;
}

.demo-button img {
  width: 18px;
  height: 18px;
}

.demo-button label {
  font-size: 14px;
  font-weight: semibold;
}

/* Branding styles for each framework */
.vue-branding {
  @apply hover:bg-[#2c3e50] hover:text-white;
  border: 1px solid #42b883;
}
.vue-branding img {
  width: 14px;
  height: 14px;
}

.react-branding {
  @apply hover:bg-[#3c889d89] hover:text-white;
  border: 1px solid #61dafb;
}
.react-branding img {
  width: 14px;
  height: 14px;
}

.angular-branding {
  @apply hover:bg-[#762d3d9f] hover:text-white;
  border: 1px solid #b4042a;
}

.svelte-branding {
  @apply hover:bg-[#8832159b] hover:text-white;
  border: 1px solid #ff3e00;
}
</style>
