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
    <div class="container grid md:grid md:cols-1">
      <div class="md:col-span-1">
        <!-- Social badges -->
        <SocialBadges />

        <!-- Headline -->
        <h1 class="site-headline">
          <span>Front-End Developer</span>
        </h1>

        <!-- Tech logos -->
        <TechBadges />
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
          :modal="item.modal"
        >
          <!-- SLOT -->
          <ModalButton buttontext="<< Watch the video >>" />
          <!-- SLOT -->
        </HomePageThumb>
      </div>
    </div>
    <Modal />
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
}
</style>
