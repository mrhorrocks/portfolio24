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
          This is my Blog. There are many like it,
          <span>but this one is mine.</span>
        </h1>
      </div>
      <!-- Slides -->
      <div class="slide-wrapper col-span-2">
        <input type="radio" name="slide" id="c1" checked />
        <label for="c1" class="card">
          <div class="row">
            <div class="icon">1</div>
            <div class="description">
              <h4>A Tail of Two Portfolios</h4>
              <p>2008 & 2024</p>
              <NuxtLink to="/blog/2024-01-07-a-tail-of-two-portfolios/"
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
              <h4>Digital Technology</h4>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </label>
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
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/scss/partials/colours";
h1.site-headline {
  font-size: clamp(2rem, 3.8vw + 1rem, 4.1rem);
  line-height: 1.25;
  padding: 0 1rem 1rem 0;
  min-width: 315px;
  // font-weight: 500;
  // span {
  //   font-weight: 900;
  // }
}

.slide-wrapper {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  height: 400px;
  @media (min-width: 900px) {
    justify-content: flex-end;
    flex-direction: row;
  }
}

.card {
  min-width: 80px;
  width: 80px;
  padding-right: 0.5rem;
  overflow: hidden;
  margin: 0rem 0rem 1rem 0;
  background-size: cover;
  background-color: white;
  cursor: pointer;
  transition: 0.3s cubic-bezier(0.28, -0.03, 0, 0.99);
  box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.8);
  border-radius: 0.75rem;
  @media only screen and (min-width: 900px) {
    display: flex;
    align-items: flex-end;
    margin: 0rem 0rem 0rem 1rem;
  }
}

.card > .row {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
}

.card > .row > .icon {
  display: flex;
  justify-content: center;
  background: #223;
  color: white;
  border-radius: 50%;
  min-width: 50px;
  align-items: center;
  margin: 15px;
}

.card > .row > .description {
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  height: 80px;
  width: 100%;
  opacity: 0;
  overflow: hidden;
  margin-right: 1rem;
  transform: translateY(0px);
  transition: all 0.3s ease;
  transition-delay: 0.3s;
}

.description p {
  font-size: 0.9rem;
  line-height: 1.4;
}

.description a {
  position: absolute;
  right: 0%;
  top: 58%;
  font-size: 0.8rem;
  color: black;
}

.description h4 {
  text-transform: uppercase;
  padding: 0rem 0 0.2rem;
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
