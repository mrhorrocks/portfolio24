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
    <div class="container md:grid md:cols-2">
      <div class="col-span-1">
        <!-- Headline -->
        <h1 class="site-headline">
          <span>Front-End</span> <span>Developer</span>
        </h1>
        <h2 class="sub-text">
          <ul>
            <li>I build websites with Nuxt, Netlifty & Decap CMS.</li>
            <li>Based in North- West England.</li>
          </ul>
        </h2>

        <!-- <div class="tech-logos">
          <img src="/img/homepage/tech_logos/Html5.png" alt="Html5" />
          <img src="/img/homepage/tech_logos/CSS3.png" alt="CSS3" />
          <img src="/img/homepage/tech_logos/Sass.png" alt="Sass" />
          <img src="/img/homepage/tech_logos/Nuxt.png" alt="Nuxt" />
          <img src="/img/homepage/tech_logos/JS.png" alt="JS" />
          <img src="/img/homepage/tech_logos/Decap.png" alt="Decap" />
        </div> -->
      </div>

      <div class="col-span-1">
        <!-- Hero -->
        <div class="hero-img">
          <img src="/img/homepage/ed_placeholder.png" alt="placeholder" />
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

h1.site-headline {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: clamp(2.58rem, 11vw, 10rem);
  font-weight: normal;
  text-transform: uppercase;
  padding: 0 0;
  color: #ffffff;
  text-shadow: 0px 4px 4px #00000025;
  span {
    &:nth-of-type(2) {
      color: #9b9b9b;
    }
  }
}
h2.sub-text ul {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: clamp(1rem, 2.5vw, 3rem);
  font-weight: normal;
  padding: 0 0;
  color: #ffffff;
  text-shadow: 0px 4px 4px #00000025;
  list-style: circle;
  margin: 0 1rem;
  padding: 0 0.5rem;
  line-height: 2rem;
}

.tech-logos {
  // text-align: center;
  padding: 1rem 0;
  img {
    margin: 0.25rem;
  }
}

.hero-img {
  text-align: center;
  @media (min-width: 768px) {
    // position: absolute;
    position: relative;
    // left: 0;
    // z-index: -1;
  }
}
</style>
