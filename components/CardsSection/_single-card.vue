<template>
  <div class="single-card">
    <NuxtLink :to="link">
      <Card>
        <CardHeader>
          <CardTitle>
            {{ props.title }}
          </CardTitle>
        </CardHeader>
        <CardContent class="text-muted-foreground">
          {{ props.description }}
        </CardContent>
      </Card>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  title: string;
  description: string;
  link: string;
}

const props = defineProps<Props>();
</script>

<style scoped>
.single-card {
  @apply transition-all duration-300 ease-in-out rounded-lg hover:shadow-[0px_0px_0px_1px] hover:shadow-primary;
}
</style>
<!-- hover:scale-105 -->

<!-- The NavBar is a key element for navigation, providing users with quick
          access to the most important sections of your website. -->
