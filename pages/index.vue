<script setup>
useHead({
  titleTemplate: "Home - %s",
});
definePageMeta({
  layout: "homepage",
});

// REDIRECT
if (location.href.indexOf("#invite_token") !== -1) {
  var urlSplit = document.URL.split("#");
  window.location.href = "/admin/#" + urlSplit[1];
}

// GET THUMBNAIL DATA
const {
  data: homepageData,
  pending,
  error,
} = await useFetch(
  "https://mrhorrocks.github.io/data/mhox/mhox-thumbnails.json"
);
</script>

<template>
  <section>
    <div class="container grid xl:grid xl:cols-3">
      <div class="col-span-3">
        <!-- Social badges -->
        <SocialBadges />

        <!-- Headline -->
        <h1 class="site-headline">
          <span>Front-End</span> <span>Developer</span>
        </h1>

        <!-- Subtext -->
        <h2 class="sub-text">
          <span>
            <span class="bullet">&middot;</span>
            <!-- ◯  -->
            I build websites with Nuxt, Netlify & Decap CMS</span
          >
          <span>
            <span class="bullet">&middot;</span>
            <!-- ◯  -->
            Based in North- West England</span
          >
        </h2>

        <!-- Hero image-->
        <div class="hero-image">
          <!-- Image bg-->
          <video width="738" height="743" muted loop autoplay>
            <source src="/img/homepage/ed209-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <!-- Tech logos -->
        <TechBadges />
      </div>

      <!-- Thumbnails -->
      <div class="col-span-3">
        <div class="thumbnail-container">
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
    </div>
  </section>
</template>

<style lang="scss">
h1.site-headline {
  position: relative;
  z-index: 1;
  font-family: "Impact", RobotoCondensed-Black, "Arial Narrow Bold";
  font-size: clamp(2.58rem, 11vw, 10rem); // Impact
  margin-bottom: 1rem;
  font-weight: normal;
  text-align: center;
  text-transform: uppercase;
  padding: 0 0;
  color: #ffffff;
  text-shadow: 0px 4px 4px #00000025;
  @media (min-width: 768px) {
    text-align: left;
  }
  span {
    &:nth-of-type(1) {
      @media (min-width: 1440px) {
        display: flex;
        font-size: clamp(2.58rem, 2.9vw, 4rem);
      }
    }
  }
  span {
    &:nth-of-type(2) {
      color: #9b9b9b;
    }
  }
}
h2.sub-text {
  position: relative;
  z-index: 1;
  font-family: "Impact", RobotoCondensed-Black, "Arial Narrow Bold", sans-serif;
  font-size: clamp(1rem, 2.8vw, 2.15rem); // Impact
  font-weight: normal;
  margin: 0 0 0 0;
  padding: 0;
  line-height: 1.5;
  color: #ffffff;
  text-shadow: 0px 4px 4px #00000025;
  span {
    display: flex;
    justify-content: center;
    @media (min-width: 768px) {
      justify-content: left;
    }
    &.bullet {
      display: none;

      @media (min-width: 768px) {
        display: block;
        font-size: clamp(2.2rem, 6vw, 4.4rem);
        line-height: 0.65;
        -webkit-text-stroke: 2px white;
        -webkit-text-fill-color: #323232;
      }
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
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  z-index: 1;
  width: 100%;
  transition: 0.5s;
  @media (min-width: 768px) {
    width: 58%;
    justify-content: flex-start;
  }
  @media (min-width: 1024px) {
    width: 63%;
  }
}
</style>
