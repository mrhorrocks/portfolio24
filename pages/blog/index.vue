<script setup>
useHead({
  titleTemplate: "Blog - %s",
});
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
          'image',
        ]"
        :sort="{ date: 1 }"
        :limit="articleCountLimit"
      >
        <div class="md:grid md:cols-3">
          <div class="col-span-3 md:grid md:cols-2 md:gap-3">
            <BlogList :data="data" />
          </div>
          <!-- <div class="col-span-1">c</div> -->
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
