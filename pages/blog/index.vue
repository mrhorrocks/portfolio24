<script setup>
useHead({
  titleTemplate: "Blog - %s",
});
// Fetching data
const articleCountLimit = 4;
const { data } = await useAsyncData(`content/blog`, async () => {
  const _posts = await queryContent("/blog").only("headline").find();
  return Math.ceil(_posts.length / articleCountLimit);
});
</script>

<template>
  <section>
    <div class="container">
      <h1>Blog</h1>

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
          'featuredImage',
          'image',
        ]"
        :sort="{ date: -1 }"
        :limit="articleCountLimit"
      >
        <div class="grid gap-2 md:cols-2">
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
    </div>
  </section>
</template>
