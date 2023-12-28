<script setup lang="js">
const siteName = useRuntimeConfig().public.siteName; useHead({
  titleTemplate: "%s - Blog - " + siteName,
});

const { path } = useRoute();
const cleanPath = path.replace(/\/+$/, "");
const { data, error } = await useAsyncData(`content-${cleanPath}`, async () => {
  // Remove a trailing slash in case the browser adds it, it might break the routing
  // fetch document where the document path matches with the cuurent route
  let article = queryContent("/blog").where({ _path: cleanPath }).findOne();
  // get the surround information,
  // which is an array of documeents that come before and after the current document
  let surround = queryContent("/blog")
    .sort({ date: -1 })
    .only(["_path", "headline"])
    .findSurround(cleanPath, { before: 1, after: 1 });
  return {
    article: await article,
    surround: await surround,
  };
});
</script>

<template>
  <ContentDoc>
    <template v-slot="{ doc }">
      <header class="article-header">
        <!-- Breadcrumb and date -->
        <div class="page-details">
          <ol class="breadcrumb">
            <li><nuxt-link href="/">Home/</nuxt-link></li>
            <li><nuxt-link href="/blog/">Blog/</nuxt-link></li>
            <li>
              <span>{{ doc.headline }}</span>
            </li>
          </ol>

          <!-- Publish date -->
          <div class="publish-date">
            <client-only>{{ $formatDate(doc.date) }}</client-only>
          </div>
        </div>
        <h2>{{ doc.headline }}</h2>
        <!-- Author -->
        <div class="author">
          <a :href="doc.authorUrl" target="_blank" rel="noopener noreferrer">{{
            doc.author
          }}</a>
        </div>
      </header>

      <div class="grid cols-3 gap-1">
        <div class="content">
          <!-- MAIN ARTICLE -->
          <ContentRenderer :value="doc" tag="article" />
          <div class="social">
            <div class="share">Share icons here</div>
          </div>
        </div>
        <!-- ASIDE -->
        <aside class="aside">
          <div>
            <BlogTableOfContents :links="doc.body?.toc?.links" class="toc" />
            <BlogMoreArticles
              v-if="data?.surround?.filter(elem => elem !== null)?.length > 0"
              :surround="data?.surround"
              class="more-articles"
            />
          </div>
        </aside>
      </div>
    </template>

    <template #not-found>
      <h2>Blog slug ({{ $route.params.slug }}) not found</h2>
    </template>
  </ContentDoc>
</template>

<style lang="scss">
@import "@/assets/scss/partials/colours";
@media (min-width: 768px) {
  div.content {
    grid-column: span 2 / span 2; // 2 cols
  }
  aside.aside {
    grid-column: span 1 / span 1; // 1 col
    position: sticky;
    top: 0rem;
    div {
      position: sticky;
      top: 0rem;
    }
  }
}

.page-details {
  background-color: darken($theme-colour-two, 7.5%);
  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }

  ol.breadcrumb {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    background-color: darken($theme-colour, 2.5%);

    li {
      a {
        display: block;
        line-height: 2rem;
        &:hover {
          background-color: lighten($theme-colour, 10%);
        }
      }
      span {
        line-height: 2rem;
      }
    }
  }
  .publish-date {
    background-color: darken($theme-colour, 5%);
    line-height: 2rem;
  }
}

.toc {
  background-color: lighten($theme-colour, 10%);
}

.social {
  display: flex;
  justify-content: space-between;
  background-color: $theme-colour;
}

.more-articles {
  background-color: lighten($theme-colour, 20%);
}
</style>
