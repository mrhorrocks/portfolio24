<script setup lang="ts">
defineProps({
  links: {
    type: Array,
    required: true,
  },
  class: {
    type: String,
  },
});

// flatten TOC links nested arrays to one array
const flattenLinks = (links: any[]) => {
  let _links = links
    .map(link => {
      let _link = [link];
      if (link.children) {
        // recursively flatten children links
        let flattened = flattenLinks(link.children);
        _link = [link, ...flattened];
      }
      return _link;
    })
    .flat(1);
  return _links;
};

import { ref } from "vue";
const isVisible = ref(true);
const toggleHeader = () => {
  isVisible.value = !isVisible.value;
};
</script>

<template>
  <div :class="class">
    <!-- Toc header -->
    <h3 @click="toggleHeader" aria-label="Expand the table of contents.">
      Table of Contents
    </h3>

    <!-- Toc list -->
    <ul v-if="links" :class="['', isVisible ? 'open' : 'closed']">
      <li
        v-for="link of flattenLinks(links)"
        :key="link.id"
        :class="`link_${link.depth}`"
      >
        <a :href="`#${link.id}`">{{ link.text }}</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.heading_3 {
  padding-left: 0.1rem;
}

.heading_3::before {
  content: "·";
}

.closed {
  display: none;
}

.open {
  display: block;
}
</style>
