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
  <article v-for="article in data" :key="article._path">
    <h2>{{ article.headline }}</h2>
    <p>{{ article.description }}</p>
    <p class="date">
      <client-only>
        <strong>{{ $formatDate(article.date) }}</strong>
      </client-only>
    </p>
    <NuxtLink :to="article._path + '/'" class="button">Keep Reading</NuxtLink>
  </article>
  <p v-if="data.length == 0">There are no posts right now.</p>
  <p v-if="data.length == 0" class="no-articles-available">{{ message }}</p>
</template>
