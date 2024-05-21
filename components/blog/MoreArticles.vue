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

      <div class="toggle-icon">
        <IconsChevron :class="['', isVisible ? '' : 'rotate-180']" />
      </div>
    </h3>
    <ul :class="['prev-next', isVisible ? 'open' : 'closed']">
      <template v-for="(other, index) in surround" :key="index">
        <li v-if="other">
          <NuxtLink
            :to="other._path + '/'"
            :aria-label="other.headline"
            :title="'Go to ' + other.headline"
          >
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
  position: relative;
  border-bottom: 2px dashed black;
  a {
    &:hover::after {
      background-color: $theme-colour-three;
      color: black;
    }
    &::after {
      content: "Read >>";
      position: absolute;
      top: 5px;
      right: 0rem;
      background-color: black;
      color: white;
      padding: 0.25rem;
      font-size: 0.8rem;
      min-width: 52px;
      text-align: center;
    }
  }
  // &:nth-of-type(2) a {
  //   &:hover::after {
  //     background-color: $theme-colour-three;
  //   }
  //   &::after {
  //     content: "Next >> ";
  //   }
  // }
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
