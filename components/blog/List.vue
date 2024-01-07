<script setup>
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  message: {
    type: String,
    default: "There are no posts right now...",
  },
});
</script>

<template>
  <article v-for="article in data" :key="article._path" class="blog-index-card">
    <img :src="article.featuredImage" alt="" />
    <div class="blog-index-card-heading">
      <h2>{{ article.headline }}</h2>
      <span class="date">
        <client-only>{{ $formatDate(article.date) }} </client-only>
      </span>
    </div>
    <p>{{ article.description }}</p>
    <NuxtLink :to="article._path + '/'" class="button blog-index-button"
      >Keep Reading</NuxtLink
    >
  </article>
  <p v-if="data.length == 0">There are no posts right now.</p>
  <p v-if="data.length == 0" class="no-articles-available">{{ message }}</p>
</template>

<style>
.blog-index-card {
  background-color: white;
  padding: 1.5rem;
  box-sizing: border-box;
  border-radius: 0.75rem;
  border: transparent;
  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.1254901961);
  .blog-index-card-heading {
    display: flex;
    justify-content: space-between;
    h2 {
      padding-top: 0;
    }
  }
  .date {
    font-size: 0.8rem;
    font-style: italic;
    opacity: 0.8;
  }
}
</style>
