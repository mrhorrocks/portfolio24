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
</script>

<template>
  <div class="container grid md:grid md:cols-1">
    <div class="md:col-span-1">
      <!-- Social badges -->
      <SocialBadges />
      <!-- Headline -->
      <h1 class="site-headline">Front-End Web Developer</h1>

      <!-- Tech logos -->
      <TechBadges />
    </div>
  </div>

  <ThumbNails />
</template>

<style lang="scss">
@import "@/assets/scss/partials/colours";

h1.site-headline {
  position: relative;
  z-index: 1;
  font-family: "Impact", RobotoCondensed-Black, "Arial Narrow Bold";
  font-size: clamp(2.1rem, 9vw, 5.85rem);
  font-weight: normal;
  text-align: center;
  text-transform: uppercase;
  padding: 0 0;
  color: #ffffff;
  // text-shadow: 5px 5px #0000005e;
}

.homepage-thumb {
  position: relative;
  width: calc(80% - 1rem);
  aspect-ratio: 4 / 2.6;
  margin: 0.5rem auto;
  background-color: #d5d5d5;
  border-radius: 0.2rem;
  transition: 1s;
  overflow: hidden;
  background-position: center;
  background-size: 101%;
  transition: 0.25s;
  @media (min-width: 400px) {
    width: calc(50% - 1rem);
    margin: 0.5rem auto 0.5rem 0.5rem;
  }
  @media (min-width: 768px) {
    width: calc(33.33% - 1rem);
    margin: 0.5rem 0.5rem;
  }
  &:hover {
    background-size: 110%;
  }
  > a {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    text-decoration: none;
    .mask {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: -100%;
      width: 100%;
      height: 100%;
      color: $light-grey;
      transition: 0.15s;

      h3 {
        display: none;
        background-color: #000000;
        padding: 0.5rem;
        text-align: center;
        margin: 0 0 0.5rem 0;
        font-weight: bold;
        border-radius: 0.25rem;
        @media (min-width: 640px) {
          display: block;
        }
      }

      p {
        display: none;
        text-align: center;
        background-color: #000000;
        padding: 0.5rem;
        margin-bottom: 0.5rem;
        font-size: 1rem;
        line-height: 1.2;
        border-radius: 0.25rem;
        @media (min-width: 640px) {
          display: block;
        }
      }
      .app-button {
        border-radius: 0.25rem;
      }
    }
    &:hover .mask {
      top: 0%;
      background-color: #ffffff95;
      backdrop-filter: blur(1px);
    }
  }
}
</style>
