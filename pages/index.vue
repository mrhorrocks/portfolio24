<script setup lang="ts">
useHead({
  titleTemplate: "Home - %s",
  // script: [
  //   { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
  // ],
});

// REDIRECT
if (location.href.indexOf("#invite_token") !== -1) {
  const urlSplit: string[] = document.URL.split("#");
  window.location.href = `/admin/#${urlSplit[1]}`;
}
</script>

<template>
  <section>
    <div class="container xl:grid xl:cols-3">
      <div class="col-span-3">
        <!-- Social logos -->
        <div class="social-badges">
          <a href="#">
            <img src="/img/homepage/linkedin.png" alt="Linked In"
          /></a>
          <a href="#"> <img src="/img/homepage/github.png" alt="Github" /></a>
        </div>
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
        <div class="hero-image">
          <!-- Hero image-->
        </div>
        <!-- Tech logos -->
        <div class="tech-logos">
          <img src="/img/homepage/tech_logos/Html5.png" alt="Html5" />
          <img src="/img/homepage/tech_logos/CSS3.png" alt="CSS3" />
          <img src="/img/homepage/tech_logos/Sass.png" alt="Sass" />
          <img src="/img/homepage/tech_logos/Nuxt.png" alt="Nuxt" />
          <img src="/img/homepage/tech_logos/JS.png" alt="JS" />
          <img src="/img/homepage/tech_logos/Decap.png" alt="Decap" />
        </div>
      </div>

      <div class="col-span-3">
        <div class="thumbnail-container">
          <div class="thumb">1</div>
          <div class="thumb">2</div>
          <div class="thumb">3</div>
          <div class="thumb">4</div>
          <div class="thumb">5</div>
          <div class="thumb">6</div>
          <!-- <div class="thumb">7</div>
          <div class="thumb">8</div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/scss/partials/colours";

html > body {
  background-color: #333333;
}

.social-badges {
  display: none;
  @media (min-width: 400px) {
    display: block;
    margin: 1rem 0;
    a {
      margin-right: 0.5rem;
    }
  }
}

h1.site-headline {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: clamp(2.58rem, 11vw, 10rem);
  margin-bottom: 1rem;
  font-weight: normal;
  text-transform: uppercase;
  padding: 0 0;
  color: #ffffff;
  text-shadow: 0px 4px 4px #00000025;
  span {
    &:nth-of-type(1) {
      @media (min-width: 1440px) {
        display: flex;
        font-size: clamp(2.58rem, 2.9vw, 4rem);
        margin-bottom: 1.5rem;
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
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: clamp(1.089rem, 2.8vw, 2.1rem);
  font-weight: normal;
  color: #ffffff;
  text-shadow: 0px 4px 4px #00000025;
  margin: 0 0 0 0;
  padding: 0;
  line-height: 1.5;
  span {
    display: flex;
    margin: 0 0 0.25rem 0;

    &.bullet {
      font-size: clamp(2.2rem, 6vw, 4.4rem);
      line-height: 0.65;
      -webkit-text-stroke: 2px white;
      -webkit-text-fill-color: #323232;
    }
  }
}

.hero-image {
  position: relative;
  z-index: -1;
  width: 325px;
  aspect-ratio: 738 / 743;
  background-image: url("/img/homepage/raw_rotate_CROPED.gif");
  background-size: cover;
  margin: 0 auto;
  transition: 1s;
  @media (min-width: 768px) {
    position: absolute;
    top: 240px;
    right: 0px;
    width: 500px;
  }
  @media (min-width: 1024px) {
    top: 190px;
    width: 445px;
  }
  @media (min-width: 1440px) {
    top: 60px;
    right: 45px;
    width: 585px;
  }
}

.tech-logos {
  text-align: center;
  padding: 1rem 0;
  margin: 0 0 0 0;
  @media (min-width: 768px) {
    text-align: left;
    margin: 0 0 0 1rem;
  }
  img {
    margin: 0.25rem;
  }
}

.thumbnail-container {
  display: block;
  float: left;
  width: 100%;
  transition: 0.5s;
  @media (min-width: 375px) {
    display: block;
    float: left;
    width: 100%;
    margin: 0 auto;
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
    padding: 0.5rem;
    margin: 0.75rem;
    background-color: #d5d5d5;
    border-radius: 0.5rem;
    transition: 1s;
    @media (min-width: 768px) {
      &:nth-of-type(1) {
        background-color: red;
        margin-right: 20px;
      }
    }
    @media (min-width: 1024px) {
      width: calc(33% - 2rem);
      &:nth-of-type(1) {
        background-color: green;
        margin-right: 0.75rem;
      }
    }
    @media (min-width: 1440px) {
      width: calc(50% - 2rem);
    }
  }
}
</style>
