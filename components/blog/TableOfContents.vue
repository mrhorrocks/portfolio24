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

      <div class="toggle-icon">
        <IconsChevron :class="['', isVisible ? '' : 'rotate-180']" />
      </div>
    </h3>

    <!-- Toc list -->
    <ul v-if="links" :class="['', isVisible ? 'open' : 'closed']">
      <li
        v-for="link of flattenLinks(links)"
        :key="link.id"
        :class="`link_${link.depth}`"
      >
        <NuxtLink :href="`#${link.id}`">{{ link.text }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/partials/_colours";

.link_2 {
  // text-indent: 1rem;
  font-weight: bold;
  a {
    font-size: 1.1rem;
    &::before {
      content: "• ";
    }
  }
}
.link_3 {
  a {
    // text-indent: 1rem;
    font-size: 0.9rem;
    &::before {
      content: "•• ";
    }
  }
}
.closed {
  display: none;
}
.open {
  display: block;
}
.rotate-180 {
  transform: rotate(180deg);
}
</style>
