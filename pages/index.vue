<script setup lang="ts">
useHead({
  titleTemplate: "Home - %s",
  // script: [
  //   { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
  // ],
});
definePageMeta({
  layout: "homepage",
});

// REDIRECT
if (location.href.indexOf("#invite_token") !== -1) {
  const urlSplit: string[] = document.URL.split("#");
  window.location.href = `/admin/#${urlSplit[1]}`;
}
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
            I build websites with Nuxt, Netlifty & Decap CMS</span
          >
          <span>
            <span class="bullet">&middot;</span>Based in North- West
            England</span
          >
        </h2>

        <!-- Hero image-->
        <div class="hero-image">
          <!-- Image bg-->
        </div>

        <!-- Tech logos -->
        <div class="tech-logos">
          <img
            src="/img/homepage/tech_logos/Html5.png"
            width="40px"
            height="40px"
            alt="Html5"
          />
          <img
            src="/img/homepage/tech_logos/CSS3.png"
            width="40px"
            height="40px"
            alt="CSS3"
          />
          <img
            src="/img/homepage/tech_logos/Sass.png"
            width="40px"
            height="40px"
            alt="Sass"
          />
          <img
            src="/img/homepage/tech_logos/Nuxt.png"
            width="40px"
            height="40px"
            alt="Nuxt"
          />
          <img
            src="/img/homepage/tech_logos/JS.png"
            width="40px"
            height="40px"
            alt="JS"
          />
          <img
            src="/img/homepage/tech_logos/Decap.png"
            width="40px"
            height="40px"
            alt="Decap"
          />
        </div>
      </div>

      <!-- Thumbnails -->
      <div class="col-span-3">
        <div class="thumbnail-container">
          <div class="thumb">
            <a
              href="/blog/2024-01-09-about-this-portfolio/"
              class="thumb-link"
              title="Portfolio 2024"
            ></a>
          </div>
          <div class="thumb">
            <a href="/cars" class="thumb-link" title="Car Dealer"></a>
          </div>
          <div class="thumb">
            <a
              href="/blog/2024-01-18-graphics-2008/"
              class="thumb-link"
              title="Car Dealer"
            ></a>
          </div>
          <!-- <DevOnly>
            <div class="thumb">4</div>
            <div class="thumb">5</div>
            <div class="thumb">6</div>
          </DevOnly> -->
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/scss/partials/colours";

h1.site-headline {
  position: relative;
  z-index: 1;
  font-family: Impact, RobotoCondensed-Black, "Arial Narrow Bold", sans-serif;
  font-size: clamp(2.58rem, 11.1vw, 10rem);
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
  font-family: Impact, RobotoCondensed-Black, "Arial Narrow Bold", sans-serif;
  font-size: clamp(0.95rem, 2.8vw, 2.1rem);
  font-weight: normal;
  margin: 0 0 0 0;
  padding: 0;
  line-height: 1.5;
  color: #ffffff;
  text-shadow: 0px 4px 4px #00000025;
  span {
    display: flex;
    justify-content: center;
    margin: 0 0 0.25rem 0;
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
  background-image: url("/img/homepage/ed209.gif");
  background-size: cover;
  margin: 0 auto;
  transition: 1s;
  @media (min-width: 768px) {
    position: absolute;
    top: 220px;
    right: 0px;
    width: 490px;
  }
  // @media (min-width: 992px) {
  //   width: 600px;
  //   right: 0;
  // }
  @media (min-width: 1024px) {
    top: 180px;
    width: 505px;
  }
  @media (min-width: 1200px) {
    top: 200px;
    width: 530px;
  }
  @media (min-width: 1440px) {
    top: 100px;
    right: 45px;
    width: 640px;
  }
}

.tech-logos {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 1rem 0;
  margin: 0 0 0 0;
  @media (min-width: 768px) {
    text-align: left;
    margin: 0 0 0 1rem;
  }
  img {
    margin: 0.25rem;
    width: 40px;
  }
}

.thumbnail-container {
  position: relative;
  z-index: 1;
  display: block;
  float: left;
  width: 100%;
  margin: 0 auto;
  transition: 0.5s;
  @media (min-width: 375px) {
    display: block;
    float: left;
  }
  @media (min-width: 768px) {
    display: block;
    float: left;
    width: 60%;
  }
  @media (min-width: 1024px) {
    width: 64%;
  }

  .thumb {
    display: flex;
    align-items: center;
    justify-content: center;
    float: left;
    width: calc(50% - 1.5rem);
    max-width: 325px;
    aspect-ratio: 4 / 2.6;
    margin: 0.75rem;
    background-color: #d5d5d5;
    border-radius: 0.5rem;
    transition: 1s;
    overflow: hidden;
    background-position: center;
    background-size: 100%;
    transition: 0.25s;
    &:hover {
      background-size: 110%;
    }
    &:nth-of-type(1) {
      background-image: url("/img/homepage/thumbnails/portfolio2024.png");
    }
    &:nth-of-type(2) {
      background-image: url("/img/homepage/thumbnails/cardealer.png");
    }
    &:nth-of-type(3) {
      background-image: url("/img/homepage/thumbnails/portfolio-old.png");
    }
    a {
      display: block;
      width: 100%;
      height: 100%;
    }
    @media (min-width: 768px) {
      &:nth-of-type(1) {
        margin-right: 20px;
      }
    }
    @media (min-width: 1024px) {
      width: calc(33% - 2rem);
      &:nth-of-type(1) {
        margin-right: 0.75rem;
      }
    }
    @media (min-width: 1440px) {
      width: calc(50% - 2rem);
    }
  }
}
</style>
