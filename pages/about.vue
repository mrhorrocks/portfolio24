<script setup lang="ts">
useHead({
  titleTemplate: "About - %s",
});
</script>

<template>
  <ContentDoc v-slot="{ doc }">
    <article>
      <!-- <h2>{{ doc.title }}</h2> -->
      <ContentRenderer :value="doc" />
    </article>
  </ContentDoc>
</template>
