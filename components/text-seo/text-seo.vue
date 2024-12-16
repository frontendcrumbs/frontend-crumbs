<template>
  <SharedRenderContent variant="component" as="div">
    <ContentQuery path="/text-seo" find="one" v-slot="{ data }">
      <ContentRenderer :value="data" />
    </ContentQuery>
  </SharedRenderContent>
</template>

<style scoped></style>
