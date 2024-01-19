<script setup lang="js">
// const siteName = useRuntimeConfig().public.siteName;
useHead({
  titleTemplate: "%s - Blog - MHOX "
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
  <section>
    <div class="container">
      <ContentDoc>
        <template v-slot="{ doc }">
          <header class="article-header">
            <!-- Breadcrumb and date -->
            <div class="page-details">
              <ol class="breadcrumb">
                <li><nuxt-link href="/">Home</nuxt-link> /&nbsp;</li>
                <li><nuxt-link href="/blog/">Blog</nuxt-link> /&nbsp;</li>
                <li>
                  <span>{{ doc.headline }}</span>
                </li>
              </ol>

              <!-- Publish date -->
              <div class="publish-date">
                <client-only>{{ $formatDate(doc.date) }}</client-only>
              </div>
            </div>

            <h1>{{ doc.headline }}</h1>
            <p>{{ doc.description }}</p>

            <div class="author">
              by:
              <a
                :href="doc.authorUrl"
                target="_blank"
                rel="noopener noreferrer"
                >{{ doc.author }}</a
              >
            </div>
          </header>

          <div class="md:grid md:cols-3 md:gap-3">
            <div class="content">
              <!-- featuredImage -->
              <div v-if="doc.featuredImage" class="featured-image">
                <img :src="doc.featuredImage" :alt="doc.featuredImageAltText" />
              </div>

              <!-- MAIN ARTICLE -->
              <ContentRenderer :value="doc" tag="article" />
            </div>

            <!-- ASIDE -->
            <aside id="blog-aside">
              <div class="social">
                <NuxtLink href="https://www.linkedin.com/in/mrmarkhorrocks/">
                  <IconsLinkedin />
                </NuxtLink>
                <NuxtLink href="https://github.com/mrhorrocks">
                  <IconsGithub />
                </NuxtLink>
              </div>

              <BlogTableOfContents :links="doc.body?.toc?.links" class="toc" />
              <BlogMoreArticles
                v-if="data?.surround?.filter(elem => elem !== null)?.length > 0"
                :surround="data?.surround"
                class="more-articles"
              />
            </aside>
          </div>
        </template>

        <template #not-found>
          <h2>Blog slug ({{ $route.params.slug }}) not found</h2>
        </template>
      </ContentDoc>
    </div>
  </section>
</template>

<style lang="scss">
@import "../../assets/scss/partials/_colours";

header.article-header {
  margin: 0 0 1.5rem 0;
  text-align: center;
  background: white;
  padding: 0.5rem;
  box-shadow: 1px 3px 4px #00000020;
  @media (min-width: 768px) {
    text-align: left;
    padding: 1rem;
  }
  h1 {
    margin: 0;
    font-size: 2.5rem;
    text-transform: uppercase;
    @media (min-width: 768px) {
      margin: 1rem 0;
    }
  }
}

.page-details {
  font-size: 0.8rem;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }

  ol.breadcrumb {
    display: inline-flex;
    @media (min-width: 768px) {
      display: flex;
    }
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      a {
        display: inline-block;
        text-decoration: none;
        background-color: black;
        color: white;
        padding: 0.25rem;
        &:hover {
          background-color: $theme-colour-three;
          color: white;
        }
      }
      span {
        padding: 0.25rem;
        display: inline-block;
      }
    }
  }
  .publish-date {
    padding: 0.25rem 0;
  }
}

.author {
  font-size: 0.8rem;
  text-align: center;
  @media (min-width: 768px) {
    text-align: right;
  }
  a {
    color: black;
  }
}

div.content {
  background: white;
  padding: 0.5rem;
  box-shadow: 1px 3px 4px #00000020;
  @media (min-width: 768px) {
    padding: 2rem;
    margin-bottom: 2rem;
    grid-column: span 2 / span 2; // 2 cols
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    scroll-margin-top: 40px;
    &:hover::after {
      content: " #";
      color: $theme-colour-three;
    }
    a {
      text-decoration: none;
      color: black;
    }
  }
  article {
    img {
      box-shadow: 5px 10px 15px #aaa;
    }
    ul {
      font-size: 1.2rem;
      line-height: 1.75;
      margin: 0 0 1rem 0;
      list-style: inside;
    }
  }
}

.toc {
  margin-bottom: 1rem;
}

.social {
  display: flex;
  justify-content: flex-end;
  a {
    display: inline-block;
    width: 2rem;
    margin: 0.4rem;
    color: black;
    &:hover {
      color: $selection-color;
    }
  }
}

.more-articles {
  font-size: 0.9rem;
}
</style>
