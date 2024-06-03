<script setup>
// Define props
defineProps({
  title: {
    type: String,
    default: "Default Title",
  },
  description: {
    type: String,
    default: "Default Descrition",
  },
  href: {
    type: String,
    default: "/",
  },
  buttontext: {
    type: String,
    default: "Thumb Button Text",
  },
  modal: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="homepage-thumb" @click.stop>
    <NuxtLink :href="href" class="thumb-link" :title="title" @click.stop>
      <div class="mask" @click.stop="doThis">
        <h3>{{ title }}</h3>
        <p v-if="description" v-html="description"></p>
        <span v-if="buttontext">
          <AppButtonLink :text="buttontext" :url="href"
        /></span>
        <slot v-if="modal"></slot>
      </div>
      <MoreInfo />
    </NuxtLink>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/partials/colours";
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
  &:nth-of-type(6) {
    background-image: url("/img/homepage/thumbnails/emails-thumb.png");
  }
  &:nth-of-type(7) {
    background-image: url("/img/homepage/thumbnails/drone-thumb.png");
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
