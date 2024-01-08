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
    <h3 @click="toggleHeader" aria-label="Expand more articles.">
      More Articles
      <IconsChevron
        :class="['', isVisible ? '' : 'rotate-180']"
        width="24"
        height="24"
      />
    </h3>
    <ul :class="['prev-next', isVisible ? 'open' : 'closed']">
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
@import "../../assets/scss/partials/_colours";
ul.prev-next > li {
  border-bottom: 2px dashed black;
  &:nth-of-type(1) a {
    &:hover::after {
      background-color: $selection-color;
    }
    &::after {
      content: ">> next ";
      position: absolute;
      right: 0.5rem;
      background-color: darken(limegreen, 10%);
      color: white;
      padding: 0.1rem 0.8rem 0.1rem 0.5rem;
      font-size: 0.8rem;
    }
  }
  &:nth-of-type(2) a {
    &:hover::after {
      background-color: $selection-color;
    }
    &::after {
      content: "<< prev ";
      position: absolute;
      right: 0.5rem;
      background-color: darken(skyblue, 20%);
      color: white;
      padding: 0.1rem 0.8rem 0.1rem 0.5rem;
      font-size: 0.8rem;
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
