<script setup>
useHead({
  titleTemplate: "%s",
});
definePageMeta({
  layout: "homepage",
});

// REDIRECT
if (location.href.indexOf("#invite_token") !== -1) {
  var urlSplit = document.URL.split("#");
  window.location.href = "/admin/#" + urlSplit[1];
}

// GET THUMBNAIL DATA FROM API
// const {
//   data: homepageData,
//   pending,
//   error,
// } = await useFetch(
//   "https://mrhorrocks.github.io/data/mhox/mhox-thumbnails.json"
// );
// GET THUMBNAIL DATA FROM DATA FOLDER
import homepageData from "~/assets/data/mhox-homepage.json";
</script>

<template>
  <section>
    <!-- HERO AREA -->
    <div class="container grid md:grid md:cols-1">
      <div class="md:col-span-1">
        <!-- Social badges -->
        <SocialBadges />

        <!-- Headline -->
        <h1 class="site-headline">
          <span>Front End Developer</span>
        </h1>

        <!-- Subtext -->
        <!-- <h2 class="sub-text">
            <span
              >I build websites with Nuxt, based in North-West England
            </span>
          </h2> -->

        <!-- Tech logos -->
        <TechBadges />
        <!-- Hero image-->
      </div>
    </div>
    <!-- THUMBS -->
    <div class="container grid md:grid md:cols-1">
      <div class="thumbnails">
        <HomePageThumb
          v-for="item in homepageData.thumbnails"
          :key="item.id"
          :href="item.href"
          :title="item.title"
          :description="item.description"
          :buttontext="item.buttontext"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.thumbnails {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
h1.site-headline {
  position: relative;
  z-index: 1;
  font-family: "Impact", RobotoCondensed-Black, "Arial Narrow Bold";
  font-size: clamp(2.18rem, 11vw, 7.25rem);
  font-weight: normal;
  text-align: center;
  text-transform: uppercase;
  padding: 0 0;
  color: #ffffff;
  text-shadow: 0px 4px 4px #00000025;
  @media (min-width: 768px) {
    text-align: left;
  }
}
h2.sub-text {
  position: relative;
  z-index: 1;
  font-family: "Impact", RobotoCondensed-Black, "Arial Narrow Bold", sans-serif;
  font-size: clamp(1.4rem, 2.8vw, 2.5rem);
  font-weight: normal;
  margin: 0 auto;
  padding: 0;
  line-height: 1.5;
  width: fit-content;
  color: #ffffff;
  text-shadow: 0px 4px 4px #00000025;
  @media (min-width: 768px) {
    margin: 0;
  }
  span {
    display: flex;
    justify-content: center;
    @media (min-width: 768px) {
      justify-content: left;
      margin: 0;
    }
  }
}
.hero-image {
  position: relative;
  z-index: 0;
  width: 300px;
  aspect-ratio: 738 / 743;
  // background-image: url("/img/homepage/ed209.gif");
  background-size: cover;
  margin: 0 auto;
  transition: 1s;
  @media (min-width: 768px) {
    position: absolute;
    top: 170px;
    right: 0px;
    width: 400px;
  }
  @media (min-width: 1024px) {
    top: 190px;
    width: 400px;
    right: 40px;
  }
  @media (min-width: 1200px) {
    top: 200px;
    width: 530px;
  }
  @media (min-width: 1440px) {
    top: 90px;
    right: 70px;
    width: 600px;
  }
}
.thumbnail-container {
  display: flex;
  flex-direction: column;
  > h3 {
    color: white;
    margin-bottom: 0.5rem;
    padding: 0;
    font-weight: normal;
    text-align: center;
    @media (min-width: 768px) {
      text-align: left;
    }
  }
  @media (min-width: 768px) {
    width: 58%;
    justify-content: flex-start;
  }
  @media (min-width: 1024px) {
    width: 63%;
  }
  .thumbnails {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    z-index: 1;
    width: 100%;
    transition: 0.5s;

    @media (min-width: 768px) {
      justify-content: flex-start;
    }
  }
}
</style>
