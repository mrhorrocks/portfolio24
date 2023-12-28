<script setup>
useHead({
  titleTemplate: "Articles - %s",
});
const articleCountLimit = 5;
const { data } = await useAsyncData(`content/blog`, async () => {
  const _posts = await queryContent("/blog").only("headline").find();
  return Math.ceil(_posts.length / articleCountLimit);
});
</script>

<template>
  <h1>BLOG INDEX</h1>

  <ContentQuery
    v-slot="{ data }"
    path="/blog"
    :only="[
      'headline',
      'description',
      'excerpt',
      'date',
      'tags',
      '_path',
      'image',
    ]"
    :sort="{ date: -1 }"
    :limit="articleCountLimit"
  >
    <div class="grid cols-2">
      <BlogList :data="data" />
    </div>

    <p v-if="data.length == 0">
      There are no posts right now, but stay tuned for newer releases in the
      future
    </p>
  </ContentQuery>

  <!-- Pagination -->
  <BlogPagination
    v-if="data > 1"
    :currentPage="1"
    :totalPages="data"
    :nextPage="data > 1"
    baseUrl="/blog/"
    pageUrl="/blog/page/"
  />
</template>
