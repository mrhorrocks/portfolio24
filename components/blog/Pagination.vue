<script setup>
import { computed } from "vue";
const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
  nextPage: {
    type: Boolean,
    required: true,
  },
  baseUrl: {
    type: String,
    required: true,
  },
  pageUrl: {
    type: String,
    required: true,
  },
});

const getPageUrl = pageNo => {
  return `${props.pageUrl}${pageNo}/`;
};
// Calculate the page range to show
const pageRange = [
  Math.max(1, props.currentPage - 1),
  props.currentPage,
  Math.min(props.totalPages, props.currentPage + 1),
];

const prevLink = computed(() => {
  return props.currentPage === 2
    ? props.baseUrl
    : `${props.pageUrl}${props.currentPage - 1}/`;
});
</script>

<template>
  <div class="pagination-list">
    <!-- Back link -->
    <nuxt-link
      v-show="currentPage > 1"
      class="pagination-item pagination-icon"
      :to="prevLink"
    >
      &#60;
    </nuxt-link>
    <!-- First Page -->
    <nuxt-link
      :class="['pagination-item', currentPage === 1 ? 'active' : '']"
      :to="baseUrl"
      >1</nuxt-link
    >
    <!-- ... -->
    <span v-show="currentPage > 2" class="pagination-extra"> ... </span>
    <template v-for="page in pageRange" :key="page">
      <nuxt-link
        v-show="page !== 1 && page !== totalPages"
        :class="['pagination-item', currentPage === page ? 'active' : '']"
        :to="getPageUrl(page)"
        >{{ page }}</nuxt-link
      >
    </template>
    <!-- ... -->
    <span v-show="currentPage < totalPages - 1" class="pagination-extra">
      ...
    </span>

    <!-- Last Page -->
    <nuxt-link
      v-show="totalPages > 1"
      :class="['pagination-item', currentPage === totalPages ? 'active' : '']"
      :to="getPageUrl(totalPages)"
      >{{ totalPages }}</nuxt-link
    >
    <!-- Forward -->
    <nuxt-link
      v-show="currentPage < totalPages"
      class="pagination-item pagination-icon"
      :to="getPageUrl(currentPage + 1)"
    >
      &#62;
    </nuxt-link>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/partials/colours";
.pagination-list {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 2rem 0 0 0;
}

.pagination-item {
  margin: 0.25rem 0.25rem;
  min-width: 2rem;
  line-height: 2rem;
  text-align: center;
  box-sizing: content-box;
  border-radius: 50%;
  color: darken($theme-colour, 20%);
  font-weight: bold;
  background-color: white;
  border: 0.25rem solid darken($light-grey, 30%);
  text-decoration: none;
  // transition: all 0.2s ease;
}

.pagination-item.active {
  color: white;
  min-width: 3rem;
  line-height: 3rem;
  background-color: lighten($dark-grey, 40%);
  border: 0.25rem solid darken($light-grey, 30%);
  cursor: default;
}

.pagination-item:not(.active):hover {
  border: 0.25rem solid darken($light-grey, 50%);
  // min-width: 2.5rem;
  // line-height: 2.5rem;
}

.pagination-extra {
  line-height: 1.45rem;
  text-align: center;
}

// .pagination-icon {
// }
</style>
