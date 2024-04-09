<script setup>
// Define props
const props = defineProps({
  title: {
    type: String,
    default: "Default Title",
  },
  description: {
    type: String,
    default: "Default Content",
  },
  href: {
    String,
    default: "/",
  },
  buttontext: {
    String,
    default: "buttontext",
  },
});
</script>

<template>
  <div class="homepage-thumb">
    <a :href="href" class="thumb-link" :title="title">
      <div class="mask">
        <h3>{{ title }}</h3>
        <p v-html="description"></p>
        <AppButtonLink :text="buttontext" :url="href" />
      </div>
      <MoreInfo />
    </a>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/partials/colours";
.homepage-thumb {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  width: calc(50% - 1rem);
  aspect-ratio: 4 / 2.6;
  max-width: 330px;
  margin: 0.5rem;
  background-color: #d5d5d5;
  border-radius: 0.3rem;
  transition: 1s;
  overflow: hidden;
  background-position: center;
  background-size: 101%;
  transition: 0.25s;
  @media (min-width: 768px) {
    margin: 0 1rem 1rem 0;
  }
  &:hover {
    background-size: 110%;
  }
  &:nth-of-type(1) {
    background-image: url("/img/homepage/thumbnails/dashboard-light.png");
  }
  &:nth-of-type(2) {
    background-image: url("/img/homepage/thumbnails/cardealer.png");
  }
  &:nth-of-type(3) {
    background-image: url("/img/homepage/thumbnails/portfolio2024.png");
  }
  &:nth-of-type(4) {
    background-image: url("/img/homepage/thumbnails/good-things-thumb.png");
  }
  &:nth-of-type(5) {
    background-image: url("/img/homepage/thumbnails/portfolio-old.png");
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
        @media (min-width: 1200px) {
          display: block;
          background-color: #000000;
          padding: 0.5rem;
          text-align: center;
          margin: 0 0 0.5rem 0;
          font-weight: bold;
        }
      }

      p {
        display: none;
        @media (min-width: 1200px) {
          display: block;
          text-align: center;
          background-color: #000000;
          padding: 0.5rem;
          margin-bottom: 0.5rem;
          font-size: 1rem;
          line-height: 1.2;
        }
      }
    }
    &:hover .mask {
      top: 0%;
      // filter: blur(100px);
      background-color: #ffffff95;
      backdrop-filter: blur(1px);
    }
  }
  @media (min-width: 1440px) {
    width: calc(50% - 2rem);
  }
}
</style>
