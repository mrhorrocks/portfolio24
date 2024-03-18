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
    <!-- Featured image -->
    <NuxtLink :to="article._path + '/'">
      <img v-if="article.featuredImage" :src="article.featuredImage" alt="" />
    </NuxtLink>

    <div>
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
    </div>
  </article>
  <p v-if="data.length == 0">There are no posts right now.</p>
  <p v-if="data.length == 0" class="no-articles-available">{{ message }}</p>
</template>

<style lang="scss">
.blog-index-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  padding: 1.5rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  border: transparent;
  box-shadow: 1px 3px 4px #00000020;
  > a > img {
    margin-bottom: 0.5rem;
  }
  .blog-index-card-heading {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (min-width: 1024px) {
      flex-direction: row;
    }
    h2 {
      padding: 0 0 0.5rem 0;
    }
  }
  .date {
    font-size: 0.8rem;
    opacity: 0.8;
    margin: 0 0 1rem 0;
  }
}
</style>
