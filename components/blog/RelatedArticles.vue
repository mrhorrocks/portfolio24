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
</script>

<template>
  <div :class="class">
    <h3>More Articles</h3>
    <ul>
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
