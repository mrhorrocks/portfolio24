<script setup>
defineProps({
  surround: {
    type: Array,
    required: true,
  },
  class: {
    type: String,
  },
});
import { ref } from "vue";
const isVisible = ref(true);
const toggleHeader = () => {
  isVisible.value = !isVisible.value;
};
</script>

<template>
  <div :class="class">
    <h3 @click="toggleHeader" aria-label="Expand the table of contents.">
      More Articles
    </h3>
    <ul :class="['', isVisible ? 'open' : 'closed']">
      <template v-for="(other, index) in surround" :key="index">
        <li v-if="other">
          <NuxtLink :to="other._path + '/'" :aria-label="other.headline">
            {{ other.headline }}
          </NuxtLink>
        </li>
      </template>
    </ul>
  </div>
</template>

<style lang="scss">
.closed {
  display: none;
}

.open {
  display: block;
}
</style>
