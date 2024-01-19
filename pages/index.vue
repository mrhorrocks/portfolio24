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
    <div class="container md:grid md:cols-3">
      <!-- Headline -->

      <div class="col-span-1">
        <h1 class="site-headline">
          This is my Portfolio. There are many like it but this one is mine.
          <span> Nuxt, SCSS, CMS, Git, CD</span>
        </h1>
      </div>
      <!-- Slides -->
      <div class="slide-wrapper col-span-2">
        <input type="radio" name="slide" id="c1" checked />
        <label for="c1" class="card">
          <div class="row">
            <div class="icon">1</div>
            <div class="description">
              <h4>Big Robot</h4>
              <p>Blender, Flash, HTML, CSS</p>
              <NuxtLink to="/blog/2024-01-18-graphics-2008/"
                >KEEP READING >></NuxtLink
              >
            </div>
          </div>
        </label>

        <input type="radio" name="slide" id="c2" />
        <label for="c2" class="card">
          <div class="row">
            <div class="icon">2</div>
            <div class="description">
              <h4>PORTFOLIO 2024</h4>
              <p>Vue, Nuxt, SCSS, CMS, GIT, CD</p>
              <NuxtLink to="blog/2024-01-09-about-this-portfolio/"
                >KEEP READING >></NuxtLink
              >
            </div>
          </div>
        </label>
        <!-- 
        <input type="radio" name="slide" id="c3" />
        <label for="c3" class="card">
          <div class="row">
            <div class="icon">3</div>
            <div class="description">
              <h4>Globalization</h4>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </label>

        <input type="radio" name="slide" id="c4" />
        <label for="c4" class="card">
          <div class="row">
            <div class="icon">4</div>
            <div class="description">
              <h4>New technologies</h4>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </label>
         -->
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/scss/partials/colours";
h1.site-headline {
  font-size: clamp(2rem, 4vw, 3.3rem);
  line-height: 1.25;
  padding: 0 1rem 1rem 0;
  span {
    color: #7c8497;
    // color: darken($theme-colour-three, $amount: 12.5%);
  }
}

.slide-wrapper {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  height: 400px;
  @media (min-width: 970px) {
    justify-content: flex-end;
    flex-direction: row;
  }
}

.card {
  display: flex;
  align-items: center;
  min-width: 80px;
  min-height: 100px;
  width: 80px;
  padding-right: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  margin: 0rem 0rem 1rem 0;
  background-size: cover;
  transition: 0.3s cubic-bezier(0.28, -0.03, 0, 0.99);
  box-shadow: 1px 3px 4px #00000020;
  @media only screen and (min-width: 970px) {
    align-items: flex-end;
    margin: 0rem 0rem 0rem 1rem;
  }
}

.card > {
  .row {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    .icon {
      display: flex;
      justify-content: center;
      background: #223;
      color: white;
      border-radius: 50%;
      min-width: 50px;
      align-items: center;
      margin: 15px;
    }
    .description {
      height: 80px;
      width: 100%;
      opacity: 0;
      text-decoration: none;
      transform: translateY(0px);
      transition: all 0.3s ease;
      transition-delay: 0.3s;
      h4 {
        font-size: clamp(1rem, 1vw, 1.17rem);
        text-transform: uppercase;
        padding: 0rem 0 0.2rem;
        background-color: #0000005c;
        color: white;
        padding: 0.25rem;
        margin-bottom: 0.25rem;
      }
      p {
        font-size: 0.8rem;
        padding: 0 0.25rem;
        margin-bottom: 0.25rem;
        background-color: #0000005c;
        color: white;
      }
      a {
        font-size: 0.8rem;
        padding: 0.25rem;
        margin-right: 1rem;
        background-color: #0000005c;
        color: white;
        text-decoration: none;
        margin-bottom: 0.25rem;
        transition: 0.25s;
        &:hover {
          background-color: #000;
          color: white;
        }
      }
    }
  }
}

input[name="slide"] {
  display: none;
}

input:checked + label {
  /* max-width: 600px; */
  width: 100%;
}

input:checked + label .description {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

.card[for="c1"] {
  background-image: url("/img/homepage/img1.jpg");
}
.card[for="c2"] {
  background-image: url("/images/uploads/porttfolio-short-feature-tall.png");
}
// .card[for="c3"] {
//   background-image: url("./img3.jpeg");
// }
// .card[for="c4"] {
//   background-image: url("./img4.jpeg");
// }
</style>
