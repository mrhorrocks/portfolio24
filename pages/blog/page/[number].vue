<script setup>
useHead({
  titleTemplate: "More Articles - %s",
});
// Fetching data
const articleCountLimit = 4;
const { path, params } = useRoute();

const getPageLimit = totalPosts => {
  return Math.ceil(totalPosts / articleCountLimit);
};

const getPageNumber = () => {
  return Number(params.number);
};

// Attempt to get the number
const router = useRouter();
let pageNo;
try {
  pageNo = getPageNumber();
  if (isNaN(pageNo) || pageNo <= 0) {
    router.replace("/blog/");
  }
} catch (err) {
  console.error(err);
  router.replace("/blog/");
}
</script>

<template>
  <section>
    <div class="container">
      <h1>MORE ARTICLES</h1>

      <!-- Query for the given blog page number -->
      <ContentQuery
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
        :skip="articleCountLimit * (getPageNumber() - 1)"
        :limit="articleCountLimit"
      >
        <!-- In case it is found -->
        <template v-slot="{ data }">
          <div class="md:grid md:cols-2">
            <BlogList :data="data" />
          </div>

          <!-- CALCULATED PAGINATION -->
          <ContentQuery path="/blog" :only="['headline']">
            <template v-slot="{ data }">
              <BlogPagination
                v-if="getPageLimit(data.length) > 1"
                :currentPage="getPageNumber()"
                :totalPages="getPageLimit(data.length)"
                :nextPage="getPageNumber() < getPageLimit(data.length)"
                baseUrl="/blog/"
                pageUrl="/blog/page/"
              />
            </template>
            <template #not-found> </template>
          </ContentQuery>
        </template>
        <!-- In case not found -->
        <template #not-found>
          <!-- Show hero and message -->
          <BlogList
            :data="[]"
            message="There are no posts here... They may have been removed."
          />
        </template>
      </ContentQuery>
    </div>
  </section>
</template>
